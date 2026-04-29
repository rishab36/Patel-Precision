import type { Metadata } from "next";
import View from "@/views/services/AirCompressorValves";
import { generateSEOMetadata } from "@/lib/seo-metadata";
import { getProductSEOConfig } from "@/lib/product-seo-config";

const seoConfig = getProductSEOConfig("air-compressor-valves");

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
      title: "Air Compressor Valves Manufacturer",
      description: "Precision air compressor valves and valve plates.",
    };

export default function Page() {
  return <View />;
}
