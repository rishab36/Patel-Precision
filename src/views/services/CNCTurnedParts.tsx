"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const CNCTurnedParts = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="CNC Turned Parts - Precision Turning Manufacturer"
        description="Precision CNC turned parts with exceptional accuracy and surface finish. Shafts, bushings, pins, studs, and complex rotational components in aluminum to exotic alloys with tight tolerances."
        keywords="CNC turned parts, turned components, CNC lathe parts, precision turning, CNC turning services India"
        path="/cnc-turned-parts"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "CNC Turned Parts", url: "/cnc-turned-parts" }]}
        productSchema={{ name: "CNC Turned Parts", description: "Precision CNC turned parts including shafts, bushings, pins, and complex rotational components.", category: "CNC Turned Components" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-cnc-turned-new.png" alt="Precision CNC turned parts and components" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">CNC Turned Parts</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Precision CNC turning for complex rotational components</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Precision CNC Turned Parts Manufacturer"
          description="Patel Precision specializes in CNC turned parts with exceptional accuracy and surface finish. Our CNC turning centers produce precision shafts, bushings, pins, studs, and complex rotational components. We handle materials from aluminum to exotic alloys with tight tolerances."
          keywords={["CNC turned parts", "turned components", "CNC lathe parts", "precision turning", "turned shafts", "CNC turning services"]}
          features={["Multi-axis CNC lathes", "Live tooling capability", "Sub-spindle operations", "Tight tolerances", "Various materials", "High volume capability"]}
          applications={["Precision shafts", "Bushings and sleeves", "Pins and studs", "Automotive spindles", "Hydraulic components", "Medical device parts"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CNCTurnedParts;