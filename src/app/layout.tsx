import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://patelprecision.com"),
  title: {
    default: "Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer",
    template: "%s | Patel Precision",
  },
  description:
    "ISO 9001:2015 certified precision machining manufacturer. CNC turned parts, air compressor components, fasteners, pipe fittings, cable glands, industrial components. 25+ years expertise in Bhiwandi, India. Serving global clientele.",
  keywords: "precision machined components, CNC machining services, CNC turned parts, air compressor parts, automotive components, 5 axis machining, precision manufacturing, industrial components, cable glands, fasteners, pipe fittings",
  icons: { icon: "/favicon.ico" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://patelprecision.com",
    title: "Patel Precision - ISO 9001:2015 Certified CNC Machining Manufacturer",
    description: "Leading precision machined components manufacturer with 25+ years expertise in CNC turning, milling, 5-axis machining, and custom manufacturing.",
    siteName: "Patel Precision",
    images: [
      {
        url: "https://patelprecision.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Patel Precision - Precision Manufacturing Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patel Precision - CNC Machining & Precision Components",
    description: "ISO 9001:2015 certified precision manufacturer. Serving global industries with quality components.",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://patelprecision.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="English" />
        <meta name="author" content="Patel Precision Pvt Ltd" />
        <meta name="revisit-after" content="7" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta property="business:contact_data:street_address" content="A16/5, Harihar Corporation, Dapode" />
        <meta property="business:contact_data:locality" content="Bhiwandi" />
        <meta property="business:contact_data:postal_code" content="421302" />
        <meta property="business:contact_data:region" content="Maharashtra" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta name="theme-color" content="#1a1a1a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Patel Precision Pvt Ltd",
              "url": "https://patelprecision.com",
              "logo": "https://patelprecision.com/patel-precision-logo-new.png",
              "description": "ISO 9001:2015 certified precision machining manufacturer with 25+ years of expertise",
              "foundingDate": "1998",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A16/5, Harihar Corporation, Dapode",
                "addressLocality": "Bhiwandi",
                "postalCode": "421302",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+91-9820-808-852",
                "email": "rakesh@patelprecision.com"
              },
              "sameAs": [
                "https://www.facebook.com/Patel-Precision-Pvt-Ltd-101593001311731/",
                "https://twitter.com/PvtPatel"
              ]
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
