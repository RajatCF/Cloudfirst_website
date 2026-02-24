import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const JoinPioneers = () => {
  return (
    <section className="gradient-to-light py-32 lg:py-40">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
        <h2 className="hero-headline !text-[8vw] lg:!text-[6vw]">
          <span className="text-foreground">join the</span>
          <br />
          <span className="text-bright-blue">pioneers</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-[500px] mx-auto">
          Brilliant minds wanted. Apply chaos theory to enterprise transformation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link to="/about" className="btn-primary arrow-slide">
            join CloudFirst
            <ArrowRight className="w-4 h-4 arrow-icon" />
          </Link>
          <Link to="/contact" className="btn-outline !bg-accent">
            partner with us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinPioneers;
