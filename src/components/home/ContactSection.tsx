import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit
    alert('Thank you! We will be in touch.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-light-blue py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <h2 className="hero-headline !text-[8vw] lg:!text-[5vw] text-foreground">
              let's<br />connect
            </h2>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
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
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
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
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all resize-none"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            <button type="submit" className="btn-primary">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
