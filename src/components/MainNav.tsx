"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@/lib/router-shim";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
const allProductCategories = [
  { name: "Precision Machined Components", href: "/precision-machined-components" },
  { name: "CNC Machining Services", href: "/cnc-machining-services" },
  { name: "CNC Machined Components", href: "/cnc-machined-components" },
  { name: "Air Compressor Parts", href: "/air-compressor-parts" },
  { name: "5-Axis Machining Services", href: "/5-axis-machining-services" },
  { name: "VMC Machining Services", href: "/vmc-machining-services" },
  { name: "CNC Job Work", href: "/cnc-job-work" },
  { name: "Air Compressor Valves", href: "/air-compressor-valves" },
  { name: "Pipe Fittings", href: "/pipe-fittings" },
  { name: "Rollers", href: "/rollers" },
  { name: "Junction Boxes", href: "/junction-boxes" },
  { name: "CNC Turned Parts", href: "/cnc-turned-parts" },
  { name: "Automotive Components", href: "/automotive-components" },
  { name: "Spray Nozzles", href: "/spray-nozzles" },
  { name: "Cable Glands", href: "/cable-glands" },
  { name: "Machining Services", href: "/machining-services" },
  { name: "Precision Machining", href: "/precision-machining" },
  { name: "Fasteners", href: "/fasteners" },
  { name: "Stainless Steel Flanges", href: "/stainless-steel-flanges" },
  { name: "Compressor Valve Assembly", href: "/compressor-valve-assembly" },
  { name: "Medical Components", href: "/products" },
  { name: "Manifold Blocks", href: "/products" },
  { name: "Custom Turned Components", href: "/products" },
];

const seoRoutes = allProductCategories.map(c => c.href);

const MainNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [dir, setDir] = useState<"l" | "r" | null>(null);
  const [tabCenter, setTabCenter] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setSelected(null);
    setMobileOpen(null);
  }, [location.pathname]);

  const navItems = [
    { name: t("nav.home"), href: "/" },
    {
      name: t("nav.about"),
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: t("nav.ourApproach"), href: "/our-approach" },
        { name: t("nav.countriesServed"), href: "/countries-served" },
        { name: t("nav.industriesServed"), href: "/industries-served" },
      ],
    },
    {
      name: t("nav.products"),
      href: "/products",
      hasDropdown: true,
      isMegaMenu: true,
    },
    {
      name: t("nav.infrastructure"),
      href: "/infrastructure",
      hasDropdown: true,
      dropdownItems: [
        { name: t("nav.qualityAssurance"), href: "/quality-assurance" },
        { name: t("nav.specialProcesses"), href: "/special-processes" },
      ],
    },
    { name: t("nav.certifications"), href: "/certifications" },
    { name: t("nav.gallery"), href: "/gallery" },
    { name: t("nav.contact"), href: "/contact" },
    { name: t("nav.careers"), href: "/careers" },
  ];

  const dropdownItems = navItems.filter(i => i.hasDropdown);

  const isNavItemActive = (item: typeof navItems[0]) => {
    if (item.href === "/products") return location.pathname === "/products" || seoRoutes.includes(location.pathname);
    if (item.href === "/about") return ["/about", "/our-approach", "/countries-served", "/industries-served"].includes(location.pathname);
    if (item.href === "/infrastructure") return ["/infrastructure", "/quality-assurance", "/special-processes"].includes(location.pathname);
    return location.pathname === item.href;
  };

  const handleSetSelected = (val: string | null) => {
    if (selected && val) {
      const prevIdx = dropdownItems.findIndex(i => i.name === selected);
      const nextIdx = dropdownItems.findIndex(i => i.name === val);
      setDir(prevIdx > nextIdx ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  // Update tab center position
  useEffect(() => {
    if (selected) {
      const tab = document.getElementById(`nav-tab-${selected}`);
      const container = tabsContainerRef.current;
      if (tab && container) {
        const tabRect = tab.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setTabCenter(tabRect.left + tabRect.width / 2 - containerRect.left);
      }
    }
  }, [selected]);

  const col1 = allProductCategories.slice(0, 8);
  const col2 = allProductCategories.slice(8, 16);
  const col3 = allProductCategories.slice(16);

  const renderDropdownContent = (item: typeof navItems[0]) => {
    if (item.isMegaMenu) {
      return (
        <div className="w-[700px]">
          <div className="grid grid-cols-3 gap-x-4 gap-y-0">
            {[col1, col2, col3].map((col, ci) =>
              col.map((cat) => (
                <Link
                  key={cat.href + cat.name + ci}
                  to={cat.href}
                  onClick={() => { handleSetSelected(null); window.scrollTo(0, 0); }}
                  className="block px-3 py-[7px] text-[12px] text-foreground/60 hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-150"
                >
                  {cat.name}
                </Link>
              ))
            )}
          </div>
          <div className="border-t border-foreground/8 mt-3 pt-3">
            <Link
              to="/products"
              onClick={() => { handleSetSelected(null); window.scrollTo(0, 0); }}
              className="block text-center text-primary font-medium text-[12px] hover:underline"
              aria-label="View all precision machined products and CNC components"
            >
              {t("nav.viewAllProducts")} →
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="w-52">
        <div className="space-y-0.5">
          {item.dropdownItems?.map((dropdownItem) => (
            <Link
              key={dropdownItem.name}
              to={dropdownItem.href}
              onClick={() => { handleSetSelected(null); window.scrollTo(0, 0); }}
              className="block px-3 py-2.5 text-[13px] text-foreground/60 hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-150"
            >
              {dropdownItem.name}
            </Link>
          ))}
        </div>
        <div className="border-t border-foreground/8 mt-1 pt-1">
          <Link
            to={item.href}
            onClick={() => { handleSetSelected(null); window.scrollTo(0, 0); }}
            className="block px-3 py-2.5 text-[13px] text-primary font-medium hover:underline"
            aria-label={`View all ${item.name} pages`}
          >
            {t("common.viewAll")} →
          </Link>
        </div>
      </div>
    );
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/10" : "bg-background/90 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-[80px]">
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
            <Image src="/patel-precision-logo-new.png" alt="Patel Precision - CNC Machining Solutions" className="h-14 md:h-20 w-auto" width={216} height={80} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center flex-1 justify-end" ref={navRef} onMouseLeave={() => handleSetSelected(null)}>
            <div ref={tabsContainerRef} className="relative flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  id={item.hasDropdown ? `nav-tab-${item.name}` : undefined}
                  to={item.href}
                  onClick={() => { window.scrollTo(0, 0); if (!item.hasDropdown) handleSetSelected(null); }}
                  onMouseEnter={() => item.hasDropdown ? handleSetSelected(item.name) : handleSetSelected(null)}
                  className={`relative px-3 xl:px-4 py-2 text-[12px] xl:text-[13px] font-medium tracking-wide uppercase transition-all duration-200 flex items-center gap-1 rounded-full hover:bg-foreground/5 ${
                    selected === item.name
                      ? "bg-foreground/5 text-foreground"
                      : isNavItemActive(item)
                        ? "text-primary hover:text-primary"
                        : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${selected === item.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>
              ))}

              {/* Shifting Dropdown — positioned under hovered tab */}
              <AnimatePresence>
                {selected && (
                  <motion.div
                    id="nav-dropdown-overlay"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ left: tabCenter }}
                    className="absolute top-[calc(100%+12px)] rounded-xl border border-foreground/8 bg-background shadow-xl shadow-black/10 p-4 z-50"
                  >
                    {/* Bridge to prevent gap hover loss */}
                    <div className="absolute -top-[12px] left-0 right-0 h-[12px]" />

                    {/* Nub/arrow — always centered above dropdown */}
                    <span
                      className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border-l border-t border-foreground/8 bg-background"
                    />

                    {/* Content with directional slide */}
                    {dropdownItems.map((item) => (
                      <div key={item.name} className="overflow-hidden">
                        {selected === item.name && (
                          <motion.div
                            initial={{ opacity: 0, x: dir === "l" ? 80 : dir === "r" ? -80 : 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                          >
                            {renderDropdownContent(item)}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Button asChild size="sm" className="ml-4 bg-primary text-primary-foreground hover:bg-primary/85 text-xs font-semibold tracking-wide uppercase h-9 px-6 transition-colors duration-200">
              <Link to="/request-quote" aria-label="Request a free quote for CNC machining services">{t("nav.getQuote")}</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10 text-foreground hover:bg-foreground/10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 pt-3 pb-5 border-t border-foreground/10">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg ${isNavItemActive(item) ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"}`}
                        onClick={() => { if (!item.hasDropdown) { setIsMobileMenuOpen(false); window.scrollTo(0, 0); } }}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <button className="px-4 py-3 text-foreground/50" onClick={() => setMobileOpen(mobileOpen === item.name ? null : item.name)}>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileOpen === item.name ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.hasDropdown && mobileOpen === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 pl-4 border-l-2 border-primary/20 max-h-[300px] overflow-y-auto py-1">
                            {item.isMegaMenu ? allProductCategories.map((cat) => (
                              <Link key={cat.href + cat.name} to={cat.href} className="block py-2.5 px-2 text-xs text-foreground/50 hover:text-primary hover:bg-primary/5 rounded transition-colors" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>{cat.name}</Link>
                            )) : item.dropdownItems?.map((d) => (
                              <Link key={d.name} to={d.href} className="block py-2.5 px-2 text-xs text-foreground/50 hover:text-primary hover:bg-primary/5 rounded transition-colors" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>{d.name}</Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                <div className="pt-3 mt-2 border-t border-foreground/10 px-4">
                  <Button asChild size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold h-11">
                    <Link to="/request-quote" onClick={() => setIsMobileMenuOpen(false)}>{t("nav.getQuote")}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MainNav;