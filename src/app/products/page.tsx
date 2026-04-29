import type { Metadata } from "next";
import View from "@/views/Products";

export const metadata: Metadata = {
  title: "Precision Components Products - CNC Machined Components, Air Compressor Parts - Patel Precision in Mumbai, Navi Mumbai, Thane, India",
  description: "Browse Patel Precision's complete product catalog including precision machined components, CNC turned parts, air compressor parts, automotive components, fasteners, and custom manufacturing solutions.",
  keywords: "Products, Precision Components, CNC Machined Components, Air Compressor Parts in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products",
    description: "Browse our full catalogue of precision-machined components.",
    url: "/products",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
