import type { Metadata } from "next";
import View from "@/views/services/FiveAxisMachining";
import { generateSEOMetadata } from "@/lib/seo-metadata";
import { getProductSEOConfig } from "@/lib/product-seo-config";

const seoConfig = getProductSEOConfig("5-axis-machining-services");

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
      title: "5 Axis Machining Services",
      description: "Advanced 5-axis CNC machining for complex geometries.",
    };

export default function Page() {
  return <View />;
}
