import { forwardRef, useRef, useState, useEffect, useCallback } from "react";
import {
  BarChart3,
  Calendar,
  Users,
  MessageSquare,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedBeam } from "./AnimatedBeam";
import svgPaths from "../../imports/svg-62f2x0jf7p";

// ─── Company Logo SVG for Central Hub ──────────────────
const AanvikshikiLogo = ({ className = "w-[55%] h-[55%]" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48.0034 48"
    fill="none"
  >
    <path d={svgPaths.p1a54da80} fill="#F97316" />
  </svg>
);

// ─── Data ──────────────────────────────────────────────
const solutions = [
  {
    icon: BarChart3,
    title: "AI-Driven Data Engineering",
    shortTitle: "Data Engineering",
    description:
      "Transform data sprawl into strategic intelligence with ethical governance.",
    details: [
      "End-to-end data pipeline design & automation",
      "Real-time analytics dashboards with actionable KPIs",
      "Ethical data governance & compliance frameworks",
      "Scalable cloud-native data architectures",
    ],
  },
  {
    icon: Calendar,
    title: "Medical AI Research",
    shortTitle: "Medical AI",
    description:
      "Evidence-based medicine enhanced by predictive diagnostics.",
    details: [
      "Predictive diagnostic models with clinical validation",
      "Medical imaging analysis & pattern detection",
      "Drug discovery acceleration pipelines",
      "Patient outcome prediction & risk stratification",
    ],
  },
  {
    icon: Users,
    title: "Research to Product",
    shortTitle: "R&D to Product",
    description:
      "Transform academic research into market-ready products.",
    details: [
      "Technology readiness assessment & roadmapping",
      "MVP development with rapid prototyping",
      "Market validation & go-to-market strategy",
      "IP protection & commercialization planning",
    ],
  },
  {
    icon: MessageSquare,
    title: "Human-in-the-Loop AI",
    shortTitle: "Human-in-Loop",
    description:
      "AI that keeps you in control with human review at every step.",
    details: [
      "Configurable human review checkpoints",
      "Feedback-driven model improvement loops",
      "Explainable AI decision transparency",
      "Quality assurance & bias detection workflows",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Ethical AI Governance",
    shortTitle: "AI Governance",
    description:
      "Transparent, accountable AI systems guided by Chanakya's principles.",
    details: [
      "AI ethics auditing & compliance reporting",
      "Bias detection & fairness monitoring",
      "Transparent decision-making documentation",
      "Regulatory alignment (EU AI Act, NIST AI RMF)",
    ],
  },
];

// ─── Tooltip positions for each node index ─────────────
const tooltipPositions: Record<
  number,
  { vertical: "above" | "below"; horizontal: "left" | "right" | "center" }
> = {
  0: { vertical: "above", horizontal: "right" },
  1: { vertical: "below", horizontal: "right" },
  2: { vertical: "below", horizontal: "center" },
  3: { vertical: "above", horizontal: "left" },
  4: { vertical: "below", horizontal: "left" },
};

// ─── Circle Node ────────────────────────────────────────
const CircleNode = forwardRef<
  HTMLDivElement,
  {
    icon: React.ElementType;
    label: string;
    isActive: boolean;
    isHovered: boolean;
    description: string;
    nodeIndex: number;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }
>(
  (
    {
      icon: Icon,
      label,
      isActive,
      isHovered,
      description,
      nodeIndex,
      onClick,
      onMouseEnter,
      onMouseLeave,
    },
    ref
  ) => {
    const highlighted = isActive || isHovered;
    const tp = tooltipPositions[nodeIndex] ?? {
      vertical: "above",
      horizontal: "center",
    };

    return (
      <div className="relative">
        <motion.div
          ref={ref}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="z-10 flex flex-col items-center gap-2 cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="relative flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              width: highlighted ? 90 : 60,
              height: highlighted ? 90 : 60,
              background: highlighted
                ? "radial-gradient(circle, rgba(254,106,46,0.18) 0%, rgba(20,20,20,1) 70%)"
                : "radial-gradient(circle, rgba(30,28,25,1) 0%, rgba(20,20,20,1) 70%)",
              border: `1.5px solid ${highlighted ? "rgba(254,106,46,0.5)" : "rgba(42,42,42,1)"}`,
              boxShadow: highlighted
                ? "0 0 24px rgba(254,106,46,0.15), 0 0 48px rgba(254,106,46,0.06)"
                : "0 0 20px -12px rgba(0,0,0,0.8)",
            }}
          >
            {isActive && (
              <motion.div
                className="absolute inset-[-3px] rounded-full border-2 border-[#FE6A2E]"
                animate={{ opacity: [0.25, 0.55, 0.25] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ filter: "blur(2px)" }}
              />
            )}
            <Icon
              size={highlighted ? 48 : 24}
              style={{
                color: highlighted ? "#FE6A2E" : "#666",
                transition: "color 0.3s",
              }}
            />
          </div>
          <span
            className="whitespace-nowrap text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: highlighted ? 400 : 300,
              fontSize: 11,
              lineHeight: "15px",
              color: highlighted ? "#e5e5e5" : "#666",
              transition: "color 0.3s",
            }}
          >
            {label}
          </span>
        </motion.div>

        {/* ── Floating tooltip on hover ── */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{
                opacity: 0,
                y: tp.vertical === "above" ? 8 : -8,
                scale: 0.95,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: tp.vertical === "above" ? 8 : -8,
                scale: 0.95,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute z-50 pointer-events-none"
              style={{
                ...(tp.vertical === "above"
                  ? { bottom: "calc(100% + 14px)" }
                  : { top: "calc(100% + 14px)" }),
                ...(tp.horizontal === "left"
                  ? { right: "50%", transform: "translateX(30%)" }
                  : tp.horizontal === "right"
                    ? { left: "50%", transform: "translateX(-30%)" }
                    : { left: "50%", transform: "translateX(-50%)" }),
                width: 230,
              }}
            >
              <div
                className="rounded-2xl p-4 border border-[#2a2a2a]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(22,22,22,0.97) 0%, rgba(14,14,14,0.97) 100%)",
                  backdropFilter: "blur(12px)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(254,106,46,0.06)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 13,
                    lineHeight: "19px",
                    color: "#e5e5e5",
                    marginBottom: 6,
                  }}
                >
                  {label}
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: 12,
                    lineHeight: "18px",
                    color: "#888",
                  }}
                >
                  {description}
                </p>
                <div
                  className="mt-3 h-[2px] w-8 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #FF9937, #FE6A2E)",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
CircleNode.displayName = "CircleNode";

// ─── Central Hub (Company Logo) ─────────────────────────
const CentralHub = forwardRef<HTMLDivElement, object>((_props, ref) => {
  return (
    <div ref={ref} className="z-10 flex items-center justify-center">
      <div
        className="relative flex items-center justify-center rounded-full border border-[#2a2a2a] bg-gradient-to-b from-[#161616] to-[#111] w-[110px] h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px]"
        style={{
          boxShadow:
            "0 0 60px rgba(254,106,46,0.1), 0 0 120px rgba(254,106,46,0.04), inset 0 0 30px rgba(0,0,0,0.5)",
        }}
      >
        {/* Pulsing glow ring */}
        <motion.div
          className="absolute inset-[-2px] rounded-full border border-[#FE6A2E]/20"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Outer faint halo for wider screens */}
        <motion.div
          className="absolute inset-[-8px] rounded-full border border-[#FE6A2E]/5 hidden lg:block"
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        {/* Company Logo with subtle breathing animation */}
        <motion.div
          className="flex items-center justify-center w-full h-full"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <AanvikshikiLogo />
        </motion.div>
      </div>
    </div>
  );
});
CentralHub.displayName = "CentralHub";

// ─── Main Section ───────────────────────────────────────
export function ValuableFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const activeSolution = solutions[activeIndex];
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Refs for beam connections
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const nodeRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // ── Auto-rotation: cycle every 4s ──
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const clearPauseTimeout = useCallback(() => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }
  }, []);

  // Click → select node, pause 10s then resume
  const handleNodeClick = useCallback(
    (index: number) => {
      setActiveIndex(index);
      setIsPaused(true);
      clearPauseTimeout();
      pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 10000);
    },
    [clearPauseTimeout]
  );

  // Hover → pause immediately
  const handleNodeHoverStart = useCallback(
    (index: number) => {
      setHoveredIndex(index);
      setIsPaused(true);
      clearPauseTimeout();
    },
    [clearPauseTimeout]
  );

  // Leave → resume after 6s
  const handleNodeHoverEnd = useCallback(() => {
    setHoveredIndex(null);
    clearPauseTimeout();
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 6000);
  }, [clearPauseTimeout]);

  // Beam configurations
  const beamConfigs = [
    { from: 0, curvature: -75, endYOffset: -10, reverse: false, duration: 2.5 },
    { from: 1, curvature: 0, endYOffset: 0, reverse: false, duration: 3 },
    { from: 2, curvature: 75, endYOffset: 10, reverse: false, duration: 2.8 },
    { from: 3, curvature: -75, endYOffset: -10, reverse: true, duration: 3.2 },
    { from: 4, curvature: 75, endYOffset: 10, reverse: true, duration: 2.6 },
  ];

  return (
    <section id="solutions" className="px-6 py-[90px]">
      <div className="max-w-[1228px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-6 mb-16"
        >
          <SectionLabel>Valuable Features</SectionLabel>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "62.4px",
              letterSpacing: "-1px",
              color: "#e5e5e5",
            }}
          >
            Customizable Solutions for Every Need
          </h2>
          <p
            className="max-w-[650px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 18,
              lineHeight: "27px",
              color: "#999",
            }}
          >
            Adapt our platform to suit your unique business needs with flexible,
            scalable solutions designed to grow with you.
          </p>
        </motion.div>

        {/* ── Desktop: Animated Beam Layout ── */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            {/* Split screen: 70% beam, 30% details */}
            <div className="flex flex-row gap-6 items-stretch">
              {/* Left: Beam container (70%) */}
              <div className="w-[70%] shrink-0">
                <div
                  ref={containerRef}
                  className="relative flex items-center justify-center overflow-visible rounded-3xl border border-[#1a1a1a] bg-gradient-to-b from-[#0e0e0e] to-[#0a0a0a] p-10 lg:p-14 h-full"
                  style={{ minHeight: 420 }}
                >
                  {/* Background subtle grid */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* 3-row diamond layout */}
                  <div className="flex w-full max-w-[640px] flex-col items-stretch justify-between gap-12 lg:gap-14">
                    {/* Row 1: top-left + top-right */}
                    <div className="flex flex-row items-center justify-between">
                      <CircleNode
                        ref={nodeRefs[0]}
                        icon={solutions[0].icon}
                        label={solutions[0].shortTitle}
                        description={solutions[0].description}
                        nodeIndex={0}
                        isActive={activeIndex === 0}
                        isHovered={hoveredIndex === 0}
                        onClick={() => handleNodeClick(0)}
                        onMouseEnter={() => handleNodeHoverStart(0)}
                        onMouseLeave={handleNodeHoverEnd}
                      />
                      <CircleNode
                        ref={nodeRefs[3]}
                        icon={solutions[3].icon}
                        label={solutions[3].shortTitle}
                        description={solutions[3].description}
                        nodeIndex={3}
                        isActive={activeIndex === 3}
                        isHovered={hoveredIndex === 3}
                        onClick={() => handleNodeClick(3)}
                        onMouseEnter={() => handleNodeHoverStart(3)}
                        onMouseLeave={handleNodeHoverEnd}
                      />
                    </div>

                    {/* Row 2: left + HUB + right */}
                    <div className="flex flex-row items-center justify-between">
                      <CircleNode
                        ref={nodeRefs[1]}
                        icon={solutions[1].icon}
                        label={solutions[1].shortTitle}
                        description={solutions[1].description}
                        nodeIndex={1}
                        isActive={activeIndex === 1}
                        isHovered={hoveredIndex === 1}
                        onClick={() => handleNodeClick(1)}
                        onMouseEnter={() => handleNodeHoverStart(1)}
                        onMouseLeave={handleNodeHoverEnd}
                      />
                      <CentralHub ref={hubRef} />
                      <CircleNode
                        ref={nodeRefs[4]}
                        icon={solutions[4].icon}
                        label={solutions[4].shortTitle}
                        description={solutions[4].description}
                        nodeIndex={4}
                        isActive={activeIndex === 4}
                        isHovered={hoveredIndex === 4}
                        onClick={() => handleNodeClick(4)}
                        onMouseEnter={() => handleNodeHoverStart(4)}
                        onMouseLeave={handleNodeHoverEnd}
                      />
                    </div>

                    {/* Row 3: bottom-center */}
                    <div className="flex flex-row items-center justify-center">
                      <CircleNode
                        ref={nodeRefs[2]}
                        icon={solutions[2].icon}
                        label={solutions[2].shortTitle}
                        description={solutions[2].description}
                        nodeIndex={2}
                        isActive={activeIndex === 2}
                        isHovered={hoveredIndex === 2}
                        onClick={() => handleNodeClick(2)}
                        onMouseEnter={() => handleNodeHoverStart(2)}
                        onMouseLeave={handleNodeHoverEnd}
                      />
                    </div>
                  </div>

                  {/* Animated Beams */}
                  {beamConfigs.map((config, i) => (
                    <AnimatedBeam
                      key={i}
                      containerRef={containerRef}
                      fromRef={nodeRefs[config.from]}
                      toRef={hubRef}
                      curvature={config.curvature}
                      endYOffset={config.endYOffset}
                      reverse={config.reverse}
                      duration={config.duration}
                      delay={i * 0.3}
                      pathColor="transparent"
                      gradientStartColor={
                        activeIndex === config.from ? "#FF9937" : "#555"
                      }
                      gradientStopColor={
                        activeIndex === config.from ? "#FE6A2E" : "#333"
                      }
                      pathWidth={activeIndex === config.from ? 2.5 : 1.5}
                      pathOpacity={activeIndex === config.from ? 0.7 : 0.3}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Details panel (30%) */}
              <div
                className="w-[30%] shrink-0 rounded-3xl border border-[#1a1a1a] bg-gradient-to-b from-[#0e0e0e] to-[#0a0a0a] p-8 flex flex-col justify-center relative overflow-hidden"
                style={{ minHeight: 420 }}
              >
                {/* Subtle orange glow at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 100% at 50% -20%, rgba(254,106,46,0.06) 0%, transparent 70%)",
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="relative z-10 flex flex-col gap-6"
                  >
                    {/* Active icon */}
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(254,106,46,0.15) 0%, rgba(20,20,20,1) 70%)",
                        border: "1px solid rgba(254,106,46,0.3)",
                      }}
                    >
                      {(() => {
                        const ActiveIcon = activeSolution.icon;
                        return (
                          <ActiveIcon
                            size={22}
                            style={{ color: "#FE6A2E" }}
                          />
                        );
                      })()}
                    </div>

                    {/* Title */}
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                          fontSize: 22,
                          lineHeight: "30px",
                          color: "#e5e5e5",
                          marginBottom: 8,
                        }}
                      >
                        {activeSolution.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 300,
                          fontSize: 14,
                          lineHeight: "22px",
                          color: "#888",
                        }}
                      >
                        {activeSolution.description}
                      </p>
                    </div>

                    {/* Gradient divider */}
                    <div
                      className="h-px w-full"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(254,106,46,0.3) 0%, rgba(42,42,42,0.3) 100%)",
                      }}
                    />

                    {/* Details list */}
                    <ul className="flex flex-col gap-3">
                      {activeSolution.details.map((detail, i) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.1 + i * 0.08,
                          }}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 mt-0.5"
                            style={{ color: "#FE6A2E" }}
                          />
                          <span
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 300,
                              fontSize: 13,
                              lineHeight: "20px",
                              color: "#aaa",
                            }}
                          >
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Step indicator dots */}
                    <div className="flex items-center gap-2 pt-2">
                      {solutions.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => handleNodeClick(i)}
                          className="cursor-pointer transition-all duration-300"
                          style={{
                            width: i === activeIndex ? 20 : 6,
                            height: 6,
                            borderRadius: 3,
                            background:
                              i === activeIndex
                                ? "linear-gradient(90deg, #FF9937, #FE6A2E)"
                                : "rgba(42,42,42,1)",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile: Compact horizontal selector ── */}
        <div className="md:hidden">
          <div
            className="flex justify-center gap-3 mb-8 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {solutions.map((solution, i) => {
              const isActive = i === activeIndex;
              const Icon = solution.icon;
              return (
                <button
                  key={solution.title}
                  onClick={() => setActiveIndex(i)}
                  className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <div
                    className="flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      width: 48,
                      height: 48,
                      background: isActive
                        ? "radial-gradient(circle, rgba(254,106,46,0.15) 0%, rgba(20,20,20,1) 70%)"
                        : "rgba(20,20,20,1)",
                      border: `1.5px solid ${isActive ? "rgba(254,106,46,0.5)" : "rgba(42,42,42,1)"}`,
                    }}
                  >
                    <Icon
                      size={20}
                      style={{ color: isActive ? "#FE6A2E" : "#666" }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 10,
                      color: isActive ? "#e5e5e5" : "#555",
                      fontWeight: isActive ? 400 : 300,
                    }}
                  >
                    {solution.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center"
            >
              {/* Mobile hub with company logo */}
              <div
                className="flex items-center justify-center w-[140px] h-[140px] rounded-full border border-[#2a2a2a] bg-gradient-to-b from-[#161616] to-[#111] mb-6"
                style={{
                  boxShadow:
                    "0 0 40px rgba(254,106,46,0.08), 0 0 80px rgba(254,106,46,0.03)",
                }}
              >
                <AanvikshikiLogo className="w-[50%] h-[50%]" />
              </div>
              <h3
                className="text-center"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 22,
                  lineHeight: "28px",
                  color: "#e5e5e5",
                  marginBottom: 8,
                }}
              >
                {activeSolution.title}
              </h3>
              <p
                className="text-center max-w-[320px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: "24px",
                  color: "#999",
                }}
              >
                {activeSolution.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}