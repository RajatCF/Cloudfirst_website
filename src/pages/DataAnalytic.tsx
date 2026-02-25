import React from 'react';
import Layout from '@/components/Layout';

const DataAnalytic = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-purple-50 to-white min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-12 md:pb-24">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
              Powerful <span className="text-bright-blue">Data Analytics</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
              Turn data into insights and action. Our analytics services help you uncover trends, predict outcomes and make confident decisions.
            </p>
            <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg inline-block">Talk Data With Us</a>
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Data Analytics Hero"
              className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg border-4 border-bright-blue/10"
            />
          </div>
          <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 -z-1 hidden md:block" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="200" fill="#8B5CF6" /></svg>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Analytics Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">📊</span>
              <h3 className="font-semibold text-xl mb-2">Dashboards</h3>
              <p className="text-muted-foreground">Interactive visualizations for real-time business intelligence.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">🤖</span>
              <h3 className="font-semibold text-xl mb-2">Predictive AI</h3>
              <p className="text-muted-foreground">Machine learning models that forecast trends and behaviors.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <span className="text-4xl mb-4">🔗</span>
              <h3 className="font-semibold text-xl mb-2">Data Integration</h3>
              <p className="text-muted-foreground">Consolidate data from multiple sources into one source of truth.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-bright-blue/5 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How We Work</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">1</div>
                <h4 className="font-semibold mb-1">Collect</h4>
                <p className="text-sm text-muted-foreground">Gather data from every relevant source.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">2</div>
                <h4 className="font-semibold mb-1">Analyze</h4>
                <p className="text-sm text-muted-foreground">Apply analytics and models to uncover insights.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">3</div>
                <h4 className="font-semibold mb-1">Visualize</h4>
                <p className="text-sm text-muted-foreground">Create dashboards and reports for stakeholders.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-bright-blue/10 flex items-center justify-center mb-3 text-2xl">4</div>
                <h4 className="font-semibold mb-1">Optimize</h4>
                <p className="text-sm text-muted-foreground">Refine models and processes continuously.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Client Feedback</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-lg mb-4">“Their analytics platform gave us visibility we never had before. Decisions are data-driven now.”</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">Nisha R., Data Lead</div>
                  <div className="text-xs text-muted-foreground">Logistics Firm</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-lg mb-4">“Predictive models helped us cut churn by 30%. The ROI speaks for itself.”</p>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">Vikram P., CMO</div>
                  <div className="text-xs text-muted-foreground">Consumer Brand</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DataAnalytic;
