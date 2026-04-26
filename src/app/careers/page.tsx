import type { Metadata } from "next";
import View from "@/views/Careers";

export const metadata: Metadata = {
  title: "Careers at Patel Precision - Join Our CNC Machining Team in Mumbai, Navi Mumbai, Thane, India",
  description: "Join Patel Precision Pvt Ltd's precision manufacturing team. Career opportunities in CNC machining, manufacturing, and technical roles. ISO 9001 certified company in Bhiwandi.",
  keywords: "Careers, Manufacturing Jobs, CNC Machining Jobs in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers",
    description: "Join our team of precision manufacturing professionals.",
    url: "/careers",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
