"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const Fasteners = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Fasteners Manufacturer - Precision Bolts, Screws & Studs"
        description="High-quality precision fasteners including bolts, screws, nuts, studs, and specialty fasteners. Meeting aerospace, automotive, and industrial specifications with custom solutions."
        keywords="fasteners manufacturer, precision fasteners, industrial bolts, custom fasteners, aerospace fasteners India"
        path="/fasteners"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Fasteners", url: "/fasteners" }]}
        productSchema={{ name: "Precision Fasteners", description: "High-precision fasteners for critical aerospace, automotive, and industrial applications.", category: "Fastening Solutions" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-fasteners.png" alt="Precision fasteners and bolts manufacturing" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">Fasteners</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">High-precision fasteners for critical applications</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Precision Fasteners Manufacturer"
          description="Patel Precision manufactures high-quality fasteners including bolts, screws, nuts, studs, and specialty fasteners. Our precision-machined fasteners meet aerospace, automotive, and industrial specifications. We offer custom fastener solutions in various materials with specialized coatings."
          keywords={["fasteners", "fastener manufacturer", "precision fasteners", "industrial bolts", "custom fasteners", "aerospace fasteners"]}
          features={["Precision thread cutting", "High-strength materials", "Custom head configurations", "Various surface treatments", "Batch traceability", "Tensile testing"]}
          applications={["Aerospace assemblies", "Automotive engines", "Heavy machinery", "Structural applications", "Marine equipment", "Construction"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Fasteners;