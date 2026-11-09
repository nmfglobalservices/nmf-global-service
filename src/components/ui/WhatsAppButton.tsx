"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917339245833?text=Hello%20NMF%20Global%20Services,%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group whatsapp-float fixed bottom-20 right-5 z-50 inline-flex items-center justify-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_16px_36px_rgba(37,211,102,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A2F] motion-reduce:transition-none lg:bottom-5"
    >
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute -inset-1 rounded-full border border-[#25D366]/50 opacity-70 animate-pulse" />
      <span className="relative flex h-14 w-14 items-center justify-center sm:h-15 sm:w-15">
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </span>
      <span className="relative hidden items-center overflow-hidden whitespace-nowrap pr-4 text-sm font-semibold sm:inline-flex sm:max-w-0 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:max-w-[160px] sm:group-hover:opacity-100">
        Chat With Us
      </span>
    </a>
  );
}
