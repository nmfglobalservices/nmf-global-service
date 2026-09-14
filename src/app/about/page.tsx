import { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Rocket,
  Users,
  Shield,
  Zap,
  Globe,
  Award,
  CheckCircle,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About NMF Global Services",
  description:
    "Learn about NMF Global Services - a trusted global partner for healthcare and business support services through quality, innovation, and reliability.",
};

const strengths = [
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our professionals bring years of industry experience to deliver exceptional results.",
  },
  {
    icon: Zap,
    title: "Advanced Tools & Technology",
    description:
      "We leverage cutting-edge technology to provide efficient and accurate services.",
  },
  {
    icon: Shield,
    title: "Strong Data Focus",
    description:
      "Our rigorous processes ensure data confidentiality and security at every step.",
  },
  {
    icon: Globe,
    title: "Scalable Workforce",
    description:
      "Our flexible team scales with your business needs, ensuring consistent quality.",
  },
];

const values = [
  "Accurate and timely service delivery",
  "Client satisfaction through dedication and professionalism",
  "Cost-effective and scalable solutions",
  "Transparent communication and reporting",
  "Continuous improvement and innovation",
  "Strict adherence to data security protocols",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About NMF Global Services"
        subtitle="Your trusted global partner for healthcare and business support services"
      />

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-blue mb-4">Who We Are</span>
              <h2 className="mb-6">
                Empowering Healthcare & Businesses Worldwide
              </h2>
              <p className="text-[#6B7280] text-lg mb-6 leading-relaxed">
                NMF Global Services is a professional service provider delivering
                IT and healthcare support services to businesses worldwide. Founded
                with a vision to bridge the gap between quality healthcare support
                and operational efficiency, we have grown to serve clients across
                multiple continents.
              </p>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Our team of experienced professionals is committed to delivering
                reliable, secure, and scalable solutions that help our clients
                focus on their core business objectives while we handle their
                critical back-office and support functions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-[#0F2D5C]">
                  <CheckCircle className="w-5 h-5 text-[#14B8A6]" />
                  <span className="font-medium">ISO Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-[#0F2D5C]">
                  <CheckCircle className="w-5 h-5 text-[#14B8A6]" />
                  <span className="font-medium">HIPAA-Aware</span>
                </div>
                <div className="flex items-center gap-2 text-[#0F2D5C]">
                  <CheckCircle className="w-5 h-5 text-[#14B8A6]" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#F5F9FF] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-[#0F2D5C] mb-2">50+</div>
                <p className="text-[#6B7280] text-sm">Team Members</p>
              </div>
              <div className="bg-[#F5F9FF] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-[#0F2D5C] mb-2">100+</div>
                <p className="text-[#6B7280] text-sm">Clients Served</p>
              </div>
              <div className="bg-[#F5F9FF] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-[#0F2D5C] mb-2">10+</div>
                <p className="text-[#6B7280] text-sm">Countries</p>
              </div>
              <div className="bg-[#F5F9FF] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-[#0F2D5C] mb-2">99%</div>
                <p className="text-[#6B7280] text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F5F9FF]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-[#00AEEF]/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#00AEEF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2D5C] mb-4">Our Vision</h3>
              <p className="text-[#6B7280] leading-relaxed">
                To become a trusted global partner for healthcare and business
                support services through quality, innovation, and reliability. We
                envision a world where businesses can focus on their core missions
                while we handle their critical support functions with excellence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-[#14B8A6]/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#14B8A6]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2D5C] mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "Provide accurate and timely services that exceed expectations",
                  "Ensure client satisfaction through dedication and professionalism",
                  "Deliver cost-effective and scalable solutions",
                  "Maintain the highest standards of data security and confidentiality",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#6B7280]">
                    <Rocket className="w-5 h-5 text-[#14B8A6] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strength */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading
            title="Our Strength"
            subtitle="What sets us apart in delivering exceptional services"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {strengths.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#F5F9FF] rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-[#0F2D5C] mb-2">{item.title}</h4>
                <p className="text-sm text-[#6B7280]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Partner with NMF Global Services for your business needs"
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#00AEEF]" />
                </div>
                <p className="text-white font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-blue mb-4">Global Reach</span>
              <h2 className="mb-6">Worldwide Delivery Capability</h2>
              <p className="text-[#6B7280] text-lg mb-6 leading-relaxed">
                With clients spanning multiple continents, we have developed robust
                infrastructure and processes to deliver consistent, high-quality
                services regardless of time zones or geographic boundaries.
              </p>
              <ul className="space-y-4">
                {[
                  "Round-the-clock operations across multiple time zones",
                  "Multilingual support capabilities",
                  "Secure data transfer and communication protocols",
                  "Local compliance understanding for different regions",
                  "Scalable resources to meet growing demands",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-[#00AEEF] flex-shrink-0" />
                    <span className="text-[#6B7280]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-[#F5F9FF] rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0F2D5C] mb-1">24/7</div>
                    <p className="text-sm text-[#6B7280]">Operations</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0F2D5C] mb-1">10+</div>
                    <p className="text-sm text-[#6B7280]">Languages</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0F2D5C] mb-1">15+</div>
                    <p className="text-sm text-[#6B7280]">Industries</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0F2D5C] mb-1">99%</div>
                    <p className="text-sm text-[#6B7280]">Retention</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#00AEEF]/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Partner with Us?"
        description="Let us help you streamline your operations and achieve your business goals."
        buttonText="Get Started"
        buttonHref="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonHref="/services"
      />
    </>
  );
}
