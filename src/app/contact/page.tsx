import { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact NMF Global Services",
  description:
    "Get in touch with NMF Global Services. Contact us for a free consultation about medical transcription, healthcare BPO, Power BI, IT support, and back-office services.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@nmfglobalservices.com",
    href: "mailto:info@nmfglobalservices.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 7339245833",
    href: "tel:+917339245833",
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.nmfglobalservices.com",
    href: "https://www.nmfglobalservices.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "NMF Global Services",
    href: "#",
  },
];

const services = [
  "Medical Transcription",
  "Medical Billing Support",
  "Healthcare Data Entry",
  "Power BI & Analytics",
  "IT Support",
  "Back-Office Support",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Let's discuss how we can support your business with our services"
      />

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="We'd love to hear from you. Here's how you can reach us."
              />

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 p-4 bg-[#F5F9FF] rounded-xl hover:bg-[#00AEEF]/10 transition-colors group"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow transition-shadow">
                      <item.icon className="w-6 h-6 text-[#00AEEF]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0F2D5C]">{item.title}</p>
                      <p className="text-[#6B7280]">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#25D366]/10 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F2D5C]">
                      Chat on WhatsApp
                    </h4>
                    <p className="text-sm text-[#6B7280]">
                      Quick responses, anytime
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/917339245833?text=Hello%20NMF%20Global%20Services,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full bg-[#25D366] text-white hover:bg-[#20BA5A]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat With Us
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F5F9FF] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#0F2D5C] mb-2">
                Send Us a Message
              </h3>
              <p className="text-[#6B7280] mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-20 bg-[#F5F9FF]">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="Explore the range of services we offer"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Link
                key={service}
                href="/services"
                className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="font-medium text-[#0F2D5C]">{service}</span>
              </Link>
            ))}
            <Link
              href="/services"
              className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0F2D5C] flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="font-medium text-[#0F2D5C]">
                View All Services
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Quick answers to common questions"
            />

            <div className="space-y-4 mt-8">
              {[
                {
                  q: "What industries do you serve?",
                  a: "We serve a wide range of industries including healthcare, finance, manufacturing, e-commerce, education, and SMBs. Our solutions are tailored to meet the unique requirements of each sector.",
                },
                {
                  q: "How quickly can I expect a response?",
                  a: "We typically respond to all inquiries within 24 hours. For urgent matters, we recommend contacting us via WhatsApp for faster communication.",
                },
                {
                  q: "Do you offer free consultations?",
                  a: "Yes! We offer free consultations to understand your requirements and provide recommendations. Contact us to schedule yours.",
                },
                {
                  q: "What are your support hours?",
                  a: "We offer 24/7 support to serve clients across different time zones. Our team is always available to assist you.",
                },
                {
                  q: "How do you ensure data security?",
                  a: "We implement enterprise-grade security measures including encryption, secure access controls, and HIPAA-aware data handling practices. We also sign NDAs for added confidentiality.",
                },
              ].map((item, index) => (
                <details
                  key={index}
                  className="bg-[#F5F9FF] rounded-xl group"
                >
                  <summary className="p-5 cursor-pointer font-medium text-[#0F2D5C] flex items-center justify-between">
                    {item.q}
                    <span className="text-[#00AEEF] group-open:rotate-180 transition-transform">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-[#6B7280]">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-12 gradient-bg">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-white" />
              <span className="text-white font-medium">
                24/7 Support Available
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30" />
            <span className="text-white/80">
              Response within 24 hours
            </span>
            <div className="hidden md:block w-px h-8 bg-white/30" />
            <span className="text-white/80">
              Free Initial Consultation
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
