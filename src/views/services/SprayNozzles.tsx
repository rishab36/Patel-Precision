"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const SprayNozzles = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Spray Nozzles Manufacturer - Industrial Nozzles"
        description="Precision engineered spray nozzles for industrial applications. Flat fan, full cone, hollow cone, and atomizing types with consistent spray patterns and flow rates."
        keywords="spray nozzles, spray nozzle manufacturer, industrial nozzles, atomizing nozzles, precision nozzles"
        path="/spray-nozzles"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Spray Nozzles", url: "/spray-nozzles" }]}
        productSchema={{ name: "Spray Nozzles", description: "Precision engineered spray nozzles for industrial applications.", category: "Flow Control Components" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-spray-nozzles.png" alt="Precision spray nozzles for industrial applications" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">Spray Nozzles</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Precision engineered spray nozzles for industrial applications</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Precision Spray Nozzles Manufacturer"
          description="Patel Precision manufactures high-quality spray nozzles for industrial applications. Our precision-machined spray nozzles include flat fan, full cone, hollow cone, and atomizing types. We deliver consistent spray patterns and flow rates for demanding applications."
          keywords={["spray nozzles", "spray nozzle manufacturer", "industrial nozzles", "atomizing nozzles", "precision nozzles", "custom spray nozzles"]}
          features={["Precision orifice machining", "Consistent spray patterns", "Multiple spray types", "Corrosion resistant materials", "Custom flow rates", "Quick-connect options"]}
          applications={["Cooling systems", "Coating applications", "Cleaning equipment", "Agricultural spraying", "Fire suppression", "Chemical processing"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default SprayNozzles;