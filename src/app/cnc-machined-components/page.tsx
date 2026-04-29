import type { Metadata } from "next";
import View from "@/views/services/CNCMachinedComponents";
import { generateSEOMetadata } from "@/lib/seo-metadata";
import { getProductSEOConfig } from "@/lib/product-seo-config";

const seoConfig = getProductSEOConfig("cnc-machined-components");

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
      title: "CNC Machined Components",
      description: "Custom CNC machined components manufactured to tight tolerances.",
    };

export default function Page() {
  return <View />;
}
