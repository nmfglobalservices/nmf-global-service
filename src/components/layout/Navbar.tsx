"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/power-bi", label: "Power BI" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setIsOpen(false);
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
    setIsOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname]);

  return (
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-xl p-2 text-[#0F2D5C] transition-colors hover:bg-[#F5F9FF]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 sm:top-20 bg-white/95 backdrop-blur-xl transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                scroll={false}
                onClick={handleNavClick}
                className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#00AEEF]/10 text-[#00AEEF]"
                    : "text-[#0F2D5C] hover:bg-[#F5F9FF]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <a
                href="tel:+917339245833"
                className="flex items-center gap-2 py-3 px-4 text-[#0F2D5C] font-medium"
              >
                <Phone className="w-5 h-5" />
                +91 7339245833
              </a>
              <Link href="/contact" className="btn btn-primary w-full mt-2">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
