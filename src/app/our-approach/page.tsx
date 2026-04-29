import type { Metadata } from "next";
import View from "@/views/OurApproach";

export const metadata: Metadata = {
  title: "Our Approach - Engineering-First CNC Machining & Precision Manufacturing - Patel Precision in Mumbai, Navi Mumbai, Thane, India",
  description: "Patel Precision's engineering-first approach to precision manufacturing combines quality assurance, advanced technology, and customer-focused solutions for CNC machining.",
  keywords: "Our Approach, Manufacturing Philosophy, Precision Engineering, Quality Assurance in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/our-approach" },
  openGraph: {
    title: "Our Approach",
    description: "Our engineering-first approach to precision manufacturing and quality assurance.",
    url: "/our-approach",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
