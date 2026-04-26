"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const AirCompressorValves = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Air Compressor Valves - Precision Valve Manufacturer"
        description="High-performance air compressor valves including inlet, discharge, check, and safety valves. Precision-machined for optimal performance, durability, and reliability in industrial compressor systems."
        keywords="air compressor valves, compressor valve manufacturer, inlet valves, discharge valves, check valves, compressor parts India"
        path="/air-compressor-valves"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Air Compressor Valves", url: "/air-compressor-valves" }]}
        productSchema={{ name: "Air Compressor Valves", description: "Precision engineered valves for air compressor systems.", category: "Compressor Components" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-valve.jpg" alt="Air Compressor Valves" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">Air Compressor Valves</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Precision engineered valves for air compressor systems</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Premium Air Compressor Valves Manufacturer"
          description="Patel Precision manufactures high-performance air compressor valves including inlet valves, discharge valves, check valves, and safety valves. Our precision-machined compressor valves ensure optimal performance, durability, and reliability for industrial air compressor systems."
          keywords={["air compressor valves", "compressor valve manufacturer", "inlet valves", "discharge valves", "check valves", "compressor parts"]}
          features={["Precision-machined valve seats", "High-grade materials", "Leak-proof design", "Extended service life", "OEM specifications", "Custom valve solutions"]}
          applications={["Reciprocating compressors", "Rotary compressors", "Industrial air systems", "HVAC compressors", "Refrigeration systems", "Pneumatic systems"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default AirCompressorValves;