"use client";
import { Car, Landmark, HeartPulse, ShoppingCart, Factory, Truck, Plane, Droplets, Zap, Cog } from "lucide-react";
import { useTranslation } from "react-i18next";

import Image from "next/image";
const ClientsSection = () => {
  const { t } = useTranslation();

  const industries = [
    { name: t("clients.automotive"), icon: Car, color: "190 60% 50%" },
    { name: t("clients.aerospace"), icon: Plane, color: "220 70% 55%" },
    { name: t("clients.healthcare"), icon: HeartPulse, color: "340 65% 55%" },
    { name: t("clients.oilGas"), icon: Droplets, color: "200 75% 45%" },
    { name: t("clients.manufacturing"), icon: Factory, color: "160 50% 45%" },
    { name: t("clients.energy"), icon: Zap, color: "45 85% 55%" },
    { name: t("clients.defence"), icon: Landmark, color: "260 50% 55%" },
    { name: t("clients.logistics"), icon: Truck, color: "25 70% 50%" },
    { name: t("clients.robotics"), icon: Cog, color: "170 60% 45%" },
    { name: t("clients.retail"), icon: ShoppingCart, color: "280 55% 55%" },
  ];

  const scrollIndustries = [...industries, ...industries, ...industries];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/bg-offer-section.jpg" alt="Patel Precision clients and industry partnerships" fill className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-background/15" />
          <h2 className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-background/80 whitespace-nowrap">
            {t("clients.title")}
          </h2>
          <div className="h-px flex-1 bg-background/15" />
        </div>

        <div className="overflow-hidden industries-carousel">
          <div className="flex gap-4 md:gap-5 animate-scroll-industries" style={{ width: 'fit-content' }}>
            {scrollIndustries.map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3 px-5 py-4 bg-background/8 backdrop-blur-sm rounded-xl border border-background/12 hover:border-background/30 hover:bg-background/15 transition-all duration-300 group"
              >
                <div 
                  className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `hsla(${industry.color}, 0.2)` }}
                >
                  <industry.icon 
                    className="w-5 h-5 transition-all duration-300 group-hover:scale-110" 
                    style={{ color: `hsl(${industry.color})` }}
                  />
                </div>
                <span className="text-sm font-medium text-background/90 whitespace-nowrap">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollIndustries {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-industries {
          animation: scrollIndustries 35s linear infinite;
        }
        .industries-carousel:hover .animate-scroll-industries {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;