import type { Metadata } from "next";
import View from "@/views/services/PrecisionMachinedComponents";
import { generateSEOMetadata } from "@/lib/seo-metadata";
import { getProductSEOConfig } from "@/lib/product-seo-config";

const seoConfig = getProductSEOConfig("precision-machined-components");

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
      title: "Precision Machined Components",
      description: "High-quality precision machined components manufacturer",
    };

export default function Page() {
  return <View />;
}
