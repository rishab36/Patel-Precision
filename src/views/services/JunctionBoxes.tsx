"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import PageSEO from "@/components/PageSEO";


import Image from "next/image";
const JunctionBoxes = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Junction Boxes Manufacturer - Electrical Enclosures"
        description="Precision machined junction boxes and electrical enclosures including weatherproof, explosion-proof boxes, and custom electrical housings with perfect sealing and durability."
        keywords="junction boxes, junction box manufacturer, electrical enclosures, weatherproof boxes, industrial junction boxes"
        path="/junction-boxes"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Junction Boxes", url: "/junction-boxes" }]}
        productSchema={{ name: "Junction Boxes", description: "Precision machined junction boxes and electrical enclosures for industrial applications.", category: "Electrical Components" }}
      />
      <TopBar />
      <MainNav />
      <main>
        <section className="relative h-64 md:h-80">
          <Image src="/product-junction-box.png" alt="Industrial junction boxes and enclosures" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">Precision Junction Boxes Manufacturing</h1>
              <p className="text-background/90 text-lg max-w-2xl mx-auto px-4">Precision machined junction boxes and electrical enclosures</p>
            </div>
          </div>
        </section>
        <SEOContent
          title="Industrial Junction Boxes Manufacturer"
          description="Patel Precision manufactures high-quality junction boxes for electrical and industrial applications. Our precision-machined junction boxes include weatherproof enclosures, explosion-proof boxes, and custom electrical housings with perfect sealing and durability."
          keywords={["junction boxes", "junction box manufacturer", "electrical enclosures", "weatherproof boxes", "industrial junction boxes", "electrical housings"]}
          features={["Precision machined bodies", "Weatherproof designs", "Multiple material options", "Custom cable entries", "IP rated protection", "Corrosion resistant finishes"]}
          applications={["Electrical installations", "Industrial automation", "Outdoor systems", "Control panels", "Hazardous areas", "Marine applications"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default JunctionBoxes;