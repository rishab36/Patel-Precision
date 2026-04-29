"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Shield, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-shim";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "ja", label: "日本語" },
  { code: "de", label: "Deutsch" },
];

const TopBar = () => {
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setShowLangMenu(false);
  };

  return (
    <div className="bg-foreground text-background/80 py-2 px-4 relative z-[60]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Link to="/certifications" className="flex items-center gap-1.5 text-primary font-medium hover:text-primary/80 transition-colors duration-300" aria-label="View our ISO 9001:2015 certification details">
            <Shield className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t("topbar.iso")}</span>
          </Link>
          <div className="hidden md:block w-px h-3 bg-background/20" />
          <a href="mailto:rakesh@patelprecision.com" className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300" aria-label="Email Patel Precision at rakesh@patelprecision.com">
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">rakesh@patelprecision.com</span>
          </a>
          <a href="tel:+919820808852" className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300" aria-label="Call Patel Precision at +91 98208 08852">
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">+91 98208 08852</span>
          </a>
          <a
            href="https://www.google.com/maps/search/Harihar+Corporation+Dapode+Bhiwandi+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
            aria-label="View Patel Precision location on Google Maps"
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>Mumbai, Maharashtra, India</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300 text-xs"
              aria-label="Change website language"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{currentLanguage?.label}</span>
            </button>
            {showLangMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowLangMenu(false)} />
                <div className="absolute right-0 top-full mt-2 bg-foreground border border-background/10 rounded-lg shadow-xl z-50 min-w-[140px] py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-3 py-2.5 text-xs flex items-center gap-2 transition-colors duration-200 ${
                        i18n.language === lang.code
                          ? "text-primary bg-background/5"
                          : "text-background/60 hover:text-background hover:bg-background/5"
                      }`}
                    >
                      <span className="flex-1">{lang.label}</span>
                      {i18n.language === lang.code && <Check className="w-3 h-3 text-primary" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <Button asChild size="sm" className="bg-primary text-primary-foreground font-semibold text-xs h-7 px-3">
            <Link to="/request-quote" aria-label="Request a free quote for CNC machining">{t("topbar.getQuote")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;