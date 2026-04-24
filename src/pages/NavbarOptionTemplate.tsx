import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarOptionTemplateProps {
  title: string;
  category: string;
  summary: string;
}

const NavbarOptionTemplate = ({ title, category, summary }: NavbarOptionTemplateProps) => {
  return (
    <Layout>
      <section className="py-28 lg:py-36">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {category}
          </span>
          <h1 className="section-title mt-6 mb-5">{title}</h1>
          <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">{summary}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary arrow-slide">
              Talk to our team
              <ArrowRight className="w-4 h-4 arrow-icon" />
            </Link>
            <Link to="/" className="btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NavbarOptionTemplate;
