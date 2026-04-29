"use client";
import { Link } from "@/lib/router-shim";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";







import Image from "next/image";
import bgOffer from "@/assets/bg-offer-section.jpg";
import cncInside from "@/assets/cnc-inside.jpg";
import vmcAction from "@/assets/vmc-action.jpg";
import products1 from "@/assets/products1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const WhatWeOffer = () => {
  const { t } = useTranslation();

  const capabilities = [
    { image: cncInside, title: t("offer.cap1Title"), subtitle: t("offer.cap1Subtitle"), description: t("offer.cap1Desc"), link: "/cnc-machining-services" },
    { image: vmcAction, title: t("offer.cap2Title"), subtitle: t("offer.cap2Subtitle"), description: t("offer.cap2Desc"), link: "/about" },
    { image: products1, title: t("offer.cap3Title"), subtitle: t("offer.cap3Subtitle"), description: t("offer.cap3Desc"), link: "/5-axis-machining-services" },
    { image: gallery1, title: t("offer.cap4Title"), subtitle: t("offer.cap4Subtitle"), description: t("offer.cap4Desc"), link: "/infrastructure" },
    { image: gallery2, title: t("offer.cap5Title"), subtitle: t("offer.cap5Subtitle"), description: t("offer.cap5Desc"), link: "/quality-assurance" },
    { image: gallery3, title: t("offer.cap6Title"), subtitle: t("offer.cap6Subtitle"), description: t("offer.cap6Desc"), link: "/products" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/bg-offer-section.jpg" alt="Our CNC machining services and manufacturing capabilities" className="object-cover" loading="lazy" fill />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-12 lg:px-20">
          <AnimatedContainer animation="fade-up" className="text-center mb-12 md:mb-16">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              {t("offer.tag")}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              {t("offer.title")}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
              {t("offer.subtitle")}
            </p>
          </AnimatedContainer>

          {/* Grid layout - clean, modern cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {capabilities.map((cap, index) => (
              <AnimatedContainer key={index} animation="fade-up" delay={index * 80}>
                <Link
                  to={cap.link}
                  className="group relative block rounded-2xl overflow-hidden h-[320px] md:h-[380px] shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {/* Image */}
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" fill
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--foreground))] via-[hsl(var(--foreground)/0.3)] to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Number watermark */}
                  <div className="absolute top-4 right-5">
                    <span className="text-5xl md:text-6xl font-black text-background/[0.07] group-hover:text-primary/20 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform transition-transform duration-500">
                    <span className="inline-block text-primary text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] mb-2">
                      {cap.subtitle}
                    </span>
                    <h3 className="text-background text-base md:text-lg font-bold mb-2 leading-tight">
                      {cap.title}
                    </h3>
                    <p className="text-background/60 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {cap.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;