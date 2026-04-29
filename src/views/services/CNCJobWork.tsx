"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const CNCJobWork = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="CNC Job Work Services - Contract Manufacturing"
        description="Professional CNC job work services for businesses requiring precision machining without capital investment. Prototype to production volumes with quick turnaround at competitive rates."
        keywords="CNC job work, CNC contract manufacturing, precision job work, outsource CNC machining, job work manufacturer India"
        path="/cnc-job-work"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "CNC Job Work", url: "/cnc-job-work" }]}
        productSchema={{ name: "CNC Job Work Services", description: "Contract CNC machining services from prototype to production volumes.", category: "Manufacturing Services" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-cnc-machining.png" alt="CNC job work and contract manufacturing services" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">CNC Job Work</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Reliable CNC machining job work services</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Professional CNC Job Work Services"
          description="Patel Precision provides comprehensive CNC job work services for businesses requiring precision machining without capital investment. Our CNC job work facility handles prototype to production volumes with quick turnaround. We offer CNC turning, milling, and multi-axis job work at competitive rates."
          keywords={["CNC job work", "CNC contract manufacturing", "precision job work", "CNC machining services", "outsource CNC work", "job work manufacturer"]}
          features={["Flexible batch sizes", "Quick turnaround", "Competitive pricing", "Quality assurance", "Material procurement", "Complete documentation"]}
          applications={["Prototype development", "Small batch production", "Overflow capacity", "Specialized machining", "Rush orders", "Complex part manufacturing"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CNCJobWork;