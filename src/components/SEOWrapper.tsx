import React from 'react';

interface SEOWrapperProps {
  children: React.ReactNode;
  keywords: string;
  className?: string;
  tag?: 'div' | 'section' | 'main' | 'header' | 'footer';
}

/**
 * SEO-rich wrapper component that adds alt and title attributes with keywords
 * Mimics the ranking website's approach of keyword embedding in element attributes
 */
export const SEOWrapper: React.FC<SEOWrapperProps> = ({
  children,
  keywords,
  className = '',
  tag: Tag = 'section',
}) => {
  const attributes = {
    className,
    alt: keywords,
    title: keywords,
  };

  return React.createElement(Tag, attributes, children);
};

/**
 * Generate location-based keywords for a product/service
 * Pattern: "Product, Product Manufacturers... in [Location]"
 */
export function generateProductLocationKeywords(
  productName: string,
  locations: string[] = ['Mumbai', 'Navi Mumbai', 'Thane', 'India']
): string {
  const suffixes = ['Manufacturers', 'Suppliers', 'Providers', 'Exporters'];
  const baseKeywords = [
    productName,
    ...suffixes.map(suffix => `${productName} ${suffix}`)
  ];
  
  const locationKeywords = locations.map(loc => 
    baseKeywords.map(kw => `${kw} in ${loc}`).join(', ')
  );
  
  return [
    baseKeywords.join(', '),
    ...locationKeywords
  ].join(', ');
}

/**
 * Create SEO-rich section with keywords
 */
export function createSEOSection(
  productName: string,
  componentContent: React.ReactNode,
  className: string = ''
): React.ReactNode {
  const keywords = generateProductLocationKeywords(productName);
  
  return (
    <SEOWrapper
      keywords={keywords}
      className={className}
      tag="section"
    >
      {componentContent}
    </SEOWrapper>
  );
}
