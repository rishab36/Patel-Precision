"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const PipeFittings = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Pipe Fittings Manufacturer - SS, Brass & Carbon Steel"
        description="High-quality pipe fittings in stainless steel, brass, carbon steel, and specialty alloys. Precision CNC machined elbows, tees, reducers, couplings meeting international standards."
        keywords="pipe fittings manufacturer, stainless steel pipe fittings, brass pipe fittings, industrial fittings, precision pipe fittings India"
        path="/pipe-fittings"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Pipe Fittings", url: "/pipe-fittings" }]}
        productSchema={{ name: "Pipe Fittings", description: "Precision manufactured pipe fittings for industrial applications.", category: "Piping Components" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-pipe-fittings.png" alt="Precision pipe fittings and connectors" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">Pipe Fittings</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Precision manufactured pipe fittings for industrial applications</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Precision Pipe Fittings Manufacturer"
          description="Patel Precision manufactures high-quality pipe fittings in various materials including stainless steel, brass, carbon steel, and specialty alloys. Our precision CNC machined pipe fittings include elbows, tees, reducers, couplings, and custom fittings meeting international standards."
          keywords={["pipe fittings", "pipe fittings manufacturer", "stainless steel fittings", "brass pipe fittings", "industrial fittings", "precision pipe fittings"]}
          features={["Multiple material options", "CNC machined precision", "Standard and custom sizes", "Threaded and welded types", "Pressure tested", "International standards compliance"]}
          applications={["Oil and gas pipelines", "Water treatment plants", "Chemical processing", "HVAC systems", "Industrial machinery", "Marine applications"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PipeFittings;