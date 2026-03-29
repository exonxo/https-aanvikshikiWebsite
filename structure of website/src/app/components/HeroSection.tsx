import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { CSSProperties } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { RainbowButton } from "./RainbowButton";
import { FloatingPaths } from "./FloatingPaths";

/* ── Retro Grid ──────────────────────────────────────────────── */
function RetroGrid({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lineColor = "#2a2a2a",
}: {
  angle?: number;
  cellSize?: number;
  opacity?: number;
  lineColor?: string;
}) {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--line": lineColor,
  } as CSSProperties;

  return (
    <div
      className="pointer-events-none absolute size-full overflow-hidden [perspective:200px]"
      style={{ ...gridStyles, opacity }}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className="animate-grid [background-repeat:repeat] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]"
          style={{
            backgroundImage: `linear-gradient(to right, var(--line) 1px, transparent 0), linear-gradient(to bottom, var(--line) 1px, transparent 0)`,
            backgroundSize: `var(--cell-size) var(--cell-size)`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent to-90%" />
    </div>
  );
}

/* ── Hero Section ────────────────────────────────────────────── */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress through the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms — each layer moves at a different rate
  // RetroGrid: fastest (receding floor effect)
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.8], [0.35, 0.08]);

  // Orange glow: drifts upward subtly
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // FloatingPaths: slow drift (ethereal, lags behind scroll)
  const pathsY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const pathsScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const pathsOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const pathsRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);

  // Content: gentle lift (stays mostly stable, slight upward float)
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Scroll indicator: fades out early
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const indicatorY = useTransform(scrollYProgress, [0, 0.12], ["0px", "20px"]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]"
    >
      {/* Orange radial glow at top — drifts up + scales out */}
      <motion.div
        className="absolute top-0 z-0 h-screen w-full bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(254,106,46,0.18),rgba(0,0,0,0))]"
        style={{
          y: glowY,
          scale: glowScale,
          opacity: glowOpacity,
        }}
      />

      {/* RetroGrid — scrolls away fastest */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: gridY,
          opacity: gridOpacity,
        }}
      >
        <RetroGrid angle={65} opacity={1} cellSize={50} lineColor="#1e1e1e" />
      </motion.div>

      {/* FloatingPaths — slow ethereal drift */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{
          y: pathsY,
          scale: pathsScale,
          opacity: pathsOpacity,
          rotate: pathsRotate,
        }}
      >
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </motion.div>

      {/* Content — gentle upward float with fade */}
      <motion.div
        className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8 py-28 md:py-0 md:min-h-screen flex items-center"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div className="space-y-8 max-w-4xl mx-auto text-center w-full">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 text-sm text-[#b8b8b8] mx-auto px-5 py-2
                bg-gradient-to-tr from-[#FE6A2E]/10 via-[#FF9937]/5 to-transparent
                border-[2px] border-white/5 rounded-3xl w-fit
                hover:border-[#FE6A2E]/30 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              AI-Driven Enablement
              <ChevronRight className="inline w-4 h-4 group-hover:translate-x-1 duration-300" />
            </a>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="tracking-tighter text-transparent bg-clip-text mx-auto"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                lineHeight: 1.1,
                fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                backgroundImage: "linear-gradient(180deg, #FFF 0%, rgba(255,255,255,0.45) 100%)",
              }}
            >
              Strategic AI Solutions for Organizations
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-[#999] text-lg md:text-xl"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: "30px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            From data engineering to medical AI research to research
            commercialization—we deliver measurable outcomes for mission-driven
            enterprises.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
                border border-[#333] text-[#ccc]
                bg-gradient-to-tr from-[#ffffff08] via-[#ffffff04] to-transparent
                hover:border-[#444] hover:text-white transition-all"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 15 }}
            >
              Book a Call
              <ChevronRight className="w-4 h-4" />
            </a>

            <RainbowButton
              href="#solutions"
              className="px-8 py-4 text-white tracking-tight"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </RainbowButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — bouncing chevron, fades on scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 flex flex-col items-center gap-1.5 -translate-x-1/2"
        style={{
          opacity: indicatorOpacity,
          y: indicatorY,
        }}
      >
        <span
          className="text-[#666] text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          {/* Thin line */}
          <div className="w-px h-6 bg-gradient-to-b from-[#555] to-transparent" />
          {/* Chevron */}
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            className="mt-0.5"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="url(#scroll-chevron-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="scroll-chevron-grad" x1="1" y1="1" x2="13" y2="1">
                <stop stopColor="#FF9937" />
                <stop offset="1" stopColor="#FE6A2E" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}