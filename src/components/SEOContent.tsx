"use client";
import { Link } from "@/lib/router-shim";
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/ui/animated-container";

interface SEOContentProps {
  title: string;
  description: string;
  keywords: string[];
  features: string[];
  applications: string[];
}

const SEOContent = ({ title, description, keywords, features, applications }: SEOContentProps) => {
  return (
    <section className="py-14 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fade-up" className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-5">{title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">{description}</p>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">Key Features</h3>
              <ul className="space-y-2.5">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">Applications</h3>
              <ul className="space-y-2.5">
                {applications.map((app, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {keywords.map((keyword, index) => (
              <span key={index} className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full">{keyword}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="sm" className="text-xs">
              <Link to="/contact">
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Request Quote
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="text-xs">
              <a href="mailto:rakesh@patelprecision.com">
                <Mail className="w-3.5 h-3.5 mr-1.5" />
                Email Us
              </a>
            </Button>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default SEOContent;