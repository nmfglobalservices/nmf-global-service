"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatsCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
  index?: number;
}

export default function StatsCard({
  value,
  label,
  icon: Icon,
  index = 0,
}: StatsCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center p-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-[#00AEEF]" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
      <div className="text-white/70 text-sm md:text-base font-medium">{label}</div>
    </motion.div>
  );
}
