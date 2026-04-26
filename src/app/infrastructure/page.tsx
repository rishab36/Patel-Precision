import type { Metadata } from "next";
import View from "@/views/Infrastructure";

export const metadata: Metadata = {
  title: "Manufacturing Infrastructure - 5-Axis VMC Machines, CNC Equipment - Patel Precision in Mumbai, Navi Mumbai, Thane, India",
  description: "Patel Precision's state-of-the-art manufacturing facility features 5-axis VMC machines, CNC turning centers, grinding equipment, and precision measurement systems.",
  keywords: "CNC Manufacturing Infrastructure, 5-Axis Machines, VMC Equipment in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/infrastructure" },
  openGraph: {
    title: "Infrastructure",
    description: "Our state-of-the-art manufacturing infrastructure and machine inventory.",
    url: "/infrastructure",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
