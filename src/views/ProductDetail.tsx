"use client";
import { useParams, Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { productData } from "@/data/products";

import Image from "next/image";
const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = productData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <MainNav />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title={`${product.title} - Patel Precision`}
        description={product.description}
        keywords={`${product.title}, ${product.category}, precision machining, CNC components`}
        path={`/products/${product.slug}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: product.title, url: `/products/${product.slug}` },
        ]}
      />
      <TopBar />
      <MainNav />
      <main>
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border/30">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 py-3">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{product.title}</span>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Image */}
              <AnimatedContainer animation="fade-up">
                <div className="bg-card rounded-2xl border border-border/30 overflow-hidden shadow-lg">
                  <div className="bg-muted/20 p-6 md:p-10 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="w-full max-h-[500px] object-contain" fill
                    />
                  </div>
                </div>
              </AnimatedContainer>

              {/* Content */}
              <AnimatedContainer animation="fade-up" delay={100}>
                <div>
                  <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/10 rounded-full">
                    {product.category}
                  </span>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-5">
                    {product.title}
                  </h1>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Key Features</h3>
                    <ul className="space-y-2.5">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold px-8">
                      <Link to="/request-quote">
                        Request Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="font-semibold px-8">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedContainer>
            </div>

            {/* Back link */}
            <AnimatedContainer animation="fade-up" delay={200} className="mt-12 pt-8 border-t border-border/30">
              <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
                <Link to="/products#catalog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Products
                </Link>
              </Button>
            </AnimatedContainer>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ProductDetail;