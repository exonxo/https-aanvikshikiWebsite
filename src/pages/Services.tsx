import { Link } from "react-router";
import { SEO, pageSEO } from "@/components/SEO";
import { useRef } from "react";
import { motion, useScroll } from "motion/react";

const services = [
  {
    num: "01",
    category: "STRATEGIC THINKING",
    title: "Structured Problem Analysis",
    tagline: "When the problem is real but the path forward isn't clear.",
    description:
      "We work with leadership teams to define the actual problem — not the presenting symptom. Stakeholder interviews, hypothesis mapping, and constraint analysis to produce a clear decision framework.",
    deliverables: [
      "Problem definition document",
      "Stakeholder interview synthesis",
      "Hypothesis map with ranked priorities",
      "Decision framework and recommended path forward",
    ],
    howItWorks: [
      {
        step: "01",
        label: "Diagnose",
        desc: "Map the presenting symptoms to root causes through structured interviews and data review.",
      },
      {
        step: "02",
        label: "Frame",
        desc: "Translate findings into a clear problem statement and decision criteria.",
      },
      {
        step: "03",
        label: "Deliver",
        desc: "Hand off a decision framework the leadership team can act on immediately.",
      },
    ],
    caseStudy: true,
    image:
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
  },
  {
    num: "02",
    category: "AI ENABLEMENT",
    title: "AI Readiness & Integration",
    tagline:
      "When leadership knows AI is important but doesn't know where to start.",
    description:
      "We assess your organization's AI readiness and design an integration roadmap. Not a technology audit — a strategic alignment exercise that identifies where AI creates leverage, and where it doesn't.",
    deliverables: [
      "AI readiness assessment report",
      "Integration opportunity map",
      "Prioritized use-case roadmap",
      "Governance and risk framework",
    ],
    howItWorks: [
      {
        step: "01",
        label: "Assess",
        desc: "Evaluate current data infrastructure, team capability, and strategic fit for AI.",
      },
      {
        step: "02",
        label: "Map",
        desc: "Identify the highest-leverage integration points across the organization.",
      },
      {
        step: "03",
        label: "Roadmap",
        desc: "Produce a sequenced implementation plan with clear ownership and milestones.",
      },
    ],
    caseStudy: true,
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
  {
    num: "03",
    category: "DECISION DESIGN",
    title: "Decision Architecture",
    tagline: "When decisions are slow, inconsistent, or politically charged.",
    description:
      "We design the decision-making infrastructure: frameworks, roles, and processes that turn difficult decisions into repeatable, defensible ones.",
    deliverables: [
      "Decision authority matrix (RACI)",
      "Criteria-weighted evaluation framework",
      "Escalation protocols and exception rules",
      "Implementation playbook for leadership teams",
    ],
    howItWorks: [
      {
        step: "01",
        label: "Observe",
        desc: "Shadow existing decision processes to identify where breakdowns occur.",
      },
      {
        step: "02",
        label: "Design",
        desc: "Build the framework: roles, criteria, and process rules tailored to the context.",
      },
      {
        step: "03",
        label: "Activate",
        desc: "Run decision simulations with the team before full deployment.",
      },
    ],
    caseStudy: false,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    num: "04",
    category: "EXECUTION",
    title: "From Insight to Execution",
    tagline: "When the research is done but nothing has changed.",
    description:
      "We bridge the gap between strategic insight and operational reality, translating research findings into actionable product decisions and organizational change.",
    deliverables: [
      "Implementation roadmap with sequenced initiatives",
      "Stakeholder alignment documentation",
      "Change management communication templates",
      "Progress measurement framework",
    ],
    howItWorks: [
      {
        step: "01",
        label: "Translate",
        desc: "Convert strategic findings into specific, ownable actions per team.",
      },
      {
        step: "02",
        label: "Align",
        desc: "Facilitate stakeholder sessions to build implementation consensus.",
      },
      {
        step: "03",
        label: "Track",
        desc: "Establish checkpoints and success metrics to sustain momentum.",
      },
    ],
    caseStudy: false,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    num: "05",
    category: "GOVERNANCE",
    title: "Responsible AI Implementation",
    tagline: "When speed creates risk and risk creates liability.",
    description:
      "We design governance frameworks for AI systems: bias assessment, transparency requirements, accountability structures, and ongoing monitoring protocols.",
    deliverables: [
      "AI ethics and bias assessment report",
      "Transparency and explainability requirements",
      "Accountability structure and ownership map",
      "Ongoing monitoring protocol and review cadence",
    ],
    howItWorks: [
      {
        step: "01",
        label: "Audit",
        desc: "Review existing AI systems or planned deployments for risk and blind spots.",
      },
      {
        step: "02",
        label: "Design",
        desc: "Build accountability structures with clear escalation and review processes.",
      },
      {
        step: "03",
        label: "Monitor",
        desc: "Establish ongoing monitoring cadence with defined triggers for intervention.",
      },
    ],
    caseStudy: true,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
];

const comparison = [
  {
    legacy: "Generic, one-size-fits-all engagements",
    aanviski: "Built for your specific decision context",
  },
  {
    legacy: "Slide decks without implementation clarity",
    aanviski: "Defined outputs at every stage",
  },
  {
    legacy: "Black-box recommendations",
    aanviski: "Transparent frameworks you can act on",
  },
  {
    legacy: "Open-ended retainers with unclear scope",
    aanviski: "Structured engagements with defined deliverables",
  },
  {
    legacy: "Technology-first, strategy-second",
    aanviski: "Strategy-first, then technology where it helps",
  },
  {
    legacy: "Consultants who present, then leave",
    aanviski: "Partners who stay through implementation",
  },
];

// ── Scroll-tracked individual service section ───────────────────
function ServiceSection({ s, idx }: { s: (typeof services)[0]; idx: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      className="border-b border-gray-100"
      style={{ backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f9fafb" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Service header — animated progress ring around number */}
        <div className="flex flex-col gap-2 mb-10">
          <div className="flex gap-3 items-center">
            {/* Ring with number */}
            <div className="relative shrink-0" style={{ width: 48, height: 48 }}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                style={{ transform: "rotate(-90deg)" }}
              >
                <circle
                  cx="24" cy="24" r="19"
                  fill="none"
                  stroke="rgba(255,92,0,0.15)"
                  strokeWidth="2.5"
                />
                <motion.circle
                  cx="24" cy="24" r="19"
                  fill="none"
                  stroke="#FF5C00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDashoffset={0}
                  style={{ pathLength: scrollYProgress }}
                />
              </svg>
              <div
                className="absolute inset-0 flex items-center justify-center"
              >
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: "#FF5C00" }}
                >
                  {s.num}
                </span>
              </div>
            </div>
            <span
              className="text-xs font-medium rounded-full px-3 py-1"
              style={{
                color: "#FF5C00",
                backgroundColor: "#FFF5F0",
                fontFamily: "'Open Sans', sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              {s.category}
            </span>
          </div>
          <h2
            className="font-bold text-gray-900"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(22px, 2.5vw, 32px)",
              lineHeight: 1.2,
            }}
          >
            {s.title}
          </h2>
          <p
            className="text-sm italic"
            style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
          >
            {s.tagline}
          </p>
        </div>

        {/* 2-col layout */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-12 md:items-start">
          {/* Left: description + how it works */}
          <div className="flex flex-col gap-8 md:flex-1">
            <p
              className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {s.description}
            </p>
            <div>
              <p
                className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-5"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                How It Works
              </p>
              <div className="flex flex-col gap-4">
                {s.howItWorks.map((h, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className="flex items-center justify-center shrink-0 rounded-full mt-0.5"
                      style={{
                        width: "28px",
                        height: "28px",
                        background: "linear-gradient(135deg, #FF5C00, #FF8C42)",
                      }}
                    >
                      <span className="text-xs text-white font-semibold font-mono">
                        {h.step}
                      </span>
                    </div>
                    <div>
                      <span
                        className="text-sm font-semibold text-gray-900 block mb-0.5"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {h.label}
                      </span>
                      <span
                        className="text-sm text-gray-500 leading-relaxed"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {h.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {s.caseStudy && (
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
              >
                → See the case study
              </Link>
            )}
          </div>

          {/* Right: image + deliverables card */}
          <div
            className="flex flex-col gap-0 md:w-[340px] md:shrink-0 rounded-2xl overflow-hidden"
            style={{ border: "1px solid #f3f4f6" }}
          >
            <div
              style={{
                height: "180px",
                backgroundImage: `url('${s.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexShrink: 0,
              }}
            />
            <div
              style={{
                background: "linear-gradient(135deg, #fff7f0 0%, #ffede0 100%)",
                padding: "28px",
                flex: 1,
              }}
            >
              <p
                className="text-xs uppercase tracking-[0.2em] font-medium mb-5"
                style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
              >
                What You Get
              </p>
              <div className="flex flex-col gap-3">
                {s.deliverables.map((d, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span
                      className="shrink-0 mt-0.5 text-sm font-bold"
                      style={{ color: "#FF5C00" }}
                    >
                      ✓
                    </span>
                    <span
                      className="text-sm leading-snug text-gray-700"
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <main>
      <SEO {...pageSEO.services} />
      {/* SECTION 1: Page Header */}
      <section className="bg-white border-b border-gray-100">
        <div style={{ height: "4px", background: "linear-gradient(90deg, #FF5C00, #FF8C42, #FF5C00)" }} />
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="flex items-center justify-between">
            <div style={{ maxWidth: "620px" }}>
              <p
                className="text-xs uppercase tracking-[0.2em] font-semibold mb-4"
                style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
              >
                Services
              </p>
              <h1
                className="font-bold tracking-tight text-gray-900 mb-4"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: 1.1,
                }}
              >
                Five ways we make complexity navigable.
              </h1>
              <p
                className="text-base text-gray-500 leading-relaxed"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Each engagement is structured to deliver clarity, not just
                analysis. We work in defined phases with specific outputs at
                every stage — so you always know what you're getting and when.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center shrink-0">
              <img
                src="/illustration-services.svg"
                alt=""
                style={{ width: "260px", height: "200px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Service Flow Map */}
      <section className="bg-[#1A1A1A] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p
            className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-10"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            How Our Services Connect
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {services.map((s, i) => (
              <div
                key={s.num}
                className="flex flex-row md:flex-col md:flex-1 items-center"
              >
                <div
                  className="flex flex-col gap-2 rounded-xl flex-1 md:flex-none"
                  style={{
                    backgroundColor: "#242424",
                    border: "1px solid #333333",
                    padding: "20px",
                  }}
                >
                  <span
                    className="text-xs font-mono font-semibold"
                    style={{ color: "#FF5C00" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-sm font-semibold text-white leading-snug"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {s.title}
                  </span>
                  <span
                    className="text-xs font-medium rounded-full self-start px-2.5 py-0.5"
                    style={{
                      color: "#FF5C00",
                      backgroundColor: "#2E1A10",
                      fontFamily: "'Open Sans', sans-serif",
                    }}
                  >
                    {s.category}
                  </span>
                </div>
                {i < services.length - 1 && (
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: "32px" }}
                  >
                    <span
                      className="hidden md:block text-base"
                      style={{ color: "#FF5C00" }}
                    >
                      →
                    </span>
                    <span
                      className="md:hidden text-base"
                      style={{ color: "#FF5C00" }}
                    >
                      ↓
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p
            className="text-sm text-gray-500 leading-relaxed mt-8 max-w-xl"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Most engagements start with Problem Analysis, then expand into AI
            or Decision work. Some clients engage all five. Each service has
            defined outputs — not open-ended retainers.
          </p>
        </div>
      </section>

      {/* SECTION 3+: Individual Services — scroll-tracked ring per section */}
      {services.map((s, idx) => (
        <ServiceSection key={s.num} s={s} idx={idx} />
      ))}

      {/* COMPARISON TABLE */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
          >
            Why Aanvikshiki
          </p>
          <h2
            className="font-bold tracking-tight text-gray-900 mb-12"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
            }}
          >
            Why organizations are choosing
            <br />
            structured thinking over conventional consulting.
          </h2>
          <div
            className="rounded-2xl overflow-hidden border border-gray-200"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
          >
            <div className="grid grid-cols-2 bg-gray-900 px-8 py-4">
              <span
                className="text-xs uppercase tracking-widest text-gray-400 font-medium"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Conventional Consulting
              </span>
              <span
                className="text-xs uppercase tracking-widest font-medium"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#FF5C00",
                }}
              >
                Aanvikshiki
              </span>
            </div>
            {comparison.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 px-8 py-5"
                style={{
                  backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafafa",
                  borderTop: "1px solid #f3f4f6",
                }}
              >
                <div className="flex items-start gap-2 pr-6">
                  <span className="text-gray-400 mt-0.5 text-sm shrink-0">
                    —
                  </span>
                  <span
                    className="text-sm text-gray-500 leading-snug"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {row.legacy}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="mt-0.5 text-sm shrink-0"
                    style={{ color: "#FF5C00" }}
                  >
                    ✓
                  </span>
                  <span
                    className="text-sm text-gray-900 leading-snug font-medium"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {row.aanviski}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="relative" style={{ backgroundColor: "#1A1A1A" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 200px at 50% 0%, rgba(255,92,0,0.12), transparent)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <h2
                className="font-bold text-white"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  lineHeight: 1.2,
                }}
              >
                Not sure which{" "}
                <span style={{ color: "#FF8C42" }}>service fits?</span>
              </h2>
              <p
                className="leading-snug"
                style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#888888" }}
              >
                Most engagements begin with a single conversation. We'll
                identify the right entry point together.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full text-sm font-semibold text-white transition-colors shrink-0 self-start md:self-auto"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                background: "linear-gradient(135deg, #FF5C00, #FF8C42)",
                padding: "14px 32px",
                boxShadow: "0 4px 20px rgba(255,92,0,0.4)",
              }}
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
