import type { Metadata } from "next";
import View from "@/views/IndustriesServed";

export const metadata: Metadata = {
  title: "Industries Served - Automotive, Aerospace, Medical CNC Machining - Patel Precision in Mumbai, Navi Mumbai, Thane, India",
  description: "Patel Precision serves multiple industries: automotive, aerospace, oil & gas, medical, robotics, with precision CNC machining and custom components manufacturing.",
  keywords: "Industries Served, Automotive Components, Aerospace Parts, Medical Components in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/industries-served" },
  openGraph: {
    title: "Industries Served",
    description: "Industries we serve: automotive, aerospace, oil & gas, medical, and more.",
    url: "/industries-served",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
