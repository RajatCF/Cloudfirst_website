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
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <h1 className="section-title mb-6">let's build <span className="text-bright-blue">together</span></h1>
              <p className="text-lg text-muted-foreground mb-12 max-w-md">
                Ready to modernize your cloud infrastructure? Let's start a conversation.
              </p>

              {/* Offices */}
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

              {/* Calendly placeholder */}
              <div className="mt-12 p-6 rounded-2xl border border-border bg-muted/50 text-center">
                <Calendar className="w-8 h-8 text-bright-blue mx-auto mb-3" />
                <p className="font-display font-bold mb-1">Schedule a Call</p>
                <p className="text-sm text-muted-foreground">Book a 30-minute discovery call with our team.</p>
                <button className="btn-outline !px-6 !py-2.5 text-sm mt-4">Book a time</button>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-card p-8 lg:p-10 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all resize-none"
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
