
"use client";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ImageLightbox from "@/components/ImageLightbox";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";

















import Image from "next/image";
import infrastructureHero from "@/assets/infrastructure-hero.jpg";
import infra1 from "@/assets/infra-1.png";
import infra2 from "@/assets/infra-2.png";
import infra4 from "@/assets/infra-4.png";
import infra5 from "@/assets/infra-5.png";
import infra7 from "@/assets/infra-7.png";
import infra8 from "@/assets/infra-8.png";
import infra9 from "@/assets/infra-9.png";
import infra10 from "@/assets/infra-10.png";
import infraVisionMeasuring from "@/assets/infra-vision-measuring.jpg";
import infraCncCoolant from "@/assets/infra-cnc-coolant.jpg";

const infrastructureImages = [
  { image: infra1, title: "Factory Floor Overview" },
  { image: infra2, title: "CVM 800 VMC Machine" },
  { image: infra4, title: "CNC Lathe Section" },
  { image: infra5, title: "CNC Turning Operations" },
  { image: infra7, title: "VMC Machining Center" },
  { image: infra8, title: "Secondary Machine Shop" },
  { image: infra9, title: "VMC Operations Area" },
  { image: infra10, title: "CNC Production Floor" },
  { image: infraVisionMeasuring, title: "Vision Measuring Machine" },
  { image: infraCncCoolant, title: "CNC Machining in Action" },
];

const machineList = [
  { sr: 1, machine: "VMC 5-Axis", make: "Cosmos & BFW", capacity: "850×500×500 mm", qty: "3 Nos" },
  { sr: 2, machine: "VMC 4-Axis", make: "AMS & Cosmos", capacity: "400×350×350 mm", qty: "3 Nos" },
  { sr: 3, machine: "VMC 3-Axis", make: "AMS & Jyoti", capacity: "400×350×350 mm", qty: "3 Nos" },
  { sr: 4, machine: "CNC Lathes", make: "ACE & Jyoti", capacity: "250mm × 450mm", qty: "20 Nos" },
  { sr: 5, machine: "Fully Automatic BandSaw", make: "—", capacity: "Dia 250mm", qty: "6 Nos" },
  { sr: 6, machine: "Automat Traub", make: "—", capacity: "Dia 25mm", qty: "3 Nos" },
  { sr: 7, machine: "Broaching Machine", make: "SPM", capacity: "6 Ton", qty: "1 Nos" },
];

const outsourcedList = [
  { machine: "Cylindrical Grinding", capacity: "250mm Dia, 400mm Length", qty: "3 Nos" },
  { machine: "Surface Grinding", capacity: "600×300 mm", qty: "2 Nos" },
  { machine: "Broaching", capacity: "6 Ton", qty: "1 Nos" },
  { machine: "Plating & Heat Treatment", capacity: "As per requirement", qty: "—" },
];

const Infrastructure = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  const highlights = [
    t("infraPage.highlight1"),
    t("infraPage.highlight2"),
    t("infraPage.highlight3"),
    t("infraPage.highlight4"),
    t("infraPage.highlight5"),
    t("infraPage.highlight6"),
    t("infraPage.highlight7"),
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Infrastructure - CNC Machining Facility & Equipment"
        description="Explore Patel Precision's manufacturing facility with 5-axis VMC machines, CNC lathes, and CMM inspection lab."
        keywords="CNC machining facility, manufacturing infrastructure, 5 axis VMC machine"
        path="/infrastructure"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Infrastructure", url: "/infrastructure" }]}
      />
      <TopBar />
      <MainNav />
      <main>
        {/* Hero */}
        <section className="relative h-[280px] md:h-[380px] overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/vmc-dark.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">
                  {t("infra.heroTag")}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">
                  {t("infra.heroTitle")}
                </h1>
                <p className="text-background/80 text-base md:text-lg">
                  {t("infra.heroDesc")}
                </p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        {/* About Facility */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                  {t("infra.facility")}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                  {t("infra.worldClass")}
                </h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base max-w-5xl mx-auto">
                <p dangerouslySetInnerHTML={{ __html: t("infraPage.facilityP1") }} />
                <p>{t("infraPage.facilityP2")}</p>
                <p>{t("infraPage.facilityP3")}</p>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* Infrastructure Highlights */}
        <section className="py-14 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-10">
              <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                {t("infraPage.capabilities")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t("infra.highlights")}
              </h2>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-up" delay={100} className="max-w-5xl mx-auto">
              <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* Machine List Table */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-10">
              <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                {t("infra.equipment")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t("infra.machineDetails")}
              </h2>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-up" delay={100} className="max-w-5xl mx-auto">
              <div className="hidden md:block bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm mb-10">
                <table className="w-full">
                  <thead>
                    <tr className="bg-foreground text-background">
                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Sr.</th>
                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">{t("infraPage.machine")}</th>
                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">{t("infraPage.make")}</th>
                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">{t("infraPage.capacity")}</th>
                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">{t("infraPage.qty")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {machineList.map((machine, index) => (
                      <tr key={machine.sr} className={`border-b border-border/30 hover:bg-primary/5 transition-colors duration-200 ${index % 2 === 0 ? "" : "bg-muted/10"}`}>
                        <td className="px-5 py-4 text-sm font-bold text-primary">{machine.sr}</td>
                        <td className="px-5 py-4 text-sm font-medium text-foreground">{machine.machine}</td>
                        <td className="px-5 py-4 text-sm text-muted-foreground">{machine.make}</td>
                        <td className="px-5 py-4 text-sm text-muted-foreground">{machine.capacity}</td>
                        <td className="px-5 py-4 text-sm font-semibold text-foreground">{machine.qty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:hidden space-y-3 mb-10">
                {machineList.map((machine) => (
                  <div key={machine.sr} className="bg-card rounded-xl p-4 border border-border/50 shadow-sm">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground text-sm">{machine.machine}</h4>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{machine.qty}</span>
                    </div>
                    {machine.make !== "—" && <p className="text-xs text-muted-foreground mb-1">{t("infraPage.make")}: {machine.make}</p>}
                    <p className="text-xs text-muted-foreground">{t("infraPage.capacity")}: {machine.capacity}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground">{t("infra.outsourced")}</h3>
              </div>
              <div className="hidden md:block bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider">{t("infraPage.machine")}</th>
                      <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider">{t("infraPage.capacity")}</th>
                      <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider">{t("infraPage.qty")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {outsourcedList.map((item, index) => (
                      <tr key={index} className={`border-b border-border/30 ${index % 2 === 0 ? "" : "bg-muted/10"}`}>
                        <td className="px-5 py-3 text-sm font-medium text-foreground">{item.machine}</td>
                        <td className="px-5 py-3 text-sm text-muted-foreground">{item.capacity}</td>
                        <td className="px-5 py-3 text-sm text-muted-foreground">{item.qty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="md:hidden space-y-3">
                {outsourcedList.map((item, index) => (
                  <div key={index} className="bg-card rounded-xl p-4 border border-border/50 shadow-sm">
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.machine}</h4>
                    <p className="text-xs text-muted-foreground">{t("infraPage.capacity")}: {item.capacity}</p>
                    {item.qty !== "—" && <p className="text-xs text-muted-foreground">{t("infraPage.qty")}: {item.qty}</p>}
                  </div>
                ))}
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* Image Grid */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">{t("infra.facilityGallery")}</h2>
            </AnimatedContainer>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {infrastructureImages.map((item, index) => (
                <AnimatedContainer key={index} animation="scale" delay={index * 60}>
                  <div className="group cursor-pointer overflow-hidden rounded-xl border border-border/30 bg-card hover:shadow-lg transition-all duration-300" onClick={() => setSelectedImage(item)}>
                    <div className="relative aspect-square">
                      <Image src={item.image} alt={item.title} className="object-cover transition-transform duration-500 group-hover:scale-105" fill />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-background font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/90 px-3 py-1.5 rounded-lg text-xs">{t("common.viewAll")}</span>
                      </div>
                    </div>
                    <div className="px-3 py-2 text-center">
                      <span className="text-xs font-medium text-foreground">{item.title}</span>
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
      {selectedImage && <ImageLightbox image={selectedImage.image} alt={selectedImage.title} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default Infrastructure;
