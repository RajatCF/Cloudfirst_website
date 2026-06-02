import React from "react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
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
  const firstFour = items.slice(0, 4);
  const leftColumn = [firstFour[0], firstFour[2]].filter(Boolean) as FaqItem[];
  const rightColumn = [firstFour[1], firstFour[3]].filter(Boolean) as FaqItem[];
  const fifth = items[4];

  return (
    <section className={cn("bg-white py-16", className)}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
            {title}
          </h2>
          {subtitle ? <p className="mt-3 text-gray-500 max-w-3xl mx-auto">{subtitle}</p> : null}
        </div>

        <div className="space-y-6 md:hidden">
          {items.map((item, idx) => (
            <div key={`${item.question}-${idx}`} className="group rounded-2xl border border-gray-200 bg-white shadow-sm px-6 py-6">
              <div className="text-sm font-bold text-gray-900">{item.question}</div>
              <div
                className={cn(
                  "overflow-hidden max-h-0 opacity-0 translate-y-1",
                  "transition-all duration-500 ease-in-out",
                  "group-hover:max-h-[480px] group-hover:opacity-100 group-hover:translate-y-0",
                  "group-focus-within:max-h-[480px] group-focus-within:opacity-100 group-focus-within:translate-y-0",
                )}
              >
                <div className="pt-2 text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <div className="flex gap-6 items-start">
            <div className="flex-1 flex flex-col gap-6">
              {leftColumn.map((item, idx) => (
                <div key={`${item.question}-left-${idx}`} className="group rounded-2xl border border-gray-200 bg-white shadow-sm px-6 py-6">
                  <div className="text-sm font-bold text-gray-900">{item.question}</div>
                  <div
                    className={cn(
                      "overflow-hidden max-h-0 opacity-0 translate-y-1",
                      "transition-all duration-500 ease-in-out",
                      "group-hover:max-h-[480px] group-hover:opacity-100 group-hover:translate-y-0",
                      "group-focus-within:max-h-[480px] group-focus-within:opacity-100 group-focus-within:translate-y-0",
                    )}
                  >
                    <div className="pt-2 text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 flex flex-col gap-6">
              {rightColumn.map((item, idx) => (
                <div key={`${item.question}-right-${idx}`} className="group rounded-2xl border border-gray-200 bg-white shadow-sm px-6 py-6">
                  <div className="text-sm font-bold text-gray-900">{item.question}</div>
                  <div
                    className={cn(
                      "overflow-hidden max-h-0 opacity-0 translate-y-1",
                      "transition-all duration-500 ease-in-out",
                      "group-hover:max-h-[480px] group-hover:opacity-100 group-hover:translate-y-0",
                      "group-focus-within:max-h-[480px] group-focus-within:opacity-100 group-focus-within:translate-y-0",
                    )}
                  >
                    <div className="pt-2 text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {fifth ? (
            <div className="mt-6 flex justify-center">
              <div className="group w-full max-w-xl rounded-2xl border border-gray-200 bg-white shadow-sm px-6 py-6">
                <div className="text-sm font-bold text-gray-900">{fifth.question}</div>
                <div
                  className={cn(
                    "overflow-hidden max-h-0 opacity-0 translate-y-1",
                    "transition-all duration-500 ease-in-out",
                    "group-hover:max-h-[480px] group-hover:opacity-100 group-hover:translate-y-0",
                    "group-focus-within:max-h-[480px] group-focus-within:opacity-100 group-focus-within:translate-y-0",
                  )}
                >
                  <div className="pt-2 text-sm text-gray-600 leading-relaxed whitespace-pre-line">{fifth.answer}</div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

