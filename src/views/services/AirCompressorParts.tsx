"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageSEO from "@/components/PageSEO";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Phone, Wind, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";


import Image from "next/image";
const AirCompressorParts = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Air Compressor Parts & Valves Manufacturer"
        description="Patel Precision is a trusted manufacturer of precision air compressor parts and air compressor valves. ISO 9001:2015 certified. High-quality compressor valve assemblies, pistons, connecting rods for the compressor industry."
        keywords="air compressor parts, air compressor valves, compressor valve manufacturer, compressor parts India, reciprocating compressor parts"
        path="/air-compressor-parts"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Air Compressor Parts", url: "/air-compressor-parts" }]}
        productSchema={{ name: "Air Compressor Parts & Valves", description: "Precision manufactured air compressor parts including valves, pistons, connecting rods for industrial compressor systems.", category: "Compressor Components" }}
      />
      <TopBar />
      <MainNav />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <Image src="/product-air-compressor.png" alt="High-quality air compressor parts and valves" fill className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative z-10 container mx-auto px-4 md:px-8">
            <div className="max-w-4xl">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">
                Compressor Components
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
                Air Compressor Parts & Valves
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
                Patel Precision is a trusted manufacturer of precision <strong>air compressor parts</strong> and 
                <strong> air compressor valves</strong>. Our ISO 9001:2015 certified facility produces high-quality 
                compressor valve assemblies, pistons, connecting rods, and other critical components for the 
                air compressor industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/products">View All Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Air Compressor Components We Manufacture
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Wind, title: "Air Compressor Valves", items: ["Inlet Valves", "Discharge Valves", "Safety Valves", "Check Valves"] },
                { icon: Shield, title: "Compressor Valve Assembly", items: ["Complete Valve Plates", "Valve Guards", "Gaskets & Seals", "Spring Assemblies"] },
                { icon: Wrench, title: "Compressor Components", items: ["Pistons & Rings", "Connecting Rods", "Cylinder Liners", "Crankshafts"] },
              ].map((category, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Quality Air Compressor Parts Manufacturing
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  At Patel Precision, we understand the critical importance of precision in <strong>air compressor parts</strong> 
                  manufacturing. Our components are designed to withstand high pressures, temperatures, and continuous operation, 
                  ensuring reliable performance and extended service life for air compressor systems.
                </p>
                <p className="mb-6">
                  Our <strong>air compressor valves</strong> and <strong>compressor valve assemblies</strong> are manufactured 
                  using high-grade materials and advanced CNC machining processes. We serve leading compressor manufacturers 
                  and service companies across India and internationally.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Key Features of Our Air Compressor Parts</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Precision CNC machined for exact fit and function",
                    "High-quality materials for durability and performance",
                    "Tight tolerances for efficient compression",
                    "OEM and replacement parts available",
                    "Custom manufacturing as per specifications",
                    "Quick turnaround and reliable delivery"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Applications</h3>
                <div className="grid md:grid-cols-2 gap-3 mb-8">
                  {[
                    "Reciprocating Air Compressors",
                    "Rotary Screw Compressors",
                    "Industrial Compressor Systems",
                    "Portable Air Compressors",
                    "Oil-Free Compressors",
                    "High-Pressure Compressors"
                  ].map((app, index) => (
                    <span key={index} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Keywords */}
              <div className="mt-8 p-6 bg-background rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">Related Products</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Air Compressor Valves",
                    "Compressor Valve Assembly",
                    "Precision Machined Components",
                    "Pipe Fittings",
                    "CNC Machined Components"
                  ].map((keyword, index) => (
                    <Link 
                      key={index}
                      to="/products"
                      className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {keyword}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need Air Compressor Parts?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us for OEM-quality air compressor valves and components at competitive prices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:+919820808852">Call +91 98208 08852</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AirCompressorParts;