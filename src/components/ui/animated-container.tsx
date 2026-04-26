"use client";
import { cn } from "@/lib/utils";
import { motion, useInView, type Variant } from "framer-motion";
import { useRef, type HTMLAttributes } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "blur"
  | "clip-up"
  | "clip-left"
  | "clip-right"
  | "slide-up"
  | "rotate-in";

interface AnimatedContainerProps extends HTMLAttributes<HTMLDivElement> {
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  as?: "div" | "section" | "article";
  stagger?: number;
}

const animations: Record<AnimationType, { hidden: Variant; visible: Variant }> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "clip-up": {
    hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    visible: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
  },
  "clip-left": {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    visible: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
  },
  "clip-right": {
    hidden: { opacity: 0, clipPath: "inset(0 0 0 100%)" },
    visible: { opacity: 1, clipPath: "inset(0 0 0 0%)" },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 80, rotateX: 8 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  },
  "rotate-in": {
    hidden: { opacity: 0, rotate: -3, scale: 0.95 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
};

// Animations disabled per user request — content renders immediately, no scroll-triggered emerging.
export const AnimatedContainer = ({
  animation: _animation,
  delay: _delay,
  duration: _duration,
  threshold: _threshold,
  as = "div",
  stagger: _stagger,
  className,
  children,
  style,
  ...props
}: AnimatedContainerProps) => {
  const Component = (as as any) || "div";
  return (
    <Component className={cn(className)} style={style} {...(props as any)}>
      {children}
    </Component>
  );
};

export const AnimatedItem = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={className} {...(props as any)}>
    {children}
  </div>
);

AnimatedContainer.displayName = "AnimatedContainer";