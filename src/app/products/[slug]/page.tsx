import type { Metadata } from "next";
import View from "@/views/ProductDetail";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
  return {
    title: `${title} - Product Details`,
    description: `Explore details, specifications, and applications of ${title}.`,
    alternates: { canonical: `/products/${params.slug}` },
  };
}

export default function Page() {
  return <View />;
}
