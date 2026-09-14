import { db } from "./index";
import { users, services, testimonials, inquiries } from "./schema";

async function seed() {
  console.log("🌱 Seeding database...");

  // Create admin user
  console.log("Creating admin user...");
  await db.insert(users).values({
    name: "Admin",
    email: "admin@nmfglobalservices.com",
    password: "admin123", // In production, this should be hashed
    role: "admin",
  });

  // Create services
  console.log("Creating services...");
  const servicesData = [
    {
      title: "Medical Transcription",
      slug: "medical-transcription",
      category: "healthcare" as const,
      description: "Accurate and timely medical transcription services for healthcare providers, clinics, and hospitals. Our expert transcriptionists deliver 99% accuracy with fast turnaround times.",
      features: ["99% accuracy rate", "Fast 24-48 hour turnaround", "HIPAA-aware data handling", "Multiple medical specialties"],
      icon: "file-text",
      active: true,
      order: 1,
    },
    {
      title: "Medical Billing Support",
      slug: "medical-billing-support",
      category: "healthcare" as const,
      description: "Comprehensive medical billing and coding services to optimize your revenue cycle management.",
      features: ["Medical coding (CPT, ICD-10)", "Claims submission", "Denial management", "Revenue optimization"],
      icon: "receipt",
      active: true,
      order: 2,
    },
    {
      title: "Healthcare Data Entry & Management",
      slug: "healthcare-data-entry",
      category: "healthcare" as const,
      description: "Efficient healthcare data entry and management solutions for accurate record keeping.",
      features: ["EHR data entry", "Medical records", "Patient registration", "Quality verification"],
      icon: "database",
      active: true,
      order: 3,
    },
    {
      title: "Data Analytics & Reporting",
      slug: "data-analytics-reporting",
      category: "data_analytics" as const,
      description: "Transform your raw data into actionable insights with our comprehensive analytics solutions.",
      features: ["Custom dashboards", "Trend analysis", "KPI tracking", "Automated reports"],
      icon: "bar-chart",
      active: true,
      order: 4,
    },
    {
      title: "Power BI Dashboards",
      slug: "power-bi-dashboards",
      category: "data_analytics" as const,
      description: "Interactive Power BI visualizations that transform complex data into clear insights.",
      features: ["Real-time data", "Custom visualizations", "Mobile-responsive", "Easy integration"],
      icon: "pie-chart",
      active: true,
      order: 5,
    },
    {
      title: "IT & Technical Support",
      slug: "it-technical-support",
      category: "it_support" as const,
      description: "Reliable IT support services to keep your business running smoothly.",
      features: ["24/7 helpdesk", "Network management", "Security monitoring", "Remote support"],
      icon: "monitor",
      active: true,
      order: 6,
    },
    {
      title: "Website Development",
      slug: "website-development",
      category: "it_support" as const,
      description: "Custom website development services for businesses of all sizes.",
      features: ["Custom design", "Responsive", "SEO optimized", "CMS integration"],
      icon: "briefcase",
      active: true,
      order: 7,
    },
    {
      title: "Back-Office & Administrative Support",
      slug: "back-office-support",
      category: "back_office" as const,
      description: "Comprehensive back-office and administrative support for operational efficiency.",
      features: ["Data processing", "Customer support", "Lead generation", "Virtual assistants"],
      icon: "settings",
      active: true,
      order: 8,
    },
    {
      title: "Healthcare Analytics",
      slug: "healthcare-analytics",
      category: "data_analytics" as const,
      description: "Specialized analytics for healthcare organizations to improve patient outcomes.",
      features: ["Patient analytics", "Population health", "Clinical data", "Operational metrics"],
      icon: "users",
      active: true,
      order: 9,
    },
  ];

  for (const service of servicesData) {
    await db.insert(services).values(service);
  }

  // Create sample testimonials
  console.log("Creating testimonials...");
  const testimonialsData = [
    {
      clientName: "Dr. Sarah Mitchell",
      company: "Mitchell Healthcare",
      industry: "Healthcare",
      testimonial: "NMF Global Services has been instrumental in streamlining our medical transcription workflow. Their accuracy and turnaround time are exceptional. Highly recommended!",
      rating: 5,
      active: true,
      featured: true,
    },
    {
      clientName: "James Wilson",
      company: "Global Finance Corp",
      industry: "Finance",
      testimonial: "Professional, reliable, and cost-effective. The Power BI dashboards they created have transformed how we visualize our key metrics.",
      rating: 5,
      active: true,
      featured: false,
    },
    {
      clientName: "Amanda Chen",
      company: "MedTech Solutions",
      industry: "Healthcare Technology",
      testimonial: "Their healthcare BPO services have helped us reduce operational costs by 40% while maintaining quality standards.",
      rating: 5,
      active: true,
      featured: false,
    },
  ];

  for (const testimonial of testimonialsData) {
    await db.insert(testimonials).values(testimonial);
  }

  // Create sample inquiries
  console.log("Creating sample inquiries...");
  const inquiriesData = [
    {
      fullName: "Sarah Mitchell",
      companyName: "Mitchell Healthcare",
      email: "sarah@healthcare.com",
      phone: "+1 555-0123",
      serviceRequired: "Medical Transcription",
      projectDetails: "We need transcription services for our clinic. Approximately 100 reports per week.",
      status: "new" as const,
    },
    {
      fullName: "James Wilson",
      companyName: "Global Finance Corp",
      email: "james@finance.com",
      phone: "+1 555-0456",
      serviceRequired: "Power BI & Data Analytics",
      projectDetails: "Looking for help with financial reporting dashboards.",
      status: "contacted" as const,
    },
    {
      fullName: "Amanda Chen",
      companyName: "MedTech Solutions",
      email: "amanda@techstartup.io",
      serviceRequired: "IT Support",
      projectDetails: "Need ongoing IT support for our startup.",
      status: "in_progress" as const,
    },
  ];

  for (const inquiry of inquiriesData) {
    await db.insert(inquiries).values(inquiry);
  }

  console.log("✅ Seeding complete!");
  console.log("\n📋 Admin credentials:");
  console.log("   Email: admin@nmfglobalservices.com");
  console.log("   Password: admin123");
}

seed()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
