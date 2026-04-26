/**
 * Generates multi-location SEO metadata matching the ranking HTML website structure
 * Pattern: [Product], [Product] Manufacturers, [Product] Suppliers... in [Location]
 */

export interface LocationMetaData {
  title: string;
  description: string;
  keywords: string;
}

export const LOCATIONS = ['Mumbai', 'Navi Mumbai', 'Thane', 'India'];
export const LOCATION_KEYWORDS = {
  Mumbai: 'in Mumbai',
  'Navi Mumbai': 'in Navi Mumbai',
  Thane: 'in Thane',
  India: 'in India'
};

/**
 * Generate multi-location title and keywords
 * Format: "Product, Product Manufacturers, Product Suppliers... in [Location]"
 */
export function generateMultiLocationKeywords(
  productName: string,
  suffix: string = 'Manufacturers, Suppliers, Providers, Exporters'
): string[] {
  const baseKeyword = `${productName}, ${productName} ${suffix}`;
  
  return [
    baseKeyword, // Base without location
    ...LOCATIONS.map(location => `${baseKeyword} ${LOCATION_KEYWORDS[location as keyof typeof LOCATION_KEYWORDS]}`)
  ];
}

/**
 * Generate multi-location descriptions
 */
export function generateMultiLocationDescriptions(
  productName: string,
  suffix: string = 'Manufacturers, Suppliers, Providers, Exporters'
): string[] {
  const baseDescription = `We Offer ${productName}, ${productName} ${suffix}`;
  
  return [
    baseDescription, // Base without location
    ...LOCATIONS.map(location => `${baseDescription} ${LOCATION_KEYWORDS[location as keyof typeof LOCATION_KEYWORDS]}`)
  ];
}

/**
 * Generate JSON-LD schema for Organization with location-specific keywords
 */
export function generateOrganizationSchema(productName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Patel Precision Pvt. Ltd.',
    url: 'https://patelprecision.com',
    logo: 'https://patelprecision.com/patel-precision-logo-new.png',
    description: `Leading manufacturer of ${productName}. ISO 9001:2015 certified.`,
    foundingDate: '1999',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'A16/5, Harihar Corporation, Dapode',
      addressLocality: 'Bhiwandi',
      addressRegion: 'Maharashtra',
      postalCode: '421302',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98208-08852',
      contactType: 'Customer Service',
      email: 'rakesh@patelprecision.com'
    },
    sameAs: [
      'https://www.facebook.com/Patel-Precision-Pvt-Ltd-101593001311731/',
      'https://twitter.com/PvtPatel',
      'https://www.linkedin.com/company/patel-precision-pvt-ltd/'
    ],
    numberOfEmployees: '25-100'
  };
}

/**
 * Generate Product schema with location variations
 */
export function generateProductSchema(
  productName: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    description: description,
    manufacturer: {
      '@type': 'Organization',
      name: 'Patel Precision Pvt. Ltd.',
      url: 'https://patelprecision.com'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '250'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      offerCount: '10'
    }
  };
}
