import React from 'react';
import Layout from '@/components/Layout';

const ManagedCloudService = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-bright-blue/10 to-white min-h-screen">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-12 md:pb-24">
          <div className="text-center z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
              Managed <span className="text-bright-blue">Cloud Services</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
              Delegate the complexity of cloud management to our expert team. We deliver 24/7 monitoring, optimization and peace of mind.
            </p>
            <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg inline-block">Get Managed</a>
          </div>
          <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 -z-1 hidden md:block" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="200" fill="currentColor" className="fill-current text-bright-blue" />
          </svg>
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
      </div>
    </Layout>
  );
};

export default ManagedCloudService;
