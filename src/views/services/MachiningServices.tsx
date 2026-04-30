"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const MachiningServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Machining Services - Complete CNC Manufacturing Solutions"
        description="Complete machining services including CNC turning, milling, grinding, drilling, and finishing. Full-service machining from prototypes to production runs for aerospace, automotive, medical, and industrial sectors."
        keywords="machining services, precision machining, CNC machining, industrial machining, contract machining, custom machining India"
        path="/machining-services"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Machining Services", url: "/machining-services" }]}
        productSchema={{ name: "Machining Services", description: "Comprehensive machining solutions for precision manufacturing.", category: "Manufacturing Services" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-machining-services.png" alt="Professional CNC machining and turning services" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">Professional CNC Machining Services</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Complete machining solutions for precision manufacturing</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Comprehensive Machining Services"
          description="Patel Precision offers complete machining services including CNC turning, milling, grinding, drilling, and finishing operations. Our full-service machining facility handles projects from prototypes to production runs. We serve aerospace, automotive, medical, and industrial sectors with precision and reliability."
          keywords={["machining services", "precision machining", "CNC machining", "industrial machining", "contract machining", "custom machining"]}
          features={["CNC turning and milling", "Surface and cylindrical grinding", "EDM wire cutting", "Heat treatment coordination", "Surface finishing", "Assembly services"]}
          applications={["Aerospace components", "Automotive parts", "Medical devices", "Industrial equipment", "Defense applications", "Energy sector parts"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default MachiningServices;