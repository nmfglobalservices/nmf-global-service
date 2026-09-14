interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgGradient?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  bgGradient = true,
}: PageHeroProps) {
  return (
    <section
      className={`py-20 md:py-28 ${
        bgGradient
          ? "bg-gradient-to-br from-[#0F2D5C] via-[#0084FF] to-[#14B8A6]"
          : "bg-[#0F2D5C]"
      }`}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-white/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
