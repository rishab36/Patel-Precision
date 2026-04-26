import type { Metadata } from "next";
import View from "@/views/QualityAssurance";

export const metadata: Metadata = {
  title: "Quality Assurance - ISO 9001 Quality Systems, CMM Inspection - Patel Precision in Mumbai, Navi Mumbai, Thane, India",
  description: "Patel Precision's comprehensive quality assurance with CMM inspection, ISO 9001:2015 certified processes, and 100% quality compliance for precision machining.",
  keywords: "Quality Assurance, CMM Inspection, ISO 9001 Quality, CNC Precision Control in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/quality-assurance" },
  openGraph: {
    title: "Quality Assurance",
    description: "Quality systems, inspection processes, and certifications.",
    url: "/quality-assurance",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
