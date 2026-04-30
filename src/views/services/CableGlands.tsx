"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const CableGlands = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Cable Glands Manufacturer - Brass & SS Cable Glands"
        description="High-quality cable glands in brass, stainless steel, and specialty materials. Secure cable entry, strain relief, and environmental sealing for industrial, marine, and hazardous area applications."
        keywords="cable glands, cable gland manufacturer, brass cable glands, industrial cable glands, explosion proof glands"
        path="/cable-glands"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Cable Glands", url: "/cable-glands" }]}
        productSchema={{ name: "Cable Glands", description: "Precision manufactured cable glands for industrial wiring and electrical installations.", category: "Electrical Components" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-cable-glands.png" alt="Industrial cable glands and connectors" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">Precision Cable Glands Manufacturing</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Precision manufactured cable glands for industrial wiring</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Industrial Cable Glands Manufacturer"
          description="Patel Precision manufactures high-quality cable glands in brass, stainless steel, and specialty materials. Our precision-machined cable glands provide secure cable entry, strain relief, and environmental sealing for industrial, marine, and hazardous area applications."
          keywords={["cable glands", "cable gland manufacturer", "brass cable glands", "industrial cable glands", "explosion proof glands", "marine cable glands"]}
          features={["Precision threading", "IP68 rated options", "EMC/EMI shielding", "Strain relief design", "Multiple entry sizes", "Certified for hazardous areas"]}
          applications={["Industrial panels", "Marine installations", "Oil and gas facilities", "Mining equipment", "Renewable energy", "Control systems"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CableGlands;