import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [counts, setCounts] = useState({
    projects: 0,
    customers: 0,
    teamMembers: 0,
    resolvedTickets: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const smokeRefs = useRef<HTMLSpanElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  smokeRefs.current = [];

  useEffect(() => {
    if (!iconRef.current || !buttonRef.current) return;

    const ignite = gsap.timeline({ repeat: -1, yoyo: true });
    ignite.to(iconRef.current, {
      scale: 1.15,
      rotation: 10,
      y: -1,
      duration: 0.18,
      ease: 'power1.inOut',
    }).to(iconRef.current, {
      scale: 1,
      rotation: 0,
      y: 0,
      duration: 0.32,
      ease: 'power1.inOut',
    });

    gsap.to(buttonRef.current, {
      boxShadow: '0 0 32px rgba(59,130,246,0.28)',
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    if (smokeRefs.current.length) {
      gsap.to(smokeRefs.current, {
        duration: 0.8,
        y: -10,
        opacity: 0.2,
        scale: 1.2,
        stagger: 0.12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  // Counting animation with intersection observer
  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate counts
            const animateCount = (target: number, key: keyof typeof counts, duration: number) => {
              let current = 0;
              const increment = target / (duration / 16); // 60fps
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
              }, 16);
            };

            animateCount(300, 'projects', 2000);
            animateCount(4000, 'customers', 2500);
            animateCount(50, 'teamMembers', 1500);
            animateCount(3245, 'resolvedTickets', 3000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit
    alert('Thank you! We will be in touch.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  const statistics = [
  { value: "300+", label: "Projects", count: counts.projects },
  { value: "4000+", label: "Customers", count: counts.customers },
  { value: "50+", label: "Team Members", count: counts.teamMembers },
  { value: "3245", label: "Resolved Tickets", count: counts.resolvedTickets }
];

  return (
    <section className="bg-gray-50 py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          {/* Left - Statistics */}
          <div className="flex flex-col justify-center" ref={statsRef}>
            <div className="grid grid-cols-2 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-1 transition-all duration-300">
                    {stat.count}{stat.value.includes('+') && '+'}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80"
              alt="People collaborating"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
