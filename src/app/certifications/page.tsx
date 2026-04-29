import type { Metadata } from "next";
import View from "@/views/Certifications";

export const metadata: Metadata = {
  title: "ISO 9001:2015 Certifications - Patel Precision Quality Certifications in Mumbai, Navi Mumbai, Thane, India",
  description: "Patel Precision Pvt Ltd holds ISO 9001:2015 certification and NSIC registration. Quality assured manufacturing of precision components and CNC machining services.",
  keywords: "ISO 9001 Certified, NSIC Registration, Quality Certifications, CNC Manufacturing Certificates in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Certifications & Awards",
    description: "ISO 9001 and quality certifications.",
    url: "/certifications",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
