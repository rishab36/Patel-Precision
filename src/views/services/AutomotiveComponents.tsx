"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageSEO from "@/components/PageSEO";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Phone, Car, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";


import Image from "next/image";
const AutomotiveComponents = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Automotive Components Manufacturer - Precision Parts"
        description="Patel Precision is a leading manufacturer of precision automotive components in India. CNC machined engine parts, transmission components, and chassis parts for OEMs and Tier-1 suppliers."
        keywords="automotive components manufacturer, automotive parts India, precision automotive parts, CNC machined automotive components, engine components, transmission parts"
        path="/automotive-components"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Automotive Components", url: "/automotive-components" }]}
        productSchema={{ name: "Automotive Components", description: "Precision CNC machined automotive components for engine, transmission, chassis, and suspension systems.", category: "Automotive Parts" }}
      />
      <TopBar />
      <MainNav />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <Image src="/product-automotive.png" alt="Automotive Components" fill className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative z-10 container mx-auto px-4 md:px-8">
            <div className="max-w-4xl">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">
                Automotive Industry
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
                Automotive Components Manufacturing
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
                Patel Precision is a leading manufacturer of precision <strong>automotive components</strong> in India. 
                With advanced CNC machining capabilities and ISO 9001:2015 certification, we supply high-quality 
                automotive parts to OEMs and Tier-1 suppliers across the automotive industry.
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

        {/* Components Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Automotive Components We Manufacture
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Car, title: "Engine Components", items: ["Cylinder Heads", "Piston Pins", "Valve Components", "Connecting Rods"] },
                { icon: Settings, title: "Transmission Parts", items: ["Gears & Shafts", "Clutch Components", "Shift Forks", "Bearing Housings"] },
                { icon: Shield, title: "Chassis & Suspension", items: ["Steering Components", "Brake Parts", "Suspension Parts", "Axle Components"] },
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
                Precision Automotive Parts Manufacturing
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  The automotive industry demands the highest levels of precision and quality. At Patel Precision, 
                  we specialize in manufacturing <strong>automotive components</strong> that meet stringent OEM specifications 
                  and industry standards.
                </p>
                <p className="mb-6">
                  Our advanced CNC machining facility is equipped with multi-axis turning and milling centers that enable 
                  us to produce complex automotive parts with exceptional accuracy and consistency. We serve manufacturers 
                  of passenger vehicles, commercial vehicles, and two-wheelers.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Quality Assurance</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "100% dimensional inspection using CMM",
                    "Material traceability and certification",
                    "PPAP documentation support",
                    "Statistical Process Control (SPC)",
                    "First Article Inspection (FAI)",
                    "Rigorous quality testing protocols"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Industries Served</h3>
                <div className="grid md:grid-cols-2 gap-3 mb-8">
                  {[
                    "Passenger Vehicle OEMs",
                    "Commercial Vehicle Manufacturers",
                    "Two-Wheeler Industry",
                    "Electric Vehicle Components",
                    "Tier-1 & Tier-2 Suppliers",
                    "Aftermarket Parts"
                  ].map((industry, index) => (
                    <span key={index} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Keywords */}
              <div className="mt-8 p-6 bg-background rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">Related Products</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Precision Machined Components",
                    "CNC Machining Services",
                    "CNC Turned Parts",
                    "Fasteners",
                    "Pipe Fittings"
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
              Need Automotive Components?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Partner with us for high-quality automotive parts manufacturing with competitive pricing and reliable delivery.
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

export default AutomotiveComponents;