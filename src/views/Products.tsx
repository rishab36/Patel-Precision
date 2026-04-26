"use client";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ProductCategories from "@/components/ProductCategories";
import { AnimatedContainer } from "@/components/ui/animated-container";
import ImageLightbox from "@/components/ImageLightbox";
import { useTranslation } from "react-i18next";

import { productData, materialShowcaseImages } from "@/data/products";

import Image from "next/image";
const Products = () => {
  const { t } = useTranslation();
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Products - Precision CNC Machined Components & Parts"
        description="Explore Patel Precision's comprehensive range of precision machined products including CNC turned parts, air compressor valves, pipe fittings, spray nozzles, cable glands, fasteners, automotive components, and custom machined parts."
        keywords="precision machined products, CNC parts, machined components, CNC turned parts, air compressor parts, pipe fittings, spray nozzles, cable glands, automotive components, fasteners, stainless steel flanges, industrial rollers, junction boxes, medical components, manifold blocks"
        path="/products"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }]}
      />
      <TopBar />
      <MainNav />
      <main>
        {/* Hero */}
        <section className="relative h-[280px] md:h-[380px] overflow-hidden">
          <Image src="/products-hero-new.png" alt="Precision CNC Machined Products by Patel Precision" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-15">
            <span className="text-background text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase rotate-[-15deg]">
              www.patelprecision.com
            </span>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">
                  {t("products.heroTag")}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">
                  {t("products.heroTitle")}
                </h1>
                <p className="text-background/80 text-base md:text-lg">
                  {t("products.heroDesc")}
                </p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <AnimatedContainer animation="slide-up" className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">{t("about.ourStory")}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("products.whatWeManufacture")}</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
                <p>{t("productsPage.storyP1")}</p>
                <p>{t("productsPage.storyP2")}</p>
                <p>{t("productsPage.storyP3")}</p>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        <ProductCategories />

        {/* Products Grid */}
        <section id="catalog" className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {productData.map((product, index) => (
                <AnimatedContainer key={index} animation="scale" delay={index * 40}>
                  <button
                    onClick={() => setLightboxImage({ src: product.image, alt: t(`productGrid.p${index}.title`) })}
                    className="group block w-full h-full bg-card rounded-xl overflow-hidden border border-border/30 hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-left flex flex-col cursor-pointer"
                  >
                    <div className="relative bg-muted/10 p-3 md:p-4 flex items-center justify-center h-52 md:h-64 overflow-hidden">
                      <Image src={product.image} alt={t(`productGrid.p${index}.title`)} loading="lazy" className="object-contain transition-transform duration-500 group-hover:scale-110" fill />
                      {/* Zoom indicator */}
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
                          Click to Zoom
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-3 md:px-4 md:py-4 flex-1 flex flex-col">
                      <h3 className="text-sm md:text-base font-semibold text-foreground mb-1.5 leading-snug">{t(`productGrid.p${index}.title`)}</h3>
                      <span className="text-[9px] md:text-[10px] text-primary font-semibold uppercase tracking-wider mb-2">{product.category}</span>
                      <p className="text-xs md:text-[13px] text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </button>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </section>

        {/* Material Showcase */}
        <section className="py-14 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <AnimatedContainer animation="fade-up" className="text-center mb-10">
              <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">Material Expertise</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Materials We Work With</h2>
            </AnimatedContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {materialShowcaseImages.map((item, index) => (
                <AnimatedContainer key={index} animation="scale" delay={index * 80}>
                  <div
                    className="group cursor-pointer rounded-xl overflow-hidden border border-border/30 bg-card hover:shadow-lg transition-all duration-300"
                    onClick={() => setLightboxImage({ src: item.image, alt: item.title })}
                  >
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <Image src={item.image} alt={item.title} loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-110" fill />
                      {/* Zoom overlay */}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
                          Click to Zoom
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 text-center">
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </section>

        {lightboxImage && (
          <ImageLightbox image={lightboxImage.src} alt={lightboxImage.alt} onClose={() => setLightboxImage(null)} />
        )}

        {/* CTA */}
        <section className="py-14 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <AnimatedContainer animation="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                {t("products.customCTA")}
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                {t("productsPage.ctaDesc")}
              </p>
              <a
                href="/contact"
                className="inline-block bg-background text-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-background/90 transition-all duration-300 shadow-lg text-sm"
              >
                {t("common.requestQuote")}
              </a>
            </AnimatedContainer>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Products;