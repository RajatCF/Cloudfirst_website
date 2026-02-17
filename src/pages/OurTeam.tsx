import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Linkedin, Users } from "lucide-react";

const leaders = [
  { name: "Amit Shah", role: "CEO & Founder", bio: "Cloud strategy, GTM and business leadership with 15+ years in cloud services.", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80" },
  { name: "Priya Nair", role: "CTO", bio: "Architecting resilient cloud platforms and driving engineering excellence.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
  { name: "Ravi Kumar", role: "Head of Consulting", bio: "Leads cloud migration programs and customer success initiatives.", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80" },
];

const values = [
  { title: "Customer First", desc: "We prioritize outcomes and measurable impact.", icon: "users" },
  { title: "Security", desc: "Security and compliance baked into every solution.", icon: "shield" },
  { title: "Innovation", desc: "We embrace modern patterns and automation.", icon: "zap" },
];

const OurTeam = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="relative flex items-center justify-center min-h-[56vh] bg-gradient-to-br from-emerald-50 via-white to-emerald-100 overflow-hidden pt-10">
      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-emerald-200 text-foreground">Our Team</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">Meet the people behind CloudFirst</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-6">A cross-functional team of cloud architects, engineers and consultants focused on delivering secure, reliable cloud solutions.</p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/careers" className="px-6 py-3 rounded-lg bg-primary text-white">Join our team</Link>
            <Link to="/contact" className="px-6 py-3 rounded-lg border border-border">Work with us</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-primary">Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {leaders.map((l) => (
            <div key={l.name} className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <img src={l.img} alt={l.name} className="mx-auto rounded-full w-28 h-28 object-cover mb-4 shadow" />
              <div className="font-semibold text-lg">{l.name}</div>
              <div className="text-sm text-muted-foreground mb-3">{l.role}</div>
              <p className="text-sm text-muted-foreground mb-4">{l.bio}</p>
              <div className="flex items-center justify-center gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="w-4 h-4"/></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Users className="w-4 h-4"/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <h3 className="text-2xl font-semibold mb-4">Our Culture & Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-xl p-6 shadow">
              <div className="font-semibold mb-2">{v.title}</div>
              <div className="text-sm text-muted-foreground">{v.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/careers" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg">See open roles</Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default OurTeam;
