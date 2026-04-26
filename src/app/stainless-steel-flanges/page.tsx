import type { Metadata } from "next";
import View from "@/views/services/StainlessSteelFlanges";
import { generateSEOMetadata } from "@/lib/seo-metadata";
import { getProductSEOConfig } from "@/lib/product-seo-config";

const seoConfig = getProductSEOConfig("stainless-steel-flanges");

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
      title: "Stainless Steel Flanges Manufacturer",
      description: "ASME/ANSI/DIN stainless steel flanges.",
    };

export default function Page() {
  return <View />;
}
