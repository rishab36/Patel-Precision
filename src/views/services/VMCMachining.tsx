"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const VMCMachining = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="VMC Machining Services - Vertical Machining Center"
        description="Professional VMC machining services using advanced vertical machining centers. Precision milling, drilling, boring, and tapping with exceptional accuracy for complex 3D profiles and prismatic parts."
        keywords="VMC machining services, vertical machining center, VMC milling, precision VMC work, CNC VMC services"
        path="/vmc-machining-services"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "VMC Machining", url: "/vmc-machining-services" }]}
        productSchema={{ name: "VMC Machining Services", description: "Precision vertical machining center operations for complex 3D profiles and prismatic parts.", category: "CNC Machining Services" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-cnc-machining.png" alt="VMC Machining Services" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">Advanced VMC Machining Operations</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Precision vertical machining center operations</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Professional VMC Machining Services"
          description="Patel Precision offers comprehensive VMC machining services using advanced vertical machining centers. Our VMC operations deliver precision milling, drilling, boring, and tapping with exceptional accuracy. We handle complex 3D profiles and prismatic parts for various industries."
          keywords={["VMC machining services", "vertical machining center", "VMC milling", "precision VMC work", "CNC VMC services", "vertical milling"]}
          features={["High-speed VMC machines", "3-axis and 4-axis VMC", "Large work envelope", "Automatic tool changers", "High spindle speeds", "Precision coolant systems"]}
          applications={["Precision housings", "Machine components", "Mold and die parts", "Automotive brackets", "Industrial fixtures", "Custom enclosures"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default VMCMachining;