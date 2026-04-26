"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";

import { Flame, Layers, Paintbrush, Wrench, Zap, Shield } from "lucide-react";

import Image from "next/image";
const processes = [
  { icon: Flame, title: "Heat Treatment", desc: "Hardening, tempering, annealing, case hardening, and stress relieving to achieve required mechanical properties and surface hardness for precision components.", items: ["Through Hardening", "Case Hardening (Carburizing)", "Induction Hardening", "Stress Relieving", "Annealing & Normalizing"] },
  { icon: Layers, title: "Surface Coating & Plating", desc: "Electroplating and surface coating processes to enhance corrosion resistance, wear resistance, and aesthetic appearance of machined components.", items: ["Zinc Plating (Clear & Yellow)", "Nickel Plating", "Chrome Plating", "Phosphating", "Anodizing (for Aluminium)"] },
  { icon: Paintbrush, title: "Surface Finishing", desc: "Precision surface finishing processes to achieve required surface roughness values and dimensional accuracy for tight-tolerance applications.", items: ["Cylindrical Grinding (ID & OD)", "Surface Grinding", "Lapping & Honing", "Polishing & Buffing", "Deburring & Edge Breaking"] },
  { icon: Wrench, title: "Assembly & Sub-Assembly", desc: "In-house assembly capabilities for multi-component assemblies including pressing, fastening, testing, and packaging.", items: ["Press-fit Assembly", "Threaded Assembly", "Valve Assembly", "Functional Testing", "Custom Packaging"] },
  { icon: Zap, title: "EDM & Wire Cutting", desc: "Electrical Discharge Machining for complex geometries and hard materials that cannot be machined using conventional methods.", items: ["Wire EDM", "Sinker EDM", "Micro EDM", "Complex Profile Cutting"] },
  { icon: Shield, title: "Testing & Certification", desc: "Comprehensive material and dimensional testing services through NABL-certified laboratories for quality certification.", items: ["Material Composition Testing", "Tensile & Hardness Testing", "Dimensional Inspection Reports", "NABL-Certified Lab Testing", "Customer-Specific Test Certificates"] },
];

const SpecialProcesses = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Special Processes - Advanced CNC Manufacturing" description="Patel Precision offers special manufacturing processes including heat treatment, surface coating, grinding, EDM, and assembly services." keywords="heat treatment CNC parts, surface coating machined components, EDM machining, assembly services" path="/special-processes" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Infrastructure", url: "/infrastructure" }, { name: "Special Processes", url: "/special-processes" }]} />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-[280px] md:h-[380px] overflow-hidden">
          <Image src="/infrastructure-hero.jpg" alt="Special machining processes and capabilities" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">{t("sp.heroTag")}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">{t("sp.heroTitle")}</h1>
                <p className="text-background/80 text-base md:text-lg">{t("sp.heroDesc")}</p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-14 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Beyond Machining</h2>
              <p className="text-muted-foreground">We offer a full range of secondary and special processes — either in-house or through our trusted network of specialized partners — to deliver fully finished, ready-to-use components.</p>
            </AnimatedContainer>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processes.map((proc, index) => (
                <AnimatedContainer key={proc.title} animation="fade-up" delay={index * 80}>
                  <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <proc.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{proc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{proc.desc}</p>
                    <ul className="space-y-1.5">
                      {proc.items.map((item, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default SpecialProcesses;