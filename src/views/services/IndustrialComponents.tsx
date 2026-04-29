"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageSEO from "@/components/PageSEO";
import { Link } from "@/lib/router-shim";
import { CheckCircle, ArrowRight, Phone, Wrench, Gauge, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";


import Image from "next/image";
const IndustrialComponents = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Industrial Components - Pipe Fittings, Flanges & More"
        description="Patel Precision manufactures industrial components including pipe fittings, rollers, junction boxes, cable glands, spray nozzles, fasteners, and stainless steel flanges. ISO 9001:2015 certified."
        keywords="industrial components manufacturer, pipe fittings, rollers, junction boxes, cable glands, spray nozzles, fasteners, stainless steel flanges"
        path="/industrial-components"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Industrial Components", url: "/industrial-components" }]}
        productSchema={{ name: "Industrial Components", description: "Comprehensive range of precision machined industrial components for various applications.", category: "Industrial Parts" }}
      />
      <TopBar />
      <MainNav />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <Image src="/product-cnc-components.png" alt="Industrial Components" fill className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative z-10 container mx-auto px-4 md:px-8">
            <div className="max-w-4xl">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">
                Industrial Manufacturing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
                Industrial Components & Parts
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
                Patel Precision manufactures a comprehensive range of industrial components including 
                <strong> pipe fittings</strong>, <strong>rollers</strong>, <strong>junction boxes</strong>, 
                <strong> cable glands</strong>, <strong>spray nozzles</strong>, <strong>fasteners</strong>, 
                and <strong>stainless steel flanges</strong>. ISO 9001:2015 certified quality for industrial applications.
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
              Industrial Components We Manufacture
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Pipe Fittings", desc: "Precision machined pipe fittings, couplings, and connectors" },
                { title: "Rollers", desc: "Industrial rollers for conveyor systems and machinery" },
                { title: "Junction Boxes", desc: "CNC machined electrical junction boxes and enclosures" },
                { title: "Cable Glands", desc: "Brass and stainless steel cable glands" },
                { title: "Spray Nozzles", desc: "Precision spray nozzles for various applications" },
                { title: "Fasteners", desc: "Custom and standard fasteners in various materials" },
                { title: "Stainless Steel Flanges", desc: "Precision machined SS flanges for piping systems" },
                { title: "Custom Parts", desc: "Custom machined components as per specifications" },
              ].map((product, index) => (
                <div key={index} className="p-5 bg-card rounded-xl border border-border/50 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm">{product.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Pipe Fittings */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Pipe Fittings</h2>
                <p className="text-muted-foreground mb-4">
                  Our precision <strong>pipe fittings</strong> are manufactured to exact specifications for use in 
                  plumbing, industrial piping, hydraulic systems, and pneumatic applications. We produce fittings 
                  in brass, stainless steel, carbon steel, and other materials.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Elbows", "Tees", "Reducers", "Couplings", "Nipples", "Unions", "Adapters"].map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{item}</span>
                  ))}
                </div>
              </div>

              {/* Stainless Steel Flanges */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Stainless Steel Flanges</h2>
                <p className="text-muted-foreground mb-4">
                  We manufacture high-quality <strong>stainless steel flanges</strong> for various industrial 
                  applications including oil & gas, chemical processing, water treatment, and food processing industries.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Slip-On Flanges", "Weld Neck Flanges", "Blind Flanges", "Socket Weld Flanges", "Threaded Flanges"].map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{item}</span>
                  ))}
                </div>
              </div>

              {/* Cable Glands & Junction Boxes */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Cable Glands & Junction Boxes</h2>
                <p className="text-muted-foreground mb-4">
                  Our <strong>cable glands</strong> and <strong>junction boxes</strong> are precision machined for 
                  electrical installations, providing secure cable entry and protection in various environments.
                </p>
                <ul className="grid md:grid-cols-2 gap-2">
                  {[
                    "Brass Cable Glands",
                    "SS Cable Glands",
                    "Explosion-Proof Glands",
                    "Weatherproof Junction Boxes",
                    "Industrial Enclosures",
                    "Control Boxes"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Keywords */}
              <div className="mt-8 p-6 bg-background rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">All Industrial Products</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Pipe Fittings",
                    "Rollers",
                    "Junction Boxes",
                    "Cable Glands",
                    "Spray Nozzles",
                    "Fasteners",
                    "Stainless Steel Flanges",
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
              Need Industrial Components?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us for pipe fittings, flanges, cable glands, and custom industrial parts manufacturing.
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

export default IndustrialComponents;