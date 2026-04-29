"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const FiveAxisMachining = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="5 Axis Machining Services - Advanced Multi-Axis CNC"
        description="Advanced 5 axis machining services for complex parts in single setups. Patel Precision's 5 axis CNC machines handle intricate aerospace, medical, and precision tooling components with exceptional accuracy."
        keywords="5 axis machining services, five axis CNC machining, multi-axis machining, complex part machining, simultaneous 5 axis"
        path="/5-axis-machining-services"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "5 Axis Machining", url: "/5-axis-machining-services" }]}
        productSchema={{ name: "5 Axis Machining Services", description: "Advanced multi-axis CNC machining for complex geometries in aerospace, medical, and precision tooling.", category: "CNC Machining Services" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-5axis.png" alt="5 Axis Machining Services" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">5 Axis Machining Services</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Advanced multi-axis CNC machining for complex geometries</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Advanced 5 Axis Machining Services"
          description="Our 5 axis machining services enable production of complex parts in single setups, reducing lead times and improving accuracy. Patel Precision's advanced 5 axis CNC machines handle intricate aerospace components, medical implants, and precision tooling with exceptional accuracy and surface finish."
          keywords={["5 axis machining services", "five axis CNC machining", "multi-axis machining", "complex part machining", "simultaneous 5 axis", "advanced CNC machining"]}
          features={["Simultaneous 5-axis movement", "Complex geometry capability", "Single setup machining", "Superior surface finish", "Reduced lead times", "Tight tolerance machining"]}
          applications={["Aerospace turbine blades", "Medical implants", "Precision molds", "Impellers and rotors", "Complex automotive parts", "Prototype development"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default FiveAxisMachining;