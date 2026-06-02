import React from "react";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FaqItem = {
  question: string;
  answer: string;
  tag?: string;
};

type FaqSectionProps = {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
  className?: string;
};

import faqDataRaw from "../../faqData.txt?raw";

type FaqByPath = Record<string, FaqItem[]>;

const parseFaqData = (raw: string): FaqByPath => {
  const lines = raw.split(/\r?\n/);
  const byPath: FaqByPath = {};

  let currentPath: string | null = null;
  let pendingQuestion: { idx: number; text: string } | null = null;
  let pendingAnswer: { idx: number; text: string } | null = null;

  const pushPair = () => {
    if (!currentPath || !pendingQuestion || !pendingAnswer) return;
    if (pendingQuestion.idx !== pendingAnswer.idx) return;
    const q = pendingQuestion.text.trim();
    const a = pendingAnswer.text.trim();
    if (!q || !a) return;
    byPath[currentPath] = byPath[currentPath] ?? [];
    byPath[currentPath].push({ question: q, answer: a });
    pendingQuestion = null;
    pendingAnswer = null;
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (pendingAnswer) pendingAnswer.text += "\n";
      continue;
    }

    const urlMatch = trimmed.match(/^URL:\s*(.+)$/i);
    if (urlMatch?.[1]) {
      pushPair();
      pendingQuestion = null;
      pendingAnswer = null;
      try {
        const u = new URL(urlMatch[1].trim());
        currentPath = u.pathname || "/";
      } catch {
        currentPath = null;
      }
      continue;
    }

    const qMatch = trimmed.match(/^Q(\d+):\s*(.+)$/i);
    if (qMatch?.[1] && qMatch?.[2]) {
      pushPair();
      pendingQuestion = { idx: Number(qMatch[1]), text: qMatch[2] };
      pendingAnswer = null;
      continue;
    }

    const aMatch = trimmed.match(/^A(\d+):\s*(.+)$/i);
    if (aMatch?.[1] && aMatch?.[2]) {
      pendingAnswer = { idx: Number(aMatch[1]), text: aMatch[2] };
      pushPair();
      continue;
    }

    if (pendingAnswer) {
      pendingAnswer.text += (pendingAnswer.text.endsWith("\n") ? "" : " ") + trimmed;
    }
  }

  pushPair();

  for (const key of Object.keys(byPath)) {
    byPath[key] = byPath[key].slice(0, 5);
  }

  return byPath;
};

const faqByPath = parseFaqData(faqDataRaw);

export const getFaqsByPath = (path: string): FaqItem[] => faqByPath[path] ?? [];

export const homeFaqs: FaqItem[] = getFaqsByPath("/");

const FaqSection: React.FC<FaqSectionProps> = ({ title = "FAQs", subtitle, faqs, className }) => {
  const items = faqs.slice(0, 5);

  return (
    <section className={cn("bg-white py-16", className)}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
            {title}
          </h2>
          {subtitle ? <p className="mt-3 text-gray-500 max-w-3xl mx-auto">{subtitle}</p> : null}
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, idx) => (
            <AccordionItem
              key={`${item.question}-${idx}`}
              value={`faq-${idx}`}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden border-b-0"
            >
              <AccordionTrigger
                className={cn(
                  "px-6 py-6 text-left hover:no-underline",
                  "[&>svg]:h-9 [&>svg]:w-9 [&>svg]:p-2.5 [&>svg]:rounded-full [&>svg]:bg-emerald-50 [&>svg]:text-emerald-600",
                  "[&[data-state=open]>svg]:bg-emerald-600 [&[data-state=open]>svg]:text-white",
                )}
              >
                <div className="flex flex-col items-start gap-2">
                  <div className="text-base font-semibold text-gray-900">{item.question}</div>
                  {item.tag ? (
                    <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold">
                      {item.tag}
                    </span>
                  ) : null}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;

