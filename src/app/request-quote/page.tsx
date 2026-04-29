import type { Metadata } from "next";
import View from "@/views/RequestQuote";

export const metadata: Metadata = {
  title: "Request a Quote - CNC Machining & Precision Components Quotation - Patel Precision in Mumbai, Navi Mumbai, Thane, India",
  description: "Request a quote from Patel Precision for precision components manufacturing, CNC machining services, and custom parts. Quick response and competitive pricing guaranteed.",
  keywords: "Request Quote, CNC Machining Quote, Precision Components Quotation in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/request-quote" },
  openGraph: {
    title: "Request a Quote",
    description: "Request a quote for precision components and CNC services.",
    url: "/request-quote",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
