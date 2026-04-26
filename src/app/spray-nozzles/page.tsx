import type { Metadata } from "next";
import View from "@/views/services/SprayNozzles";
import { generateSEOMetadata } from "@/lib/seo-metadata";
import { getProductSEOConfig } from "@/lib/product-seo-config";

const seoConfig = getProductSEOConfig("spray-nozzles");

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
      title: "Spray Nozzles Manufacturer",
      description: "Precision spray nozzles for industrial applications.",
    };

export default function Page() {
  return <View />;
}
