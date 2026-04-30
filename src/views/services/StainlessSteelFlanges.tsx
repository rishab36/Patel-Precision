"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const StainlessSteelFlanges = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Stainless Steel Flanges Manufacturer - ASME/ANSI/DIN"
        description="Premium stainless steel flanges including weld neck, slip-on, blind, socket weld, and lap joint types. SS 304, 316, 316L grades complying with ASME, ANSI, and DIN standards."
        keywords="stainless steel flanges, flange manufacturer, SS flanges, pipe flanges, ASME flanges India, industrial flanges"
        path="/stainless-steel-flanges"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Stainless Steel Flanges", url: "/stainless-steel-flanges" }]}
        productSchema={{ name: "Stainless Steel Flanges", description: "High-quality SS flanges for pipeline systems in various grades and standards.", category: "Piping Components" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-ss-flanges.png" alt="Stainless Steel Flanges" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">High-Quality Stainless Steel Flanges</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">High-quality SS flanges for pipeline systems</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Stainless Steel Flanges Manufacturer"
          description="Patel Precision manufactures premium stainless steel flanges including weld neck, slip-on, blind, socket weld, and lap joint types. Our SS flanges comply with ASME, ANSI, and DIN standards. We offer 304, 316, and specialty stainless steel grades for demanding applications."
          keywords={["stainless steel flanges", "flange manufacturer", "SS flanges", "pipe flanges", "industrial flanges", "ASME flanges"]}
          features={["Multiple flange types", "SS 304, 316, 316L grades", "ASME/ANSI/DIN standards", "Pressure ratings to 2500#", "RTJ and raised face", "Custom dimensions"]}
          applications={["Oil and gas pipelines", "Chemical plants", "Power generation", "Water treatment", "Pharmaceutical", "Food processing"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default StainlessSteelFlanges;