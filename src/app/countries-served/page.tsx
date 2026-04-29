import type { Metadata } from "next";
import View from "@/views/CountriesServed";

export const metadata: Metadata = {
  title: "Countries Served - Global CNC Machining & Precision Components Export - Patel Precision in Mumbai, Navi Mumbai, Thane, India",
  description: "Patel Precision exports precision machined components and CNC services to clients across 25+ countries worldwide. ISO 9001 certified manufacturer based in India.",
  keywords: "Countries Served, Global Export, CNC Machining Export in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/countries-served" },
  openGraph: {
    title: "Countries Served",
    description: "Patel Precision exports to clients across the globe.",
    url: "/countries-served",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
