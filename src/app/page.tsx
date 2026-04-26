import type { Metadata } from "next";
import View from "@/views/Index";

export const metadata: Metadata = {
  title: "Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer",
  description: "ISO 9001:2015 certified precision machining company with 25+ years expertise. CNC turned parts, machined components, air compressor parts, fasteners, pipe fittings, cable glands, automotive components. Located in Bhiwandi, serving global industries.",
  keywords: "precision machined components, CNC machining services, CNC turned parts, precision manufacturing, air compressor parts, automotive components, 5 axis machining, VMC machining, CNC job work, cable glands, fasteners, pipe fittings, stainless steel flanges, industrial components, Bhiwandi, India",
  alternates: { canonical: "https://patelprecision.com" },
  openGraph: {
    title: "Patel Precision - ISO 9001:2015 Certified CNC Machining Manufacturer",
    description: "Leading precision machined components manufacturer. 25+ years expertise in CNC turning, milling, 5-axis machining. Serving automotive, aerospace, industrial sectors globally.",
    url: "https://patelprecision.com",
    type: "website",
    locale: "en_IN",
    siteName: "Patel Precision",
    images: [
      {
        url: "https://patelprecision.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Patel Precision Manufacturing Excellence",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PvtPatel",
    creator: "@PvtPatel",
    title: "Patel Precision - CNC Machining & Precision Manufacturing",
    description: "ISO 9001:2015 certified precision manufacturer with 25+ years expertise",
    images: ["https://patelprecision.com/og-image.jpg"],
  },
};

export default function Page() {
  return <View />;
}
