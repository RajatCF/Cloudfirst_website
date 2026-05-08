import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-6 z-10">
        <AnimatedSection>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 font-display text-primary">Privacy Policy</h1>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-black text-base leading-relaxed max-w-4xl mx-auto">
            <p className="mb-4">cloudfirst® values for the discretion of the personal information of our customers. We will never disclose your information unless suspicion of fraudulent use has been implied. However, we will assist law enforcements authorities.</p>
            <p className="mb-4">The privacy of your personal information is essential for our long term relationship with you, and protecting this privacy is just another part of our personalized service towards you. In an effort to comply with the Children's Online Privacy Protection Act (COPPA), we will not knowingly collect personal information from children under the age of 13.</p>
            <h2 className="font-bold mt-6 mb-2">cloudfirst® collects information from you in the following ways:-</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Telephone Conversations (may be recorded for quality and training purposes).</li>
              <li>Online Transactions</li>
              <li>Subscription Forms</li>
              <li>Emails</li>
            </ul>
            <p className="mb-4">We collect and store the information you provide us in a secure database.</p>
            <h2 className="font-bold mt-6 mb-2">Why We Collect Personal Information?</h2>
            <p className="mb-4">GlobalHello uses the information, you provide us to send you product announcements, special offers, and other information.</p>
            <h2 className="font-bold mt-6 mb-2">How Do We Protect Your Personal Information?</h2>
            <p className="mb-4">GlobalHello safeguards the security of the data you send us with physical, electronic, and managerial procedures. GlobalHello's website contains links to other sites. We do not share your personal information with those websites and are not responsible for their privacy policy.</p>
            <h2 className="font-bold mt-6 mb-2">When Do We Disclose Personal Information.</h2>
            <p className="mb-4">We may disclose information about you if we believe that disclosure is necessary for the public interest, if law or a legal process requires us to do so or in case of fraudulent sale.</p>
            <h2 className="font-bold mt-6 mb-2">Website</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>When you first give us personal information through our website or if you communicate with us using the internet, we may occasionally e-mail you about our services and products. But we will give you the choice as to whether or not you would like us to contact you via e-mail. You can always send us e-mail at the address below, at any time if you change your mind.</li>
              <li>Please note that the nature of the Internet may cause your communications to go through a number of countries before they are delivered. Also, please note that communications over the Internet, such as e-mails and web mails (messages sent through a website), are not protected unless they have been encrypted. We cannot accept responsibility for any unauthorized access or loss of personal information that is beyond our control.</li>
              <li>On our website, 'cookies' are generally used to study how people use our site. A cookie is information that is stored on your computer's hard drive which records how you have used a website. It helps us improve and upgrade our website based on our potential/customers' requirements. This means that when you go back to our website, it can give you customized options based on the information it has stored about your last visit. You can generally modify the settings of your browser to prevent it from accepting cookies.</li>
              <li>If you do not want us to use cookies in your browser, you can set your browser to disallow cookies or to let you know when a website attempts to put a cookie on your computer. Then again, you may not be able to use some of the products or services on our website without cookies.</li>
            </ul>
            <h2 className="font-bold mt-6 mb-2">Further Information</h2>
            <p className="mb-4">This policy may be updated regularly and the revised version will be on our website, and you can receive a copy by writing to the address below or by e-mailing. Should you like any more information or you have any comments about our privacy policy, please either write to us at <a href="mailto:sales@cloudfirst.in" className="text-primary underline">sales@cloudfirst.in</a></p>
            <p className="mb-4">cloudfirst® Privacy Policy is subject to change at any time. We encourage you to review the privacy policy regularly for any changes.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <Footer />
  </div>
);

export default PrivacyPolicy;
