"use client";
import { Mail, Phone, MapPin, ArrowRight, Send, Download, Linkedin, Facebook, Globe, Building2, Store, Search } from "lucide-react";
import { Link } from "@/lib/router-shim";
import { useTranslation } from "react-i18next";

import Image from "next/image";
const services = [
  { name: "Precision Machined Components", href: "/precision-machined-components" },
  { name: "CNC Machining Services", href: "/cnc-machining-services" },
  { name: "Air Compressor Parts", href: "/air-compressor-parts" },
  { name: "5 Axis Machining", href: "/5-axis-machining-services" },
  { name: "VMC Machining", href: "/vmc-machining-services" },
  { name: "CNC Job Work", href: "/cnc-job-work" },
  { name: "CNC Turned Parts", href: "/cnc-turned-parts" },
  { name: "CNC Machined Components", href: "/cnc-machined-components" },
  { name: "Precision Machining", href: "/precision-machining" },
];

const products = [
  { name: "Air Compressor Valves", href: "/air-compressor-valves" },
  { name: "Pipe Fittings", href: "/pipe-fittings" },
  { name: "Industrial Rollers", href: "/rollers" },
  { name: "Cable Glands", href: "/cable-glands" },
  { name: "Fasteners", href: "/fasteners" },
  { name: "SS Flanges", href: "/stainless-steel-flanges" },
  { name: "Junction Boxes", href: "/junction-boxes" },
  { name: "Spray Nozzles", href: "/spray-nozzles" },
  { name: "Automotive Components", href: "/automotive-components" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/patel-precision-pvt-ltd/?originalSubdomain=in", Icon: Linkedin, brand: "#0A66C2" },
  { name: "Facebook", href: "https://www.facebook.com/GayatriIndustries/", Icon: Facebook, brand: "#1877F2" },
  { name: "IndiaMART", href: "https://www.indiamart.com/patel-precision/", Icon: Store, brand: "#F36F21" },
  { name: "TradeIndia", href: "https://www.tradeindia.com/patel-precision-pvt-ltd-9753315/", Icon: Globe, brand: "#E63946" },
  { name: "JustDial", href: "https://www.justdial.com/Bhiwandi/Patel-Precision-Pvt-Ltd-Head-Office-Dapode/022PXX22-XX22-210511145818-U4M4_BZDET", Icon: Search, brand: "#FFCC00" },
  { name: "Exporters India", href: "https://www.exportersindia.com/gayatri-industries-thane/", Icon: Building2, brand: "#16A34A" },
];

const Footer = () => {
  const { t } = useTranslation();
  const handleLinkClick = () => window.scrollTo(0, 0);

  const quickLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.products"), href: "/products" },
    { name: t("nav.infrastructure"), href: "/infrastructure" },
    { name: t("nav.certifications"), href: "/certifications" },
    { name: t("nav.gallery"), href: "/gallery" },
    { name: t("nav.contact"), href: "/contact" },
    { name: t("nav.careers"), href: "/careers" },
    { name: "Company Profile", href: "/company-profile" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-5 md:px-12 py-14 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-4">
              {t("footerCta.tag")}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-4">
              {t("footerCta.title")}
            </h2>
            <p className="text-background/60 text-sm md:text-base mb-8 max-w-xl mx-auto">
              {t("footerCta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                aria-label="Contact Patel Precision for CNC machining inquiries"
              >
                <Send className="w-4 h-4" />
                {t("footerCta.contactUs")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/request-quote"
                onClick={handleLinkClick}
                className="inline-flex items-center gap-2 border border-background/20 hover:border-background/40 text-background/80 hover:text-background font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300"
                aria-label="Request a free quote for precision components"
              >
                {t("footerCta.requestQuote")}
              </Link>
              <a
                href="/Patel_Precision_Company_Profile.pdf"
                download
                className="inline-flex items-center gap-2 border border-primary/30 hover:border-primary/60 text-primary hover:text-primary font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300"
                aria-label="Download Patel Precision company profile PDF"
              >
                <Download className="w-4 h-4" />
                {t("footerCta.downloadProfile")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-5 md:px-12 pt-14 pb-16 md:pt-16 md:pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Company Info */}
          <div className="col-span-2">
            <Link to="/" onClick={handleLinkClick} className="inline-block mb-6">
              <div className="inline-flex items-center justify-center bg-background rounded-xl px-5 py-3 shadow-lg">
                <Image src="/patel-precision-logo-new.png" alt="Patel Precision - CNC Machining Solutions" className="h-16 md:h-20 w-auto" width={259} height={96} loading="lazy" />
              </div>
            </Link>
            <p className="text-background text-base leading-relaxed mb-8 max-w-sm">
              {t("footer.companyDesc")}
            </p>
            
            <div className="space-y-4 text-base text-background">
              <a href="tel:+919820808852" className="flex items-center gap-3 hover:text-primary transition-colors duration-300" aria-label="Call Patel Precision">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-primary/70" />
                </div>
                +91 98208 08852
              </a>
              <a href="mailto:rakesh@patelprecision.com" className="flex items-center gap-3 hover:text-primary transition-colors duration-300" aria-label="Email Patel Precision">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-primary/70" />
                </div>
                rakesh@patelprecision.com
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-primary/70" />
                </div>
                <span>A16/5, Harihar Corporation,<br />Dapode, Bhiwandi-421302,<br />Maharashtra, India</span>
              </div>
              <a
                href="https://www.google.com/maps/place/Patel+Precision+Pvt+Ltd+-CNC+Machining/@19.2459888,73.0411616,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bdd3df7d891b:0x34d688a1d9d2b5d8!8m2!3d19.2459838!4d73.0460325!16s%2Fg%2F11btwrx701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-background/50 hover:text-primary border border-background/10 hover:border-primary/30 rounded-full px-4 py-2 transition-all mt-2"
                aria-label="View Patel Precision factory location on Google Maps"
              >
                <MapPin className="w-3 h-3" />
                {t("footer.viewOnMaps")}
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-background/60">Find us on</h4>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map(({ name, href, Icon, brand }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-xs font-medium text-background/70 hover:text-background bg-background/5 hover:bg-background/10 border border-background/10 hover:border-background/20 rounded-full pl-2 pr-3.5 py-1.5 transition-all duration-200"
                    aria-label={`Visit Patel Precision on ${name}`}
                    title={name}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: brand }}
                    >
                      <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.2} />
                    </span>
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-background">{t("footer.services")}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} onClick={handleLinkClick} className="text-background hover:text-primary transition-colors duration-300 text-sm leading-relaxed flex items-center gap-2 group" aria-label={`Learn about our ${service.name}`}>
                    <span className="w-3 h-px bg-background/25 group-hover:bg-primary group-hover:w-5 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-background">{t("footer.products")}</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link to={product.href} onClick={handleLinkClick} className="text-background hover:text-primary transition-colors duration-300 text-sm leading-relaxed flex items-center gap-2 group" aria-label={`View our ${product.name}`}>
                    <span className="w-3 h-px bg-background/25 group-hover:bg-primary group-hover:w-5 transition-all duration-300" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-background">{t("footer.company")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} onClick={handleLinkClick} className="text-background hover:text-primary transition-colors duration-300 text-sm leading-relaxed flex items-center gap-2 group" aria-label={`Go to ${link.name} page`}>
                    <span className="w-3 h-px bg-background/25 group-hover:bg-primary group-hover:w-5 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-background/8">
        <div className="container mx-auto px-6 py-6">
          <p className="text-background/60 text-sm text-center">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-background/50 text-sm text-center mt-2">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/rishab-patel-451751284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Rishab Patel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;