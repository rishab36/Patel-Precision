"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { Wrench, Factory, Settings, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const StatsBar = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Wrench, value: 25, suffix: "+", label: t("stats.yearsExperience"), description: t("stats.since") },
    { icon: Factory, value: 15, suffix: "+", label: t("stats.industriesServed"), description: t("stats.globalReach") },
    { icon: Settings, value: 5000, suffix: "+", label: t("stats.partsDeveloped"), description: t("stats.precisionComponents") },
    { icon: Award, value: 100, suffix: "%", label: t("stats.qualityCommitment"), description: t("stats.isoCertified") },
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const hasAnimated = useRef(false);

  const animateNumbers = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 2500;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      setAnimatedValues(stats.map((stat) => Math.floor(easeOutExpo * stat.value)));
      if (progress < 1) requestAnimationFrame(animate);
      else setAnimatedValues(stats.map((stat) => stat.value));
    };
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isInView) animateNumbers();
  }, [isInView, animateNumbers]);

  return (
    <section ref={ref} className="relative z-20 pb-8 pt-8 md:pt-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/30 p-6 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-primary stroke-[1.5]" />
                  </div>
                </div>
                <span className="text-3xl md:text-4xl font-black text-primary tabular-nums tracking-tight">
                  {animatedValues[index].toLocaleString()}{stat.suffix}
                </span>
                <span className="text-xs md:text-sm font-medium text-foreground mt-1">{stat.label}</span>
                <span className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{stat.description}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;