import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NMF Global Services Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Last updated: January 2026"
        bgGradient={false}
      />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-[#6B7280] mb-8">
              NMF Global Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">1. Information We Collect</h2>
            <p className="text-[#6B7280] mb-4">We may collect information about you in various ways, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280] mb-6">
              <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and other contact information you provide when filling out forms or contacting us.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Communication Data:</strong> Records of correspondence when you contact us via email, phone, or contact forms.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="text-[#6B7280] mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280] mb-6">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you information about our services, updates, and promotional materials</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-[#6B7280] mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280] mb-6">
              <li>Service providers who assist us in operating our business</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">4. Data Security</h2>
            <p className="text-[#6B7280] mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">5. Data Retention</h2>
            <p className="text-[#6B7280] mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">6. Your Rights</h2>
            <p className="text-[#6B7280] mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280] mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your information</li>
              <li>Object to the processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-[#6B7280] mb-6">
              We use cookies and similar tracking technologies to collect usage data and improve your browsing experience. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">8. Third-Party Links</h2>
            <p className="text-[#6B7280] mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">9. Children's Privacy</h2>
            <p className="text-[#6B7280] mb-6">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">10. Changes to This Policy</h2>
            <p className="text-[#6B7280] mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">11. Contact Us</h2>
            <p className="text-[#6B7280] mb-4">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </p>
            <div className="bg-[#F5F9FF] p-6 rounded-lg">
              <p className="text-[#0F2D5C] font-medium">NMF Global Services</p>
              <p className="text-[#6B7280]">Email: info@nmfglobalservices.com</p>
              <p className="text-[#6B7280]">Phone: +91 7339245833</p>
              <p className="text-[#6B7280]">
                Address: No. 16/39 Puransamedu 2nd Street, Hakeem Nagar,
                Rasathupuram, Melvisharam - 632509
              </p>
              <p className="text-[#6B7280]">Website: www.nmfglobalservices.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
