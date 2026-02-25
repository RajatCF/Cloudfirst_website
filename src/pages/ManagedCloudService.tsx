import React from 'react';
import Layout from '@/components/Layout';

const ManagedCloudService = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-green-50 to-white min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-12 md:pb-24">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
              Managed <span className="text-bright-blue">Cloud Services</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
              Delegate the complexity of cloud management to our expert team. We deliver 24/7 monitoring, optimization and peace of mind.
            </p>
            <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg inline-block">Get Managed</a>
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Managed Cloud Hero"
              className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg border-4 border-bright-blue/10"
            />
          </div>
          <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 -z-1 hidden md:block" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="200" fill="#10B981" /></svg>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">🔧</span>
              <h3 className="font-semibold text-xl mb-2">Infrastructure</h3>
              <p className="text-muted-foreground">Provisioning and management of compute, storage and networks.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">🛡️</span>
              <h3 className="font-semibold text-xl mb-2">Security & Compliance</h3>
              <p className="text-muted-foreground">Continuous security monitoring and regulatory adherence.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">💹</span>
              <h3 className="font-semibold text-xl mb-2">Optimization</h3>
              <p className="text-muted-foreground">Cost and performance tuning across all resources.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-bright-blue/5 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How We Support</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">1</div>
                <h4 className="font-semibold mb-1">Monitor</h4>
                <p className="text-sm text-muted-foreground">24/7 health checks and alerts.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">2</div>
                <h4 className="font-semibold mb-1">Respond</h4>
                <p className="text-sm text-muted-foreground">Immediate remediation of issues.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">3</div>
                <h4 className="font-semibold mb-1">Optimize</h4>
                <p className="text-sm text-muted-foreground">Ongoing tuning for efficiency.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">4</div>
                <h4 className="font-semibold mb-1">Report</h4>
                <p className="text-sm text-muted-foreground">Regular performance & cost insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-lg mb-4">“Their managed service team is always proactive—never had a mid-week downtime again.”</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">Karan S., IT Manager</div>
                  <div className="text-xs text-muted-foreground">SaaS Company</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-lg mb-4">“We finally understand our cloud bills thanks to their reports and optimization suggestions.”</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">Navneet P., CFO</div>
                  <div className="text-xs text-muted-foreground">Healthcare Startup</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ManagedCloudService;
