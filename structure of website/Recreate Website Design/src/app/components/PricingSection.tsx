import { Check, ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { motion } from "motion/react";
import { MagicCard } from "./MagicCard";
import { useCallback, useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "Custom",
    description: "For small teams starting their AI journey with essential enablement tools.",
    features: [
      "AI readiness assessment",
      "Basic data pipeline setup",
      "Monthly strategy review",
      "Email support",
      "Up to 5 team members",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "Custom",
    description: "For mission-driven organizations requiring full-spectrum AI integration.",
    features: [
      "Everything in Starter",
      "Custom AI model development",
      "Human-in-the-Loop workflows",
      "Dedicated success manager",
      "Weekly strategy sessions",
      "Priority support",
      "Up to 25 team members",
    ],
    cta: "Request a Proposal",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale organizations with complex AI governance requirements.",
    features: [
      "Everything in Professional",
      "Multi-department deployment",
      "Custom compliance frameworks",
      "On-site consulting sessions",
      "24/7 dedicated support",
      "Unlimited team members",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-[90px]">
      <div className="max-w-[1228px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-6 mb-16"
        >
          <SectionLabel>Engagement Models</SectionLabel>
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
            Flexible Engagement for Every Stage
          </h2>
          <p
            className="max-w-[650px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#999" }}
          >
            Every organization is unique. We design custom engagement models that align with your goals, timeline, and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: { plan: typeof plans[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`rounded-[31px] p-1 transition-shadow duration-300 ${
        plan.highlighted
          ? "bg-gradient-to-b from-[#FF9937] to-[#FE6A2E] shadow-[0px_0px_24px_0px_rgba(254,106,46,0.2)] hover:shadow-[0px_0px_40px_0px_rgba(254,106,46,0.35)]"
          : "bg-[#111] shadow-[0px_0px_14px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.35)]"
      }`}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
      }}
    >
      <MagicCard
        className={`rounded-[28px] p-8 flex flex-col h-full ${
          plan.highlighted ? "bg-[#111]" : "bg-gradient-to-b from-[#161616] from-[52%] to-[#111] border border-[#222]"
        }`}
        gradientColor={plan.highlighted ? "rgba(255,153,55,0.18)" : "rgba(254,106,46,0.12)"}
      >
        {plan.highlighted && (
          <div
            className="inline-flex self-start px-3 py-1 rounded-full mb-4"
            style={{ background: "radial-gradient(circle at 60% 30%, #FF9937, #FE6A2E)" }}
          >
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 12, color: "white" }}>
              Most Popular
            </span>
          </div>
        )}

        <h3
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 24, letterSpacing: "-0.5px", color: "#e5e5e5" }}
        >
          {plan.name}
        </h3>

        <div className="mt-4">
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 36,
              background: "radial-gradient(circle at 60% 30%, #FF9937, #FE6A2E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {plan.price}
          </span>
        </div>

        <p className="mt-3" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, lineHeight: "22px", color: "#999" }}>
          {plan.description}
        </p>

        <ul className="mt-6 flex flex-col gap-3 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check size={16} className="text-[#FE6A2E] shrink-0 mt-0.5" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, color: "#999" }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          className={`mt-8 w-full py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px] active:scale-[0.97] ${
            plan.highlighted
              ? "text-white hover:opacity-90 hover:shadow-[0_4px_16px_rgba(254,106,46,0.3)]"
              : "border border-[#2a2a2a] text-[#ccc] bg-[#141414] hover:bg-[#1a1a1a] hover:border-[#3a3a3a]"
          }`}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: 15,
            ...(plan.highlighted ? { background: "linear-gradient(135deg, #FF9937, #FE6A2E)" } : {}),
          }}
        >
          {plan.cta}
          <ArrowRight size={16} />
        </button>
      </MagicCard>
    </motion.div>
  );
}