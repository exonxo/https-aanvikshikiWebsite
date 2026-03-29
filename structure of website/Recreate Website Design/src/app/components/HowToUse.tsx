import { SectionLabel } from "./SectionLabel";
import { motion } from "motion/react";
import { MagicCard } from "./MagicCard";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import imgStep from "figma:asset/7dcfc9b495608ded1b3efb98357e41f4dae6b8bf.png";

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "We assess your current data landscape, identify opportunities, and define a strategic roadmap tailored to your organization's goals.",
    ctaLabel: "Get Assessed",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description: "Our team designs custom AI solutions aligned with your requirements, ensuring ethical governance and human oversight at every stage.",
    ctaLabel: "Start Designing",
  },
  {
    number: "03",
    title: "Implementation & Integration",
    description: "We build and deploy your AI systems with seamless integration into existing workflows, minimizing disruption and maximizing adoption.",
    ctaLabel: "Begin Implementation",
  },
  {
    number: "04",
    title: "Optimization & Growth",
    description: "Continuous monitoring, refinement, and scaling to ensure your AI solutions deliver measurable, sustained business outcomes.",
    ctaLabel: "Scale With Us",
  },
];

export function HowToUse() {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  const handleStageClick = (index: number) => {
    setSelectedStage(index);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="how-it-works" className="bg-[#0f0f0f] px-6 pt-[90px] pb-[120px]">
      <div className="max-w-[1228px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-6 mb-16"
        >
          <SectionLabel>How It Works</SectionLabel>
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
            Simple Steps to Transform Your Operations
          </h2>
          <p
            className="max-w-[650px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#999" }}
          >
            Our proven methodology ensures a smooth journey from assessment to measurable impact.
          </p>
        </motion.div>

        {/* Steps + Image */}
        <div className="flex flex-col lg:flex-row gap-[60px] items-center">
          {/* Left - Steps */}
          <div className="flex-1 flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <motion.div
                  className="shrink-0 w-[52px] h-[52px] rounded-[16px] flex items-center justify-center relative"
                  style={{ background: "radial-gradient(circle at 60% 30%, #FF9937, #FE6A2E)" }}
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: i * 0.12 + 0.2,
                  }}
                >
                  {/* Pulsing glow ring */}
                  <motion.div
                    className="absolute inset-[-4px] rounded-[19px] pointer-events-none"
                    style={{
                      border: "1.5px solid rgba(254,106,46,0.35)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: [0, 0.6, 0], scale: [0.85, 1.15, 1.25] }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      delay: i * 0.12 + 0.5,
                      duration: 1.4,
                      ease: "easeOut",
                    }}
                  />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 18, color: "white" }}>
                    {step.number}
                  </span>
                </motion.div>
                <div>
                  <h3
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 22, lineHeight: "28.8px", color: "#e5e5e5" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#999" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-[540px]"
          >
            <MagicCard className="rounded-[30px] overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-[#222]">
              <img
                src={imgStep}
                alt="Implementation Process"
                className="w-full h-auto object-cover"
              />
            </MagicCard>
          </motion.div>
        </div>

        {/* "Where Are You?" Interactive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <MagicCard className="rounded-[24px] border border-[#222] bg-[#111] p-8 sm:p-10">
            <div className="text-center mb-8">
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(22px, 3vw, 28px)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.5px",
                  color: "#e5e5e5",
                }}
              >
                Which stage is your organization at?
              </h3>
              <p
                className="mt-2 max-w-[480px] mx-auto"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: "24px",
                  color: "#777",
                }}
              >
                Select where you are today — we'll take it from there.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <motion.button
                  key={step.number}
                  onClick={() => handleStageClick(i)}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative rounded-[16px] border p-5 text-left cursor-pointer transition-all duration-300 ${
                    selectedStage === i
                      ? "border-[#FE6A2E]/50 bg-[#FE6A2E]/[0.06]"
                      : "border-[#2a2a2a] bg-[#0f0f0f] hover:border-[#444] hover:bg-[#151515]"
                  }`}
                  style={{ outline: "none" }}
                >
                  <span
                    className="block mb-2"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: 13,
                      background: "linear-gradient(135deg, #FF9937, #FE6A2E)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Step {step.number}
                  </span>
                  <span
                    className="block mb-3"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: 15,
                      color: "#e5e5e5",
                      lineHeight: "20px",
                    }}
                  >
                    {step.title}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 transition-colors duration-200"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: 13,
                      color: selectedStage === i ? "#FE6A2E" : "#666",
                    }}
                  >
                    {step.ctaLabel}
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </motion.button>
              ))}
            </div>
          </MagicCard>
        </motion.div>
      </div>
    </section>
  );
}