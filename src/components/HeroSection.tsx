"use client";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-shim";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-[70vh] sm:h-[75vh] md:h-[85vh] min-h-[400px] max-h-[900px] overflow-hidden">
      {/* Video Background — no filter, light video shown as-is */}
      <video
        autoPlay
        loop
        muted
        playsInline
        // @ts-ignore
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/vmc-light.mp4" type="video/mp4" />
      </video>

      {/* Darkening overlay + bottom gradient for readability */}
      <div className="absolute inset-0 bg-foreground/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 md:px-12 h-full flex items-end pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-xl md:max-w-2xl">
          <span className="inline-block text-primary font-medium text-[10px] md:text-xs tracking-[0.25em] uppercase mb-2 md:mb-4 animate-fade-in">
            {t("hero.slide1Subtitle")}
          </span>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-background mb-4 md:mb-8 leading-[1] tracking-tight uppercase animate-fade-in">
            {t("hero.slide1Title")}
          </h1>
          <Button
            asChild
            size="lg"
            className="relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 md:px-10 py-4 md:py-6 text-[11px] md:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-primary/30 group"
          >
            <Link to="/request-quote">
              <span className="relative z-10">{t("hero.requestQuote")}</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-background/20 to-transparent" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;