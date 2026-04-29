
"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";




import { CheckCircle, Shield, Award } from "lucide-react";

import Image from "next/image";
import certIso9001 from "@/assets/cert-iso-9001.png";
import certNsic from "@/assets/cert-nsic.png";
import certRailways from "@/assets/cert-railways.png";

const Certifications = () => {
  const { t } = useTranslation();

  const certifications = [
    {
      image: certIso9001,
      title: "ISO 9001:2015",
      subtitle: t("certPage.isoSubtitle"),
      description: t("certPage.isoDesc"),
      benefits: [t("certPage.isoBenefit1"), t("certPage.isoBenefit2"), t("certPage.isoBenefit3"), t("certPage.isoBenefit4")],
      imagePosition: "left" as const,
    },
    {
      image: certNsic,
      title: t("certPage.nsicTitle"),
      subtitle: t("certPage.nsicSubtitle"),
      description: t("certPage.nsicDesc"),
      benefits: [t("certPage.nsicBenefit1"), t("certPage.nsicBenefit2"), t("certPage.nsicBenefit3"), t("certPage.nsicBenefit4")],
      imagePosition: "right" as const,
    },
    {
      image: certRailways,
      title: t("certPage.railwaysTitle"),
      subtitle: t("certPage.railwaysSubtitle"),
      description: t("certPage.railwaysDesc"),
      benefits: [t("certPage.railwaysBenefit1"), t("certPage.railwaysBenefit2"), t("certPage.railwaysBenefit3"), t("certPage.railwaysBenefit4")],
      imagePosition: "left" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Certifications - ISO 9001:2015 & Quality Standards" description="Patel Precision holds ISO 9001:2015 certification and international quality standards." keywords="ISO 9001:2015 certified, quality certifications" path="/certifications" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Certifications", url: "/certifications" }]} />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-[280px] md:h-[380px] overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/bandsaw-cutting.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">{t("cert.heroTag")}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">{t("cert.heroTitle")}</h1>
                <p className="text-background/80 text-base md:text-lg">{t("cert.heroDesc")}</p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="max-w-5xl mx-auto text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">{t("cert.committed")}</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{t("certPage.introText")}</p>
            </AnimatedContainer>
          </div>
        </section>

        {certifications.map((cert, index) => (
          <section key={cert.title} className={`py-14 md:py-20 ${index % 2 === 1 ? "bg-muted/20" : ""}`}>
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${cert.imagePosition === "right" ? "lg:grid-flow-dense" : ""}`}>
                <AnimatedContainer animation="fade-up" threshold={0.05} className={cert.imagePosition === "right" ? "lg:col-start-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl bg-card p-4 sm:p-6 md:p-8 border border-border/30">
                    <Image 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-auto object-contain mx-auto block" 
                      width={400}
                      height={300}
                      loading="eager"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg font-semibold text-xs shadow-lg">{t("certPage.certified")}</div>
                    </div>
                  </div>
                </AnimatedContainer>
                <AnimatedContainer animation="fade-up" delay={100} threshold={0.05} className={cert.imagePosition === "right" ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/10 rounded-full">{cert.subtitle}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{cert.title}</h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">{cert.description}</p>
                  <div className="space-y-2.5">
                    <h4 className="font-bold text-foreground text-base mb-3">{t("certPage.keyBenefits")}:</h4>
                    {cert.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedContainer>
              </div>
            </div>
          </section>
        ))}

        <section className="py-14 md:py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <AnimatedContainer animation="fade-up">
              <Award className="w-12 h-12 text-primary-foreground mx-auto mb-5" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">{t("cert.partnerCTA")}</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">{t("certPage.ctaDesc")}</p>
              <a href="/contact" className="inline-block bg-background text-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-background/90 transition-all duration-300 shadow-lg text-sm">{t("common.requestQuote")}</a>
            </AnimatedContainer>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Certifications;
