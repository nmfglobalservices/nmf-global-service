interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`mb-4 ${light ? "text-white" : "text-[#0F2D5C]"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto ${
            light ? "text-white/80" : "text-[#6B7280]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
