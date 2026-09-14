import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "NMF Global Services Terms & Conditions - Read our terms governing the use of our services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Last updated: January 2026"
        bgGradient={false}
      />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#6B7280] mb-8">
              Welcome to NMF Global Services. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#6B7280] mb-6">
              By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">2. Services Description</h2>
            <p className="text-[#6B7280] mb-4">
              NMF Global Services provides the following services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280] mb-6">
              <li>Medical Transcription Services</li>
              <li>Medical Billing Support</li>
              <li>Healthcare Data Entry & Management</li>
              <li>Data Analytics & Reporting</li>
              <li>Power BI Dashboard Solutions</li>
              <li>IT & Technical Support</li>
              <li>Website Development</li>
              <li>Back-Office & Administrative Support</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">3. User Responsibilities</h2>
            <p className="text-[#6B7280] mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280] mb-6">
              <li>Provide accurate and complete information when using our services</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not misuse, damage, or interfere with our services</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Maintain the confidentiality of any account credentials</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">4. Intellectual Property</h2>
            <p className="text-[#6B7280] mb-6">
              All content, materials, and intellectual property on our website, including text, graphics, logos, and software, are the property of NMF Global Services or its licensors. You may not copy, reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">5. Confidentiality</h2>
            <p className="text-[#6B7280] mb-6">
              We understand the importance of confidentiality in business relationships. We are committed to protecting your sensitive information and maintaining strict confidentiality standards. We implement appropriate security measures and comply with applicable data protection regulations.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">6. Service Agreements</h2>
            <p className="text-[#6B7280] mb-6">
              Specific services will be governed by separate service agreements or statements of work that outline the scope, deliverables, timelines, and fees. In case of conflict, the terms of such agreements shall prevail.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">7. Payment Terms</h2>
            <p className="text-[#6B7280] mb-4">Unless otherwise specified:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280] mb-6">
              <li>Payment terms are net 30 days from invoice date</li>
              <li>Late payments may incur interest at 1.5% per month</li>
              <li>All fees are exclusive of applicable taxes</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">8. Limitation of Liability</h2>
            <p className="text-[#6B7280] mb-6">
              To the maximum extent permitted by law, NMF Global Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or business opportunities, arising out of or related to your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">9. Warranty Disclaimer</h2>
            <p className="text-[#6B7280] mb-6">
              Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">10. Indemnification</h2>
            <p className="text-[#6B7280] mb-6">
              You agree to indemnify and hold harmless NMF Global Services, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your use of our services or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">11. Termination</h2>
            <p className="text-[#6B7280] mb-6">
              Either party may terminate service agreements with written notice as specified in the respective agreements. Upon termination, we will provide reasonable transition assistance as mutually agreed.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">12. Governing Law</h2>
            <p className="text-[#6B7280] mb-6">
              These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through good-faith negotiation or in accordance with the dispute resolution provisions in the applicable service agreement.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">13. Amendments</h2>
            <p className="text-[#6B7280] mb-6">
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">14. Severability</h2>
            <p className="text-[#6B7280] mb-6">
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-[#0F2D5C] mt-10 mb-4">15. Contact Information</h2>
            <p className="text-[#6B7280] mb-4">
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-[#F5F9FF] p-6 rounded-lg">
              <p className="text-[#0F2D5C] font-medium">NMF Global Services</p>
              <p className="text-[#6B7280]">Email: info@nmfglobalservices.com</p>
              <p className="text-[#6B7280]">Phone: +91 7339245833</p>
              <p className="text-[#6B7280]">Website: www.nmfglobalservices.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
