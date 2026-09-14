import { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Table,
  Download,
  LayoutDashboard,
  Filter,
  LineChart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Power BI Healthcare Analytics & Reporting",
  description:
    "Transform your healthcare data into actionable insights with NMF Global Services' Power BI dashboard solutions. Custom dashboards, KPI tracking, and executive reporting.",
};

const features = [
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    description:
      "Tailored dashboard designs that match your specific business requirements and branding.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Data",
    description:
      "Live data connections that update automatically, so you always see the latest insights.",
  },
  {
    icon: Filter,
    title: "Advanced Filtering",
    description:
      "Interactive filters and slicers for drilling down into specific data segments.",
  },
  {
    icon: LineChart,
    title: "Trend Analysis",
    description:
      "Visualize trends over time with interactive line charts and forecasting.",
  },
  {
    icon: PieChart,
    title: "Distribution Charts",
    description:
      "Pie, donut, and treemap visualizations for understanding data distribution.",
  },
  {
    icon: Download,
    title: "Export & Share",
    description:
      "Easy export options and secure sharing capabilities for stakeholders.",
  },
];

const useCases = [
  {
    title: "Executive Dashboard",
    description: "High-level KPIs and metrics for leadership decision-making",
    metrics: ["Revenue", "Growth %", "Targets", "Performance"],
  },
  {
    title: "Sales Analytics",
    description: "Track sales performance, pipeline, and conversion rates",
    metrics: ["Revenue", "Leads", "Conversion", "Win Rate"],
  },
  {
    title: "Healthcare Analytics",
    description: "Patient metrics, operational efficiency, and outcomes",
    metrics: ["Patients", "Readmissions", "Costs", "Satisfaction"],
  },
  {
    title: "Financial Reporting",
    description: "Comprehensive financial metrics and forecasting",
    metrics: ["Revenue", "Expenses", "Profit", "Cash Flow"],
  },
  {
    title: "Operations Dashboard",
    description: "Monitor operational efficiency and resource utilization",
    metrics: ["Throughput", "Efficiency", "Utilization", "Quality"],
  },
  {
    title: "HR Analytics",
    description: "Workforce metrics, retention, and productivity tracking",
    metrics: ["Headcount", "Turnover", "Performance", "Engagement"],
  },
];

export default function PowerBIPage() {
  return (
    <>
      <PageHero
        title="Power BI & Business Intelligence"
        subtitle="Transform raw data into actionable insights with custom Power BI solutions"
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-blue mb-4">Business Intelligence</span>
              <h2 className="mb-6">
                Turn Your Data Into Competitive Advantage
              </h2>
              <p className="text-[#6B7280] text-lg mb-6 leading-relaxed">
                Microsoft Power BI is one of the most powerful business intelligence
                tools available today. We help you harness its full potential to
                create stunning visualizations and actionable insights from your data.
              </p>
              <p className="text-[#6B7280] mb-8 leading-relaxed">
                Whether you need a simple sales dashboard or a complex healthcare
                analytics solution, our team of Power BI experts will design and
                deliver a system that drives real business value.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Request Consultation
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  View All Services
                </Link>
              </div>
            </div>

            {/* Sample Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Dashboard Header */}
                <div className="bg-[#0F2D5C] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wider">
                        Sample Dashboard
                      </p>
                      <h4 className="text-white font-semibold">
                        Healthcare Overview
                      </h4>
                    </div>
                    <span className="badge bg-[#14B8A6] text-white text-xs">
                      Demo Data
                    </span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                  {/* KPI Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#F5F9FF] rounded-lg p-4">
                      <p className="text-xs text-[#6B7280] mb-1">Patients</p>
                      <p className="text-2xl font-bold text-[#0F2D5C]">1,247</p>
                      <p className="text-xs text-[#14B8A6]">+12%</p>
                    </div>
                    <div className="bg-[#F5F9FF] rounded-lg p-4">
                      <p className="text-xs text-[#6B7280] mb-1">Admissions</p>
                      <p className="text-2xl font-bold text-[#0F2D5C]">89</p>
                      <p className="text-xs text-[#14B8A6]">+8%</p>
                    </div>
                    <div className="bg-[#F5F9FF] rounded-lg p-4">
                      <p className="text-xs text-[#6B7280] mb-1">Satisfaction</p>
                      <p className="text-2xl font-bold text-[#0F2D5C]">94%</p>
                      <p className="text-xs text-[#14B8A6]">+3%</p>
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="bg-[#F5F9FF] rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium text-[#0F2D5C] mb-3">
                      Monthly Admissions
                    </p>
                    <div className="flex items-end gap-2 h-24">
                      {[60, 75, 45, 90, 80, 95, 70].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 gradient-bg rounded-t"
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

                  {/* Pie Chart Placeholder */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F5F9FF] rounded-lg p-4">
                      <p className="text-xs font-medium text-[#0F2D5C] mb-2">
                        Department
                      </p>
                      <div className="flex gap-1">
                        <div className="w-1/3 h-8 bg-[#0F2D5C] rounded-l" />
                        <div className="w-1/3 h-8 bg-[#00AEEF]" />
                        <div className="w-1/3 h-8 bg-[#14B8A6] rounded-r" />
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-[#6B7280]">
                        <span>ER</span>
                        <span>ICU</span>
                        <span>Ward</span>
                      </div>
                    </div>
                    <div className="bg-[#F5F9FF] rounded-lg p-4">
                      <p className="text-xs font-medium text-[#0F2D5C] mb-2">
                        Status
                      </p>
                      <div className="flex gap-1">
                        <div className="w-1/2 h-8 bg-[#14B8A6] rounded-l" />
                        <div className="w-1/4 h-8 bg-[#00AEEF]" />
                        <div className="w-1/4 h-8 bg-[#0F2D5C] rounded-r" />
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-[#6B7280]">
                        <span>Active</span>
                        <span>Dis.</span>
                        <span>Trans.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#00AEEF]/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#F5F9FF]">
        <div className="container">
          <SectionHeading
            title="Power BI Features & Capabilities"
            subtitle="We create powerful, interactive dashboards tailored to your needs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#0F2D5C] mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-[#6B7280]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading
            title="Dashboard Solutions"
            subtitle="We create dashboards for various business needs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="bg-[#F5F9FF] rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-[#00AEEF]/20"
              >
                <h4 className="font-semibold text-[#0F2D5C] mb-2">
                  {useCase.title}
                </h4>
                <p className="text-sm text-[#6B7280] mb-4">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="text-xs bg-white text-[#0F2D5C] px-3 py-1 rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <SectionHeading
            title="Our Process"
            subtitle="From data to decisions in four simple steps"
            light
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your data sources and understand your requirements",
              },
              {
                step: "02",
                title: "Design",
                description: "We create mockups and design the dashboard layout",
              },
              {
                step: "03",
                title: "Develop",
                description: "We build and test the Power BI solution",
              },
              {
                step: "04",
                title: "Deploy",
                description: "We deploy, train your team, and provide ongoing support",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
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
              <h2 className="mb-6">Why Power BI?</h2>
              <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
                Microsoft Power BI is a leading business intelligence platform that
                transforms data into insights. Here&apos;s why organizations choose it:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Industry-Leading Platform",
                    description: "Trusted by thousands of organizations worldwide",
                  },
                  {
                    title: "Seamless Integration",
                    description: "Connects with Excel, Azure, and 100+ data sources",
                  },
                  {
                    title: "Powerful Visualization",
                    description: "Create stunning, interactive reports and dashboards",
                  },
                  {
                    title: "Affordable Pricing",
                    description: "Cost-effective solution with flexible licensing",
                  },
                  {
                    title: "Cloud & On-Premises",
                    description: "Deploy in the cloud or on your own infrastructure",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#14B8A6] flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-[#0F2D5C]">{item.title}</h4>
                      <p className="text-sm text-[#6B7280]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F5F9FF] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#0F2D5C] mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-[#6B7280] mb-6">
                Contact us for a free consultation and discover how Power BI can
                transform your business intelligence.
              </p>
              <Link href="/contact" className="btn btn-primary w-full">
                Request Power BI Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Data?"
        description="Let's discuss how our Power BI solutions can help you make better decisions."
        buttonText="Get Started"
        buttonHref="/contact"
        secondaryButtonText="View Healthcare Services"
        secondaryButtonHref="/services"
      />
    </>
  );
}
