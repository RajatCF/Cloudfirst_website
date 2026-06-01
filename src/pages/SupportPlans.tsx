import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

type PlanKey = "basic" | "standard" | "enhanced" | "premium";

const plans: { key: PlanKey; name: string; headerClassName: string; bodyClassName: string }[] = [
  { key: "basic", name: "Basic Support", headerClassName: "bg-[#244a96] text-white", bodyClassName: "bg-[#e8eef9]" },
  { key: "standard", name: "Standard Support", headerClassName: "bg-[#00a3e0] text-white", bodyClassName: "bg-[#f2f2f2]" },
  { key: "enhanced", name: "Enhanced Support", headerClassName: "bg-[#244a96] text-white", bodyClassName: "bg-[#eef7ff]" },
  { key: "premium", name: "Premium Support", headerClassName: "bg-[#00a3e0] text-white", bodyClassName: "bg-[#f6f6df]" },
];

const rows: {
  label: string;
  labelClassName?: string;
  values: Record<PlanKey, React.ReactNode>;
}[] = [
  {
    label: "Description",
    labelClassName: "bg-[#00a3e0] text-white",
    values: {
      basic: "Basic Support provides essential assistance for day-to-day operational queries.",
      standard: "Comprehensive support services for timely assistance.",
      enhanced: "Higher level of support and personalized assistance.",
      premium: "Highest level of support and personalized attention.",
    },
  },
  {
    label: "Key Features",
    labelClassName: "bg-[#244a96] text-white",
    values: {
      basic: (
        <ul className="space-y-2">
          <li>Email support during business hours</li>
          <li>Response time of 24 hours</li>
          <li>General troubleshooting assistance</li>
          <li>Access to knowledge base</li>
        </ul>
      ),
      standard: (
        <ul className="space-y-2">
          <li>Phone and email support during business hours</li>
          <li>Response time of 8 hours</li>
          <li>Advanced troubleshooting assistance</li>
          <li>Priority handling of support requests (P3)</li>
        </ul>
      ),
      enhanced: (
        <ul className="space-y-2">
          <li>24/7 Phone and email</li>
          <li>Response time of 2 hours</li>
          <li>Dedicated account manager</li>
          <li>Proactive monitoring for critical issues (P2)</li>
        </ul>
      ),
      premium: (
        <ul className="space-y-2">
          <li>24/7 Phone and email</li>
          <li>Response time of 1 hour</li>
          <li>Dedicated account manager and technical expert</li>
          <li>Proactive monitoring for critical issues (P1)</li>
        </ul>
      ),
    },
  },
  {
    label: "Ticket Priority",
    labelClassName: "bg-[#00a3e0] text-white",
    values: {
      basic: (
        <ul className="space-y-2">
          <li>P4: An inconvenience or annoyance with workarounds available</li>
          <li>P5: Background or planned task to be addressed when time permits</li>
          <li>P3: Affecting efficient operation by one or more people</li>
        </ul>
      ),
      standard: (
        <ul className="space-y-2">
          <li>Priority handling of support requests (P3)</li>
          <li>P4: An inconvenience or annoyance with workarounds</li>
          <li>P3: Affecting efficient operation by one or more people</li>
        </ul>
      ),
      enhanced: (
        <ul className="space-y-2">
          <li>Priority handling of support requests (P2)</li>
          <li>P3: Affecting efficient operation by one or more people</li>
          <li>P2: A major component affecting the ability to operate</li>
        </ul>
      ),
      premium: (
        <ul className="space-y-2">
          <li>Priority handling of support requests (P1)</li>
          <li>P2: A major component affecting the ability to operate</li>
        </ul>
      ),
    },
  },
  {
    label: "Support languages",
    values: {
      basic: "Hindi, English, Kannada",
      standard: "Hindi, English, Kannada",
      enhanced: "Hindi, English, Kannada",
      premium: "Hindi, English, Kannada",
    },
  },
  {
    label: "Support Contact",
    values: {
      basic: (
        <div className="space-y-1">
          <div>support@cloudfirst.in</div>
          <div>+91 8448440769</div>
        </div>
      ),
      standard: (
        <div className="space-y-1">
          <div>support@cloudfirst.in</div>
          <div>+91 8448440769</div>
        </div>
      ),
      enhanced: (
        <div className="space-y-1">
          <div>support@cloudfirst.in</div>
          <div>+91 8448440769</div>
        </div>
      ),
      premium: (
        <div className="space-y-1">
          <div>support@cloudfirst.in</div>
        </div>
      ),
    },
  },
];

const SupportPlans = () => {
  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-sky-500 mb-4">Support Plans</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Basic Support is included for all Cloud customers, and provides access to documentation, community support, Cloud Billing Support, and Active Assist Recommendations.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse">
              <thead>
                <tr>
                  <th className="w-48" />
                  {plans.map((p) => (
                    <th key={p.key} className={`px-6 py-4 text-left text-sm font-bold ${p.headerClassName}`}>
                      <span className="inline-flex items-center gap-1.5">
                        <span>{p.name}</span>
                        <span
                          title="Support is not applicable to Microsoft."
                          aria-label="Support is not applicable to Microsoft."
                          className="text-white/90 cursor-default"
                        >
                          *
                        </span>
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-gray-200">
                    <td className={`px-6 py-5 align-top text-sm font-bold ${row.labelClassName ?? "bg-white text-gray-700"}`}>
                      {row.label}
                    </td>
                    {plans.map((p) => (
                      <td key={p.key} className={`px-6 py-5 align-top text-sm text-gray-700 ${p.bodyClassName}`}>
                        {row.values[p.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center text-red-600 font-semibold text-sm">
            [Note: Support is not applicable to Microsoft.]
          </div>

          <div className="mt-14 space-y-6 text-gray-700">
            <p>
              <span className="font-semibold">Basic Support :</span> Basic Support is included for all Cloud customers. With Basic Support, you have access to our documentation, community support, and support for Cloud Billing issues.
            </p>
            <p>
              <span className="font-semibold">Standard Support :</span> Standard Support offers unlimited 1:1 technical support for outages and defects, unexpected product behavior, product usage questions, billing issues, and feature requests. The Standard Support service is designed for small to medium organizations with workloads under development. With Standard Support, you have access to the Cloud Support API, Active Assist recommendations and receive 8 hours response times for Priority 3 (P3) cases.
            </p>
            <p>
              <span className="font-semibold">Enhanced Support :</span> Enhanced Support offers unlimited 1:1 technical support for outages and defects, unexpected product behavior, product usage questions, billing issues, and feature requests. The Enhanced Support service is designed for medium to large companies that are looking for faster response times and additional services to run their Cloud workloads in production. P1, P2 level deep technical support provided by Cloud Services provider only.
            </p>
            <p>
              <span className="font-semibold">Premium Support :</span> Premium Support offers unlimited 1:1 technical support for outages and defects, unexpected product behavior, product usage questions, billing issues, feature requests, and more. You also have Customer Aware Support and are assigned a Technical Account Manager. P1, P2 level deep technical support provided by Cloud Services provider only.
            </p>

            <p>
              <span className="font-semibold">Working Hours :</span> 9:30 AM to 6:30 PM (Excluding Sunday &amp; public holidays)
            </p>
          </div>
        </div>

        <div className="bg-[#f7f8fa]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-center text-4xl font-bold mb-10">
              <span className="text-sky-500">Escalation</span> <span className="text-pink-500">Matrix</span>
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Step 1: Submitting Your Support Request</h3>
                <p className="text-gray-700 mb-4">
                  To raise a query, please utilize one of the service channels listed below. We aim to respond within 24 hours, prioritizing requests based on urgency.
                </p>
                <div className="space-y-2 text-gray-800">
                  <div>
                    <span className="font-semibold">Submit a Ticket:</span>{" "}
                    <span>
                      Visit our website at{" "}
                      <a
                        href="https://support.cloudfirst.in"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline underline-offset-2"
                      >
                        https://support.cloudfirst.in
                      </a>{" "}
                      to submit your request.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Call Support:</span> Reach out to us at <span className="text-blue-600">+91 8448440769</span> for immediate assistance.
                  </div>
                </div>

                <p className="text-gray-700 mt-3">
                  For faster resolution, please provide your ticket number, domain name, full name, and mobile number.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Step 2: Escalation if Your Query Is Not Resolved within 24 Hours</h3>
                <p className="text-gray-700">
                  In the event that your query is not resolved to your satisfaction within 24 hours, we encourage you to escalate the matter by reaching out to us directly at{" "}
                  <a href="mailto:tier2support@cloudfirst.tech" className="text-blue-600 underline underline-offset-2">
                    tier2support@cloudfirst.tech
                  </a>
                  .
                </p>
                <p className="text-gray-700 mt-3">
                  Please provide your query reference number during the escalation process to facilitate a faster and more efficient resolution.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Step 3: Escalation to Higher Authority</h3>
                <p className="text-gray-700">
                  If your issue is not resolved after following Step 2, you may escalate it by reaching out to{" "}
                  <a href="mailto:escalation@cloudfirst.tech" className="text-blue-600 underline underline-offset-2">
                    escalation@cloudfirst.tech
                  </a>
                  .
                </p>
                <p className="text-gray-700 mt-3">For quicker assistance, please provide your query reference number.</p>
              </div>

              <div className="pt-4 flex items-center justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Raise a support ticket <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-2 flex items-center justify-center">
                <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-2">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPlans;
