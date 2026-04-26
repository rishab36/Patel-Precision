






































































import productPrecisionMain from "@/assets/product-precision-main.png";
import productAirCompressor from "@/assets/product-air-compressor.png";
import productPipeFittings from "@/assets/product-pipe-fittings.png";
import productPipeFittingsNew from "@/assets/product-pipe-fittings-new.webp";
import productJunctionBox from "@/assets/product-junction-box.png";
import productPrecisionMachining from "@/assets/product-precision-machining.png";
import productCncMachining from "@/assets/product-cnc-machining.png";
import productCncTurned from "@/assets/product-cnc-turned.png";
import productCableGlands from "@/assets/product-cable-glands.png";
import productCncComponents from "@/assets/product-cnc-components.png";
import product5Axis from "@/assets/product-5axis.png";
import productCncTurnedNew from "@/assets/product-cnc-turned-new.png";
import productAutomotive from "@/assets/product-automotive.png";
import productRollers from "@/assets/product-rollers.png";
import productSsFlanges from "@/assets/product-ss-flanges.png";
import productAirCompressorNew from "@/assets/product-air-compressor-new.webp";
import productSprayNozzles from "@/assets/product-spray-nozzles.png";
import productSprayNozzles2 from "@/assets/product-spray-nozzles-2.png";
import productFasteners from "@/assets/product-fasteners.png";
import productMachiningServices from "@/assets/product-machining-services.png";
import productMedical from "@/assets/product-medical.png";
import productManifold from "@/assets/product-manifold.png";
import productCustomTurnedComponentsUser from "@/assets/product-custom-turned-components-user.png";
import productCompressorValvePlatesUser from "@/assets/product-compressor-valve-plates-user.png";
import productTurnedParts from "@/assets/product-turned-parts.png";
import productDiamondPart from "@/assets/product-diamond-part.png";
import productUser1 from "@/assets/product-user-1.png";
import productUser2 from "@/assets/product-user-2.png";
import productMildSteel from "@/assets/product-mild-steel.png";
import productBrass from "@/assets/product-brass.png";
import productCarbonSteel from "@/assets/product-carbon-steel.png";
import productCiCasting from "@/assets/product-ci-casting.png";
import productCustomTurned from "@/assets/product-custom-turned.png";
import productValve from "@/assets/product-valve.jpg";
import productValvePlates from "@/assets/product-valve-plates.png";
import productSprayBalls from "@/assets/product-spray-balls.png";
import productTankCleaning from "@/assets/product-tank-cleaning.png";

export interface Product {
  image: any;
  title: string;
  category: string;
  slug: string;
  description: string;
  features: string[];
}

export const productData: Product[] = [
  {
    image: productPrecisionMain,
    title: "Precision Components",
    category: "Precision Parts",
    slug: "precision-components",
    description: "We manufacture high-precision engineered components built to exacting tolerances for critical applications across aerospace, automotive, and industrial sectors. Each part is produced on advanced CNC machinery and verified through stringent inspection processes to ensure consistent quality and dependable performance in every batch we deliver.",
    features: ["Tolerances up to ±0.005mm", "CpK over 1.6", "100% inspection on critical dimensions", "Wide range of materials including SS, Aluminium, Brass"],
  },
  {
    image: productAirCompressor,
    title: "Compressor Valve Assembly",
    category: "Compressor Parts",
    slug: "air-compressor-parts",
    description: "We produce precision machined air compressor components including valve plates, pistons, cylinders, and connecting rods. Every component is manufactured to OEM specifications with superior surface finish and dimensional accuracy, and we work with a wide range of materials to support replacement and original equipment requirements across major compressor brands.",
    features: ["OEM-grade quality", "Superior surface finish (Ra 0.4)", "Pressure-tested components", "Compatible with major compressor brands"],
  },
  {
    image: productPipeFittingsNew,
    title: "Pipe Fittings",
    category: "Pipe Fittings",
    slug: "pipe-fittings",
    description: "We manufacture industrial grade pipe fittings such as elbows, tees, couplings, and adapters in stainless steel, brass, and other engineering materials. Our fittings are produced in standard and custom sizes with NPT, BSP, and metric threads, and are pressure tested to meet demanding piping system requirements across process industries.",
    features: ["NPT, BSP & metric threads", "Stainless steel & brass options", "Pressure rated to industrial standards", "Custom sizes available on request"],
  },
  {
    image: productJunctionBox,
    title: "Junction Boxes",
    category: "Enclosures",
    slug: "junction-boxes",
    description: "We produce precision machined junction box enclosures for electrical and industrial applications where reliability and protection are essential. Each enclosure is built for durability and corrosion resistance, with custom drilling, tapping, and finishing options available to suit a wide range of installation environments and ingress protection requirements.",
    features: ["IP65/IP67 rated designs", "Corrosion-resistant materials", "Custom drilling and tapping", "Powder-coated finish options"],
  },
  {
    image: productPrecisionMachining,
    title: "Precision Machining",
    category: "CNC Turning",
    slug: "precision-machining-parts",
    description: "We offer advanced precision machining services that deliver complex geometries with tight tolerances on both small and large batch production runs. Our multi-axis CNC turning capabilities are supported by an in-house quality lab equipped with CMM inspection, ensuring every component meets the dimensional and functional requirements of the application.",
    features: ["Multi-axis CNC turning", "Complex geometries achievable", "Batch sizes from 1 to 100,000+", "In-house quality lab with CMM"],
  },
  {
    image: productCncMachining,
    title: "CNC Machining",
    category: "CNC Milling",
    slug: "cnc-machining",
    description: "We provide full-service CNC machining including milling, drilling, boring, and tapping operations on modern VMC machines capable of handling complex 3D profiles. Our team manages CAD and CAM programming in-house and supports everything from prototype runs to full production volumes with consistent repeatability across batches.",
    features: ["3, 4 & 5-axis milling", "High-speed machining capability", "Prototype to production volumes", "CAD/CAM programming in-house"],
  },
  {
    image: productCncTurned,
    title: "CNC Turned Parts",
    category: "CNC Turning",
    slug: "cnc-turned-parts",
    description: "We manufacture high-volume CNC turned components such as shafts, bushings, pins, and other rotational parts with excellent concentricity and surface finish. Our turning centers are equipped with live tooling and bar feeders, allowing efficient automatic production across a wide diameter range with sub-micron concentricity where required.",
    features: ["Diameter range: 3mm to 300mm", "Live tooling for milling on lathe", "Bar-fed automatic production", "Sub-micron concentricity achievable"],
  },
  {
    image: productCableGlands,
    title: "Cable Glands",
    category: "Specialty Parts",
    slug: "cable-glands",
    description: "We produce precision manufactured cable glands in brass, stainless steel, and nickel plated variants for industrial, marine, and hazardous area applications. Our designs cover IP68 weatherproof ratings as well as ATEX and IECEx compliant variants, and we offer metric and PG thread options to suit international specifications.",
    features: ["Brass, SS & nickel-plated options", "IP68 weatherproof ratings", "ATEX/IECEx compliant designs", "Metric & PG thread options"],
  },
  {
    image: productCncComponents,
    title: "CNC Components",
    category: "Precision Parts",
    slug: "cnc-components",
    description: "We manufacture custom CNC machined components for diverse industrial applications, ranging from simple turned parts to complex multi-operation assemblies. Reverse engineering, material certification, and first article inspection reports are all part of our standard offering, ensuring traceable, repeatable quality at competitive pricing.",
    features: ["Custom engineered solutions", "Reverse engineering capability", "Material certifications provided", "First article inspection reports"],
  },
  {
    image: product5Axis,
    title: "5-Axis Machined Parts",
    category: "5-Axis Machining",
    slug: "5-axis-machined-parts",
    description: "We manufacture complex components on our 5-axis VMC machines, enabling intricate geometries and contoured surfaces in a single setup. This approach reduces setup time, improves accuracy, and is ideally suited for aerospace, medical, and high precision industrial applications where tight tolerances and challenging shapes are routine requirements.",
    features: ["Simultaneous 5-axis machining", "Complex contoured surfaces", "Reduced setup time & improved accuracy", "Aerospace-grade quality standards"],
  },
  {
    image: productCncTurnedNew,
    title: "CNC Turned Components",
    category: "CNC Turning",
    slug: "cnc-turned-components",
    description: "We produce precision CNC turned components on advanced turning centers equipped with live tooling, supported by automated bar feeding for efficient batch production. Secondary operations are handled in-house, making our parts well suited for automotive, hydraulic, pneumatic, and general engineering applications that demand consistent batch quality.",
    features: ["High-precision turning centers", "Secondary operations in-house", "Automated bar feeding systems", "Consistent batch quality"],
  },
  {
    image: productAutomotive,
    title: "Automotive Components",
    category: "Automotive",
    slug: "automotive-components",
    description: "We manufacture precision machined automotive parts that meet PPAP and IATF 16949 requirements, serving leading OEMs and Tier 1 suppliers. From engine and transmission components to underbody parts, every component is supported by SPC controlled processes, full traceability, and high volume production capability backed by complete documentation.",
    features: ["PPAP documentation", "SPC-controlled processes", "Traceability on every part", "High-volume production capability"],
  },
  {
    image: productRollers,
    title: "Industrial Rollers",
    category: "Rollers",
    slug: "industrial-rollers",
    description: "We produce precision ground industrial rollers for printing, packaging, textile, and conveyor applications, manufactured to tight cylindricity and surface finish requirements. Hard chrome plating, dynamic balancing, and custom profiles or tapers are available on request, allowing rollers to be tailored to specific machinery and process needs.",
    features: ["Precision cylindrical grinding", "Hard chrome plating available", "Dynamic balancing on request", "Custom profiles & tapers"],
  },
  {
    image: productSsFlanges,
    title: "Stainless Steel Flanges",
    category: "Custom Components",
    slug: "stainless-steel-flanges",
    description: "We manufacture CNC machined stainless steel flanges in standard and custom specifications across grades such as 304, 316, 316L, and duplex stainless steel. Our flanges are produced to ANSI, DIN, and JIS standards, with custom bore sizes and bolt patterns available for specialized piping and process applications.",
    features: ["ANSI, DIN & JIS standards", "All SS grades available", "Pressure-rated designs", "Custom bore & bolt patterns"],
  },
  {
    image: productAirCompressorNew,
    title: "Compressor Valve Assembly",
    category: "Compressor Parts",
    slug: "compressor-valve-assembly",
    description: "We manufacture air compressor valve assemblies for the replacement market, covering specifications such as ELGI 100 dia, ELGI 60 dia, Kirloskar Cr105, 90Ds, and 100Ds among others. Precision lapping, polishing, spring steel valve strips, and complete in-house assembly and testing ensure dependable replacement parts for all major brands.",
    features: ["Precision lapping & polishing", "Spring steel valve strips", "Assembly & testing in-house", "Replacement parts for all brands"],
  },
  {
    image: productSprayNozzles,
    title: "Spray Nozzles",
    category: "Specialty Parts",
    slug: "spray-nozzles",
    description: "We produce precision machined spray nozzles for industrial, agricultural, and fire protection applications in brass, stainless steel, and specialty alloys. Full cone, flat fan, and hollow cone patterns are available, and every nozzle is flow tested to specification with hardened materials and custom orifice sizes available for abrasive service.",
    features: ["Full cone, flat fan & hollow cone", "Flow-tested to specifications", "Hardened materials for abrasion resistance", "Custom orifice sizes available"],
  },
  {
    image: productFasteners,
    title: "Fasteners",
    category: "Fastening Solutions",
    slug: "fasteners",
    description: "We manufacture high strength precision fasteners including bolts, studs, nuts, and custom threaded components from certified raw materials with full traceability. Grades 8.8, 10.9, and 12.9 are routinely supplied along with custom thread forms and pitches, supported by in-house heat treatment and salt spray tested protective coatings.",
    features: ["Grade 8.8, 10.9 & 12.9 available", "Custom thread forms & pitches", "Heat treatment in-house", "Salt spray tested coatings"],
  },
  {
    image: productMachiningServices,
    title: "Machining Services",
    category: "CNC Services",
    slug: "machining-services",
    description: "We provide comprehensive CNC machining services including turning, milling, grinding, and assembly under one roof. Our end to end manufacturing approach covers everything from design for manufacturability support and rapid prototyping through to full scale production runs, with flexible batch sizes that suit both small projects and large recurring orders.",
    features: ["One-stop machining solution", "Design for manufacturability support", "Rapid prototyping services", "Flexible batch sizes"],
  },
  {
    image: productMedical,
    title: "Medical Components",
    category: "Medical",
    slug: "medical-components",
    description: "We deliver critical precision components for medical devices, including surgical instruments and diagnostic parts. Every component is produced using biocompatible materials under controlled processes that meet international medical manufacturing standards, ensuring the cleanliness, traceability, and dimensional accuracy required for sensitive medical applications.",
    features: ["Biocompatible materials", "Surgical instrument components", "Diagnostic device parts", "International medical standards compliance"],
  },
  {
    image: productManifold,
    title: "Manifold Blocks",
    category: "Hydraulic Components",
    slug: "manifold-blocks",
    description: "We design and machine manifold blocks for fluid and air control systems, offering compact and leak free integration for complex hydraulic or pneumatic circuits. Each block is produced to exacting standards with multiple ports and high flow capacity, supporting demanding applications where reliability and system efficiency are essential.",
    features: ["Hydraulic & pneumatic circuits", "Leak-free integration", "High-flow operations", "Compact multi-port designs"],
  },
  {
    image: productCustomTurnedComponentsUser,
    title: "Custom Turned Components",
    category: "Custom Parts",
    slug: "custom-turned-components",
    description: "We manufacture precision turned parts ranging from intricate micro components to robust heavy duty parts, serving industries such as automotive, agriculture, and medical. To deliver complete production ready solutions, we also offer value added services including heat treatments such as hardening, tempering, and carburizing along with surface treatments like hard chrome plating, anodizing, nitriding, and electropolishing through our network of certified suppliers.",
    features: ["Micro to heavy-duty parts", "Heat treatments available", "Surface treatments (chrome, anodizing, nitriding)", "Multi-industry applications"],
  },
  {
    image: productCompressorValvePlatesUser,
    title: "Compressor Valve Plates",
    category: "Compressor Parts",
    slug: "compressor-valve-plates",
    description: "We manufacture precision machined compressor valve plates and rings in a wide range of sizes and materials. Each plate is produced with precision lapping for optimal sealing performance and is made from high grade spring steel, ensuring long service life as a reliable OEM compatible replacement in reciprocating compressors.",
    features: ["Multiple sizes available", "Precision lapping finish", "High-grade spring steel", "OEM replacement compatible"],
  },
  {
    image: productSprayNozzles2,
    title: "Industrial Spray Nozzles",
    category: "Spray Systems",
    slug: "industrial-spray-nozzles",
    description: "We produce a wide range of industrial spray nozzles in brass, stainless steel, and engineering plastics for applications including cooling, washing, and coating. Full cone and flat fan patterns are available with custom flow rates and multiple thread types, allowing each nozzle to be matched to the specific process and installation requirement.",
    features: ["Full cone & flat fan patterns", "Brass, SS & plastic options", "Custom flow rates", "Multiple thread types"],
  },
  {
    image: productTurnedParts,
    title: "Precision Turned Parts",
    category: "CNC Turning",
    slug: "precision-turned-parts",
    description: "We manufacture a comprehensive range of precision CNC turned parts in brass, stainless steel, aluminium, and specialty alloys for diverse industrial applications. Multi material capability combined with tight tolerance control supports both high volume production and specialized custom specifications across automotive, electrical, and general engineering sectors.",
    features: ["Multi-material capability", "Tight tolerances", "High-volume production", "Custom specifications"],
  },
  {
    image: productDiamondPart,
    title: "Complex Machined Parts",
    category: "Precision Parts",
    slug: "complex-machined-parts",
    description: "We manufacture highly complex multi faceted precision components using advanced 5-axis CNC technology for specialized industrial applications. Mirror finish surfaces, complex angular features, and tight dimensional control are routinely achieved on a single setup, supporting demanding designs that would be difficult or impossible on conventional machines.",
    features: ["5-axis machined geometry", "Mirror-finish surfaces", "Complex angular features", "Tight dimensional control"],
  },
  {
    image: productUser1,
    title: "Precision Engineered Parts",
    category: "Precision Parts",
    slug: "precision-engineered-parts",
    description: "We produce high quality precision engineered components on advanced CNC machinery for demanding industrial applications. Our work covers tight tolerance machining across multiple material options, with custom specifications supported from prototype through to series production for clients who require dependable, repeatable engineered parts.",
    features: ["Advanced CNC machining", "Tight tolerances", "Multiple material options", "Custom specifications"],
  },
  {
    image: productUser2,
    title: "Custom CNC Components",
    category: "Custom Parts",
    slug: "custom-cnc-components",
    description: "We manufacture bespoke CNC machined components designed to your exact specifications for specialized applications. Each project is supported from prototype through to production with complete quality assurance, allowing clients to source one off custom parts and recurring batch production from a single experienced supplier at competitive pricing.",
    features: ["Made to specification", "Prototype to production", "Quality assured", "Competitive pricing"],
  },
];

// Material showcase images (no descriptions, display only)
export const materialShowcaseImages = [
  { image: productMildSteel, title: "Mild Steel" },
  { image: productBrass, title: "Brass" },
  { image: productCarbonSteel, title: "Carbon Steel" },
  { image: productCiCasting, title: "CI Casting" },
];
