
"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";

import { CheckCircle, Target, Settings, Shield, Truck, Users, Lightbulb } from "lucide-react";

import Image from "next/image";
const steps = [
  { icon: Users, title: "Consultation & Understanding", desc: "We begin by thoroughly understanding your requirements, specifications, tolerances, material needs, and application context through detailed technical discussions." },
  { icon: Lightbulb, title: "Design & Engineering Review", desc: "Our engineering team reviews your drawings and designs for manufacturability, suggesting optimizations that improve quality while reducing costs." },
  { icon: Settings, title: "Precision Manufacturing", desc: "Using our advanced CNC machining centers — 3, 4, and 5-axis VMC machines and CNC lathes — we manufacture your components with micron-level accuracy." },
  { icon: Shield, title: "Quality Inspection", desc: "Every component undergoes rigorous inspection using CMM, profile projectors, surface testers, and calibrated gauges to ensure zero-defect quality." },
  { icon: Target, title: "Batch Traceability", desc: "We maintain complete traceability from raw material procurement through every machining operation to final inspection and dispatch." },
  { icon: Truck, title: "On-Time Delivery", desc: "With 24/7 factory operations and lean production practices, we ensure reliable on-time delivery for both small batches and high-volume production runs." },
];

const OurApproach = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Our Approach - Patel Precision" description="Discover Patel Precision's systematic approach to precision CNC machining." keywords="CNC machining approach, precision manufacturing process" path="/our-approach" breadcrumbs={[{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }, { name: "Our Approach", url: "/our-approach" }]} />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-[280px] md:h-[380px] overflow-hidden">
          <Image src="/about-hero.jpg" alt="Patel Precision manufacturing approach and methodology" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">{t("approach.heroTag")}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">{t("approach.heroTitle")}</h1>
                <p className="text-background/80 text-base md:text-lg">{t("approach.heroDesc")}</p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-14 max-w-3xl mx-auto">
              <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">Our Process</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">From Concept to Delivery</h2>
              <p className="text-muted-foreground">Our structured approach ensures every component meets the highest standards of precision, quality, and reliability — from the first discussion to final delivery.</p>
            </AnimatedContainer>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <AnimatedContainer key={index} animation="fade-up" delay={index * 100}>
                  <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-bold text-primary">Step {index + 1}</span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Why Our Approach Works</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Close collaboration with clients at every stage",
                  "ISO 9001:2015 certified quality management system",
                  "In-house inspection lab with CMM and profile projectors",
                  "24/7 factory operations for fast turnaround",
                  "Complete raw material to finished part traceability",
                  "Continuous improvement through lean manufacturing",
                  "Experienced engineering team with 25+ years expertise",
                  "Scalable from prototype to high-volume production",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedContainer>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default OurApproach;
