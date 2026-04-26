"use client";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Download, Phone, Mail, MapPin, Award, Factory, Globe, Cog, Shield, CheckCircle, Star, Wrench, Settings, Gauge } from "lucide-react";
import { productData } from "@/data/products";





import Image from "next/image";
import infrastructureHero from "@/assets/infrastructure-hero.jpg";
import patelLogo from "@/assets/patel-precision-logo-new.png";
import capabilityPrecision from "@/assets/capability-precision.jpg";
import vmcAction from "@/assets/vmc-action.jpg";
import precisionPartsWatermark from "@/assets/precision-parts-watermark.jpg";
import productsHeroNew from "@/assets/products-hero-new.png";
import certIso9001 from "@/assets/cert-iso-9001.png";
import certNsic from "@/assets/cert-nsic.png";
import certRailways from "@/assets/cert-railways.png";

// All infrastructure images
import infra1 from "@/assets/infra-1.png";
import infra2 from "@/assets/infra-2.png";
import infra3 from "@/assets/infra-3.png";
import infra4 from "@/assets/infra-4.png";
import infra7 from "@/assets/infra-7.png";
import infra8 from "@/assets/infra-8.png";
import infra9 from "@/assets/infra-9.png";
import infra10 from "@/assets/infra-10.png";
import cncCrop from "@/assets/cnc-crop.jpg";

// Additional product images for gallery
import productPipeFittings from "@/assets/product-pipe-fittings.png";
import productCustomTurned from "@/assets/product-custom-turned.png";
import productCustomTurnedNew from "@/assets/product-custom-turned-new.png";
import productMedical from "@/assets/product-medical.png";
import productValve from "@/assets/product-valve.jpg";
import productValvePlates from "@/assets/product-valve-plates.png";
import productSprayBalls from "@/assets/product-spray-balls.png";
import productTankCleaning from "@/assets/product-tank-cleaning.png";

// Material images
import productMildSteel from "@/assets/product-mild-steel.png";
import productBrass from "@/assets/product-brass.png";
import productCarbonSteel from "@/assets/product-carbon-steel.png";
import productCiCasting from "@/assets/product-ci-casting.png";












// Additional product images for gallery









// Material images
















const infraImages = [
  { image: infra1, title: "Factory Floor Overview" },
  { image: infra2, title: "CVM 800 VMC Machine" },
  { image: infra3, title: "Production & Material Storage" },
  { image: infra4, title: "CNC Lathe Section" },
  { image: cncCrop, title: "CNC Machine Operations" },
  { image: infra7, title: "VMC Machining Center" },
  { image: infra8, title: "Secondary Machine Shop" },
  { image: infra9, title: "VMC Operations Area" },
  { image: infra10, title: "CNC Production Floor" },
];

const extraProductImages = [
  { image: productPipeFittings, title: "SS Pipe Fittings" },
  { image: productCustomTurned, title: "Custom Turned Parts" },
  { image: productCustomTurnedNew, title: "Turned Components Set" },
  { image: productMedical, title: "Medical Device Parts" },
  { image: productValve, title: "Valve Assembly" },
  { image: productValvePlates, title: "Valve Plates & Rings" },
  { image: productSprayBalls, title: "Spray Balls" },
  { image: productTankCleaning, title: "Tank Cleaning Nozzles" },
];

const materialImages = [
  { image: productMildSteel, title: "Mild Steel" },
  { image: productBrass, title: "Brass" },
  { image: productCarbonSteel, title: "Carbon Steel" },
  { image: productCiCasting, title: "CI Casting" },
];

const machineInventory = [
  { machine: "VMC 5-Axis", make: "Cosmos & BFW", specs: "850×500×500 mm", qty: 3 },
  { machine: "VMC 4-Axis", make: "AMS & Cosmos", specs: "400×350×350 mm", qty: 3 },
  { machine: "VMC 3-Axis", make: "AMS & Jyoti", specs: "400×350×350 mm", qty: 3 },
  { machine: "CNC Lathes", make: "ACE & Jyoti", specs: "250mm × 450mm", qty: 20 },
  { machine: "Fully Automatic BandSaw", make: "—", specs: "Dia 250mm", qty: 6 },
  { machine: "Automat Traub", make: "—", specs: "Dia 25mm", qty: 3 },
  { machine: "Broaching Machine", make: "SPM", specs: "6 Ton", qty: 1 },
];

const outsourcedMachines = [
  { machine: "Cylindrical Grinding", specs: "250mm Dia, 400mm Length", qty: 3 },
  { machine: "Surface Grinding", specs: "600×300 mm", qty: 2 },
  { machine: "Broaching", specs: "6 Ton", qty: 1 },
  { machine: "Plating & Heat Treatment", specs: "As per requirement", qty: "—" },
];

const CompanyProfile = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  const capabilities = [
    { icon: Settings, label: "CNC Turning", desc: "3mm–300mm dia" },
    { icon: Cog, label: "CNC Milling", desc: "3, 4 & 5-axis" },
    { icon: Wrench, label: "VMC Machining", desc: "High precision" },
    { icon: Gauge, label: "Precision Grinding", desc: "Surface & cylindrical" },
    { icon: Shield, label: "Surface Finishing", desc: "Multiple finishes" },
    { icon: Factory, label: "Heat Treatment", desc: "Hardening & tempering" },
    { icon: CheckCircle, label: "Assembly & Testing", desc: "Complete solutions" },
    { icon: Award, label: "Quality Inspection", desc: "CMM & optical" },
  ];

  const industries = [
    "Automotive", "Aerospace", "Medical Devices", "Oil & Gas",
    "Power Generation", "Food Processing", "Pharmaceutical",
    "Textile", "HVAC", "General Engineering",
  ];

  const totalInHouse = machineInventory.reduce((sum, m) => sum + m.qty, 0);

  // Group products into chunks of 3 for print layout
  const productChunks: (typeof productData)[] = [];
  for (let i = 0; i < productData.length; i += 3) {
    productChunks.push(productData.slice(i, i + 3));
  }

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Company Profile - Patel Precision Pvt Ltd"
        description="Complete company profile of Patel Precision Pvt Ltd - ISO 9001:2015 certified manufacturer of precision machined components since 1999."
        keywords="Patel Precision company profile, CNC machining company profile, precision manufacturing India"
        path="/company-profile"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Company Profile", url: "/company-profile" }]}
      />

      {/* Screen-only header */}
      <div className="print:hidden">
        <TopBar />
        <MainNav />
      </div>

      {/* Download button - screen only */}
      <div className="print:hidden sticky top-[80px] z-40 bg-card/95 backdrop-blur-md border-b border-border/30 py-3 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-primary rounded-full" />
            <h1 className="text-lg font-bold text-foreground">Company Profile</h1>
          </div>
          <div className="flex gap-3">
            <a href="/Patel_Precision_Company_Profile.pdf" download>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </a>
            <Button size="sm" className="gap-2 bg-primary text-primary-foreground" onClick={handleDownloadPDF}>
              <Download className="w-4 h-4" />
              Save as PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <main className="profile-content">

        {/* ===== PAGE 1: Cover Page ===== */}
        <section className="print-page relative min-h-screen overflow-hidden print:min-h-[95vh]">
          {/* Background: real infrastructure image */}
          <Image src={infra2} alt="Patel Precision infrastructure and manufacturing capabilities" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--foreground)/0.75)] via-[hsl(var(--foreground)/0.82)] to-[hsl(var(--foreground)/0.92)]" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, white 80px, white 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, white 80px, white 81px)' }} />
          
          <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-8 print:h-auto print:min-h-[95vh] print:py-20">
            {/* Logo */}
            <div className="mb-10">
              <Image src="/patel-precision-logo-new.png" alt="Patel Precision Pvt Ltd" className="h-20 md:h-24 w-auto mx-auto drop-shadow-2xl" width={240} height={96} />
            </div>
            
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-background tracking-tight leading-[0.9] mb-2">
                Patel
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-background tracking-tight leading-[0.9]">
                Precision<span className="text-primary">.</span>
              </h1>
            </div>
            
            {/* Divider */}
            <div className="w-20 h-[2px] bg-primary mb-6" />
            
            {/* Subtitle */}
            <p className="text-primary text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Company Profile
            </p>
            
            <p className="text-background/40 text-xs md:text-sm max-w-lg mx-auto leading-relaxed mb-16">
              ISO 9001:2015 Certified Manufacturer of Precision Machined Components
            </p>
            
            {/* Bottom stats row */}
            <div className="absolute bottom-12 left-0 right-0 px-8 print:relative print:bottom-auto print:mt-12">
              <div className="max-w-3xl mx-auto flex items-center justify-center gap-8 md:gap-16">
                {[
                  { value: "1999", label: "Established" },
                  { value: "25+", label: "Years" },
                  { value: "15+", label: "Countries" },
                  { value: `${totalInHouse}+`, label: "Machines" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-background">{stat.value}</div>
                    <div className="text-[9px] md:text-[10px] text-background/30 uppercase tracking-[0.15em] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PAGE 2: About Us - Full Page ===== */}
        <section className="print-page py-16 md:py-20 bg-background print:py-10">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <span className="text-primary font-semibold text-[10px] uppercase tracking-[0.25em]">Who We Are</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
                Precision Engineering
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">
                Since 1999
              </h2>
              
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-10 max-w-3xl">
                <p>
                  Established in 1999, Patel Precision Pvt Ltd has been at the forefront of precision machining and
                  CNC manufacturing in India. Our state-of-the-art facility in Bhiwandi, Maharashtra is equipped with
                  advanced CNC machines including multi-axis turning centers, VMC machines, and 5-axis machining centers.
                </p>
                <p>
                  With over 25 years of experience, we have developed expertise across diverse industries including
                  automotive, aerospace, medical devices, oil & gas, and general engineering.
                </p>
                <p>
                  We serve clients in over 15 countries worldwide, providing precision components that meet the most
                  exacting international standards with tolerances as tight as ±0.005mm.
                </p>
              </div>
              
              {/* Credentials bar */}
              <div className="flex flex-wrap items-center gap-6 mb-10 text-xs text-muted-foreground">
                {[
                  { icon: Shield, text: "ISO 9001:2015" },
                  { icon: Globe, text: "15+ Countries" },
                  { icon: Award, text: "Indian Railways Approved" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Full-width infrastructure image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg print:rounded-lg">
                <Image src={vmcAction} alt="Patel Precision Manufacturing Facility" className="w-full h-64 md:h-80 lg:h-96 object-cover print:h-64" width={1000} height={400} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent h-24" />
                <div className="absolute bottom-4 left-6 flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                    <span className="text-xl font-black">25+</span>
                    <span className="text-[10px] uppercase tracking-wider ml-1.5 opacity-80">Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PAGE 3: Capabilities + Industries ===== */}
        <section className="print-page py-16 md:py-20 bg-muted/30 print:py-10">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              {/* Capabilities */}
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-semibold text-[10px] uppercase tracking-[0.25em]">What We Do</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Our Capabilities</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {capabilities.map((cap, i) => (
                    <div key={i} className="bg-card border border-border/40 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <cap.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-sm font-semibold text-foreground mb-0.5">{cap.label}</h4>
                      <p className="text-[11px] text-muted-foreground">{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Industries */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-semibold text-[10px] uppercase tracking-[0.25em]">Global Reach</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Industries We Serve</h2>
                
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind, i) => (
                    <span key={i} className="inline-flex items-center px-4 py-2 bg-card border border-border/40 rounded-full text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-200">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-3 rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-48 md:h-56 rounded-xl overflow-hidden">
                  <Image src={vmcAction} alt="VMC Machining Operations" className="w-full h-full object-cover transition-transform hover:scale-105" width={400} height={250} />
                </div>
                <div className="relative h-48 md:h-56 rounded-xl overflow-hidden">
                  <Image src={precisionPartsWatermark} alt="High-precision manufactured components by Patel Precision" className="w-full h-full object-cover transition-transform hover:scale-105" width={400} height={250} />
                </div>
                <div className="relative h-48 md:h-56 rounded-xl overflow-hidden">
                  <Image src={productsHeroNew} alt="CNC machined products and precision components showcase" className="w-full h-full object-cover transition-transform hover:scale-105" width={400} height={250} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PAGES 4+: Product Catalog — 3 products per page ===== */}
        {productChunks.map((chunk, chunkIdx) => (
          <section key={chunkIdx} className="print-page py-12 md:py-16 bg-background print:py-6">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
              <div className="max-w-5xl mx-auto">
                {chunkIdx === 0 && (
                  <div className="mb-10">
                    <span className="text-primary font-semibold text-[10px] uppercase tracking-[0.25em]">Our Range</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-2">Product Catalog</h2>
                    <p className="text-muted-foreground text-sm max-w-2xl">{productData.length} product categories across precision machining, CNC turning, milling, and specialty components.</p>
                  </div>
                )}
                {chunkIdx > 0 && (
                  <div className="text-right mb-4 print:mb-2">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Product Catalog · Page {chunkIdx + 1}</span>
                  </div>
                )}
                <div className="space-y-5">
                  {chunk.map((product, i) => (
                    <div key={i} className="product-card flex flex-col sm:flex-row gap-5 items-center p-4 bg-card rounded-xl border border-border/30">
                      <div className="w-full sm:w-36 h-32 flex-shrink-0 bg-muted/10 rounded-lg p-3 flex items-center justify-center overflow-hidden relative">
                        <Image src={product.image} alt={product.title} loading="lazy" className="object-contain" width={144} height={128} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] text-primary font-semibold uppercase tracking-wider">{product.category}</span>
                        <h3 className="text-base font-bold text-foreground mb-1">{product.title}</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed mb-2.5 print:line-clamp-none">{product.description}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-1.5">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span className="text-[11px] text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ===== PRODUCT IMAGE GALLERY PAGE ===== */}
        <section className="print-page py-12 md:py-16 bg-muted/20 print:py-6">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <span className="text-primary font-semibold text-[10px] uppercase tracking-[0.25em]">Visual Showcase</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">Product Gallery</h2>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 print:gap-2">
                {[...extraProductImages, ...productData.slice(0, 12).map(p => ({ image: p.image, title: p.title }))].map((item, i) => (
                  <div key={i} className="img-card rounded-lg overflow-hidden border border-border/30 bg-card">
                    <div className="aspect-square bg-muted/10 p-2 flex items-center justify-center relative">
                      <Image src={item.image} alt={item.title} loading="lazy" className="object-contain" width={200} height={200} />
                    </div>
                    <div className="px-2 py-1.5 border-t border-border/20 text-center">
                      <span className="text-[9px] font-medium text-foreground leading-tight block">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== MATERIALS PAGE ===== */}
        <section className="print-page py-12 md:py-16 bg-background print:py-6">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <span className="text-primary font-semibold text-[10px] uppercase tracking-[0.25em]">Raw Materials</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-2">Materials We Work With</h2>
                <p className="text-muted-foreground text-sm max-w-2xl">Stainless steel (304, 316, 316L), brass, aluminium, mild steel, carbon steel, alloy steel, cast iron, copper, titanium, and specialty alloys.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {materialImages.map((mat, i) => (
                  <div key={i} className="img-card rounded-xl overflow-hidden border border-border/30 bg-card text-center">
                    <div className="aspect-square bg-muted/10 p-4 flex items-center justify-center relative">
                      <Image src={mat.image} alt={mat.title} loading="lazy" className="object-contain" width={200} height={200} />
                    </div>
                    <div className="p-3 border-t border-border/20">
                      <span className="text-sm font-semibold text-foreground">{mat.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== INFRASTRUCTURE + MACHINE TABLE PAGE ===== */}
        <section className="print-page py-14 md:py-20 bg-muted/20 print:py-8">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10">
                <span className="text-primary font-semibold text-[10px] uppercase tracking-[0.25em]">Our Facility</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-2">Infrastructure & Equipment</h2>
                <p className="text-muted-foreground text-sm max-w-2xl">
                  Our 12,000 sq. ft. manufacturing facility houses {totalInHouse}+ in-house machines and additional outsourced capabilities.
                </p>
              </div>

              {/* In-House Machine Table */}
              <div className="mb-8">
                <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <Factory className="w-4 h-4 text-primary" />
                  In-House Machines — {totalInHouse} Units
                </h3>
                <div className="overflow-x-auto rounded-xl border border-border/30 bg-card">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/30 bg-muted/30">
                        <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Sr.</th>
                        <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Machine</th>
                        <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Make</th>
                        <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Capacity</th>
                        <th className="text-center px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {machineInventory.map((m, i) => (
                        <tr key={i} className={`border-b border-border/20 ${i % 2 !== 0 ? "bg-muted/10" : ""}`}>
                          <td className="px-4 py-2.5 text-sm font-bold text-primary">{i + 1}</td>
                          <td className="px-4 py-2.5 text-sm font-medium text-foreground">{m.machine}</td>
                          <td className="px-4 py-2.5 text-sm text-muted-foreground">{m.make}</td>
                          <td className="px-4 py-2.5 text-sm text-muted-foreground">{m.specs}</td>
                          <td className="px-4 py-2.5 text-sm text-center font-semibold text-foreground">{m.qty} Nos</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-primary/20 bg-primary/5">
                        <td colSpan={4} className="px-4 py-2.5 font-bold text-foreground text-sm">Total In-House Machines</td>
                        <td className="px-4 py-2.5 text-center font-black text-primary text-lg">{totalInHouse}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Outsourced Table */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-primary" />
                  Outsourced / Additional Capabilities
                </h3>
                <div className="overflow-x-auto rounded-xl border border-border/30 bg-card">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/30 bg-muted/30">
                        <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Machine</th>
                        <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Capacity</th>
                        <th className="text-center px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {outsourcedMachines.map((m, i) => (
                        <tr key={i} className={`border-b border-border/20 ${i % 2 !== 0 ? "bg-muted/10" : ""}`}>
                          <td className="px-4 py-2.5 text-sm font-medium text-foreground">{m.machine}</td>
                          <td className="px-4 py-2.5 text-sm text-muted-foreground">{m.specs}</td>
                          <td className="px-4 py-2.5 text-sm text-center text-muted-foreground">{typeof m.qty === 'number' ? `${m.qty} Nos` : m.qty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INFRASTRUCTURE IMAGES PAGE ===== */}
        <section className="print-page py-12 md:py-16 bg-background print:py-6">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <span className="text-primary font-semibold text-[10px] uppercase tracking-[0.25em]">Factory Tour</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">Our Manufacturing Facility</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 print:gap-2">
                {infraImages.map((img, i) => (
                  <div key={i} className="img-card rounded-xl overflow-hidden border border-border/30 group">
                    <div className="relative h-40 md:h-48 bg-muted/10 overflow-hidden">
                      <Image src={img.image} alt={img.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 print:h-36" width={500} height={200} />
                    </div>
                    <div className="px-3 py-2 bg-card">
                      <span className="text-[11px] font-medium text-foreground">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== CERTIFICATIONS PAGE ===== */}
        <section className="print-page py-14 md:py-20 bg-muted/20 print:py-8">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10">
                <span className="text-primary font-semibold text-[10px] uppercase tracking-[0.25em]">Trust & Quality</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">Certifications</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
                {[
                  { img: certIso9001, title: "ISO 9001:2015", desc: "International Quality Management System certification ensuring consistent quality across all processes." },
                  { img: certNsic, title: "NSIC Certificate", desc: "National Small Industries Corporation certification recognizing our manufacturing capabilities." },
                  { img: certRailways, title: "Indian Railways", desc: "Approved vendor for precision components supplied to the Indian Railways network." },
                ].map((cert, i) => (
                  <div key={i} className="bg-card rounded-xl border border-border/30 p-5 hover:shadow-md transition-all duration-300">
                    <div className="bg-muted/20 rounded-lg p-3 mb-4 flex items-center justify-center h-28 overflow-hidden">
                      <Image src={cert.img} alt={cert.title} className="w-full h-full object-contain" width={300} height={300} />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-1.5">{cert.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT PAGE ===== */}
        <section className="print-page relative py-16 md:py-24 overflow-hidden print:py-10">
          <div className="absolute inset-0 bg-foreground" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, white 60px, white 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, white 60px, white 61px)' }} />
          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Image src="/patel-precision-logo-new.png" alt="Patel Precision Pvt Ltd company logo" className="h-16 w-auto mx-auto mb-8" width={200} height={64} />
              <h2 className="text-3xl md:text-4xl font-bold text-background mb-2">Get In Touch</h2>
              <p className="text-background/40 text-sm mb-10 max-w-md mx-auto">Ready to discuss your precision machining requirements? Contact us for a consultation.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
                <div className="flex flex-col items-center gap-3 p-5 bg-background/5 rounded-xl border border-background/10">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-background font-medium">+91 98208 08852</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-5 bg-background/5 rounded-xl border border-background/10">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-background font-medium">rakesh@patelprecision.com</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-5 bg-background/5 rounded-xl border border-background/10">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-background font-medium text-xs leading-relaxed">A16/5, Harihar Corporation, Dapode, Bhiwandi-421302, Maharashtra</span>
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-background/10">
                <p className="text-background/25 text-xs">www.patelprecision.com · Precision Engineering Since 1999</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="print:hidden">
        <Footer />
        <FloatingButtons />
      </div>

      {/* Print styles — premium A4 layout */}
      <style>{`
        @media print {
          html, body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden { display: none !important; }

          @page {
            margin: 18mm 14mm 20mm 14mm;
            size: A4 portrait;
            @bottom-center {
              content: "Patel Precision Pvt Ltd  ·  Company Profile  ·  Page " counter(page) " of " counter(pages);
              font-size: 8pt;
              color: #6b7280;
              font-family: 'Inter', sans-serif;
              letter-spacing: 0.05em;
            }
            @top-right {
              content: "www.patelprecision.com";
              font-size: 8pt;
              color: #9ca3af;
              font-family: 'Inter', sans-serif;
              letter-spacing: 0.08em;
            }
          }
          /* Cover page: no header/footer */
          @page :first {
            margin: 0;
            @bottom-center { content: ""; }
            @top-right { content: ""; }
          }

          nav, .sticky, header { display: none !important; }

          .profile-content {
            font-size: 10pt;
            line-height: 1.55;
            color: #1f2937;
          }

          .print-page {
            break-before: page;
            page-break-before: always;
            overflow: hidden;
            padding-top: 8mm !important;
            padding-bottom: 8mm !important;
          }
          .print-page:first-child {
            break-before: auto;
            page-break-before: auto;
            padding: 0 !important;
            height: 297mm !important;
            max-height: 297mm !important;
          }

          .product-card {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
            margin-bottom: 6mm;
            border: 1px solid #e5e7eb !important;
            box-shadow: 0 1px 2px rgba(0,0,0,0.04) !important;
          }

          .img-card {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
            border: 1px solid #e5e7eb !important;
          }

          img {
            max-width: 100% !important;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }

          table {
            font-size: 9pt;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
            border-collapse: collapse;
          }
          table th, table td {
            border-bottom: 1px solid #e5e7eb !important;
          }

          .grid {
            break-inside: avoid !important;
          }

          /* Premium typographic hierarchy */
          h1 { letter-spacing: -0.02em; }
          h2 {
            font-size: 18pt !important;
            letter-spacing: -0.01em;
            margin-bottom: 4mm !important;
          }
          h3 { font-size: 13pt !important; letter-spacing: -0.005em; }
          h4 { font-size: 11pt !important; }
          p { orphans: 3; widows: 3; }

          /* Section eyebrow labels */
          .text-primary.uppercase {
            letter-spacing: 0.25em !important;
          }

          /* Subtle divider under each section title */
          section > div > div > h2 {
            padding-bottom: 3mm;
            border-bottom: 1px solid #e5e7eb;
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyProfile;