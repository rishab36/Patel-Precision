"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";

import AboutSection from "@/components/AboutSection";
import WhatWeOffer from "@/components/WhatWeOffer";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";


const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <PageSEO
        title="Patel Precision Pvt Ltd | ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer"
        description="Patel Precision Pvt Ltd - Leading ISO 9001:2015 certified manufacturer of precision machined components, CNC machining services, air compressor parts, automotive components, 5-axis machining, and custom machining solutions in Bhiwandi, India. 25+ years of excellence."
        keywords="precision machined components, CNC machining services, CNC machined components, air compressor parts, 5 axis machining, VMC machining, CNC job work, automotive components, pipe fittings, fasteners, stainless steel flanges, Bhiwandi, India"
        path="/"
        faqSchema={[
          { question: "What precision machined components does Patel Precision manufacture?", answer: "Patel Precision manufactures CNC turned parts, milled components, automotive parts, air compressor valves, pipe fittings, cable glands, spray nozzles, fasteners, stainless steel flanges, and custom machined parts for various industries." },
          { question: "What CNC machining services do you offer?", answer: "We offer CNC turning, CNC milling, 5-axis machining, VMC machining, precision grinding, and surface finishing. Our ISO 9001:2015 certified facility ensures the highest quality standards." },
          { question: "Do you provide custom machining and CNC job work?", answer: "Yes, we specialize in custom machining and CNC job work for prototype to production volumes with quick turnaround and competitive pricing." },
          { question: "Where is Patel Precision located?", answer: "Our manufacturing facility is located at A16/5, Harihar Corporation, Dapode, Bhiwandi-421302, Maharashtra, India, near Mumbai." },
        ]}
      />

      {/* Background video visible when scrolling past footer */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/vmc-dark.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Main content on top */}
      <div className="relative z-10">
        <header className="w-full">
          <TopBar />
          <nav className="w-full">
            <MainNav />
          </nav>
        </header>
        <main>
          <HeroSection />
          <StatsBar />
          <AboutSection />
          <WhatWeOffer />
          
          <ProductsSection />
        </main>
        <Footer />
      </div>
      <FloatingButtons />
    </div>
  );
};

export default Index;
