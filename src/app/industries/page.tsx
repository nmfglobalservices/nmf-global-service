"use client";

import Link from "next/link";
import {
  Heart,
  Building,
  DollarSign,
  Factory,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  Rocket,
  Users,
  Pill,
  Stethoscope,
  BarChart3,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import IndustryCard from "@/components/ui/IndustryCard";

interface Industry {
  icon: typeof Heart;
  title: string;
  description: string;
  services: string[];
}

const industries: Industry[] = [
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Comprehensive support for hospitals, clinics, and healthcare organizations. We understand the unique challenges of the healthcare industry.",
    services: [
      "Medical Transcription",
      "Healthcare BPO",
      "EHR Support",
      "Billing & Coding",
    ],
  },
  {
    icon: Building,
    title: "Hospitals",
    description:
      "Large-scale operational support for hospital management and healthcare systems. We help streamline administrative processes.",
    services: [
      "Patient Data Management",
      "Medical Records",
      "Insurance Processing",
      "Reporting",
    ],
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    description:
      "Tailored support services for private clinics and specialty practices. We help you focus on patient care.",
    services: [
      "Scheduling Support",
      "Billing Services",
      "Data Entry",
      "Follow-up Management",
    ],
  },
  {
    icon: Pill,
    title: "Diagnostic Centers",
    description:
      "Specialized services for laboratories and diagnostic imaging centers. Accurate and timely data processing is our specialty.",
    services: [
      "Test Result Entry",
      "Report Generation",
      "Data Analytics",
      "Quality Assurance",
    ],
  },
  {
    icon: Rocket,
    title: "Healthcare Startups",
    description:
      "Cost-effective solutions for emerging healthcare technology companies. Scale your operations efficiently.",
    services: [
      "MVP Support",
      "Data Management",
      "Customer Support",
      "Back-Office",
    ],
  },
  {
    icon: DollarSign,
    title: "Finance",
    description:
      "Data management and analytics support for banks, insurance companies, and financial institutions.",
    services: [
      "Data Entry",
      "Report Generation",
      "Analytics",
      "Process Automation",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Operational support for production facilities and supply chain operations. Improve efficiency and reduce costs.",
    services: [
      "Inventory Management",
      "Quality Control Data",
      "Supply Chain Support",
      "Reporting",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Customer support and back-office solutions for online retailers. Handle orders and inquiries efficiently.",
    services: [
      "Order Processing",
      "Customer Support",
      "Data Entry",
      "Lead Management",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Administrative and data support for educational institutions. Focus on education while we handle the paperwork.",
    services: [
      "Student Data Management",
      "Administrative Support",
      "Report Generation",
      "Research Support",
    ],
  },
  {
    icon: Briefcase,
    title: "Small & Medium Businesses",
    description:
      "Affordable outsourcing solutions for SMBs looking to compete effectively. Access enterprise-grade support.",
    services: [
      "IT Support",
      "Back-Office",
      "Customer Service",
      "Data Management",
    ],
  },
  {
    icon: Users,
    title: "Startups",
    description:
      "Flexible, scalable support for early-stage companies. Focus on growth while we handle operations.",
    services: [
      "Virtual Assistant",
      "Admin Support",
      "Lead Generation",
      "Market Research",
    ],
  },
  {
    icon: BarChart3,
    title: "International Businesses",
    description:
      "Cross-border support with multilingual capabilities. We understand global business requirements.",
    services: [
      "Multilingual Support",
      "Time Zone Coverage",
      "Compliance Management",
      "Global Reporting",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="Tailored solutions for diverse industry requirements across the globe"
      />

      {/* Main Industries */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D5C] mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              We serve a wide range of sectors with customized solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.title}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                services={industry.services}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Focus */}
      <section className="py-20 bg-[#F5F9FF]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-blue mb-4">Healthcare Focus</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D5C] mb-6">
                Specialized Healthcare Support
              </h2>
              <p className="text-[#6B7280] text-lg mb-6 leading-relaxed">
                Healthcare is at the core of our services. We understand the
                critical importance of accuracy, confidentiality, and timely
                delivery in medical operations.
              </p>
              <p className="text-[#6B7280] mb-8 leading-relaxed">
                Our team is trained in healthcare data handling, with HIPAA-aware
                practices and strict quality control measures. Whether you&apos;re a
                small clinic or a large hospital network, we have the expertise to
                support your operations.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Hospitals & Medical Centers",
                  "Private Clinics & Practices",
                  "Diagnostic Laboratories",
                  "Radiology Centers",
                  "Pharmaceutical Companies",
                  "Healthcare IT Firms",
                  "Medical Device Companies",
                  "Healthcare Startups",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#00AEEF]" />
                    <span className="text-sm text-[#6B7280]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#0F2D5C] mb-6">
                Healthcare Services We Provide
              </h3>
              <div className="space-y-4">
                {[
                  {
                    Icon: Stethoscope,
                    title: "Clinical Support",
                    description: "Medical transcription, coding, and documentation",
                  },
                  {
                    Icon: Building,
                    title: "Administrative",
                    description: "Patient registration, scheduling, and records",
                  },
                  {
                    Icon: BarChart3,
                    title: "Analytics",
                    description: "Healthcare analytics and reporting",
                  },
                  {
                    Icon: Users,
                    title: "Customer Service",
                    description: "Patient support and communication",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-[#F5F9FF] rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <service.Icon className="w-5 h-5 text-[#00AEEF]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#0F2D5C]">
                        {service.title}
                      </h4>
                      <p className="text-sm text-[#6B7280]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMB Focus */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0F2D5C] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">60%</div>
                  <p className="text-white/70 text-sm">Cost Savings</p>
                </div>
                <div className="bg-[#00AEEF] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <p className="text-white/70 text-sm">Support</p>
                </div>
                <div className="bg-[#14B8A6] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <p className="text-white/70 text-sm">Clients</p>
                </div>
                <div className="bg-[#0F2D5C] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">99%</div>
                  <p className="text-white/70 text-sm">Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="badge badge-blue mb-4">SMB Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D5C] mb-6">
                Enterprise-Grade Solutions for Everyone
              </h2>
              <p className="text-[#6B7280] text-lg mb-6 leading-relaxed">
                Small and medium businesses deserve the same quality of support as
                large enterprises. We provide affordable, scalable solutions that
                help you compete effectively.
              </p>
              <p className="text-[#6B7280] mb-8 leading-relaxed">
                No matter your size, you get access to skilled professionals,
                cutting-edge technology, and dedicated support. Focus on growing
                your business while we handle the rest.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your Industry?"
        description="We work with businesses across all sectors. Contact us to discuss your specific requirements."
        buttonText="Contact Us"
        buttonHref="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonHref="/services"
      />
    </>
  );
}
