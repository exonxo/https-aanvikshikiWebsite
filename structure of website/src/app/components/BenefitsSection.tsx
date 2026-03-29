import { SectionLabel } from "./SectionLabel";
import { motion, useInView } from "motion/react";
import { Brain, Zap, Settings, Shield, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ── Animated Counter Hook ──
function useAnimatedCounter(target: number, duration: number = 1500, startWhen: boolean = false) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startWhen || hasStarted.current) return;
    hasStarted.current = true;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [startWhen, target, duration]);

  return count;
}

// ── Stat Counter Component ──
function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useAnimatedCounter(value, 1800, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-1"
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: 42,
          lineHeight: 1.1,
          background: "linear-gradient(135deg, #FF9937, #FE6A2E)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}{suffix}
      </span>
      <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, color: "#777" }}>
        {label}
      </span>
    </motion.div>
  );
}

const GradientIconSmall = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative rounded-full shrink-0 size-[46px] flex items-center justify-center border border-[#2a2a2a]"
    style={{
      background: "radial-gradient(ellipse at center, rgba(30,28,25,1) 0%, rgba(20,20,20,1) 100%)",
    }}
  >
    {children}
  </div>
);

const benefits = [
  {
    icon: Brain,
    title: "Expert Team",
    description: "An expert team ready to tackle your challenges with innovative solutions and proven strategies.",
  },
  {
    icon: Zap,
    title: "Fast and Scalable",
    description: "Scale your business effortlessly with our AI solutions, designed to grow alongside your evolving needs.",
  },
  {
    icon: Settings,
    title: "Customizable for You",
    description: "Customize the platform to perfectly align with your business's unique requirements and goals.",
  },
  {
    icon: Shield,
    title: "Maximum Efficiency",
    description: "Maximize efficiency with integrated solutions that eliminate bottlenecks, saving time and costs.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description: "AI that augments human judgment, ensuring every output receives human review, creativity, and strategic insight.",
  },
];

const tags = ["Ethical AI", "Human-in-the-Loop", "Data Engineering", "Scalable Solutions", "Research-Backed"];

export function BenefitsSection() {
  return (
    <section id="benefits" className="px-6 py-[90px]">
      <div className="max-w-[1228px] mx-auto">
        {/* Animated Stats Row */}
        

        <div className="flex flex-col lg:flex-row gap-[60px] items-start">
          {/* Left - Sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-[530px] shrink-0 lg:sticky lg:top-[100px]"
          >
            <div className="flex flex-col gap-4 mb-6">
              <SectionLabel>Benefits</SectionLabel>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 4vw, 49px)",
                  lineHeight: "62.4px",
                  letterSpacing: "-1px",
                  color: "#e5e5e5",
                }}
              >
                Unlock a New Era of Operational Excellence and Innovation
              </h2>
            </div>
            <p
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#999" }}
              className="mb-8"
            >
              Unlock operational excellence and innovation with our advanced tools and streamlined processes.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-gradient-to-b from-[#1a1a1a] from-50% to-[#141414] rounded-full border border-[#2a2a2a] px-5 py-2.5"
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 15.5, color: "#ccc" }}>
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Benefits list with glow bars */}
          <div className="flex-1 flex flex-col gap-[54px] relative">
            {/* Vertical divider line */}
            <div
              className="absolute left-[2px] top-1 bottom-1 w-px hidden lg:block"
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(42, 42, 42, 0) 0%, rgb(42, 42, 42) 23%, rgb(42, 42, 42) 82%, rgba(42, 42, 42, 0) 100%)",
              }}
            />

            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-10"
              >
                {/* Orange glow bar */}
                <div className="absolute left-0 top-0 w-[4px] h-[120px]">
                  <div className="absolute top-0 left-0 right-0 h-[42px] bg-[#fe6a2e] rounded-[2px]" />
                </div>
                <div
                  className="absolute left-0 top-0 w-[4px] h-[118px] opacity-50"
                  style={{ background: "linear-gradient(to bottom, #fe6a2e, rgba(42,42,42,0.07))" }}
                />

                {/* Icon + Title */}
                <div className="flex items-center gap-[17px] mb-4">
                  <GradientIconSmall>
                    <benefit.icon size={20} style={{ color: "#FE6A2E" }} />
                  </GradientIconSmall>
                  <h3
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 22, lineHeight: "28.8px", color: "#e5e5e5" }}
                  >
                    {benefit.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#999" }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}