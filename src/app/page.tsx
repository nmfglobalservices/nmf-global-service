"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  Users,
  Headphones,
  Target,
  Shield,
  Clock,
  Globe,
  Zap,
  Lock,
  BarChart3,
  FileText,
  Settings,
  Building,
  Heart,
  Briefcase,
  Database,
  Monitor,
  Mic,
  Receipt,
  PieChart,
  UsersRound,
  ChevronRight,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import IndustryCard from "@/components/ui/IndustryCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import StatsCard from "@/components/ui/StatsCard";
import CTASection from "@/components/ui/CTASection";
import ContactForm from "@/components/ui/ContactForm";

// Sample testimonials - in production, these would come from the database
const testimonials = [
  {
    quote:
      "NMF Global Services has been instrumental in streamlining our medical transcription workflow. Their accuracy and turnaround time are exceptional.",
    author: "Dr. Sarah Mitchell",
    company: "Mitchell Healthcare",
    industry: "Healthcare",
    rating: 5,
  },
  {
    quote:
      "Professional, reliable, and cost-effective. The Power BI dashboards they created have transformed how we visualize our key metrics.",
    author: "James Wilson",
    company: "Global Finance Corp",
    industry: "Finance",
    rating: 5,
  },
  {
    quote:
      "Their healthcare BPO services have helped us reduce operational costs by 40% while maintaining quality standards.",
    author: "Amanda Chen",
    company: "MedTech Solutions",
    industry: "Healthcare Technology",
    rating: 5,
  },
];

const stats = [
  { value: "50+", label: "Team Members", icon: Users },
  { value: "24/7", label: "Support Available", icon: Headphones },
  { value: "99%", label: "Data Accuracy", icon: Target },
  { value: "100%", label: "Client Confidentiality", icon: Shield },
];

const healthcareServices = [
  {
    icon: FileText,
    title: "Medical Transcription",
    description:
      "Accurate and timely medical transcription services for healthcare providers, clinics, and hospitals.",
    features: [
      "99% accuracy rate",
      "Fast turnaround",
      "HIPAA compliant",
      "Multiple specialties",
    ],
  },
  {
    icon: Receipt,
    title: "Medical Billing Support",
    description:
      "Comprehensive medical billing and coding services to optimize revenue cycle management.",
    features: [
      "Claims processing",
      " denial management",
      "Revenue optimization",
      "Compliance assurance",
    ],
  },
  {
    icon: Database,
    title: "Healthcare Data Entry",
    description:
      "Efficient healthcare data entry and management solutions for accurate record keeping.",
    features: [
      "EHR data entry",
      "Medical records",
      "Patient registration",
      "Quality verification",
    ],
  },
];

const dataServices = [
  {
    icon: PieChart,
    title: "Data Analytics & Reporting",
    description:
      "Transform raw data into actionable insights with comprehensive analytics solutions.",
    features: [
      "Custom dashboards",
      "Trend analysis",
      "KPI tracking",
      "Automated reports",
    ],
  },
  {
    icon: BarChart3,
    title: "Power BI Dashboards",
    description:
      "Interactive Power BI visualizations that drive better business decisions.",
    features: [
      "Real-time data",
      "Custom visualizations",
      "Mobile-ready",
      "Easy integration",
    ],
  },
  {
    icon: UsersRound,
    title: "Healthcare Analytics",
    description:
      "Specialized analytics for healthcare organizations to improve patient outcomes.",
    features: [
      "Patient insights",
      "Population health",
      "Clinical analytics",
      "Operational metrics",
    ],
  },
];

const itServices = [
  {
    icon: Monitor,
    title: "IT & Technical Support",
    description:
      "Reliable IT support services to keep your business running smoothly.",
    features: [
      "24/7 helpdesk",
      "Network management",
      "Security monitoring",
      "Remote support",
    ],
  },
  {
    icon: Briefcase,
    title: "Website Development",
    description:
      "Custom website development services for businesses of all sizes.",
    features: [
      "Responsive design",
      "SEO optimized",
      "E-commerce solutions",
      "CMS integration",
    ],
  },
  {
    icon: Settings,
    title: "Back-Office Support",
    description:
      "Comprehensive back-office and administrative support for operational efficiency.",
    features: [
      "Data processing",
      "Customer support",
      "Lead generation",
      "Virtual assistants",
    ],
  },
];

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "Hospitals, clinics, and diagnostic centers",
    services: ["Medical Transcription", "Healthcare BPO", "EHR Support"],
  },
  {
    icon: Building,
    title: "Finance",
    description: "Banking, insurance, and investment firms",
    services: ["Data Analytics", "Reporting", "Process Automation"],
  },
  {
    icon: Database,
    title: "Manufacturing",
    description: "Production and supply chain operations",
    services: ["Power BI", "Inventory Management", "Quality Control"],
  },
  {
    icon: Briefcase,
    title: "E-Commerce",
    description: "Online retail and digital marketplace",
    services: ["Customer Support", "Data Entry", "Analytics"],
  },
  {
    icon: Users,
    title: "Education",
    description: "Schools, universities, and training centers",
    services: ["Data Management", "Reporting", "Administrative Support"],
  },
  {
    icon: Globe,
    title: "SMBs & Startups",
    description: "Small businesses and growing companies",
    services: ["IT Support", "Back-Office", "Lead Generation"],
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Cost-Effective Solutions",
    description: "Reduce operational costs by up to 60% with our efficient processes",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Work with a committed team that understands your business",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security for your sensitive data",
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    description: "Tailored services that fit your specific needs",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Serve customers worldwide with multilingual support",
  },
];

const heroFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const heroFadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function HomePage() {
  const reducedMotion = useReducedMotion();
  const glowX = useSpring(useMotionValue(0), { stiffness: 45, damping: 22 });
  const glowY = useSpring(useMotionValue(0), { stiffness: 45, damping: 22 });

  useEffect(() => {
    if (reducedMotion) return;

    const pointerQuery = window.matchMedia("(pointer: fine)");
    const desktopQuery = window.matchMedia("(min-width: 769px)");
    if (!pointerQuery.matches) return;

    const handlePointerMove = (event: MouseEvent) => {
      const strength = desktopQuery.matches ? 4 : 2;
      glowX.set(((event.clientX / window.innerWidth) - 0.5) * strength);
      glowY.set(((event.clientY / window.innerHeight) - 0.5) * strength);
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, [glowX, glowY, reducedMotion]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative min-h-[90vh] flex items-center gradient-bg overflow-hidden">
        {/* Background Pattern */}
        <div className="hero-pattern absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="hero-glow hero-glow-blue absolute top-20 right-10 w-72 h-72 bg-[#00AEEF]/20 rounded-full blur-3xl"
          style={{ x: glowX, y: glowY }}
        />
        <motion.div
          className="hero-glow hero-glow-teal absolute bottom-20 left-10 w-96 h-96 bg-[#14B8A6]/20 rounded-full blur-3xl"
          style={{ x: glowX, y: glowY }}
        />

        <div className="container hero-content relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              variants={heroFadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="hero-badge inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
            >
                Trusted by Healthcare Organizations Worldwide
            </motion.span>
            <motion.h1
              variants={heroFadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hero-title !text-white mb-6 leading-tight text-[2.35rem] sm:text-[2.75rem] lg:text-[3.5rem]"
            >
                Empowering Healthcare & Businesses with Reliable IT and
                Outsourcing Solutions
            </motion.h1>
            <motion.p
              variants={heroFadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="!text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed"
            >
                Providing Medical Transcription, Healthcare Support, Data
                Analytics, Power BI Reporting, Software Development, Website
                Development, and Back-Office Services Worldwide.
            </motion.p>

              {/* CTA Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.6, staggerChildren: 0.1 }}
              className="hero-ctas flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10"
            >
                <motion.div className="w-full sm:w-auto" variants={heroFadeUp} whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                  href="/contact"
                  className="btn btn-white hero-cta w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4"
                  >Get Free Consultation</Link>
                </motion.div>
                <motion.div className="w-full sm:w-auto" variants={heroFadeUp} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                  <Link
                  href="/services"
                  className="btn btn-outline-white hero-cta w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4"
                  >Request a Quote</Link>
                </motion.div>
                <motion.div className="w-full sm:w-auto" variants={heroFadeUp} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                  <a
                  href="https://wa.me/917339245833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white hero-cta w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4"
                  >Book a Meeting</a>
                </motion.div>
            </motion.div>

              {/* Trust Indicators */}
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.8, staggerChildren: 0.1 }}
              className="flex flex-wrap justify-center gap-6 text-white/70 text-sm"
            >
                {["Reliable", "Secure", "Scalable", "Global"].map((label) => (
                  <motion.span key={label} variants={heroFadeUp} className="flex items-center gap-2">
                    <CheckCircle className="hero-check w-4 h-4 text-[#14B8A6]" />
                    {label}
                  </motion.span>
                ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="hero-scroll-dot w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#0F2D5C]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatsCard key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge badge-blue mb-4">About Us</span>
              <h2 className="mb-6">About NMF Global Services</h2>
              <p className="text-[#6B7280] text-lg mb-6 leading-relaxed">
                NMF Global Services is a professional service provider delivering
                IT and healthcare support services to businesses worldwide.
              </p>
              <p className="text-[#6B7280] mb-8 leading-relaxed">
                We specialize in medical back-office operations, transcription,
                data management, and IT-based solutions designed to improve
                efficiency, reduce workload, and ensure accuracy. Our team of
                experienced professionals is committed to delivering reliable,
                secure, and scalable solutions that help our clients focus on
                their core business objectives.
              </p>
              <Link href="/about" className="btn btn-primary">
                Discover Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square max-w-lg mx-auto relative">
                {/* Decorative gradient background */}
                <div className="absolute inset-0 gradient-bg rounded-3xl opacity-20" />
                <div className="absolute inset-4 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <Image
                      src="/nmf-logo.png"
                      alt="NMF Global Services logo"
                      width={160}
                      height={160}
                      className="mx-auto mb-6 h-32 w-32 object-contain sm:h-40 sm:w-40"
                    />
                    <h3 className="text-2xl font-bold text-[#0F2D5C] mb-2">
                      Global Solutions
                    </h3>
                    <p className="text-[#6B7280]">
                      Serving clients across multiple continents with
                      24/7 support
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="py-20 bg-[#F5F9FF]">
        <div className="container">
          <SectionHeading
            title="Healthcare Services"
            subtitle="Comprehensive healthcare support solutions for modern medical organizations"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Data & Analytics Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading
            title="Data & Business Intelligence"
            subtitle="Transform your data into actionable insights with our analytics solutions"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {dataServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* IT & Business Support */}
      <section className="py-20 bg-[#F5F9FF]">
        <div className="container">
          <SectionHeading
            title="IT & Business Support"
            subtitle="Complete technology and administrative solutions for your business"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
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
            title="Why Choose NMF Global Services?"
            subtitle="Partner with us for reliable, scalable, and cost-effective solutions"
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Tailored solutions for diverse industry requirements"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.title} {...industry} index={index} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/industries" className="btn btn-secondary">
              View All Industries
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Power BI Showcase */}
      <section className="py-20 bg-[#0F2D5C]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge bg-[#00AEEF]/20 text-[#00AEEF] mb-4">
                Power BI Solutions
              </span>
              <h2 className="text-white mb-6">
                Business Intelligence & Reporting
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Transform raw data into actionable insights with our Power BI
                dashboard solutions. We create custom visualizations that help
                you make data-driven decisions faster.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Power BI Dashboards",
                  "KPI Reporting",
                  "Executive Reports",
                  "Sales Analytics",
                  "Healthcare Analytics",
                  "Financial Reporting",
                  "Performance Dashboards",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#14B8A6]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/power-bi" className="btn btn-white">
                Request Power BI Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Sample Dashboard Preview */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-wider">
                      Sample Dashboard
                    </p>
                    <h4 className="text-lg font-semibold text-[#0F2D5C]">
                      Revenue Overview
                    </h4>
                  </div>
                  <span className="badge badge-green">Demo Data</span>
                </div>

                {/* Mini Charts */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#F5F9FF] rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-[#0F2D5C]">$2.4M</p>
                    <p className="text-xs text-[#6B7280]">Revenue</p>
                  </div>
                  <div className="bg-[#F5F9FF] rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-[#14B8A6]">+18%</p>
                    <p className="text-xs text-[#6B7280]">Growth</p>
                  </div>
                  <div className="bg-[#F5F9FF] rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-[#00AEEF]">847</p>
                    <p className="text-xs text-[#6B7280]">Clients</p>
                  </div>
                </div>

                {/* Bar Chart Placeholder */}
                <div className="bg-[#F5F9FF] rounded-lg p-4">
                  <p className="text-sm font-medium text-[#0F2D5C] mb-3">
                    Monthly Performance
                  </p>
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#00AEEF] to-[#14B8A6] rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-[#6B7280]">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#00AEEF]/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Security & Confidentiality"
              subtitle="We understand the importance of protecting sensitive business and healthcare information"
            />

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  icon: Shield,
                  title: "Data Privacy",
                  description:
                    "Enterprise-grade data protection with encryption and secure access controls",
                },
                {
                  icon: Lock,
                  title: "Secure Medical Data Handling",
                  description:
                    "HIPAA-aware data handling practices for all healthcare information",
                },
                {
                  icon: FileText,
                  title: "NDA Support",
                  description:
                    "Non-disclosure agreements available for enhanced confidentiality",
                },
                {
                  icon: Users,
                  title: "Professional Communication",
                  description:
                    "Dedicated project management with secure communication channels",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-[#F5F9FF] rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <item.icon className="w-6 h-6 text-[#00AEEF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2D5C] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B7280]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F5F9FF]">
        <div className="container">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Trusted by healthcare and business organizations worldwide"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <CTASection
        title="Request a Free Consultation"
        description="Tell us your business requirements and our team will provide the most effective and cost-efficient solution."
        buttonText="Get Started"
        buttonHref="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonHref="/services"
      />

      {/* Contact Form Section */}
      <section className="py-20 bg-white" id="contact-form">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge badge-blue mb-4">Contact Us</span>
              <h2 className="mb-4">Let&apos;s Discuss Your Requirements</h2>
              <p className="text-[#6B7280] text-lg mb-8">
                We would be happy to understand your requirements and provide the
                best support solutions tailored to your business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F5F9FF] flex items-center justify-center flex-shrink-0">
                    <Mic className="w-6 h-6 text-[#00AEEF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F2D5C]">
                      Medical Transcription
                    </h4>
                    <p className="text-sm text-[#6B7280]">
                      Fast, accurate transcription services
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F5F9FF] flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-[#00AEEF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F2D5C]">
                      Power BI & Analytics
                    </h4>
                    <p className="text-sm text-[#6B7280]">
                      Data-driven insights for your business
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F5F9FF] flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-[#00AEEF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F2D5C]">
                      IT & Back-Office Support
                    </h4>
                    <p className="text-sm text-[#6B7280]">
                      Complete business process outsourcing
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F9FF] rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-[#0F2D5C] mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
