import { useState } from 'react';
import Layout from '@/components/Layout';
import { Send, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const offices = [
  { city: 'San Francisco', address: '100 Market St, Suite 300, CA 94105', phone: '+1 (415) 555-0100' },
  { city: 'New York', address: '350 Fifth Ave, Suite 4200, NY 10118', phone: '+1 (212) 555-0200' },
  { city: 'London', address: '1 Canada Square, Canary Wharf, E14 5AB', phone: '+44 20 7946 0300' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We\'ll be in touch within 24 hours.');
    setForm({ name: '', email: '', company: '', message: '' });
  };

  return (
    <Layout>
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/world_map.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="h-[46vh] min-h-[360px] w-full" />
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <h1 className="section-title mb-4">let's build <span className="text-bright-blue">together</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Ready to modernize your cloud infrastructure? Let's start a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <div className="h-full min-h-[560px] lg:min-h-[620px] rounded-2xl border border-cyan-400/35 bg-gradient-to-br from-cyan-50 via-white to-blue-50 shadow-sm p-8 lg:p-10 flex flex-col">
              <h2 className="text-2xl font-display font-bold mb-8">Our offices</h2>

              <div className="space-y-8">
                {offices.map(office => (
                  <div key={office.city} className="flex gap-4">
                    <MapPin className="w-5 h-5 text-bright-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold">{office.city}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      <p className="text-sm text-muted-foreground">{office.phone}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col gap-3">
                <a href="mailto:hello@cloudfirst.io" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-bright-blue transition-colors">
                  <Mail className="w-4 h-4" /> hello@cloudfirst.io
                </a>
                <a href="tel:+14155550100" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-bright-blue transition-colors">
                  <Phone className="w-4 h-4" /> +1 (415) 555-0100
                </a>
              </div>

              <div className="mt-auto pt-12">
                <div className="p-6 rounded-2xl border border-cyan-400/25 bg-white/70 text-center">
                <Calendar className="w-8 h-8 text-bright-blue mx-auto mb-3" />
                <p className="font-display font-bold mb-1">Schedule a Call</p>
                <p className="text-sm text-muted-foreground">Book a 30-minute discovery call with our team.</p>
                <button className="btn-outline !px-6 !py-2.5 text-sm mt-4">Book a time</button>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[560px] lg:min-h-[620px] rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 shadow-sm p-8 lg:p-10 flex flex-col">
              <h2 className="text-2xl font-display font-bold mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-violet-300/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-violet-300/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-violet-300/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-violet-300/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
