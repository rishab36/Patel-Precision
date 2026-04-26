"use client";
import { Award, Target, Globe, Users, Clock, Shield } from "lucide-react";
import { AnimatedContainer } from "@/components/ui/animated-container";

const highlights = [
  { icon: Award, title: "ISO 9001:2015", description: "Certified quality management system", stat: "Certified" },
  { icon: Target, title: "High Precision", description: "CpK over 1.6 on critical dimensions", stat: "CpK 1.6+" },
  { icon: Globe, title: "Global Clients", description: "Serving domestic and international markets", stat: "20+", statLabel: "Countries" },
  { icon: Users, title: "Expert Team", description: "Skilled workforce with years of experience", stat: "50+", statLabel: "Engineers" },
  { icon: Clock, title: "24×7 Operations", description: "Factory works in shifts round the clock", stat: "24/7", statLabel: "Production" },
  { icon: Shield, title: "Zero Defect", description: "We strive for zero defect quality products", stat: "100%", statLabel: "Inspected" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedContainer animation="clip-up" className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Your Trusted Manufacturing Partner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with decades of expertise to deliver exceptional results.
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {highlights.map((item, index) => (
            <AnimatedContainer
              key={item.title}
              animation="slide-up"
              delay={index * 80}
              className="group bg-card rounded-xl p-6 md:p-7 border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="text-2xl md:text-3xl font-bold text-primary">{item.stat}</span>
                {item.statLabel && <span className="text-xs text-muted-foreground">{item.statLabel}</span>}
              </div>
              <h3 className="text-base font-bold text-foreground mb-1.5">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;