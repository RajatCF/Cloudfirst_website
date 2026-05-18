
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const CloudDevOps = () => {
  const tools = ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-bright-blue/10 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-12 md:pb-24">
        <div className="text-center z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
            Modern <span className="text-bright-blue">Cloud DevOps</span> Solutions
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
            Accelerate your development and operations with automation, scalability, and reliability. Empower your teams to innovate faster and deliver value continuously.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg inline-block">Boost with DevOps</Link>
        </div>
        {/* Decorative SVG */}
        <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 -z-1 hidden md:block" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="200" fill="currentColor" className="fill-current text-bright-blue" />
        </svg>
      </section>

        {/* About the Service */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">What Is Cloud DevOps?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cloud DevOps is the fusion of development and operations practices enabled by cloud platforms. It emphasizes automation, continuous integration and deployment (CI/CD),
            infrastructure as code, and proactive monitoring to deliver software faster, more reliably, and with less risk. With Cloud DevOps, teams can adapt dynamically to change
            and ensure that infrastructure scales securely with application demand.
          </p>
        </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our DevOps Process</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">1</div>
              <h4 className="font-semibold mb-1">Assessment</h4>
              <p className="text-sm text-muted-foreground">Analyze your current workflows and infrastructure.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">2</div>
              <h4 className="font-semibold mb-1">Design</h4>
              <p className="text-sm text-muted-foreground">Architect scalable, secure, and automated DevOps pipelines.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">3</div>
              <h4 className="font-semibold mb-1">Implementation</h4>
              <p className="text-sm text-muted-foreground">Deploy and integrate tools for CI/CD, monitoring, and automation.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">4</div>
              <h4 className="font-semibold mb-1">Optimization</h4>
              <p className="text-sm text-muted-foreground">Continuously monitor, improve, and scale your DevOps environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-xl mb-2">Startups</h3>
              <p className="text-muted-foreground">Rapid experimentation and deployment allow early-stage companies to iterate quickly.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Enterprises</h3>
              <p className="text-muted-foreground">Scale infrastructure across multiple teams while maintaining governance.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">SaaS Platforms</h3>
              <p className="text-muted-foreground">Continuous delivery ensures customers always have access to the latest features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tools & Technologies</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tools.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-700">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 text-left">
            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">How long does a typical DevOps implementation take?</summary>
              <p className="mt-2 text-muted-foreground">Timelines vary but most clients see a working pipeline in 4–8 weeks, depending on complexity.</p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">Do you support hybrid cloud environments?</summary>
              <p className="mt-2 text-muted-foreground">Yes, our team can integrate on-premises systems with public clouds seamlessly.</p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">What security practices do you follow?</summary>
              <p className="mt-2 text-muted-foreground">We integrate security into the DevOps workflow, including automated testing, secrets management, and regular audits.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your development lifecycle?</h2>
          <Link to="/contact" className="btn-primary text-xl px-10 py-4">Get Started Today</Link>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default CloudDevOps;
