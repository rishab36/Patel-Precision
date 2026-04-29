import type { Metadata } from "next";
import View from "@/views/services/JunctionBoxes";
import { generateSEOMetadata } from "@/lib/seo-metadata";
import { getProductSEOConfig } from "@/lib/product-seo-config";

const seoConfig = getProductSEOConfig("junction-boxes");

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
      title: "Junction Boxes Manufacturer",
      description: "Precision-machined junction boxes and electrical enclosures.",
    };

export default function Page() {
  return <View />;
}
