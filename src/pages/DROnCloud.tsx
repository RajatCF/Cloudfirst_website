import Layout from "@/components/Layout";
import { Cog, GraduationCap, Headphones, Layers, SlidersHorizontal, Wrench } from "lucide-react";

const items = [
  { label: "DR\nImplementation", color: "from-red-500 to-orange-400", Icon: Wrench, pos: "top-2 left-1/2 -translate-x-1/2" },
  { label: "DR\nConfiguration", color: "from-emerald-500 to-lime-400", Icon: SlidersHorizontal, pos: "top-1/2 right-2 -translate-y-1/2" },
  { label: "DR\nSupport", color: "from-blue-500 to-cyan-400", Icon: Headphones, pos: "bottom-2 left-1/2 -translate-x-1/2" },
  { label: "DR\nScalable\nSolutions", color: "from-violet-500 to-fuchsia-400", Icon: Layers, pos: "top-1/2 left-2 -translate-y-1/2" },
  { label: "DR\nTraining", color: "from-pink-500 to-rose-400", Icon: GraduationCap, pos: "top-[18%] left-[18%]" },
  { label: "DR\nManagement", color: "from-amber-500 to-yellow-400", Icon: Cog, pos: "bottom-[18%] right-[18%]" },
];

const serviceCards = [
  {
    title: "DR on Cloud Implementation:",
    icon: "☁️",
    description:
      "We help businesses implement DR on cloud solutions, such as Azure Site Recovery and AWS Disaster Recovery, to ensure that their data and applications are protected from unexpected events.",
  },
  {
    title: "DR on Cloud Configuration:",
    icon: "⚙️",
    description:
      "We help businesses configure DR on cloud solutions to meet their specific DR needs, ensuring that they are optimized for their unique business environment.",
  },
  {
    title: "DR on Cloud Management:",
    icon: "🧑‍💼",
    description:
      "We provide ongoing management services to ensure that DR on cloud solutions are up-to-date and configured correctly, minimizing the risk of data loss and business disruption.",
  },
  {
    title: "DR on Cloud Support:",
    icon: "🧑‍🔧",
    description:
      "We provide ongoing support to ensure that businesses are getting the most out of their DR on cloud solutions, resolving any issues quickly and efficiently.",
  },
  {
    title: "DR on Cloud Training:",
    icon: "🎓",
    description:
      "We provide training programs to help businesses get the most out of their DR on cloud solutions, ensuring that their teams are equipped with the knowledge and skills they need to manage their DR on cloud solutions effectively.",
  },
];

const CornerFrame = () => (
  <>
    <span className="pointer-events-none absolute left-0 top-0 h-5 w-0.5 bg-sky-500" />
    <span className="pointer-events-none absolute left-0 top-0 h-0.5 w-8 bg-sky-500" />
    <span className="pointer-events-none absolute right-0 bottom-0 h-5 w-0.5 bg-sky-500" />
    <span className="pointer-events-none absolute right-0 bottom-0 h-0.5 w-8 bg-sky-500" />
  </>
);

const DROnCloud = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-br from-rose-50 via-white to-rose-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                <span className="text-sky-600 border-b-2 border-sky-600 pb-1">Disaster</span>{" "}
                <span className="text-gray-900">Recovery</span>
              </h1>

              <p className="text-gray-500 leading-relaxed mb-5 max-w-xl">
                Disaster recovery (DR) on cloud is a critical component of any business continuity plan. With DR on cloud, businesses can ensure their data and applications are protected from unexpected events such as natural disasters, cyber attacks, and other disruptive events.
              </p>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                Our DR on cloud services are designed to help businesses of all sizes and across different industries. We provide end-to-end DR on cloud services, including implementation, configuration, and ongoing support and training.
              </p>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-full max-w-[720px] lg:max-w-[820px]">
                <img
                  src="/dr_cloud.png"
                  alt="DR on Cloud"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-rose-600 bg-clip-text text-transparent">
                Our Disaster Recovery (DR) on cloud services include:
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceCards.slice(0, 3).map((card) => (
                <div key={card.title} className="relative bg-white border border-slate-200 rounded-md shadow-sm px-8 py-10 min-h-[230px]">
                  <CornerFrame />
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl mb-3">{card.icon}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-4">{card.title}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCards.slice(3).map((card) => (
                <div key={card.title} className="relative bg-white border border-slate-200 rounded-md shadow-sm px-10 py-10 min-h-[220px]">
                  <CornerFrame />
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl mb-3">{card.icon}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-4">{card.title}</div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-gray-700 text-sm leading-relaxed">
              Our DR on cloud services are designed to help businesses achieve greater business continuity capabilities, ensuring their data and applications are always available, even in the face of unexpected events. With our help, businesses can take advantage of the latest DR on cloud solutions to protect their data and applications from disasters and unexpected events, ensuring their business continuity and success.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DROnCloud;
