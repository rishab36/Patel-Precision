"use client";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const isFirstRender = useRef(true);
  const prevPath = useRef(location.pathname);

  // Route change transition
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (prevPath.current === location.pathname) return;
    prevPath.current = location.pathname;

    setShowTransition(true);
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Route change transition */}
      <AnimatePresence>
        {showTransition && (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] bg-background flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.img
                src="/patel-precision-logo-new.png"
                alt="Patel Precision - Leading Precision Machined Components Manufacturer"
                className="w-32 md:w-44 h-auto drop-shadow-xl"
                style={{ clipPath: "inset(0 2px 0 2px)" }}
                initial={{ rotateY: -10 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
};

export default PageTransition;