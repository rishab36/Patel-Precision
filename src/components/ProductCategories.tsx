"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";






















import Image from "next/image";
import productPrecisionMain from "@/assets/product-precision-main.png";
import productCncMachining from "@/assets/product-cnc-machining.png";
import productCncComponents from "@/assets/product-cnc-components.png";
import productAirCompressor from "@/assets/product-air-compressor.png";
import product5Axis from "@/assets/product-5axis.png";
import productCncTurned from "@/assets/product-cnc-turned.png";
import productPrecisionMachining from "@/assets/product-precision-machining.png";
import productValve from "@/assets/product-valve.jpg";
import productPipeFittings from "@/assets/product-pipe-fittings.png";
import productRollers from "@/assets/product-rollers.png";
import productJunctionBox from "@/assets/product-junction-box.png";
import productCncTurnedNew from "@/assets/product-cnc-turned-new.png";
import productAutomotive from "@/assets/product-automotive.png";
import productSprayNozzles from "@/assets/product-spray-nozzles.png";
import productCableGlands from "@/assets/product-cable-glands.png";
import productMachiningServices from "@/assets/product-machining-services.png";
import productFasteners from "@/assets/product-fasteners.png";
import productSsFlanges from "@/assets/product-ss-flanges.png";
import productCompressorValvePlatesUser from "@/assets/product-compressor-valve-plates-user.png";
import productMedical from "@/assets/product-medical.png";
import productManifold from "@/assets/product-manifold.png";
import productCustomTurnedComponentsUser from "@/assets/product-custom-turned-components-user.png";

const categoryItems = [
  { image: productPrecisionMain, href: "/precision-machined-components" },
  { image: productCncMachining, href: "/cnc-machining-services" },
  { image: productCncComponents, href: "/cnc-machined-components" },
  { image: productAirCompressor, href: "/air-compressor-parts" },
  { image: product5Axis, href: "/5-axis-machining-services" },
  { image: productAutomotive, href: "/vmc-machining-services" },
  { image: productPrecisionMachining, href: "/cnc-job-work" },
  { image: productValve, href: "/air-compressor-valves" },
  { image: productPipeFittings, href: "/pipe-fittings" },
  { image: productRollers, href: "/rollers" },
  { image: productJunctionBox, href: "/junction-boxes" },
  { image: productCncTurnedNew, href: "/cnc-turned-parts" },
  { image: productCncTurned, href: "/automotive-components" },
  { image: productSprayNozzles, href: "/spray-nozzles" },
  { image: productCableGlands, href: "/cable-glands" },
  { image: productMachiningServices, href: "/machining-services" },
  { image: productPrecisionMachining, href: "/precision-machining" },
  { image: productFasteners, href: "/fasteners" },
  { image: productSsFlanges, href: "/stainless-steel-flanges" },
  { image: productCompressorValvePlatesUser, href: "/products" },
  { image: productMedical, href: "/products" },
  { image: productManifold, href: "/products" },
  { image: productCustomTurnedComponentsUser, href: "/products" },
] as const;

const ProductCategories = () => {
  const { t } = useTranslation();

  return (
    <section className="py-14 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <AnimatedContainer animation="fade-up" className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            {t("productCats.sectionTag")}
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            {t("productCats.sectionTitle")}
          </h2>
        </AnimatedContainer>

        <div className="space-y-16 md:space-y-20">
          {categoryItems.map((item, index) => (
            <AnimatedContainer key={index} animation="fade-up" delay={100}>
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image src={item.image} alt={t(`productCats.cat${index}.title`)} className="w-full h-auto object-cover" width={500} height={400} />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{t(`productCats.cat${index}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">{t(`productCats.cat${index}.desc`)}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {[0, 1, 2, 3].map((itemIdx) => (
                      <span key={itemIdx} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {t(`productCats.cat${index}.item${itemIdx}`)}
                      </span>
                    ))}
                  </div>
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
                    {t("common.learnMore")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;