import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const azureManagedServices = [
  {
    name: "Azure Managed Virtual Machines",
    description:
      "This service provides fully managed virtual machines that are optimized for performance, security, and reliability. Azure experts handle the management of the virtual machines, including patching, backups, and monitoring.",
  },
  {
    name: "Azure Managed Databases",
    description:
      "This service provides managed database services that are optimized for performance, security, and availability. Azure experts handle the management of the databases, including patching, backups, and monitoring.",
  },
  {
    name: "Azure Managed Kubernetes",
    description:
      "This service provides managed Kubernetes clusters that are optimized for performance, security, and reliability. Azure experts handle the management of the Kubernetes clusters, including patching, upgrades, and monitoring.",
  },
  {
    name: "Azure Managed Applications",
    description:
      "This service provides managed application services that are optimized for performance, security, and availability. Azure experts handle the management of the applications, including patching, upgrades, and monitoring.",
  },
  {
    name: "Azure Managed Security",
    description:
      "This service provides managed security services that are optimized for protecting Azure environments from security threats and vulnerabilities. Azure experts handle the management of security solutions, including identity and access management, network security, and threat management.",
  },
];

const MicrosoftAzure = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_42%),radial-gradient(circle_at_85%_15%,_rgba(59,130,246,0.14),_transparent_35%)]" />

        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
                Cloud Platforms
              </span>

              <h1 className="section-title mt-6 mb-5">Azure Managed Cloud Services</h1>

              <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Azure Managed Cloud Services refer to a set of cloud
                  computing services provided by Microsoft Azure that are
                  managed by Azure experts on behalf of their customers. These
                  services provide businesses with a managed cloud
                  infrastructure that allows them to focus on their core
                  operations and applications, while Azure experts handle the
                  day-to-day management of their cloud environment.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary arrow-slide">
                  Talk to our team
                  <ArrowRight className="w-4 h-4 arrow-icon" />
                </Link>
                <Link to="/" className="btn-outline">
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-400/20 via-transparent to-blue-500/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
                <img
                  src="/azure.png"
                  alt="Azure managed cloud services"
                  className="h-[260px] w-full object-cover md:h-[320px] lg:h-[360px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-card/70 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Some of the key Azure Managed Cloud Services include:
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {azureManagedServices.map((service) => (
                <article
                  key={service.name}
                  className="group rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 max-w-4xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Overall, Azure Managed Cloud Services provide businesses with a
              comprehensive set of managed cloud services that help them achieve
              their goals and objectives with greater efficiency and
              cost-effectiveness.
            </p>
            <p>
              With Azure Managed Cloud Services, businesses can focus on their
              core operations while Azure experts handle the day-to-day
              management of their cloud infrastructure, ensuring optimal
              performance, reliability, and security.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-gradient-to-r from-sky-100/50 via-card to-blue-100/50 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              Build and scale confidently on Azure
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
              Partner with CloudFirst to plan, implement, and manage your Azure
              environment with security, reliability, and operational excellence
              at the center.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary arrow-slide">
                Get Started
                <ArrowRight className="w-4 h-4 arrow-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MicrosoftAzure;
