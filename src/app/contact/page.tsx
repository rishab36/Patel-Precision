import type { Metadata } from "next";
import View from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact Patel Precision - CNC Machining & Precision Components Manufacturers in Mumbai, Navi Mumbai, Thane, India",
  description: "Contact Patel Precision Pvt Ltd for CNC machining services, precision components manufacturing in Mumbai, Navi Mumbai, Thane, India. ISO 9001:2015 certified manufacturer.",
  keywords: "Contact Patel Precision, CNC Machining Manufacturers, Precision Components Suppliers in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Patel Precision",
    description: "Get in touch with us for precision machining and CNC manufacturing services.",
    url: "/contact",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
