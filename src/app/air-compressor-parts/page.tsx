import type { Metadata } from "next";
import View from "@/views/services/AirCompressorParts";
import { generateSEOMetadata } from "@/lib/seo-metadata";
import { getProductSEOConfig } from "@/lib/product-seo-config";

const seoConfig = getProductSEOConfig("air-compressor-parts");

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
      title: "Air Compressor Parts Manufacturer",
      description: "Precision air compressor parts including valves, plates, and assemblies.",
    };

export default function Page() {
  return <View />;
}
