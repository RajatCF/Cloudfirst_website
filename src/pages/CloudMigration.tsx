import React from 'react';
import Layout from '@/components/Layout';

const CloudMigration = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-12 md:pb-24">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
              Seamless <span className="text-bright-blue">Cloud Migration</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
              Seamlessly migrate your workloads and data to the cloud with minimal disruption. At CloudFirst Technology, our experts ensure secure, high-performance, and cost-optimized transitions across AWS, Azure, and Google Cloud
            </p>
            <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg inline-block">Start Your Migration</a>
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
              alt="Cloud Migration Hero"
              className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg border-4 border-bright-blue/10"
            />
          </div>
          <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 -z-1 hidden md:block" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="200" fill="#3B82F6" /></svg>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Migration Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">💰</span>
              <h3 className="font-semibold text-xl mb-2">Cost Savings</h3>
              <p className="text-muted-foreground">Lower infrastructure and operational costs with pay-as-you-go cloud models.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">⚡</span>
              <h3 className="font-semibold text-xl mb-2">Performance</h3>
              <p className="text-muted-foreground">Leverage scalable, high-performance resources that grow with your business.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">🔒</span>
              <h3 className="font-semibold text-xl mb-2">Security</h3>
              <p className="text-muted-foreground">Built-in cloud security and compliance features protect your data during and after migration.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-bright-blue/5 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Migration Process</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">1</div>
                <h4 className="font-semibold mb-1">Assess</h4>
                <p className="text-sm text-muted-foreground">Evaluate current infrastructure and dependencies.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">2</div>
                <h4 className="font-semibold mb-1">Plan</h4>
                <p className="text-sm text-muted-foreground">Design migration strategy and timeline.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">3</div>
                <h4 className="font-semibold mb-1">Execute</h4>
                <p className="text-sm text-muted-foreground">Migrate systems with minimal downtime.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">4</div>
                <h4 className="font-semibold mb-1">Optimize</h4>
                <p className="text-sm text-muted-foreground">Fine-tune for cost, performance, and security.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Customer Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-lg mb-4">“CloudFirst Technology made our cloud migration seamless and disruption-free. Their expertise ensured a secure transition with improved performance—our users didn’t experience a single interruption.”</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">Sneha P., CIO</div>
                  <div className="text-xs text-muted-foreground">Healthcare Provider</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-lg mb-4">“We cut our infrastructure costs by 45% after the migration, and performance improved dramatically.”</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">Raj M., CTO</div>
                  <div className="text-xs text-muted-foreground">Retail Enterprise</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CloudMigration;
