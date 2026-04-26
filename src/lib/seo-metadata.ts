/**
 * SEO Metadata Helper - Generates ranking site style metadata with multi-location keywords
 * Pattern from #1 ranking HTML site: Location variations (Mumbai, Navi Mumbai, Thane, India)
 * with Keywords: Manufacturers, Suppliers, Providers, Exporters
 */

const LOCATIONS = ["Mumbai", "Navi Mumbai", "Thane", "India"];
const DESCRIPTORS = ["Manufacturers", "Suppliers", "Providers", "Exporters"];

export interface MetadataConfig {
  keyword: string;
  alternateKeywords?: string[];
  shortDescription: string;
  fullDescription: string;
  slug: string;
  category?: string;
}

/**
 * Generate SEO title following ranking site pattern
 * Pattern: "Keyword, Keyword Manufacturers, Keyword Suppliers, Keyword Providers, Keyword Exporters in Mumbai, in Navi Mumbai, in Thane, in India"
 */
export function generateTitle(config: MetadataConfig): string {
  const { keyword, alternateKeywords = [] } = config;
  const keywords = [keyword, ...alternateKeywords];
  
  // Build keyword variations with descriptors
  let titleParts = [keyword];
  keywords.forEach(k => {
    titleParts.push(`${k} ${DESCRIPTORS[0]}`); // Manufacturers
    titleParts.push(`${k} ${DESCRIPTORS[1]}`); // Suppliers
  });
  
  // Add locations
  const locationStr = LOCATIONS.map(loc => `in ${loc}`).join(", ");
  
  return `${titleParts.join(", ")} ${locationStr}`;
}

/**
 * Generate SEO description following ranking site pattern
 * Pattern: "We Offer [Keywords] in [Locations]"
 */
export function generateDescription(config: MetadataConfig): string {
  const { keyword, alternateKeywords = [] } = config;
  const keywords = [keyword, ...(alternateKeywords || [])];
  
  // Build keyword variations with descriptors
  let descKeywords = [];
  keywords.forEach(k => {
    descKeywords.push(k);
    descKeywords.push(`${k} ${DESCRIPTORS[0]}`); // Manufacturers
    descKeywords.push(`${k} ${DESCRIPTORS[1]}`); // Suppliers
    descKeywords.push(`${k} ${DESCRIPTORS[2]}`); // Providers
  });
  
  // Add location variations
  const locationVariations = [
    `in ${LOCATIONS[0]}, in ${LOCATIONS[1]}, in ${LOCATIONS[2]}, in ${LOCATIONS[3]}`, // All locations
    `in ${LOCATIONS[0]}`,
    `in ${LOCATIONS[1]}`,
    `in ${LOCATIONS[2]}`,
  ];
  
  // Primary description
  const baseDesc = `We Offer ${descKeywords.slice(0, 5).join(", ")} ${locationVariations[0]}`;
  
  return baseDesc.length > 160 
    ? baseDesc.substring(0, 157) + "..."
    : baseDesc;
}

/**
 * Generate meta keywords following ranking site pattern
 * Returns multiple keyword variations with location modifiers
 */
export function generateKeywords(config: MetadataConfig): string {
  const { keyword, alternateKeywords = [] } = config;
  const keywords = [keyword, ...(alternateKeywords || [])];
  
  let allKeywords: string[] = [];
  
  // Base keyword variations
  keywords.forEach(k => {
    allKeywords.push(k);
    DESCRIPTORS.forEach(desc => {
      allKeywords.push(`${k} ${desc}`);
    });
  });
  
  // Location-based keyword variations
  keywords.forEach(k => {
    LOCATIONS.forEach(loc => {
      allKeywords.push(`${k} in ${loc}`);
      DESCRIPTORS.forEach(desc => {
        allKeywords.push(`${k} ${desc} in ${loc}`);
      });
    });
  });
  
  return allKeywords.join(", ");
}

/**
 * Generate Open Graph meta tags
 */
export function generateOpenGraphMeta(config: MetadataConfig, canonicalUrl: string) {
  return {
    title: `${config.keyword} - Patel Precision`,
    description: config.fullDescription,
    url: `https://patelprecision.com${canonicalUrl}`,
    type: "website",
    image: {
      url: `https://patelprecision.com/og-${config.slug}.jpg`,
      width: 1200,
      height: 630,
    },
  };
}

/**
 * Generate complete metadata object for Next.js
 * Usage: export const metadata = generateSEOMetadata(config);
 */
export function generateSEOMetadata(config: MetadataConfig) {
  const title = generateTitle(config);
  const description = generateDescription(config);
  
  return {
    title: title.substring(0, 60),
    description: description,
    keywords: generateKeywords(config),
    alternates: { canonical: `/${config.slug}` },
    robots: "index, follow",
    revisitAfter: "7 days",
    openGraph: generateOpenGraphMeta(config, `/${config.slug}`),
    twitter: {
      card: "summary_large_image",
      title: title.substring(0, 60),
      description: description,
    },
  };
}
