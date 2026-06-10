import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getFaqsByPath } from "@/components/FaqSection";

const normalizePathname = (pathname: string) => {
  if (!pathname) return "/";
  if (pathname === "/") return "/";
  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
};

const FaqJsonLd = () => {
  const { pathname } = useLocation();
  const normalizedPathname = normalizePathname(pathname);
  const faqs = getFaqsByPath(normalizedPathname).slice(0, 5);

  if (faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default FaqJsonLd;
