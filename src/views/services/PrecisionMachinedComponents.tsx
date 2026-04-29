"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageSEO from "@/components/PageSEO";
import { Link } from "@/lib/router-shim";
import { CheckCircle, ArrowRight, Phone, Settings, Award, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";


import Image from "next/image";
const PrecisionMachinedComponents = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Precision Machined Components Manufacturer in India"
        description="Patel Precision Pvt Ltd is a leading manufacturer of high-quality precision machined components in India. ISO 9001:2015 certified, 25+ years experience. CNC turned parts with tolerances as tight as ±0.001mm for automotive, aerospace, medical, and industrial applications."
        keywords="precision machined components, precision machined parts manufacturer, CNC precision components India, custom machined parts, precision manufacturing"
        path="/precision-machined-components"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Precision Machined Components", url: "/precision-machined-components" }]}
        productSchema={{ name: "Precision Machined Components", description: "High-quality precision machined components manufactured with CNC technology for automotive, aerospace, medical, and industrial applications.", category: "Industrial Machinery Parts" }}
      />
      <TopBar />
      <MainNav />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <Image src="/product-precision-main.png" alt="Precision Machined Components" fill className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative z-10 container mx-auto px-4 md:px-8">
            <div className="max-w-4xl">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">
                ISO 9001:2015 Certified
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
                Precision Machined Components
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
                Patel Precision Pvt Ltd is a leading manufacturer of high-quality precision machined components in India. 
                With 25+ years of experience, we deliver CNC machined parts with tolerances as tight as ±0.001mm for 
                industries worldwide including automotive, aerospace, medical, and industrial applications.
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

        {/* Features Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Choose Our Precision Machined Components?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Advanced CNC Technology</h3>
                <p className="text-muted-foreground">
                  State-of-the-art CNC turning, milling, and 5-axis machining centers for complex precision components.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">ISO 9001:2015 Certified</h3>
                <p className="text-muted-foreground">
                  Our quality management system ensures consistent, high-quality precision machined parts every time.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">25+ Years Experience</h3>
                <p className="text-muted-foreground">
                  Trusted by 500+ clients worldwide for precision machining services since 1999.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                About Our Precision Machined Components Manufacturing
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  At Patel Precision, we specialize in manufacturing <strong>precision machined components</strong> that meet 
                  the highest industry standards. Our advanced CNC machining facility in Bhiwandi, Maharashtra is equipped 
                  with the latest technology to produce complex parts with exceptional accuracy.
                </p>
                <p className="mb-6">
                  Our <strong>precision machining services</strong> include CNC turning, CNC milling, 5-axis machining, 
                  VMC machining, and precision grinding. We work with a wide range of materials including aluminum, 
                  stainless steel, brass, copper, titanium, and various engineering plastics.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Industries We Serve</h3>
                <ul className="grid md:grid-cols-2 gap-3 mb-8">
                  {[
                    "Automotive Components Manufacturing",
                    "Aerospace & Defense Parts",
                    "Medical Device Components",
                    "Industrial Machinery Parts",
                    "Oil & Gas Equipment",
                    "Power Generation Components",
                    "Electronics & Semiconductor",
                    "Air Compressor Parts"
                  ].map((industry, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Our Capabilities</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "CNC Turned Parts with tolerances up to ±0.001mm",
                    "Complex 5-Axis Machined Components",
                    "VMC Machining Services for intricate parts",
                    "Precision Grinding and Surface Finishing",
                    "Custom Machining as per client specifications",
                    "Prototype to Production Volume Manufacturing"
                  ].map((capability, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Keywords */}
              <div className="mt-8 p-6 bg-background rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">Related Services</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "CNC Machining Services",
                    "CNC Machined Components",
                    "CNC Turned Parts",
                    "5 Axis Machining",
                    "VMC Machining Services",
                    "Precision Machining",
                    "CNC Job Work",
                    "Custom Machining"
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
              Need Precision Machined Components?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote on your precision machining requirements. 
              We offer competitive pricing and fast turnaround times.
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

export default PrecisionMachinedComponents;