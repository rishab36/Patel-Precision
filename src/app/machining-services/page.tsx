import type { Metadata } from "next";
import View from "@/views/services/MachiningServices";

export const metadata: Metadata = {
  title: "Machining Services",
  description: "Comprehensive precision machining services.",
  alternates: { canonical: "/machining-services" },
  openGraph: {
    title: "Machining Services",
    description: "Comprehensive precision machining services.",
    url: "/machining-services",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
