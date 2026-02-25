
import React from 'react';
import Layout from '@/components/Layout';

const CloudDevOps = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-yellow-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-12 md:pb-24">
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
            Modern <span className="text-bright-blue">Cloud DevOps</span> Solutions
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
            Accelerate your development and operations with automation, scalability, and reliability. Empower your teams to innovate faster and deliver value continuously.
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg inline-block">Boost with DevOps</a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
            alt="Cloud DevOps Hero"
            className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg border-4 border-bright-blue/10"
          />
        </div>
        {/* Decorative SVG */}
        <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 -z-1 hidden md:block" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="200" fill="#3B82F6" /></svg>
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

      {/* Testimonials Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-lg mb-4">“The DevOps automation and cloud-native monitoring transformed our release cycles. We ship faster and with more confidence!”</p>
            <div className="flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-semibold">Amit S., CTO</div>
                <div className="text-xs text-muted-foreground">FinTech Startup</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-lg mb-4">“Security and compliance are now built into every deployment. The peace of mind is priceless.”</p>
            <div className="flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-semibold">Priya K., Head of IT</div>
                <div className="text-xs text-muted-foreground">E-Commerce Enterprise</div>
              </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-16 h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-16 h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-16 h-16" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="Terraform" className="w-16 h-16" />
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
          <a href="/contact" className="btn-primary text-xl px-10 py-4">Get Started Today</a>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default CloudDevOps;
