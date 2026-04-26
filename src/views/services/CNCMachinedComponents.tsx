"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const CNCMachinedComponents = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="CNC Machined Components - Precision Parts Manufacturer"
        description="Patel Precision specializes in manufacturing high-quality CNC machined components with tight tolerances for aerospace, automotive, medical, and industrial sectors. Multi-axis CNC machining capability."
        keywords="CNC machined components, precision CNC parts, machined components manufacturer, CNC precision components, custom machined parts"
        path="/cnc-machined-components"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "CNC Machined Components", url: "/cnc-machined-components" }]}
        productSchema={{ name: "CNC Machined Components", description: "High-precision CNC machined components for diverse industrial applications.", category: "Machined Parts" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-cnc-components.png" alt="CNC Machined Components" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">CNC Machined Components</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">High-precision CNC machined components for diverse industrial applications</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Premium CNC Machined Components Manufacturer"
          description="Patel Precision specializes in manufacturing high-quality CNC machined components. Our state-of-the-art CNC machining centers produce precision components with tight tolerances for aerospace, automotive, medical, and industrial sectors. With 25+ years of experience in CNC machined components production, we deliver excellence in every part."
          keywords={["CNC machined components", "precision CNC parts", "machined components manufacturer", "CNC precision components", "custom machined parts", "industrial CNC components"]}
          features={["Multi-axis CNC machining capability", "Tolerance up to ±0.005mm", "Various materials: Steel, Aluminum, Brass, Titanium", "Complex geometry machining", "High volume production capacity", "100% quality inspection"]}
          applications={["Aerospace components", "Automotive parts", "Medical device components", "Industrial machinery parts", "Defense equipment", "Electronics enclosures"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CNCMachinedComponents;