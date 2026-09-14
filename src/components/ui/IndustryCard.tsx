"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  services?: string[];
  index?: number;
}

export default function IndustryCard({
  icon: Icon,
  title,
  description,
  services = [],
  index = 0,
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card text-center group hover:border-[#00AEEF] border-2 border-transparent"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F2D5C] to-[#0084FF] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-[#0F2D5C] mb-2">{title}</h3>
      <p className="text-[#6B7280] text-sm mb-4">{description}</p>
      {services.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {services.slice(0, 3).map((service, i) => (
            <span
              key={i}
              className="text-xs bg-[#F5F9FF] text-[#0F2D5C] px-3 py-1 rounded-full"
            >
              {service}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
