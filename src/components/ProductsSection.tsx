"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-shim";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";




















import Image from "next/image";
import bgProducts from "@/assets/bg-products-section.jpg";
import productsMain from "@/assets/products-main.jpg";
import productPrecisionMain from "@/assets/product-precision-main.png";
import productAirCompressor from "@/assets/product-air-compressor.png";
import productPipeFittings from "@/assets/product-pipe-fittings.png";
import productCncMachining from "@/assets/product-cnc-machining.png";
import productCncTurned from "@/assets/product-cnc-turned.png";
import product5Axis from "@/assets/product-5axis.png";
import productAutomotive from "@/assets/product-automotive.png";
import productRollers from "@/assets/product-rollers.png";
import productSsFlanges from "@/assets/product-ss-flanges.png";
import productSprayNozzles from "@/assets/product-spray-nozzles.png";
import productFasteners from "@/assets/product-fasteners.png";
import productCableGlands from "@/assets/product-cable-glands.png";
import productMedical from "@/assets/product-medical.png";
import productManifold from "@/assets/product-manifold.png";
import productCustomTurned from "@/assets/product-custom-turned.png";
import productJunctionBox from "@/assets/product-junction-box.png";
import productValvePlates from "@/assets/product-valve-plates.png";
import productDiamondPart from "@/assets/product-diamond-part.png";

const productImages = [
  productPrecisionMain, productAirCompressor, productPipeFittings, productCncMachining,
  productCncTurned, product5Axis, productAutomotive, productRollers, productSsFlanges,
  productSprayNozzles, productFasteners, productCableGlands, productMedical,
  productManifold, productCustomTurned, productJunctionBox, productValvePlates, productDiamondPart,
];

const productTitleKeys = [
  "carousel.precision", "carousel.airCompressor", "carousel.pipeFittings", "carousel.cncMachining",
  "carousel.cncTurned", "carousel.fiveAxis", "carousel.automotive", "carousel.rollers",
  "carousel.ssFlanges", "carousel.sprayNozzles", "carousel.fasteners", "carousel.cableGlands",
  "carousel.medical", "carousel.manifold", "carousel.customTurned", "carousel.junctionBoxes",
  "carousel.valvePlates", "carousel.complexParts",
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useTranslation();

  const products = productImages.map((image, i) => ({
    image,
    title: t(`productsSection.${productTitleKeys[i]}`),
  }));

  const scrollProducts = [...products, ...products];

  return (
    <section ref={ref} id="products" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/bg-products-section.jpg" alt="High-precision machined components and industrial parts" className="object-cover blur-sm scale-105" loading="lazy" fill />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-12 lg:px-20">
          <AnimatedContainer animation="fade-up" className="text-center mb-14">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">{t("productsSection.tag")}</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-background">{t("productsSection.title")}</h2>
          </AnimatedContainer>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-14">
            <AnimatedContainer animation="fade-up" delay={100} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image src="/products-main.jpg" alt="Precision manufactured components" className="w-full h-auto object-cover" width={1455} height={876} loading="lazy" />
              </div>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-up" delay={200}>
              <div className="bg-background/8 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-background/15">
                <p
                  className="text-background/70 text-sm md:text-base leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: t("productsSection.description") }}
                />
                <Button asChild className="group bg-primary text-primary-foreground font-semibold px-8 py-5 text-sm shadow-md hover:shadow-lg transition-all duration-300">
                  <Link to="/products">
                    {t("productsSection.viewProducts")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </AnimatedContainer>
          </div>

          <div className={`relative transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="overflow-hidden carousel-container">
              <div className="flex gap-3 md:gap-4 animate-scroll" style={{ width: 'fit-content' }}>
                {scrollProducts.map((product, index) => (
                  <div key={`${index}`} className="flex-shrink-0 w-32 md:w-44">
                    <Link to="/products" className="block group bg-card rounded-xl overflow-hidden border border-border/30 hover:shadow-lg transition-all duration-300">
                      <div className="aspect-square overflow-hidden relative bg-muted/10 p-2 flex items-center justify-center">
                        <Image src={product.image} alt={product.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" width={158} height={158} loading="lazy" />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end p-2 md:p-3">
                          <span className="text-background text-[10px] md:text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{product.title}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .carousel-container:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;