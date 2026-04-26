import type { Metadata } from "next";
import View from "@/views/services/CableGlands";
import { generateSEOMetadata } from "@/lib/seo-metadata";
import { getProductSEOConfig } from "@/lib/product-seo-config";

const seoConfig = getProductSEOConfig("cable-glands");

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
      title: "Cable Glands Manufacturer",
      description: "Brass and stainless steel cable glands.",
    };

export default function Page() {
  return <View />;
}
