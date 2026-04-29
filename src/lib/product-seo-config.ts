/**
 * SEO Product Configuration for all 20+ service/product pages
 * Maps to the existing app routes and applies ranking site SEO strategy
 */

export interface ProductSEOConfig {
  keyword: string;
  alternateKeywords?: string[];
  shortDescription: string;
  fullDescription: string;
  slug: string;
  category: string;
  route: string;
}

export const productSEOConfigs: ProductSEOConfig[] = [
  {
    keyword: "Precision Machined Components",
    alternateKeywords: ["CNC Precision Components", "Precision Turned Parts"],
    shortDescription: "Precision machined components manufacturers & suppliers in India",
    fullDescription: "We offer high-precision engineered components built to exacting tolerances for critical applications across aerospace, automotive, and industrial sectors. Manufacturers, suppliers, and exporters of precision components in Mumbai, Navi Mumbai, Thane, India.",
    slug: "precision-machined-components",
    category: "Precision Parts",
    route: "/precision-machined-components",
  },
  {
    keyword: "CNC Machining Services",
    alternateKeywords: ["CNC Job Work", "CNC Machining Providers"],
    shortDescription: "CNC machining services manufacturers & providers in India",
    fullDescription: "Professional CNC machining services including milling, drilling, boring, and tapping operations. We provide manufacturing solutions from prototype runs to full production volumes. Manufacturers and service providers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "cnc-machining-services",
    category: "CNC Milling",
    route: "/cnc-machining-services",
  },
  {
    keyword: "Air Compressor Parts",
    alternateKeywords: ["Compressor Components", "Compressor Valve Assembly"],
    shortDescription: "Air compressor parts manufacturers & suppliers in India",
    fullDescription: "Precision machined air compressor components including valve plates, pistons, cylinders, and connecting rods. Every component manufactured to OEM specifications with superior surface finish. Manufacturers and suppliers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "air-compressor-parts",
    category: "Compressor Parts",
    route: "/air-compressor-parts",
  },
  {
    keyword: "5 Axis Machining Services",
    alternateKeywords: ["5-Axis CNC Machining", "Multi-Axis Machining"],
    shortDescription: "5-axis machining services manufacturers in India",
    fullDescription: "Complex component manufacturing on 5-axis VMC machines enabling intricate geometries and contoured surfaces. Ideal for aerospace, medical, and high-precision industrial applications. Manufacturers and service providers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "5-axis-machining-services",
    category: "5-Axis Machining",
    route: "/5-axis-machining-services",
  },
  {
    keyword: "VMC Machining Services",
    alternateKeywords: ["Vertical Machining Center", "VMC Manufacturing"],
    shortDescription: "VMC machining services manufacturers & providers in India",
    fullDescription: "Advanced vertical machining center services for precise component manufacturing. State-of-the-art VMC machines capable of handling complex 3D profiles. Manufacturers and service providers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "vmc-machining-services",
    category: "CNC Milling",
    route: "/vmc-machining-services",
  },
  {
    keyword: "CNC Turned Parts",
    alternateKeywords: ["CNC Turning Services", "CNC Turned Components"],
    shortDescription: "CNC turned parts manufacturers & suppliers in India",
    fullDescription: "High-volume CNC turned components such as shafts, bushings, pins, and rotational parts with excellent concentricity and surface finish. Bar-fed automatic production with sub-micron tolerances. Manufacturers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "cnc-turned-parts",
    category: "CNC Turning",
    route: "/cnc-turned-parts",
  },
  {
    keyword: "CNC Machined Components",
    alternateKeywords: ["CNC Components", "Custom CNC Parts"],
    shortDescription: "CNC machined components manufacturers in India",
    fullDescription: "Custom CNC machined components for diverse industrial applications, from simple turned parts to complex multi-operation assemblies. Reverse engineering and material certification available. Manufacturers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "cnc-machined-components",
    category: "Precision Parts",
    route: "/cnc-machined-components",
  },
  {
    keyword: "Cable Glands",
    alternateKeywords: ["Brass Cable Glands", "Stainless Steel Cable Glands"],
    shortDescription: "Cable glands manufacturers & suppliers in India",
    fullDescription: "Precision manufactured cable glands in brass, stainless steel, and nickel plated variants for industrial, marine, and hazardous area applications. IP68 weatherproof and ATEX/IECEx compliant designs. Manufacturers and suppliers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "cable-glands",
    category: "Specialty Parts",
    route: "/cable-glands",
  },
  {
    keyword: "Air Compressor Valves",
    alternateKeywords: ["Compressor Valve Plates", "Air Valve Components"],
    shortDescription: "Air compressor valves manufacturers & suppliers in India",
    fullDescription: "OEM-grade air compressor valves and components with superior surface finish and dimensional accuracy. Compatible with major compressor brands. Manufacturers and suppliers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "air-compressor-valves",
    category: "Compressor Parts",
    route: "/air-compressor-valves",
  },
  {
    keyword: "Pipe Fittings",
    alternateKeywords: ["Industrial Pipe Fittings", "Brass Fittings"],
    shortDescription: "Pipe fittings manufacturers & suppliers in India",
    fullDescription: "Industrial grade pipe fittings such as elbows, tees, couplings, and adapters in stainless steel and brass. NPT, BSP, and metric threads available. Manufacturers and suppliers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "pipe-fittings",
    category: "Pipe Fittings",
    route: "/pipe-fittings",
  },
  {
    keyword: "Junction Boxes",
    alternateKeywords: ["Electrical Enclosures", "Control Boxes"],
    shortDescription: "Junction boxes manufacturers & suppliers in India",
    fullDescription: "Precision machined junction box enclosures for electrical and industrial applications. IP65/IP67 rated designs with custom drilling and tapping options. Manufacturers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "junction-boxes",
    category: "Enclosures",
    route: "/junction-boxes",
  },
  {
    keyword: "Precision Machining",
    alternateKeywords: ["Precision Machining Services", "Precision Manufacturing"],
    shortDescription: "Precision machining services manufacturers in India",
    fullDescription: "Advanced precision machining services delivering complex geometries with tight tolerances. Multi-axis CNC turning capabilities with in-house quality lab equipped with CMM inspection. Manufacturers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "precision-machining",
    category: "CNC Turning",
    route: "/precision-machining",
  },
  {
    keyword: "Automotive Components",
    alternateKeywords: ["Auto Parts Manufacturing", "Automotive Precision Parts"],
    shortDescription: "Automotive components manufacturers & suppliers in India",
    fullDescription: "Precision manufactured automotive components for OEM and aftermarket applications. High-volume production with stringent quality standards. Manufacturers and suppliers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "automotive-components",
    category: "Automotive",
    route: "/automotive-components",
  },
  {
    keyword: "Spray Nozzles",
    alternateKeywords: ["Tank Cleaning Nozzles", "Industrial Nozzles"],
    shortDescription: "Spray nozzles manufacturers & suppliers in India",
    fullDescription: "Precision engineered spray nozzles and tank cleaning nozzles for industrial applications. High-performance designs for optimal spray patterns. Manufacturers and suppliers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "spray-nozzles",
    category: "Specialty Parts",
    route: "/spray-nozzles",
  },
  {
    keyword: "CNC Job Work",
    alternateKeywords: ["Job Work Services", "CNC Job Manufacturing"],
    shortDescription: "CNC job work services manufacturers in India",
    fullDescription: "Professional CNC job work services for contract manufacturing and custom components. Flexible lot sizes from prototypes to production volumes. Manufacturers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "cnc-job-work",
    category: "CNC Services",
    route: "/cnc-job-work",
  },
  {
    keyword: "Stainless Steel Flanges",
    alternateKeywords: ["SS Flanges", "Flange Manufacturing"],
    shortDescription: "Stainless steel flanges manufacturers & suppliers in India",
    fullDescription: "Precision machined stainless steel flanges for piping systems and industrial applications. Various flange types and sizes available. Manufacturers and suppliers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "stainless-steel-flanges",
    category: "Pipe Fittings",
    route: "/stainless-steel-flanges",
  },
  {
    keyword: "Industrial Rollers",
    alternateKeywords: ["Precision Rollers", "Conveyor Rollers"],
    shortDescription: "Industrial rollers manufacturers & suppliers in India",
    fullDescription: "Precision manufactured industrial rollers for conveyor systems and machinery applications. Custom sizes and materials available. Manufacturers and suppliers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "rollers",
    category: "Industrial Parts",
    route: "/rollers",
  },
  {
    keyword: "Fasteners",
    alternateKeywords: ["Industrial Fasteners", "Precision Fasteners"],
    shortDescription: "Fasteners manufacturers & suppliers in India",
    fullDescription: "High-quality industrial fasteners including bolts, screws, and nuts. Precision manufactured to exact specifications. Manufacturers and suppliers in Mumbai, Navi Mumbai, Thane, India.",
    slug: "fasteners",
    category: "Fasteners",
    route: "/fasteners",
  },
];

// Export a map for easy lookup by slug
export const productSEOMap = new Map(
  productSEOConfigs.map(config => [config.slug, config])
);

/**
 * Get SEO config by route
 */
export function getProductSEOConfig(slug: string): ProductSEOConfig | undefined {
  return productSEOMap.get(slug);
}
