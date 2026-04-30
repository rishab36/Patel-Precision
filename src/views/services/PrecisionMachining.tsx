"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const PrecisionMachining = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Precision Machining Services - Tight Tolerance Manufacturing"
        description="Expert precision machining services with tolerances as tight as ±0.005mm. Complex geometries, difficult materials, and critical components for aerospace, medical, and defense applications."
        keywords="precision machining, precision manufacturing, tight tolerance machining, high accuracy machining, precision CNC, micro machining"
        path="/precision-machining"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Precision Machining", url: "/precision-machining" }]}
        productSchema={{ name: "Precision Machining Services", description: "High-accuracy machining for critical applications with tolerances to ±0.005mm.", category: "Precision Manufacturing" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-precision-machining.png" alt="Precision machining services and solutions" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">Advanced Precision Machining Solutions</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">High-accuracy machining for critical applications</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Expert Precision Machining Services"
          description="Patel Precision delivers exceptional precision machining services with tolerances as tight as ±0.005mm. Our precision machining capabilities include complex geometries, difficult materials, and critical components for aerospace, medical, and defense applications. Every part undergoes rigorous quality inspection."
          keywords={["precision machining", "precision manufacturing", "tight tolerance machining", "high accuracy machining", "precision CNC", "micro machining"]}
          features={["Tolerances to ±0.005mm", "Surface finish Ra 0.4μm", "Climate controlled facility", "CMM verification", "Process capability studies", "First article inspection"]}
          applications={["Aerospace flight-critical parts", "Medical implants", "Optical components", "Semiconductor equipment", "Scientific instruments", "Defense systems"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PrecisionMachining;