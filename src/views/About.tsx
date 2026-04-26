"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";











import { Target, Eye, Shield, Cog, Users, Award, Factory, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";






import Image from "next/image";
import aboutHero from "@/assets/vmc-action.jpg";
import vmcActionImage from "@/assets/vmc-action.jpg";
import aboutTeam from "@/assets/about-facility-real.jpg";
import bgAboutStory from "@/assets/bg-about-story.jpg";
import bgAboutSection from "@/assets/bg-about-section.jpg";
import certIso9001 from "@/assets/cert-iso-9001.png";
import certNsic from "@/assets/cert-nsic.png";
import certRailways from "@/assets/cert-railways.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Factory, value: "25+", label: t("aboutPage.statYears") },
    { icon: Globe, value: "15+", label: t("aboutPage.statCountries") },
    { icon: Cog, value: "5,000+", label: t("aboutPage.statParts") },
    { icon: Users, value: "100+", label: t("aboutPage.statClients") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="About Us - Precision CNC Machining Since 1999"
        description="Learn about Patel Precision Pvt Ltd - ISO 9001:2015 certified CNC machining company with 25+ years of experience in precision manufacturing."
        keywords="about Patel Precision, CNC machining company, precision manufacturing India, ISO certified machining"
        path="/about"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }]}
      />
      <TopBar />
      <MainNav />
      <main>
        {/* Hero */}
        <section className="relative h-[340px] md:h-[450px] overflow-hidden">
          <Image src={aboutHero} alt="About Patel Precision" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <AnimatedContainer animation="fade-up">
                  <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">
                    {t("about.heroTag")}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">
                    {t("about.heroTitle")}
                  </h1>
                  <p className="text-background/80 text-base md:text-lg">
                    {t("about.heroDesc")}
                  </p>
                </AnimatedContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="relative -mt-12 z-10 pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, i) => (
                <AnimatedContainer key={stat.label} animation="fade-up" delay={i * 80}>
                  <div className="bg-card rounded-xl p-4 md:p-5 border border-border/50 shadow-lg text-center">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover blur-sm scale-105">
              <source src="/vmc-dark.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-foreground/85" />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <AnimatedContainer animation="fade-up" className="relative">
                <div className="relative w-full bg-muted/10 rounded-2xl shadow-2xl overflow-hidden">
                  <Image src={vmcActionImage} alt="Patel Precision VMC Machining" width={800} height={600} className="w-full h-auto object-contain" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-28 md:h-28 bg-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary/30">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary">25+</div>
                      <div className="text-[10px] md:text-xs text-background/70 uppercase tracking-wider">{t("aboutPage.years")}</div>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>

              <AnimatedContainer animation="fade-up" delay={100}>
                <div className="bg-foreground/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-background/10">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full">
                  {t("about.ourStory")}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-background mb-5">
                  {t("about.welcome")}
                </h2>
                <div className="space-y-4 text-background/75 text-sm md:text-base leading-relaxed">
                  <p>{t("aboutPage.storyP1")}</p>
                  <p>{t("aboutPage.storyP2")}</p>
                  <p>{t("aboutPage.storyP3")}</p>
                </div>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        {/* Image Gallery Strip */}
        <section className="py-2 bg-background">
          <div className="grid grid-cols-3 gap-1">
            {[gallery2, gallery3, gallery4].map((img, i) => (
              <AnimatedContainer key={i} animation="fade-up" delay={i * 60}>
                <div className="relative h-32 md:h-48 overflow-hidden group">
                  <Image src={img} alt={`Manufacturing ${i + 1}`} className="object-cover transition-transform duration-700 group-hover:scale-110" fill />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500" />
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-14 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-10">
              <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                {t("about.purpose")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t("about.missionVision")}
              </h2>
            </AnimatedContainer>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
              <AnimatedContainer animation="fade-up" delay={100}>
                <div className="bg-card rounded-xl p-5 md:p-6 border border-border/50 shadow-sm h-full">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{t("about.vision")}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t("aboutPage.visionText")}
                  </p>
                </div>
              </AnimatedContainer>

              <AnimatedContainer animation="fade-up" delay={200}>
                <div className="bg-card rounded-xl p-5 md:p-6 border border-border/50 shadow-sm h-full">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{t("about.mission")}</h3>
                  </div>
                  <div className="text-muted-foreground leading-relaxed text-sm space-y-2">
                    <div className="flex gap-2.5">
                      <span className="text-primary font-semibold mt-0.5">1.</span>
                      <p>{t("aboutPage.mission1")}</p>
                    </div>
                    <div className="flex gap-2.5">
                      <span className="text-primary font-semibold mt-0.5">2.</span>
                      <p>{t("aboutPage.mission2")}</p>
                    </div>
                    <div className="flex gap-2.5">
                      <span className="text-primary font-semibold mt-0.5">3.</span>
                      <p>{t("aboutPage.mission3")}</p>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="relative overflow-hidden py-14 md:py-20">
          <div className="absolute inset-0">
            <Image src={bgAboutSection} alt="Patel Precision manufacturing facility and core values background" fill className="w-full h-full object-cover blur-md scale-110" />
            <div className="absolute inset-0 bg-foreground/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-10">
              <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                {t("aboutPage.whatWeStandFor")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-background">
                {t("aboutPage.coreValues")}
              </h2>
            </AnimatedContainer>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Shield, title: t("aboutPage.valueQuality"), desc: t("aboutPage.valueQualityDesc") },
                { icon: Award, title: t("aboutPage.valueExcellence"), desc: t("aboutPage.valueExcellenceDesc") },
                { icon: Users, title: t("aboutPage.valuePartnership"), desc: t("aboutPage.valuePartnershipDesc") },
                { icon: Cog, title: t("aboutPage.valuePrecision"), desc: t("aboutPage.valuePrecisionDesc") },
              ].map((val, i) => (
                <AnimatedContainer key={i} animation="fade-up" delay={i * 100}>
                  <div className="bg-background/8 backdrop-blur-sm rounded-xl p-5 border border-background/10 text-center h-full hover:bg-background/12 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <val.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-background text-sm mb-1.5">{val.title}</h3>
                    <p className="text-xs text-background/60">{val.desc}</p>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                {t("about.qualityAssurance")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {t("about.certifications")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                {t("aboutPage.certDesc")}
              </p>
            </AnimatedContainer>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              {[
                { img: certIso9001, title: "ISO 9001:2015", subtitle: t("aboutPage.certIsoSub"), hash: "#iso" },
                { img: certNsic, title: "NSIC Certificate", subtitle: t("aboutPage.certNsicSub"), hash: "#nsic" },
                { img: certRailways, title: t("aboutPage.certRailways"), subtitle: t("aboutPage.certRailwaysSub"), hash: "#railways" }
              ].map((cert, index) => (
                <AnimatedContainer key={index} animation="fade-up" delay={index * 100}>
                  <Link
                    to={`/certifications${cert.hash}`}
                    className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 block"
                  >
                    <div className="relative bg-muted/20 p-6 flex items-center justify-center">
                      <Image src={cert.img} alt={cert.title} className="h-28 md:h-32 object-contain transition-transform duration-500 group-hover:scale-105" fill />
                    </div>
                    <div className="p-4 text-center border-t border-border/30">
                      <h4 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors duration-300">{cert.title}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{cert.subtitle}</p>
                    </div>
                  </Link>
                </AnimatedContainer>
              ))}
            </div>
            <AnimatedContainer animation="fade-up" delay={300} className="text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                <Link to="/certifications">{t("aboutPage.viewAllCerts")}</Link>
              </Button>
            </AnimatedContainer>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;