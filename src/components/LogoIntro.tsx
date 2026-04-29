"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LogoIntro = ({ children }: { children: React.ReactNode }) => {
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIntroComplete(true);
      return;
    }

    setShowIntro(true);
    const timer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => setIntroComplete(true), 700);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (introComplete) return <>{children}</>;

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
          >
            <motion.img
              src="/patel-precision-logo-new.png"
              alt="Patel Precision Pvt Ltd - ISO 9001:2015 Certified CNC Machining Manufacturer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-64 md:w-80 lg:w-[24rem] h-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && !introComplete && (
        <div className="fixed inset-0 z-[9999] bg-background" />
      )}
    </>
  );
};

export default LogoIntro;