"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageSEO from "@/components/PageSEO";
import { Link } from "@/lib/router-shim";
import { CheckCircle, ArrowRight, Phone, Cog, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";


import Image from "next/image";
const CNCMachiningServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="CNC Machining Services - Turning, Milling & 5-Axis"
        description="Patel Precision offers comprehensive CNC machining services including CNC turning, CNC milling, 5-axis machining, and VMC machining. ISO 9001:2015 certified. Tolerances to ±0.001mm. 25+ years experience."
        keywords="CNC machining services, CNC turning services, CNC milling services, 5 axis CNC machining, VMC machining, precision CNC machining India"
        path="/cnc-machining-services"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "CNC Machining Services", url: "/cnc-machining-services" }]}
        productSchema={{ name: "CNC Machining Services", description: "Comprehensive CNC machining services including turning, milling, 5-axis, and VMC machining for precision components.", category: "Manufacturing Services" }}
      />
      <TopBar />
      <MainNav />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <Image src="/product-cnc-machining.png" alt="CNC Machining Services" fill className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative z-10 container mx-auto px-4 md:px-8">
            <div className="max-w-4xl">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">
                Advanced Manufacturing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
                CNC Machining Services
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
                Patel Precision offers comprehensive <strong>CNC machining services</strong> including CNC turning, 
                CNC milling, 5-axis machining, and VMC machining. Our ISO 9001:2015 certified facility delivers 
                high-precision CNC machined components for automotive, aerospace, medical, and industrial applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/infrastructure">View Our Facility</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our CNC Machining Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "CNC Turning", desc: "Precision turned parts with tight tolerances" },
                { title: "CNC Milling", desc: "Complex 3D milled components" },
                { title: "5-Axis Machining", desc: "Multi-axis precision for complex geometries" },
                { title: "VMC Machining", desc: "Vertical machining center operations" },
              ].map((service, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-border/50 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Cog className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Choose Our CNC Machining Services?
                </h2>
                <ul className="space-y-4">
                  {[
                    "ISO 9001:2015 certified quality management",
                    "25+ years of CNC machining experience",
                    "State-of-the-art CNC machines and equipment",
                    "Tolerances as tight as ±0.001mm",
                    "Quick turnaround and on-time delivery",
                    "Competitive pricing for CNC job work",
                    "Material sourcing and complete solutions",
                    "Prototype to production volume capability"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-background rounded-xl border border-border/50 text-center">
                  <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">±0.001mm</div>
                  <div className="text-sm text-muted-foreground">Precision Tolerance</div>
                </div>
                <div className="p-6 bg-background rounded-xl border border-border/50 text-center">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-6 bg-background rounded-xl border border-border/50 text-center">
                  <Cog className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">10K+</div>
                  <div className="text-sm text-muted-foreground">Parts Delivered</div>
                </div>
                <div className="p-6 bg-background rounded-xl border border-border/50 text-center">
                  <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Complete CNC Machining Solutions
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Patel Precision provides end-to-end <strong>CNC machining services</strong> from prototype development 
                  to high-volume production. Our skilled engineers and machinists work with various materials including 
                  aluminum, stainless steel, brass, copper, titanium, and engineering plastics.
                </p>
                <p className="mb-6">
                  Whether you need <strong>CNC job work</strong>, custom machining, or production of standard components, 
                  our facility in Bhiwandi, Maharashtra is equipped to handle your requirements efficiently and cost-effectively.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Materials We Machine</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {["Aluminum", "Stainless Steel", "Brass", "Copper", "Titanium", "Carbon Steel", "Mild Steel", "Plastics"].map((material, index) => (
                    <span key={index} className="px-3 py-2 bg-muted rounded-lg text-center text-sm">{material}</span>
                  ))}
                </div>
              </div>

              {/* Related Keywords */}
              <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">Related Services</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "CNC Machined Components",
                    "CNC Turned Parts",
                    "5 Axis Machining Services",
                    "VMC Machining Services",
                    "CNC Job Work",
                    "Precision Machining",
                    "Machining Services"
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
              Ready to Start Your CNC Machining Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote on your CNC machining requirements.
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

export default CNCMachiningServices;