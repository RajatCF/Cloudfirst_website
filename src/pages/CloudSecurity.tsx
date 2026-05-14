import React from 'react';
import Layout from '@/components/Layout';

const CloudSecurity = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-bright-blue/10 to-white min-h-screen">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-12 md:pb-24">
          <div className="text-center z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
              Enterprise <span className="text-bright-blue">Cloud Security</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
              Protect your cloud environment with end-to-end security measures. From identity management to threat response, we keep your data safe.
            </p>
            <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg inline-block">Secure My Cloud</a>
          </div>
          <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 -z-1 hidden md:block" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="200" fill="currentColor" className="fill-current text-bright-blue" />
          </svg>
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
      </div>
    </Layout>
  );
};

export default CloudSecurity;
