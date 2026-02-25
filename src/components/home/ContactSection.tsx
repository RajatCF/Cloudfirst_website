import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit
    alert('Thank you! We will be in touch.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="bg-white py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          {/* Left - Image */}
          <div>
            {/* Placeholder image; replace with real asset if available */}
            <img
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80"
              alt="People collaborating"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          {/* Right - Form */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Let's level up your brand, together
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              You can reach us anytime via{' '}
              <a href="mailto:hi@untitledui.com" className="text-bright-blue underline">
                hi@untitledui.com
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First name *</label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={e => setForm({ ...form, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last name *</label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={e => setForm({ ...form, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
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
                <label className="block text-sm font-medium text-foreground mb-2">Phone number</label>
                <div className="relative">
                  <select
                    className="absolute inset-y-0 left-0 pl-3 pr-8 bg-background rounded-l-lg border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue/30 text-sm"
                    value="US"
                    onChange={() => {}}
                  >
                    <option value="US">US</option>
                  </select>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full pl-20 pr-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all resize-none"
                  placeholder="Leave us a message..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
