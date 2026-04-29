import type { Metadata } from "next";
import View from "@/views/About";

export const metadata: Metadata = {
  title: "About Patel Precision - CNC Machining Company, Precision Components Manufacturers in Mumbai, Navi Mumbai, Thane, India",
  description: "Patel Precision Pvt Ltd - Leading precision machining company and CNC manufacturers in Mumbai, Navi Mumbai, Thane. ISO 9001 certified with 25+ years of manufacturing excellence.",
  keywords: "About Patel Precision, Precision Machining Company, CNC Manufacturers, Precision Components Manufacturers in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Patel Precision - CNC Machining Company",
    description: "Learn about our 25+ years of precision manufacturing excellence and commitment to quality.",
    url: "/about",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
