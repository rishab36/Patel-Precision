"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const CompressorValveAssembly = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Compressor Valve Assembly Manufacturer"
        description="Complete compressor valve assemblies including suction valves, discharge valves, and valve plate assemblies. OEM-quality assemblies ensuring optimal compressor performance and reliability."
        keywords="compressor valve assembly, valve assembly manufacturer, compressor valves, valve kits, reciprocating compressor parts"
        path="/compressor-valve-assembly"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Compressor Valve Assembly", url: "/compressor-valve-assembly" }]}
        productSchema={{ name: "Compressor Valve Assembly", description: "Complete valve assembly solutions for compressor systems.", category: "Compressor Components" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-valve.jpg" alt="Compressor Valve Assembly" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">Compressor Valve Assembly</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Complete valve assembly solutions for compressor systems</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Compressor Valve Assembly Manufacturer"
          description="Patel Precision manufactures complete compressor valve assemblies including suction valves, discharge valves, and valve plate assemblies. Our precision-machined valve assemblies ensure optimal compressor performance, efficiency, and reliability. We supply OEM-quality assemblies and replacement kits."
          keywords={["compressor valve assembly", "valve assembly manufacturer", "compressor valves", "valve kits", "reciprocating compressor parts", "valve plate assembly"]}
          features={["Complete assembly kits", "Matched valve components", "OEM specifications", "Performance tested", "Extended service life", "Quick replacement solutions"]}
          applications={["Reciprocating compressors", "Industrial air compressors", "Gas compressors", "Refrigeration compressors", "Process compressors", "HVAC systems"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CompressorValveAssembly;