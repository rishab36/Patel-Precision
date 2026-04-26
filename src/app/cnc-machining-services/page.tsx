import type { Metadata } from "next";
import View from "@/views/services/CNCMachiningServices";
import { generateSEOMetadata } from "@/lib/seo-metadata";
import { getProductSEOConfig } from "@/lib/product-seo-config";

const seoConfig = getProductSEOConfig("cnc-machining-services");

export const metadata: Metadata = seoConfig
  ? generateSEOMetadata({
      keyword: seoConfig.keyword,
      alternateKeywords: seoConfig.alternateKeywords,
      shortDescription: seoConfig.shortDescription,
      fullDescription: seoConfig.fullDescription,
      slug: seoConfig.slug,
      category: seoConfig.category,
    })
  : {
      title: "CNC Machining Services",
      description: "Multi-axis CNC machining services for complex precision components.",
    };

export default function Page() {
  return <View />;
}
