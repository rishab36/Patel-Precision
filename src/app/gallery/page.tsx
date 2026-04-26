import type { Metadata } from "next";
import View from "@/views/Gallery";

export const metadata: Metadata = {
  title: "Gallery - CNC Machining Manufacturing Process, Precision Components Production Floor - Patel Precision in Mumbai, Navi Mumbai, Thane, India",
  description: "View Patel Precision's state-of-the-art manufacturing facility with 5-axis VMC machines, CNC turning centers, and precision components production floor. Located in Bhiwandi, Mumbai.",
  keywords: "CNC Machining Gallery, Manufacturing Process, Precision Components Production, Factory Photos in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Manufacturing Gallery",
    description: "Production floor and equipment gallery.",
    url: "/gallery",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
