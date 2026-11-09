"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Briefcase,
  Building2,
  Home,
  Info,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/industries", label: "Industries", icon: Building2 },
  { href: "/power-bi", label: "Power BI", icon: BarChart3 },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname]);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white"
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <Image
              src="/nmf-logo.png"
              alt="NMF Global Services logo"
              width={40}
              height={40}
              className="h-9 w-9 rounded-lg object-contain sm:h-10 sm:w-10"
              priority
            />
            <div className="flex flex-col">
              <span className="truncate font-bold text-base text-[#0F2D5C] leading-tight sm:text-lg">
                NMF Global Services
              </span>
              <span className="text-xs text-[#00AEEF] hidden sm:block">
                Global Solutions. Trusted Results.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                scroll={false}
                onClick={handleNavClick}
                className={`font-medium text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[#00AEEF]"
                    : "text-[#0F2D5C] hover:text-[#00AEEF]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917339245833"
              className="flex items-center gap-2 text-[#0F2D5C] font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>+91 7339245833</span>
            </a>
            <Link href="/contact" className="btn btn-primary">
              Get a Quote
            </Link>
          </div>

          <a
            href="tel:+917339245833"
            className="lg:hidden rounded-xl p-2 text-[#0F2D5C]"
            aria-label="Call NMF Global Services"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-[0_-4px_16px_rgba(15,45,92,0.08)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex h-16 items-stretch">
        {navLinks.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            prefetch
            scroll={false}
            onClick={handleNavClick}
            aria-current={pathname === href ? "page" : undefined}
            className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-0.5 text-[10px] font-medium transition-colors ${
              pathname === href ? "text-[#00AEEF]" : "text-[#0F2D5C]"
            }`}
          >
            <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span className="truncate">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
    </>
  );
}
