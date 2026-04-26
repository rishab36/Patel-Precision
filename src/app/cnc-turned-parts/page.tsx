import type { Metadata } from "next";
import View from "@/views/services/CNCTurnedParts";
import { generateSEOMetadata } from "@/lib/seo-metadata";
import { getProductSEOConfig } from "@/lib/product-seo-config";

const seoConfig = getProductSEOConfig("cnc-turned-parts");

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
      title: "CNC Turned Parts Manufacturer",
      description: "Precision CNC turned parts for rotational components.",
    };

export default function Page() {
  return <View />;
}
