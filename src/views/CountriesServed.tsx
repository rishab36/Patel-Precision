
"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";

import { Globe, MapPin } from "lucide-react";

import Image from "next/image";
const regions = [
  {
    region: "Europe",
    countries: ["Germany", "United Kingdom", "France", "Italy", "Netherlands", "Belgium", "Switzerland", "Austria", "Spain", "Sweden"],
  },
  {
    region: "North America",
    countries: ["United States", "Canada", "Mexico"],
  },
  {
    region: "Asia Pacific",
    countries: ["India", "Japan", "South Korea", "Singapore", "Australia", "Thailand", "Malaysia"],
  },
  {
    region: "Middle East & Africa",
    countries: ["UAE", "Saudi Arabia", "Qatar", "South Africa", "Israel"],
  },
];

const CountriesServed = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Countries Served - Global CNC Machining" description="Patel Precision exports precision CNC machined components to 25+ countries worldwide." keywords="CNC machining exports, global precision manufacturing, international machining" path="/countries-served" breadcrumbs={[{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }, { name: "Countries Served", url: "/countries-served" }]} />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-[280px] md:h-[380px] overflow-hidden">
          <Image src="/about-hero.jpg" alt="Global countries served by Patel Precision manufacturing" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">{t("countries.heroTag")}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">{t("countries.heroTitle")}</h1>
                <p className="text-background/80 text-base md:text-lg">{t("countries.heroDesc")}</p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-14 max-w-3xl mx-auto">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Global Reach, Local Precision</h2>
              <p className="text-muted-foreground">With over 25 years of experience, Patel Precision has built a strong global presence, exporting precision CNC machined components to clients in 25+ countries across 4 continents. Our commitment to quality, competitive pricing, and reliable delivery has earned us the trust of international OEMs and Tier-1 suppliers.</p>
            </AnimatedContainer>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {regions.map((r, index) => (
                <AnimatedContainer key={r.region} animation="fade-up" delay={index * 100}>
                  <div className="bg-card rounded-2xl p-6 border border-border/50 h-full">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      {r.region}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {r.countries.map((country) => (
                        <span key={country} className="px-3 py-1.5 bg-primary/5 text-foreground text-xs font-medium rounded-full border border-primary/10">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <AnimatedContainer animation="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Looking for a Reliable Manufacturing Partner?</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">No matter where you are in the world, we deliver precision components on time, every time.</p>
              <a href="/contact" className="inline-block bg-background text-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-background/90 transition-all duration-300 shadow-lg text-sm">Contact Us Today</a>
            </AnimatedContainer>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default CountriesServed;
