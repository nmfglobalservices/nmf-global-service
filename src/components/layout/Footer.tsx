import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, Globe, MapPin } from "lucide-react";

const services = [
  { href: "/services#healthcare", label: "Healthcare Support" },
  { href: "/services#transcription", label: "Medical Transcription" },
  { href: "/services#billing", label: "Medical Billing" },
  { href: "/services#analytics", label: "Power BI Analytics" },
  { href: "/services#it", label: "IT Services" },
  { href: "/services#back-office", label: "Back-Office Support" },
];

const company = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/power-bi", label: "Power BI" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[#173B62] bg-[#061A2F] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(0,174,239,0.14),_transparent_30%)]" />
      <div className="absolute -right-10 top-16 h-52 w-52 rounded-full border border-cyan-400/10" />
      <div className="absolute -right-20 top-28 h-72 w-72 rounded-full border border-cyan-400/10" />
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.02),transparent_20%,transparent_80%,rgba(255,255,255,0.02))]" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 py-12 md:py-14 lg:py-16">
          <div className="mb-10 flex flex-col gap-6 border-b border-white/10 pb-8 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-10 md:pb-10">
            <div className="max-w-2xl">
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#7EE0FF] sm:text-[0.72rem]">
                Start a conversation
              </p>
              <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-4xl lg:text-[3.2rem]">
                Better operations begin with a clear next step.
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 border border-cyan-300/80 bg-white/[0.02] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(126,224,255,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7EE0FF] hover:bg-[#7EE0FF]/10 hover:text-[#DFFBFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7EE0FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A2F]"
            >
              Talk to our team
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.25fr_0.8fr_0.9fr_1.2fr] xl:gap-12">
            <div className="xl:pr-6">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_0_22px_rgba(20,199,188,0.28)] transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/nmf-logo.png"
                    alt="NMF Global Services logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="text-[1.75rem] font-bold tracking-[-0.05em] text-white">
                  NMF Global Services
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 border-l-2 border-[#14B8A6] pl-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#CFEFFF] sm:text-[0.72rem]">
                Global solutions. Trusted results.
              </div>

              <p className="mt-6 max-w-sm text-[0.98rem] leading-7 text-slate-300">
                Empowering healthcare and businesses worldwide with reliable IT,
                outsourcing, and data analytics solutions.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#7EE0FF]">
                Company
              </h4>
              <ul className="space-y-3.5">
                {company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-[0.98rem] text-slate-300 transition-all duration-300 hover:-translate-x-1 hover:text-white"
                    >
                      <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#7EE0FF] after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#7EE0FF]">
                Services
              </h4>
              <ul className="space-y-3.5">
                {services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-[0.98rem] text-slate-300 transition-all duration-300 hover:-translate-x-1 hover:text-white"
                    >
                      <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#7EE0FF] after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#7EE0FF]">
                Contact Us
              </h4>
              <ul className="space-y-3.5">
                <li className="group flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.015] p-3 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.03]">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0D2340] text-[#7EE0FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 group-hover:scale-105">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 text-[0.98rem] leading-6 text-slate-200">
                    <p className="font-medium text-white">NMF Global Services</p>
                    <a
                      href="https://maps.app.goo.gl/g1xULUeANEczAUpb7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-pre-line transition-colors duration-300 hover:text-[#7EE0FF]"
                    >
                      No. 16/39 Puransamedu 2nd Street,
                      {"\n"}Hakeem Nagar, Rasathupuram,
                      {"\n"}Melvisharam - 632509
                    </a>
                  </div>
                </li>

                <li className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.015] p-3 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.03]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0D2340] text-[#7EE0FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 group-hover:scale-105">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a
                    href="tel:+917339245833"
                    className="text-[0.98rem] text-slate-200 transition-colors duration-300 hover:text-[#7EE0FF]"
                  >
                    +91 7339245833
                  </a>
                </li>

                <li className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.015] p-3 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.03]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0D2340] text-[#7EE0FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 group-hover:scale-105">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a
                    href="mailto:info@nmfglobalservices.com"
                    className="break-all text-[0.98rem] text-slate-200 transition-colors duration-300 hover:text-[#7EE0FF]"
                  >
                    info@nmfglobalservices.com
                  </a>
                </li>

                <li className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.015] p-3 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.03]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0D2340] text-[#7EE0FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 group-hover:scale-105">
                    <Globe className="h-4 w-4" />
                  </div>
                  <a
                    href="https://www.nmfglobalservices.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-[0.98rem] text-slate-200 transition-colors duration-300 hover:text-[#7EE0FF]"
                  >
                    www.nmfglobalservices.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#041A2E]">
        <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 md:py-5 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-[0.72rem] text-slate-400 sm:text-sm">
              © 2026 NMF Global Services. All Rights Reserved.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
              {legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.72rem] text-slate-400 transition-colors duration-300 hover:text-white sm:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
