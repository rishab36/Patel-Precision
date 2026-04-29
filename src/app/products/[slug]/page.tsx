import type { Metadata } from "next";
import View from "@/views/ProductDetail";
import { productData } from "@/data/products";

export async function generateStaticParams() {
  return productData.map((product) => ({
    slug: product.slug,
  }));
}

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
