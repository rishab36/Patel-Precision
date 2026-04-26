"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import LogoIntro from "@/components/LogoIntro";
import "@/i18n";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isTouch = typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      gestureOrientation: "vertical",
    } as any);
    if (isTouch) return () => { lenis.destroy(); };
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  return (
    
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <LogoIntro>
            <ScrollToTop />
            <PageTransition>{children}</PageTransition>
          </LogoIntro>
        </TooltipProvider>
      </QueryClientProvider>
    
  );
}
