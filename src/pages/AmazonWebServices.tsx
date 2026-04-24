import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const awsManagedServices = [
  {
    name: "AWS Lambda",
    description:
      "AWS Lambda is a serverless compute service that enables you to run your code without provisioning or managing servers. It automatically scales your applications in response to incoming requests and executes your code in parallel, ensuring high availability and cost efficiency.",
  },
  {
    name: "Amazon RDS",
    description:
      "Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud. RDS manages routine database tasks such as backups, software patching, and automatic failure detection, allowing you to focus on building applications instead of managing infrastructure.",
  },
  {
    name: "Amazon ECS",
    description:
      "Amazon Elastic Container Service (ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers. ECS simplifies the deployment and management of containers, providing you with the flexibility to run applications on a fully managed infrastructure.",
  },
  {
    name: "AWS Elastic Beanstalk",
    description:
      "AWS Elastic Beanstalk is a fully managed service that makes it easy to deploy and run applications in multiple languages. It handles capacity provisioning, load balancing, and automatic scaling, allowing you to focus on writing code and delivering applications quickly.",
  },
  {
    name: "AWS CloudFormation",
    description:
      "AWS CloudFormation provides a declarative way to provision and manage your AWS infrastructure as code. With CloudFormation, you can define your infrastructure resources in a template, enabling consistent and automated provisioning and deployment of your applications.",
  },
  {
    name: "Amazon S3",
    description:
      "Amazon Simple Storage Service (S3) is an object storage service that offers industry-leading scalability, durability, and security. S3 allows you to store and retrieve any amount of data from anywhere on the web, making it an ideal choice for backup, archiving, and content distribution.",
  },
  {
    name: "AWS CloudTrail",
    description:
      "AWS CloudTrail provides visibility into user activity and resource changes within your AWS infrastructure. It captures API calls and delivers detailed logs, which can be used for security analysis, resource tracking, and compliance auditing.",
  },
];

const AmazonWebServices = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.12),_transparent_45%),radial-gradient(circle_at_85%_25%,_rgba(59,130,246,0.12),_transparent_35%)]" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
                Cloud Platforms
              </span>

              <h1 className="section-title mt-6 mb-5">Amazon Web Services</h1>

              <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  We are here to introduce you to AWS Managed Cloud Services and
                  how they can revolutionize your business operations.
                </p>
                <p>
                  In today&apos;s rapidly evolving digital landscape, businesses
                  need scalable and reliable infrastructure to meet the demands
                  of their customers. AWS (Amazon Web Services) offers a
                  comprehensive suite of cloud services that provide
                  organizations with the flexibility, agility, and security they
                  require.
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
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-400/20 via-transparent to-sky-500/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
                <img
                  src="/aws-services.png"
                  alt="AWS managed cloud services"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 max-w-4xl rounded-2xl border border-border bg-card/70 p-6 md:p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              AWS Managed Cloud Services are designed to simplify the management
              and maintenance of your cloud infrastructure, allowing you to
              focus on your core business activities. With AWS Managed Cloud
              Services, you can offload the operational burden of managing your
              infrastructure to AWS experts, who will handle the day-to-day
              tasks, monitoring, and optimization, so you can concentrate on
              driving innovation and delivering value to your customers.
            </p>
          </div>

          <h2 className="mt-16 text-2xl md:text-3xl font-semibold text-foreground">
            Key AWS Managed Cloud Services
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {awsManagedServices.map((service) => (
              <article
                key={service.name}
                className="group rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="max-w-4xl mt-14 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              These are just a few examples of the extensive range of AWS
              Managed Cloud Services available. By leveraging these services,
              you can benefit from AWS&apos;s global infrastructure,
              industry-leading security practices, and continuous innovation,
              ensuring that your business stays ahead in today&apos;s competitive
              landscape.
            </p>
            <p>
              At CloudFirst, we specialize in helping businesses harness the
              power of AWS Managed Cloud Services. Our team of experts can
              assist you in designing, implementing, and managing your cloud
              infrastructure, tailored to your unique business requirements.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-gradient-to-r from-amber-100/40 via-card to-sky-100/40 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              Ready to modernize on AWS?
            </h3>
            <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
              Get a tailored AWS managed services roadmap from CloudFirst,
              aligned to your workloads, security goals, and growth plans.
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

export default AmazonWebServices;
