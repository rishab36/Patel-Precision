"use client";
import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle, Mail, Phone, MapPin, HelpCircle } from "lucide-react";

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Matching ranking site's floating CTAs pattern
  const ctaButtons = [
    {
      icon: Mail,
      label: "Email Enquiry",
      href: "/contact#enquiry",
      bgColor: "bg-blue-600 hover:bg-blue-700",
      title: "Send us an enquiry",
    },
    {
      icon: Phone,
      label: "Call Request",
      href: "/contact#call",
      bgColor: "bg-green-600 hover:bg-green-700",
      title: "Request a call",
    },
    {
      icon: HelpCircle,
      label: "What We Offer",
      href: "/products",
      bgColor: "bg-purple-600 hover:bg-purple-700",
      title: "View our services",
    },
    {
      icon: MapPin,
      label: "Sitemap",
      href: "/products",
      bgColor: "bg-indigo-600 hover:bg-indigo-700",
      title: "Browse all pages",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5">
      {/* Expandable CTA Menu - Following ranking site pattern */}
      {showMenu && (
        <div className="flex flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-2">
          {ctaButtons.map((btn, idx) => {
            const Icon = btn.icon;
            return (
              <a
                key={idx}
                href={btn.href}
                title={btn.title}
                aria-label={btn.label}
                className={`w-12 h-12 rounded-full ${btn.bgColor} text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-110`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      )}

      {/* Toggle Menu Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        title="Quick actions menu"
        aria-label="Toggle quick actions menu"
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-110"
      >
        <MessageCircle className="w-5 h-5" />
      </button>

      {/* Back to Top - Classic style */}
      <button
        onClick={scrollToTop}
        className={`w-10 h-10 rounded-full bg-foreground/80 text-background shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-foreground ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        title="Back to top"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FloatingButtons;