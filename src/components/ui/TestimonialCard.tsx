"use client";

import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company?: string;
  industry?: string;
  rating?: number;
  featured?: boolean;
}

export default function TestimonialCard({
  quote,
  author,
  company,
  industry,
  rating = 5,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 shadow-lg ${
        featured ? "ring-2 ring-[#00AEEF]" : ""
      }`}
    >
      {/* Quote mark */}
      <svg
        className="absolute top-6 right-6 w-12 h-12 text-[#00AEEF]/10"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-[#FFC107] fill-[#FFC107]" : "text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-[#6B7280] text-lg mb-6 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F2D5C] to-[#00AEEF] flex items-center justify-center text-white font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-[#0F2D5C]">{author}</p>
          {(company || industry) && (
            <p className="text-sm text-[#6B7280]">
              {company}
              {company && industry && " • "}
              {industry}
            </p>
          )}
        </div>
      </div>

      {/* Featured badge */}
      {featured && (
        <span className="absolute -top-3 left-6 badge badge-blue">
          Featured
        </span>
      )}
    </div>
  );
}
