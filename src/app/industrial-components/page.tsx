import type { Metadata } from "next";
import View from "@/views/services/IndustrialComponents";

export const metadata: Metadata = {
  title: "Industrial Components",
  description: "Precision industrial components.",
  alternates: { canonical: "/industrial-components" },
  openGraph: {
    title: "Industrial Components",
    description: "Precision industrial components.",
    url: "/industrial-components",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
