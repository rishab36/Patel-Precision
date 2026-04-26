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
import Image from "next/image";
import {
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
} from "@/components/ui/carousel";

// Infrastructure images
import infra1 from "@/assets/infra-1.png";
import infra2 from "@/assets/infra-2.png";
import infra3 from "@/assets/infra-3.png";
import infra4 from "@/assets/infra-4.png";
import infra5 from "@/assets/infra-5.png";
import infra6 from "@/assets/infra-6.png";
import infra7 from "@/assets/infra-7.png";
import infra8 from "@/assets/infra-8.png";
import infra9 from "@/assets/infra-9.png";
import infra10 from "@/assets/infra-10.png";

// All product images
import productPrecisionMain from "@/assets/product-precision-main.png";
import productAirCompressor from "@/assets/product-air-compressor.png";
import productAirCompressorNew from "@/assets/product-air-compressor-new.webp";
import productPipeFittings from "@/assets/product-pipe-fittings.png";
import productPipeFittingsNew from "@/assets/product-pipe-fittings-new.webp";
import productMedical from "@/assets/product-medical.png";
import productManifold from "@/assets/product-manifold.png";
import productCncMachining from "@/assets/product-cnc-machining.png";
import productCncComponents from "@/assets/product-cnc-components.png";
import product5Axis from "@/assets/product-5axis.png";
import productCncTurned from "@/assets/product-cnc-turned.png";
import productCncTurnedNew from "@/assets/product-cnc-turned-new.png";
import productPrecisionMachining from "@/assets/product-precision-machining.png";
import productAutomotive from "@/assets/product-automotive.png";
import productRollers from "@/assets/product-rollers.png";
import productFasteners from "@/assets/product-fasteners.png";
import productCableGlands from "@/assets/product-cable-glands.png";
import productSprayNozzles from "@/assets/product-spray-nozzles.png";
import productSprayNozzles2 from "@/assets/product-spray-nozzles-2.png";
import productSsFlanges from "@/assets/product-ss-flanges.png";
import productValve from "@/assets/product-valve.jpg";
import productJunctionBox from "@/assets/product-junction-box.png";
import productMachiningServices from "@/assets/product-machining-services.png";
import productCustomTurned from "@/assets/product-custom-turned.png";
import productCustomTurnedNew from "@/assets/product-custom-turned-new.png";
import productValvePlates from "@/assets/product-valve-plates.png";
import productValvePlateNew from "@/assets/product-valve-plate-new.png";
import productTurnedParts from "@/assets/product-turned-parts.png";
import productTankCleaning from "@/assets/product-tank-cleaning.png";
import productSprayBalls from "@/assets/product-spray-balls.png";
import productCompressorValvePlatesUser from "@/assets/product-compressor-valve-plates-user.png";
import productCustomTurnedComponentsUser from "@/assets/product-custom-turned-components-user.png";
import productUser1 from "@/assets/product-user-1.png";
import productUser2 from "@/assets/product-user-2.png";
import products1 from "@/assets/products1.jpg";
import products2 from "@/assets/products2.jpg";
import products3 from "@/assets/products3.jpg";

// Material images
import productMildSteel from "@/assets/product-mild-steel.png";
import productBrass from "@/assets/product-brass.png";
import productCarbonSteel from "@/assets/product-carbon-steel.png";
import productCiCasting from "@/assets/product-ci-casting.png";
import productDiamondPart from "@/assets/product-diamond-part.png";

// Certifications
import certIso9001 from "@/assets/cert-iso-9001.png";
import certNsic from "@/assets/cert-nsic.png";
import certRailways from "@/assets/cert-railways.png";

// Action shots
import vmcAction from "@/assets/vmc-action.jpg";
import cncInside from "@/assets/cnc-inside.jpg";
import precisionPartsWatermark from "@/assets/precision-parts-watermark.jpg";





// Infrastructure images











// All product images




































// Material images





// Certifications

































const carouselItems = [
  { type: "video" as const, src: "/vmc-light.mp4", title: "VMC Machining in Action" },
  { type: "video" as const, src: "/vmc-dark.mp4", title: "CNC Production Floor" },
  { type: "video" as const, src: "/bandsaw-cutting.mp4", title: "Bandsaw Cutting Operations" },
  { type: "image" as const, src: vmcAction, title: "VMC 5-Axis Machining" },
  { type: "image" as const, src: cncInside, title: "CNC Lathe Interior" },
  { type: "image" as const, src: products1, title: "Precision Components Range" },
  { type: "image" as const, src: products2, title: "CNC Turned Parts Collection" },
  { type: "image" as const, src: products3, title: "Custom Machined Components" },
];

const sections = [
  {
    titleKey: "nav.infrastructure",
    images: [
      { image: infra1, title: "Factory Floor Overview" },
      { image: infra2, title: "CVM 800 VMC Machine" },
      { image: infra3, title: "Production & Material Storage" },
      { image: infra4, title: "CNC Lathe Section" },
      { image: infra5, title: "CNC Turning Operations" },
      { image: infra6, title: "Machine Shop & Quality Check" },
      { image: infra7, title: "VMC Machining Center" },
      { image: infra8, title: "Secondary Machine Shop" },
      { image: infra9, title: "VMC Operations Area" },
      { image: infra10, title: "CNC Production Floor" },
    ],
  },
  {
    titleKey: "nav.products",
    images: [
      { image: productPrecisionMain, title: "Precision Components" },
      { image: productAirCompressor, title: "Air Compressor Parts" },
      { image: productAirCompressorNew, title: "Compressor Valve Assembly" },
      { image: productPipeFittings, title: "Pipe Fittings" },
      { image: productPipeFittingsNew, title: "Pipe Fittings (New)" },
      { image: productMedical, title: "Medical Components" },
      { image: productManifold, title: "Manifold Blocks" },
      { image: productCustomTurned, title: "Custom Turned Components" },
      { image: productCustomTurnedNew, title: "Custom Turned (New)" },
      { image: productJunctionBox, title: "Junction Boxes" },
      { image: productCncMachining, title: "CNC Machining" },
      { image: productCncTurned, title: "CNC Turned Parts" },
      { image: productCncTurnedNew, title: "CNC Turned Components" },
      { image: productCableGlands, title: "Cable Glands" },
      { image: product5Axis, title: "5-Axis Machined Parts" },
      { image: productAutomotive, title: "Automotive Components" },
      { image: productRollers, title: "Industrial Rollers" },
      { image: productSsFlanges, title: "SS Flanges" },
      { image: productValve, title: "Compressor Valve Assembly" },
      { image: productSprayNozzles, title: "Spray Nozzles" },
      { image: productSprayNozzles2, title: "Industrial Spray Nozzles" },
      { image: productFasteners, title: "Fasteners" },
      { image: productMachiningServices, title: "Machining Services" },
      { image: productValvePlates, title: "Compressor Valve Parts" },
      { image: productValvePlateNew, title: "Valve Plate Assembly" },
      { image: productTurnedParts, title: "Precision Turned Parts" },
      { image: productDiamondPart, title: "Complex Machined Parts" },
      { image: productTankCleaning, title: "Tank Cleaning Nozzles" },
      { image: productSprayBalls, title: "Spray Balls" },
      { image: productCncComponents, title: "CNC Components" },
      { image: productPrecisionMachining, title: "Precision Machining" },
      { image: productCompressorValvePlatesUser, title: "Compressor Valve Plates" },
      { image: productCustomTurnedComponentsUser, title: "Custom Turned Parts" },
      { image: productUser1, title: "Precision Engineered Parts" },
      { image: productUser2, title: "Custom CNC Components" },
      { image: products1, title: "Precision Components Collection" },
      { image: products2, title: "CNC Turned Parts Display" },
      { image: products3, title: "Custom Machined Parts" },
      { image: cncInside, title: "CNC Lathe Interior" },
      { image: vmcAction, title: "VMC 5-Axis in Action" },
      { image: precisionPartsWatermark, title: "Patel Precision Products" },
    ],
  },
  {
    titleKey: "Materials",
    images: [
      { image: productMildSteel, title: "Mild Steel" },
      { image: productBrass, title: "Brass" },
      { image: productCarbonSteel, title: "Carbon Steel" },
      { image: productCiCasting, title: "CI Casting" },
    ],
  },
  {
    titleKey: "nav.certifications",
    images: [
      { image: certIso9001, title: "ISO 9001:2015" },
      { image: certNsic, title: "NSIC Certificate" },
      { image: certRailways, title: "Ministry of Railways" },
    ],
  },
];

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Gallery - CNC Machining Facility & Products" description="View photos of Patel Precision's CNC machining facility." keywords="CNC machining gallery" path="/gallery" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Gallery", url: "/gallery" }]} />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-[280px] md:h-[380px] overflow-hidden">
          <Image src="/precision-parts-watermark.jpg" alt="Gallery of precision machined components and CNC work" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">{t("gallery.heroTag")}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">{t("galleryPage.heroTitle")}</h1>
                <p className="text-background/80 text-base md:text-lg">{t("galleryPage.heroDesc")}</p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">{t("galleryPage.featured")}</h2>
            </AnimatedContainer>
            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {carouselItems.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                        {item.type === "video" ? (
                          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src={item.src} type="video/mp4" />
                          </video>
                        ) : (
                          <Image src={item.src} alt={item.title} className="w-full h-full object-cover" fill />
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/70 to-transparent">
                          <span className="text-background font-medium text-sm">{item.title}</span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </section>

        {sections.map((section, sectionIdx) => (
          <section key={section.titleKey} className={`py-12 md:py-16 ${sectionIdx % 2 === 0 ? "bg-muted/20" : ""}`}>
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="text-center mb-8">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-2">{section.titleKey === "Materials" ? "Materials" : t(section.titleKey)}</span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">{section.titleKey === "Materials" ? "Materials We Work With" : t(section.titleKey)}</h2>
              </AnimatedContainer>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {section.images.map((item, index) => (
                  <AnimatedContainer key={index} animation="scale" delay={index * 40}>
                    <div className="group cursor-pointer overflow-hidden rounded-xl border border-border/30 bg-card hover:shadow-lg transition-all duration-300" onClick={() => setSelectedImage(item)}>
                      <div className="relative aspect-square flex items-center justify-center bg-muted/10 p-2">
                        <Image src={item.image} alt={item.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" fill />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                          <span className="text-background font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/90 px-3 py-1.5 rounded-lg text-xs">{t("common.viewAll")}</span>
                        </div>
                      </div>
                      <div className="p-2 border-t border-border/20 text-center">
                        <span className="text-xs font-medium text-foreground">{item.title}</span>
                      </div>
                    </div>
                  </AnimatedContainer>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
      <FloatingButtons />
      {selectedImage && <ImageLightbox image={selectedImage.image} alt={selectedImage.title} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default Gallery;