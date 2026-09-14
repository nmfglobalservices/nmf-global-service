"use client";

import Link from "next/link";
import {
  FileText,
  Receipt,
  Database,
  BarChart3,
  PieChart,
  Monitor,
  Briefcase,
  Settings,
  UsersRound,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

const healthcareServices = [
  {
    icon: FileText,
    title: "Medical Transcription",
    description:
      "Accurate and timely medical transcription services for healthcare providers, clinics, and hospitals. Our expert transcriptionists deliver 99% accuracy with fast turnaround times.",
    features: [
      "99% accuracy rate",
      "Fast 24-48 hour turnaround",
      "HIPAA-aware data handling",
      "Multiple medical specialties",
      "Digital voice recorder support",
      "Secure file transfer",
    ],
  },
  {
    icon: Receipt,
    title: "Medical Billing Support",
    description:
      "Comprehensive medical billing and coding services to optimize your revenue cycle management. We help reduce claim denials and accelerate reimbursement.",
    features: [
      "Medical coding (CPT, ICD-10, HCPCS)",
      "Claims submission and follow-up",
      "Denial management",
      "Revenue cycle optimization",
      "Insurance verification",
      "Compliance assurance",
    ],
  },
  {
    icon: Database,
    title: "Healthcare Data Entry & Management",
    description:
      "Efficient healthcare data entry and management solutions for accurate record keeping. We handle EHR data entry, medical records, and patient registration.",
    features: [
      "EHR/EMR data entry",
      "Medical records digitization",
      "Patient registration data",
      "Insurance data entry",
      "Quality verification",
      "Data migration services",
    ],
  },
];

const dataServices = [
  {
    icon: BarChart3,
    title: "Data Analytics & Reporting",
    description:
      "Transform your raw data into actionable insights with our comprehensive analytics solutions. We help you make data-driven decisions that drive business growth.",
    features: [
      "Custom dashboard development",
      "Trend analysis and forecasting",
      "KPI tracking and monitoring",
      "Automated reporting systems",
      "Data visualization",
      "Business intelligence",
    ],
  },
  {
    icon: PieChart,
    title: "Power BI Dashboards",
    description:
      "Interactive Power BI visualizations that transform complex data into clear, actionable insights. We create custom dashboards tailored to your business needs.",
    features: [
      "Real-time data integration",
      "Custom visualizations",
      "Mobile-responsive dashboards",
      "Easy data source integration",
      "Drill-down capabilities",
      "Automated data refresh",
    ],
  },
  {
    icon: UsersRound,
    title: "Healthcare Analytics",
    description:
      "Specialized analytics for healthcare organizations to improve patient outcomes and operational efficiency. Gain insights into clinical and administrative data.",
    features: [
      "Patient outcome analysis",
      "Population health analytics",
      "Clinical data analysis",
      "Operational metrics",
      "Resource utilization",
      "Quality reporting",
    ],
  },
];

const itServices = [
  {
    icon: Monitor,
    title: "IT & Technical Support",
    description:
      "Reliable IT support services to keep your business running smoothly. Our team provides comprehensive technical support and managed IT services.",
    features: [
      "24/7 helpdesk support",
      "Network management",
      "Security monitoring",
      "Remote desktop support",
      "Hardware management",
      "Software installation",
    ],
  },
  {
    icon: Briefcase,
    title: "Website Development",
    description:
      "Custom website development services for businesses of all sizes. We create responsive, SEO-optimized websites that drive engagement and conversions.",
    features: [
      "Custom website design",
      "Responsive development",
      "E-commerce solutions",
      "CMS integration",
      "SEO optimization",
      "Website maintenance",
    ],
  },
  {
    icon: Settings,
    title: "Back-Office & Administrative Support",
    description:
      "Comprehensive back-office and administrative support to improve your operational efficiency. Focus on your core business while we handle the rest.",
    features: [
      "Data processing and entry",
      "Customer support services",
      "Lead generation",
      "Virtual assistant services",
      "Document management",
      "Email management",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive healthcare, IT, and business support solutions tailored to your needs"
      />

      {/* Healthcare Services */}
      <section className="py-20 bg-white" id="healthcare">
        <div className="container">
          <SectionHeading
            title="Healthcare Services"
            subtitle="Professional healthcare support solutions for medical organizations"
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Data & Analytics */}
      <section className="py-20 bg-[#F5F9FF]" id="analytics">
        <div className="container">
          <SectionHeading
            title="Data & Business Intelligence"
            subtitle="Transform data into actionable insights for better decision-making"
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {dataServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* IT & Business Support */}
      <section className="py-20 bg-white" id="it-support">
        <div className="container">
          <SectionHeading
            title="IT & Business Support"
            subtitle="Complete technology and administrative solutions for your business"
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <SectionHeading
            title="Our Process"
            subtitle="A streamlined approach to delivering exceptional results"
            light
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We understand your requirements and business objectives",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "We develop a tailored solution strategy for your needs",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "We implement the solution with precision and quality",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "We deliver results with ongoing support and optimization",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl font-bold text-white/20 mb-4">
                  {item.step}
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-blue mb-4">Benefits</span>
              <h2 className="mb-6">Why Our Services Make a Difference</h2>
              <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
                Partnering with NMF Global Services means gaining a dedicated team
                committed to your success. Our services are designed to reduce
                costs, improve efficiency, and help you focus on what matters most.
              </p>

              <div className="space-y-4">
                {[
                  "Reduce operational costs by up to 60%",
                  "Access to skilled professionals without hiring overhead",
                  "Scalable resources that grow with your business",
                  "Improved accuracy and faster turnaround times",
                  "Enhanced data security and compliance",
                  "Focus on core business activities",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#14B8A6] flex-shrink-0" />
                    <span className="text-[#6B7280]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F5F9FF] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#0F2D5C] mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-[#6B7280] mb-6">
                Contact us today to discuss your requirements and discover how we
                can help transform your operations.
              </p>
              <Link href="/contact" className="btn btn-primary w-full">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        description="We tailor our services to meet your specific business requirements. Let's discuss how we can help."
        buttonText="Contact Us"
        buttonHref="/contact"
        secondaryButtonText="Learn More About Power BI"
        secondaryButtonHref="/power-bi"
      />
    </>
  );
}
