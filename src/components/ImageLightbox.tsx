"use client";
import { X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  image: string;
  alt: string;
  onClose: () => void;
}

const ImageLightbox = ({ image, alt, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2.5 rounded-full bg-background/10 hover:bg-background/20 text-background transition-colors z-10"
      >
        <X className="w-5 h-5" />
      </button>
      <Image src={image}
        alt={alt}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageLightbox;