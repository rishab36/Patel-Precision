import type { Metadata } from "next";
import View from "@/views/SpecialProcesses";

export const metadata: Metadata = {
  title: "Special Processes - Heat Treatment, Plating, Coating - Patel Precision in Mumbai, Navi Mumbai, Thane, India",
  description: "Patel Precision offers special processes including heat treatment, plating, coating, and surface finishing for precision machined components.",
  keywords: "Special Processes, Heat Treatment, Plating, Coating, Surface Finishing in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/special-processes" },
  openGraph: {
    title: "Special Processes",
    description: "Heat treatment, plating, coating and other special processes.",
    url: "/special-processes",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
