"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const Rollers = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Industrial Rollers Manufacturer - Conveyor & Guide Rollers"
        description="Precision manufactured industrial rollers including conveyor rollers, guide rollers, drive rollers, and idler rollers. Perfect cylindricity, balanced construction, and durable finishes."
        keywords="industrial rollers, roller manufacturer, conveyor rollers, precision rollers, guide rollers, drive rollers"
        path="/rollers"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Rollers", url: "/rollers" }]}
        productSchema={{ name: "Industrial Rollers", description: "Precision manufactured rollers for conveyor and industrial systems.", category: "Material Handling Components" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-rollers.png" alt="High-quality industrial rollers and drums" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">Precision Industrial Rollers Manufacturing</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Precision manufactured rollers for conveyor and industrial systems</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Precision Industrial Rollers Manufacturer"
          description="Patel Precision manufactures high-quality industrial rollers including conveyor rollers, guide rollers, drive rollers, and idler rollers. Our precision-machined rollers feature perfect cylindricity, balanced construction, and durable finishes for demanding industrial applications."
          keywords={["industrial rollers", "roller manufacturer", "conveyor rollers", "precision rollers", "guide rollers", "drive rollers"]}
          features={["Precision ground surfaces", "Balanced construction", "Multiple coating options", "Custom diameters and lengths", "Bearing integration", "High load capacity"]}
          applications={["Conveyor systems", "Printing machines", "Packaging equipment", "Material handling", "Textile machinery", "Paper mills"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Rollers;