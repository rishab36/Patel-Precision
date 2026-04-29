
"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";

import { Car, Plane, HeartPulse, Droplets, Factory, Zap, Landmark, Truck, Cog, ShoppingCart } from "lucide-react";

import Image from "next/image";
const industries = [
  { icon: Car, name: "Automotive", desc: "Precision machined components for engine parts, transmission systems, braking assemblies, and powertrain applications with CpK > 1.6 capability." },
  { icon: Plane, name: "Aerospace & Defence", desc: "High-precision parts manufactured to stringent aerospace standards — aircraft components, defence equipment parts, and satellite hardware." },
  { icon: HeartPulse, name: "Medical & Healthcare", desc: "Surgical instrument components, medical device housings, and implant-grade parts manufactured in controlled environments." },
  { icon: Droplets, name: "Oil & Gas", desc: "Valve bodies, pipe fittings, compressor components, and downhole equipment built to withstand extreme conditions." },
  { icon: Factory, name: "General Engineering", desc: "Custom machined components for industrial machinery, tooling, jigs, fixtures, and general engineering applications." },
  { icon: Zap, name: "Energy & Power", desc: "Turbine components, generator parts, transformer fittings, and renewable energy equipment with high reliability." },
  { icon: Landmark, name: "Construction & Infrastructure", desc: "Heavy-duty fasteners, structural fittings, cable glands, and junction boxes for large-scale construction projects." },
  { icon: Truck, name: "Logistics & Transportation", desc: "Rollers, axle components, coupling mechanisms, and conveyor parts for logistics and material handling systems." },
  { icon: Cog, name: "Robotics & Automation", desc: "High-tolerance components for robotic arms, actuators, servo mounts, and automated production line equipment." },
  { icon: ShoppingCart, name: "Consumer Products", desc: "Precision hardware, appliance components, and decorative fittings for the consumer goods industry." },
];

const IndustriesServed = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Industries Served - Precision CNC Machining" description="Patel Precision serves 10+ industries including automotive, aerospace, medical, oil & gas with precision CNC machined components." keywords="CNC machining industries, precision parts automotive, aerospace machining, medical machining" path="/industries-served" breadcrumbs={[{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }, { name: "Industries Served", url: "/industries-served" }]} />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-[280px] md:h-[380px] overflow-hidden">
          <Image src="/about-hero.jpg" alt="Industries served by Patel Precision precision machining" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">{t("industriesPage.heroTag")}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">{t("industriesPage.heroTitle")}</h1>
                <p className="text-background/80 text-base md:text-lg">{t("industriesPage.heroDesc")}</p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-14 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Serving Diverse Industrial Sectors</h2>
              <p className="text-muted-foreground">With 25+ years of multi-industry experience, we understand the unique requirements, tolerances, and quality standards demanded by each sector.</p>
            </AnimatedContainer>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              {industries.map((ind, index) => (
                <AnimatedContainer key={ind.name} animation="fade-up" delay={index * 80}>
                  <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ind.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1.5">{ind.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                    </div>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default IndustriesServed;
