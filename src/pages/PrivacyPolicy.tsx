import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const content = `Privacy Policy

cloudfirst® values for the discretion of the personal information of our customers. We will never disclose your information unless suspicion of fraudulent use has been implied. However, we will assist law enforcements authorities.

The privacy of your personal information is essential for our long term relationship with you, and protecting this privacy is just another part of our personalized service towards you. In an effort to comply with the Children's Online Privacy Protection Act (COPPA), we will not knowingly collect personal information from children under the age of 13.

cloudfirst® collects information from you in the following ways:-
Telephone Conversations (may be recorded for quality and training purposes).

» Online Transactions
» Subscription Forms
» Emails

We collect and store the information you provide us in a secure database.

Why We Collect Personal Information?

GlobalHello uses the information, you provide us to send you product announcements, special offers, and other information.

How Do We Protect Your Personal Information?

GlobalHello safeguards the security of the data you send us with physical, electronic, and managerial procedures. GlobalHello's website contains links to other sites. We do not share your personal information with those websites and are not responsible for their privacy policy.

When Do We Disclose Personal Information.

We may disclose information about you if we believe that disclosure is necessary for the public interest, if law or a legal process requires us to do so or in case of fraudulent sale.

Website

» When you first give us personal information through our website or if you communicate with us using the internet, we may occasionally e-mail you about our services and products. But we will give you the choice as to whether or not you would like us to contact you via e-mail. You can always send us e-mail at the address below, at any time if you change your mind.

» Please note that the nature of the Internet may cause your communications to go through a number of countries before they are delivered.`;

const PrivacyPolicy = () => {
  const [contentTitleRaw, ...contentRest] = content.split(/\r?\n/);
  const contentTitle = (contentTitleRaw ?? "").trim();
  const contentBody = contentRest.join("\n").trim();

  return (
    <Layout>
      <div className="min-h-[70vh] bg-white">
        <section className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-cyan-700 to-teal-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/30 blur-2xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/25 blur-2xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white" style={{ fontFamily: "'Georgia', serif" }}>
              Privacy Policy
            </h1>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/85">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="opacity-60">›</span>
              <span className="text-white">Privacy Policy</span>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {contentTitle}
          </h2>
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">{contentBody}</div>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
