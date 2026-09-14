import Link from "next/link";
import SectionHeading from "./SectionHeading";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref = "/services",
}: CTASectionProps) {
  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title={title}
            subtitle={description}
            light
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href={buttonHref} className="btn btn-white text-lg px-8 py-4">
              {buttonText}
            </Link>
            {secondaryButtonText && (
              <Link
                href={secondaryButtonHref}
                className="btn btn-outline-white text-lg px-8 py-4"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
