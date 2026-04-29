import type { Metadata } from "next";
import View from "@/views/services/CompressorValveAssembly";

export const metadata: Metadata = {
  title: "Compressor Valve Assembly",
  description: "Compressor valve assembly services.",
  alternates: { canonical: "/compressor-valve-assembly" },
  openGraph: {
    title: "Compressor Valve Assembly",
    description: "Compressor valve assembly services.",
    url: "/compressor-valve-assembly",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
