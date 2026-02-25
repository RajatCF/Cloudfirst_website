import React from 'react';
import Layout from '@/components/Layout';

const CloudSecurity = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-red-50 to-white min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-12 md:pb-24">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
              Enterprise <span className="text-bright-blue">Cloud Security</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
              Protect your cloud environment with end-to-end security measures. From identity management to threat response, we keep your data safe.
            </p>
            <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg inline-block">Secure My Cloud</a>
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80"
              alt="Cloud Security Hero"
              className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg border-4 border-bright-blue/10"
            />
          </div>
          <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 -z-1 hidden md:block" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="200" fill="#EF4444" /></svg>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Security Offerings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">🔐</span>
              <h3 className="font-semibold text-xl mb-2">Identity</h3>
              <p className="text-muted-foreground">Manage user access and permissions with robust IAM policies.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">🛡️</span>
              <h3 className="font-semibold text-xl mb-2">Threat Response</h3>
              <p className="text-muted-foreground">Detect and respond to incidents before they escalate.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">🗃️</span>
              <h3 className="font-semibold text-xl mb-2">Encryption</h3>
              <p className="text-muted-foreground">Encrypt data at rest and in transit to ensure privacy.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-bright-blue/5 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Security Framework</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">1</div>
                <h4 className="font-semibold mb-1">Assess</h4>
                <p className="text-sm text-muted-foreground">Identify vulnerabilities and risks.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">2</div>
                <h4 className="font-semibold mb-1">Protect</h4>
                <p className="text-sm text-muted-foreground">Implement security controls.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">3</div>
                <h4 className="font-semibold mb-1">Detect</h4>
                <p className="text-sm text-muted-foreground">Monitor for threats continuously.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">4</div>
                <h4 className="font-semibold mb-1">Respond</h4>
                <p className="text-sm text-muted-foreground">Act quickly to contain breaches.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Client Praise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-lg mb-4">“Their security audits uncovered gaps we didn’t even know existed. They fixed everything promptly.”</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">Arjun D., CISO</div>
                  <div className="text-xs text-muted-foreground">FinTech Firm</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-lg mb-4">“Compliance became effortless once they took over security management. Our audits now pass with flying colors.”</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">Lina M., COO</div>
                  <div className="text-xs text-muted-foreground">Healthcare Corporation</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CloudSecurity;
