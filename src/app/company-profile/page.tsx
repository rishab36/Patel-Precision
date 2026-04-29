import type { Metadata } from "next";
import View from "@/views/CompanyProfile";

export const metadata: Metadata = {
  title: "Company Profile - Patel Precision Pvt Ltd CNC Machining & Precision Components Manufacturer in Mumbai, Navi Mumbai, Thane, India",
  description: "Download Patel Precision's comprehensive company profile. ISO 9001:2015 certified manufacturer of precision components and CNC machining services.",
  keywords: "Company Profile, CNC Manufacturer in Mumbai, in Navi Mumbai, in Thane, in India",
  alternates: { canonical: "/company-profile" },
  openGraph: {
    title: "Company Profile",
    description: "Patel Precision Components — A4 print-ready company profile.",
    url: "/company-profile",
    type: "website",
  },
};

export default function Page() {
  return <View />;
}
