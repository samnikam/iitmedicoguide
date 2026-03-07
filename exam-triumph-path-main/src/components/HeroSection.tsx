import { ReactNode } from "react";

interface HeroSectionProps {
  bgImage: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
  compact?: boolean;
  hideSubtitleOnLaptop?: boolean;
}

const HeroSection = ({ bgImage, title, subtitle, children, compact, hideSubtitleOnLaptop }: HeroSectionProps) => (
  <section
    className={`relative flex items-center justify-center bg-cover bg-center ${compact
      ? "min-h-[160px] py-6 md:py-10"
      : "min-h-[350px] py-16 md:py-24"
      }`}
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-navy/85 to-navy-deep/75" />
    <div className="relative z-10 container mx-auto px-4 text-center text-navy-foreground">
      <h1 className={`font-heading font-bold mb-3 animate-fade-in-up ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl lg:text-6xl mb-4"}`}>
        {title}
      </h1>
      <p className={`mx-auto max-w-2xl opacity-90 animate-fade-in-up-delay-1 ${compact ? "text-base md:text-lg" : "text-lg md:text-xl"} ${hideSubtitleOnLaptop ? "md:hidden lg:hidden" : ""}`}>
        {subtitle}
      </p>
      {children && <div className="mt-6 animate-fade-in-up-delay-2">{children}</div>}
    </div>
  </section>
);

export default HeroSection;
