"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
  href = "/contact",
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="card group h-full flex flex-col"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00AEEF]/10 to-[#14B8A6]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-[#00AEEF]" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-[#0F2D5C] mb-3">{title}</h3>
      <p className="text-[#6B7280] text-sm mb-4 flex-grow">{description}</p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-5">
          {features.slice(0, 4).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#6B7280]">
              <svg
                className="w-4 h-4 text-[#14B8A6] mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-[#00AEEF] font-semibold text-sm hover:gap-3 transition-all group/btn"
      >
        Learn More
        <svg
          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
