"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-shim";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";







import Image from "next/image";
import bgAbout from "@/assets/bg-about-section.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const panelImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const AboutSection = () => {
  const { t } = useTranslation();
  const [angle, setAngle] = useState(0);
  const lastScrollY = useRef(window.scrollY);
  const angleRef = useRef(0);
  const velocityRef = useRef(0);
  const isHovering = useRef(false);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      velocityRef.current = -delta * 0.25;
      lastScrollY.current = currentY;
    };

    const animate = () => {
      if (isHovering.current) {
        velocityRef.current = 0.6;
      }
      angleRef.current += velocityRef.current;
      velocityRef.current *= 0.97;
      if (Math.abs(velocityRef.current) < 0.01) velocityRef.current = 0;
      setAngle(angleRef.current);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleMouseEnter = () => { isHovering.current = true; };
  const handleMouseLeave = () => { isHovering.current = false; };

  const faceAngle = 360 / 5;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/cnc-inside.jpg" alt="CNC machining facility and precision equipment at Patel Precision" className="object-cover blur-md scale-110" loading="lazy" fill />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-12 lg:px-20">
          <AnimatedContainer animation="fade-up" className="text-center mb-14">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              {t("aboutSection.tag")}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-background">
              {t("aboutSection.title")}
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </AnimatedContainer>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedContainer animation="fade-up" delay={100} className="order-2 lg:order-1">
              <div className="bg-background/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-background/10">
                <p
                  className="text-background/80 text-sm md:text-base leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: t("aboutSection.description") }}
                />
                
                <Button
                  asChild
                  className="group bg-primary text-primary-foreground font-semibold px-8 py-5 text-sm shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link to="/about">
                    {t("aboutSection.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-up" delay={200} className="relative order-1 lg:order-2 flex items-center justify-center">
              <div
                className="prism-scene"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="prism"
                  style={{
                    transform: `rotateX(-15deg) rotateY(${angle}deg)`,
                  }}
                >
                  {panelImages.map((img, i) => (
                    <div
                      key={i}
                      className="prism-face"
                      style={{
                        transform: `rotateY(${i * faceAngle}deg) translateZ(var(--prism-tz))`,
                      }}
                    >
                      <Image src={img} alt={`Manufacturing ${i + 1}`} className="w-full h-full object-cover" loading="lazy" fill />
                      <div className="absolute inset-0 bg-primary/10" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>

      <style>{`
        .prism-scene {
          --prism-w: 160px;
          --prism-h: 220px;
          --prism-tz: 130px;
          width: var(--prism-w);
          height: var(--prism-h);
          perspective: 900px;
          margin: 0 auto;
          cursor: grab;
        }
        @media (min-width: 768px) {
          .prism-scene {
            --prism-w: 200px;
            --prism-h: 280px;
            --prism-tz: 165px;
          }
        }
        .prism {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .prism-face {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border: 1px solid hsl(var(--primary) / 0.3);
          border-radius: 6px;
          box-shadow: 0 0 20px hsl(var(--primary) / 0.1);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;