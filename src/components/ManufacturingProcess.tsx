"use client";
import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stages = [
  {
    id: 1,
    title: "Raw Material Sourcing",
    description: "Premium-grade metals and alloys sourced from certified suppliers. Rigorous incoming inspection ensures material compliance with international standards.",
    icon: "🔩",
    detail: "SS, Aluminum, Brass, Bronze, Cast Iron",
  },
  {
    id: 2,
    title: "CNC Machining",
    description: "State-of-the-art 5-axis VMC and CNC turning centers execute precision cuts with tolerances up to ±0.005mm.",
    icon: "⚙️",
    detail: "5-Axis VMC, CNC Lathes, Grinding",
  },
  {
    id: 3,
    title: "Quality Inspection",
    description: "CMM verification, surface roughness testing, and dimensional analysis using calibrated instruments at every production stage.",
    icon: "📐",
    detail: "CMM, Profile Projector, Gauges",
  },
  {
    id: 4,
    title: "Surface Finishing",
    description: "Electroplating, anodizing, powder coating, and polishing to achieve required surface specifications and corrosion resistance.",
    icon: "✨",
    detail: "Plating, Anodizing, Heat Treatment",
  },
  {
    id: 5,
    title: "Packaging & Dispatch",
    description: "Anti-corrosion packaging with full traceability documentation. On-time delivery to 25+ countries worldwide.",
    icon: "📦",
    detail: "Global Shipping, Full Traceability",
  },
];

const ManufacturingProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [armX, setArmX] = useState(50);
  const [armState, setArmState] = useState<"idle" | "grabbing" | "lifting" | "placing">("idle");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isVisible) return;

    const cycle = () => {
      // Arm moves to right position (next item)
      setArmState("grabbing");
      setArmX(75);

      setTimeout(() => {
        setArmState("lifting");
      }, 600);

      setTimeout(() => {
        setArmX(50);
        setArmState("placing");
      }, 1200);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % stages.length);
        setArmState("idle");
      }, 2000);
    };

    // Start first cycle after short delay
    const startTimeout = setTimeout(cycle, 1500);
    intervalRef.current = setInterval(cycle, 4500);

    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isVisible]);

  const prevIndex = (activeIndex - 1 + stages.length) % stages.length;
  const nextIndex = (activeIndex + 1) % stages.length;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Our Process
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Manufacturing Workflow
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
            From raw material to finished product — precision at every stage
          </p>
        </div>

        {/* Robotic Arm + Boxes Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Robotic Arm SVG */}
          <div className="relative h-32 md:h-40 mb-2">
            <svg
              viewBox="0 0 800 160"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}
            >
              {/* Ceiling rail */}
              <rect x="0" y="0" width="800" height="8" rx="4" fill="hsl(var(--muted-foreground) / 0.15)" />
              <rect x="0" y="0" width="800" height="3" rx="1.5" fill="hsl(var(--muted-foreground) / 0.25)" />

              {/* Trolley on rail */}
              <g
                style={{
                  transform: `translateX(${(armX / 100) * 800 - 40}px)`,
                  transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Trolley body */}
                <rect x="0" y="4" width="80" height="20" rx="4" fill="hsl(var(--muted-foreground) / 0.6)" />
                <rect x="5" y="6" width="70" height="6" rx="2" fill="hsl(var(--muted-foreground) / 0.3)" />
                {/* Wheels */}
                <circle cx="15" cy="6" r="5" fill="hsl(var(--muted-foreground) / 0.8)" />
                <circle cx="65" cy="6" r="5" fill="hsl(var(--muted-foreground) / 0.8)" />

                {/* Vertical arm shaft */}
                <rect x="32" y="24" width="16" height="60" rx="3" fill="hsl(var(--muted-foreground) / 0.5)" />
                {/* Hydraulic details */}
                <rect x="36" y="28" width="8" height="52" rx="2" fill="hsl(var(--muted-foreground) / 0.3)" />
                <rect x="38" y="30" width="4" height="48" rx="1" fill="hsl(var(--primary) / 0.3)" />

                {/* Piston housing */}
                <rect x="26" y="78" width="28" height="16" rx="4" fill="hsl(var(--muted-foreground) / 0.6)" />

                {/* Gripper mechanism */}
                <g
                  style={{
                    transformOrigin: "40px 94px",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {/* Gripper base */}
                  <rect x="30" y="94" width="20" height="10" rx="2" fill="hsl(var(--muted-foreground) / 0.7)" />

                  {/* Left finger */}
                  <rect
                    x={armState === "grabbing" || armState === "lifting" ? "28" : "24"}
                    y="104"
                    width="8"
                    height="24"
                    rx="2"
                    fill="hsl(var(--primary) / 0.7)"
                    style={{ transition: "all 0.3s ease" }}
                  />
                  {/* Right finger */}
                  <rect
                    x={armState === "grabbing" || armState === "lifting" ? "44" : "48"}
                    y="104"
                    width="8"
                    height="24"
                    rx="2"
                    fill="hsl(var(--primary) / 0.7)"
                    style={{ transition: "all 0.3s ease" }}
                  />

                  {/* Finger tips */}
                  <rect
                    x={armState === "grabbing" || armState === "lifting" ? "26" : "22"}
                    y="126"
                    width="12"
                    height="6"
                    rx="3"
                    fill="hsl(var(--primary) / 0.5)"
                    style={{ transition: "all 0.3s ease" }}
                  />
                  <rect
                    x={armState === "grabbing" || armState === "lifting" ? "42" : "46"}
                    y="126"
                    width="12"
                    height="6"
                    rx="3"
                    fill="hsl(var(--primary) / 0.5)"
                    style={{ transition: "all 0.3s ease" }}
                  />
                </g>

                {/* Status light */}
                <circle
                  cx="40"
                  cy="86"
                  r="3"
                  fill={
                    armState === "idle"
                      ? "hsl(120, 60%, 50%)"
                      : armState === "grabbing"
                      ? "hsl(45, 90%, 55%)"
                      : "hsl(var(--primary))"
                  }
                  style={{ transition: "fill 0.3s ease" }}
                >
                  <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </div>

          {/* Conveyor belt line */}
          <div className="relative h-2 bg-muted-foreground/10 rounded-full mb-6 overflow-hidden">
            <div
              className="absolute inset-y-0 bg-primary/20 rounded-full"
              style={{
                width: "100%",
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 20px, hsl(var(--primary) / 0.1) 20px, hsl(var(--primary) / 0.1) 22px)`,
                animation: "conveyorBelt 2s linear infinite",
              }}
            />
          </div>

          {/* Three boxes */}
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {/* Left box (completed) */}
            <div
              className="bg-card border border-border/50 rounded-xl p-4 md:p-6 opacity-50 scale-90 transition-all duration-700 shadow-sm"
              style={{ transform: "scale(0.9)", opacity: 0.5 }}
            >
              <div className="text-2xl md:text-3xl mb-3">{stages[prevIndex].icon}</div>
              <div className="text-[10px] md:text-xs text-primary/60 font-semibold uppercase tracking-wider mb-1">
                Step {stages[prevIndex].id}
              </div>
              <h3 className="text-xs md:text-sm font-bold text-foreground/60 mb-1 leading-tight">
                {stages[prevIndex].title}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground/50 hidden md:block">
                {stages[prevIndex].detail}
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                <div className="w-full h-1 bg-primary/30 rounded-full" />
                <span className="text-[9px] text-primary/50 font-medium">Done</span>
              </div>
            </div>

            {/* Center box (active - highlighted) */}
            <div
              className="bg-card border-2 border-primary/40 rounded-xl p-4 md:p-6 shadow-xl transition-all duration-700 relative"
              style={{ transform: "scale(1.05)" }}
            >
              {/* Active glow */}
              <div className="absolute -inset-px rounded-xl bg-primary/5 -z-10" />
              <div className="absolute -inset-1 rounded-xl bg-primary/5 blur-sm -z-20" />

              <div className="text-3xl md:text-4xl mb-3">{stages[activeIndex].icon}</div>
              <div className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-wider mb-1">
                Step {stages[activeIndex].id} — Active
              </div>
              <h3 className="text-sm md:text-lg font-bold text-foreground mb-2 leading-tight">
                {stages[activeIndex].title}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed mb-3">
                {stages[activeIndex].description}
              </p>
              <div className="bg-primary/10 rounded-lg px-3 py-1.5">
                <p className="text-[9px] md:text-[11px] text-primary font-medium">
                  {stages[activeIndex].detail}
                </p>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ animation: "processProgress 4.5s linear infinite" }}
                  />
                </div>
                <span className="text-[9px] text-primary font-bold">In Progress</span>
              </div>
            </div>

            {/* Right box (upcoming) */}
            <div
              className="bg-card border border-border/30 rounded-xl p-4 md:p-6 opacity-40 scale-90 transition-all duration-700 shadow-sm"
              style={{ transform: "scale(0.9)", opacity: 0.4 }}
            >
              <div className="text-2xl md:text-3xl mb-3">{stages[nextIndex].icon}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground/50 font-semibold uppercase tracking-wider mb-1">
                Step {stages[nextIndex].id}
              </div>
              <h3 className="text-xs md:text-sm font-bold text-foreground/50 mb-1 leading-tight">
                {stages[nextIndex].title}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground/40 hidden md:block">
                {stages[nextIndex].detail}
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                <div className="w-full h-1 bg-muted-foreground/10 rounded-full" />
                <span className="text-[9px] text-muted-foreground/40 font-medium">Next</span>
              </div>
            </div>
          </div>

          {/* Step indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {stages.map((stage, i) => (
              <button
                key={stage.id}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to step ${stage.id}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes conveyorBelt {
          from { background-position: 0 0; }
          to { background-position: 44px 0; }
        }
        @keyframes processProgress {
          0% { width: 0%; }
          80% { width: 100%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ManufacturingProcess;