import React from 'react';

const statistics = [
  {
    value: "300+",
    label: "Projects"
  },
  {
    value: "4000+",
    label: "Customers"
  },
  {
    value: "50+",
    label: "Team Members"
  },
  {
    value: "3245",
    label: "Resolved Tickets"
  }
];

const Statistics = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <div key={index} className="group">
              <div className="transform transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 !text-blue-400">
                  {stat.value}
                </div>
                <div className="text-lg md:text-xl text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
