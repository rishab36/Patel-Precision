
"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";

import { CheckCircle, Shield, Microscope, ClipboardCheck, BarChart3 } from "lucide-react";

import Image from "next/image";
const qaMethods = [
  { icon: Microscope, title: "Inspection Equipment", items: ["Mitutoyo CMM (Coordinate Measuring Machine)", "Profile Projector", "Vision System & Surface Tester", "Trimos Height Gauge", "Digital Micrometers & Verniers", "Carbide Go/No-Go Gauges", "Dial Indicators & Bore Gauges"] },
  { icon: ClipboardCheck, title: "Quality Processes", items: ["First Article Inspection (FAI)", "In-process inspection at every operation", "Statistical Process Control (SPC)", "100% inspection on critical dimensions", "Material test certificates from NABL-certified labs", "Batch traceability from raw material to dispatch"] },
  { icon: BarChart3, title: "Quality Metrics", items: ["CpK capability > 1.6", "Zero-defect manufacturing target", "Rejection rate < 0.1%", "On-time delivery rate > 98%", "Customer satisfaction index > 95%", "Annual quality audits and reviews"] },
];

const QualityAssurance = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Quality Assurance - CNC Machining Quality Standards" description="Patel Precision's quality assurance with CMM inspection, SPC, NABL-certified testing, and ISO 9001:2015 certified quality management system." keywords="CNC machining quality, CMM inspection, quality assurance manufacturing, ISO 9001 machining" path="/quality-assurance" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Infrastructure", url: "/infrastructure" }, { name: "Quality Assurance", url: "/quality-assurance" }]} />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-[280px] md:h-[380px] overflow-hidden">
          <Image src="/infrastructure-hero.jpg" alt="Quality assurance and testing facility at Patel Precision" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">{t("qa.heroTag")}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">{t("qa.heroTitle")}</h1>
                <p className="text-background/80 text-base md:text-lg">{t("qa.heroDesc")}</p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-14 max-w-3xl mx-auto">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Quality Is Our Foundation</h2>
              <p className="text-muted-foreground">As an ISO 9001:2015 certified manufacturer, quality is embedded in every aspect of our operations. From incoming raw material inspection to final dispatch, every component undergoes rigorous quality checks to ensure zero-defect delivery.</p>
            </AnimatedContainer>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {qaMethods.map((method, index) => (
                <AnimatedContainer key={method.title} animation="fade-up" delay={index * 100}>
                  <div className="bg-card rounded-2xl p-6 border border-border/50 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-4">{method.title}</h3>
                    <div className="space-y-2.5">
                      {method.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
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

export default QualityAssurance;
