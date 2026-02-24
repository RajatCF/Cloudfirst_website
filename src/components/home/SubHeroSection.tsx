import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SubHeroSection = () => {
  return (
    <section className="gradient-light py-32 lg:py-40">
      <div className="max-w-[800px] mx-auto px-6 lg:px-10 text-center">
        <h2 className="section-title text-foreground mb-6">
          We help enterprises modernize intelligently
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px] mx-auto mb-12">
          with AI at the core, transforming cloud, data, and operations into competitive advantages.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/solutions" className="btn-primary arrow-slide">
            explore our work
            <ArrowRight className="w-4 h-4 arrow-icon" />
          </Link>
          <Link to="/contact" className="btn-outline">
            get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubHeroSection;
