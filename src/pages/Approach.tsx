import { Link } from "react-router";
import { SEO, pageSEO } from "@/components/SEO";
import { useRef } from "react";
import { motion, useScroll } from "motion/react";

const principles = [
  {
    num: "01",
    text: "Every engagement begins with questions, not proposals.",
  },
  {
    num: "02",
    text: "Complexity is not simplified — it is structured.",
  },
  {
    num: "03",
    text: "We distinguish between the stated problem and the actual problem.",
  },
  {
    num: "04",
    text: "Speed of execution follows clarity of thinking.",
  },
  {
    num: "05",
    text: "Ethics is embedded at synthesis, not added at the end.",
  },
];

const oasaSections = [
  {
    num: "01",
    title: "Observe",
    icon: "◎",
    subtitle: "See what's actually there.",
    description:
      "Before forming any hypothesis, we map the actual landscape. Primary sources, not secondary summaries. Data patterns, not anecdotal examples. We observe without agenda.",
    practice: {
      what: "We embed with the team to record what is actually happening — not what people say is happening.",
      who: "Analysts, stakeholders, process owners, and decision-makers at every level.",
      output:
        "A structured landscape map: data flows, decision nodes, and system dependencies.",
      duration: "1–2 weeks depending on organizational complexity.",
    },
    methods: [
      "Stakeholder interviews",
      "Data audits",
      "System mapping",
      "Process observation",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    num: "02",
    title: "Analyze",
    icon: "⬡",
    subtitle: "Break down complexity into structured insights.",
    description:
      "Most complex problems are not single problems — they are clusters of interdependent conditions. We map these dependencies before we name the challenge, because the wrong diagnosis produces the wrong response.",
    practice: {
      what: "We decompose the problem space into its constituent parts and map how they interact.",
      who: "Strategy leads, data analysts, and domain experts from the client organization.",
      output:
        "Root cause analysis, dependency map, and a ranked hypothesis set.",
      duration: "1–3 weeks. Shortened when Observe data is clean.",
    },
    methods: [
      "Root cause analysis",
      "Dependency mapping",
      "Scenario modeling",
      "Structured decomposition",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    num: "03",
    title: "Synthesize",
    icon: "◈",
    subtitle: "Connect insights into strategic direction.",
    description:
      "Synthesis is where analysis becomes useful. We draw lines between what we have observed, what the data reveals, and what a credible path forward looks like — grounded in what the organization can actually execute.",
    practice: {
      what: "We translate findings into a strategic frame: options, trade-offs, and a recommended direction.",
      who: "Senior strategists and AI capability leads, with executive review sessions.",
      output:
        "Strategic framing document, options analysis, and a decision framework.",
      duration: "1–2 weeks. Output is the primary deliverable of each engagement.",
    },
    methods: [
      "Strategic framing",
      "Options development",
      "AI capability assessment",
      "Decision framework design",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
  {
    num: "04",
    title: "Act",
    icon: "▶",
    subtitle: "Enable execution with clarity and alignment.",
    description:
      "A strategy that cannot be acted upon is a document. We stay through the transition from insight to implementation — ensuring the thinking holds when it meets reality.",
    practice: {
      what: "We convert the decision framework into an implementation plan with measurable checkpoints.",
      who: "Implementation leads, change managers, and the full leadership team.",
      output:
        "Sequenced implementation roadmap, team alignment documentation, and progress review protocol.",
      duration: "Ongoing support model — typically 4–8 weeks of active engagement.",
    },
    methods: [
      "Implementation planning",
      "Team alignment",
      "AI system deployment",
      "Decision framework activation",
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
];

// ── Scroll-tracked OASA phase section ──────────────────────────
function OasaPhaseSection({ s, idx }: { s: (typeof oasaSections)[0]; idx: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      key={s.num}
      className="border-b border-gray-100"
      style={{ backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f9fafb" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Phase header — animated progress ring */}
        <div className="flex items-center gap-5 mb-10">
          {/* Ring */}
          <div className="relative shrink-0" style={{ width: 64, height: 64 }}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              style={{ transform: "rotate(-90deg)" }}
            >
              {/* Track */}
              <circle
                cx="32" cy="32" r="26"
                fill="none"
                stroke="rgba(255,92,0,0.15)"
                strokeWidth="3"
              />
              {/* Animated fill */}
              <motion.circle
                cx="32" cy="32" r="26"
                fill="none"
                stroke="#FF5C00"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength="1"
                strokeDashoffset={0}
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
            {/* Icon centered over ring */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ fontSize: "20px", color: "#FF5C00" }}
            >
              {s.icon}
            </div>
          </div>

          <div>
            <span
              className="text-xs text-gray-400 block mb-1"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {s.num}
            </span>
            <h2
              className="font-bold text-gray-900"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "clamp(24px, 2.5vw, 32px)",
                lineHeight: 1.2,
              }}
            >
              {s.title}
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:gap-12 md:items-start">
          {/* Left: text + methods */}
          <div className="flex flex-col gap-6 md:flex-1">
            <p
              className="text-sm font-semibold text-gray-900 leading-snug"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {s.subtitle}
            </p>
            <p
              className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {s.description}
            </p>
            <div>
              <p
                className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-3"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Methods Used
              </p>
              <div className="flex flex-wrap gap-2">
                {s.methods.map((m, i) => (
                  <span
                    key={i}
                    className="text-xs text-gray-700 bg-gray-100 rounded-full px-3 py-1.5 font-medium"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: image + IN PRACTICE card */}
          <div
            className="flex flex-col gap-0 md:w-[380px] md:shrink-0 rounded-2xl overflow-hidden"
            style={{ border: "1px solid #f3f4f6" }}
          >
            <div
              style={{
                height: "160px",
                backgroundImage: `url('${s.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              style={{
                background: "linear-gradient(135deg, #fff7f0 0%, #ffede0 100%)",
                padding: "28px",
              }}
            >
              <p
                className="text-xs uppercase tracking-[0.2em] font-medium mb-5"
                style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
              >
                In Practice
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { label: "What Happens", value: s.practice.what },
                  { label: "Who's Involved", value: s.practice.who },
                  { label: "The Output", value: s.practice.output },
                  { label: "Typical Duration", value: s.practice.duration, accent: true },
                ].map((item, i) => (
                  <div key={i}>
                    {i > 0 && (
                      <div
                        className="mb-5"
                        style={{ height: "1px", backgroundColor: "rgba(255,92,0,0.15)" }}
                      />
                    )}
                    <p
                      className="text-xs text-gray-400 mb-1 uppercase"
                      style={{ fontFamily: "'Open Sans', sans-serif", letterSpacing: "0.08em" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        color: item.accent ? "#FF5C00" : "#1a1a1a",
                        fontWeight: item.accent ? 600 : 400,
                      }}
                    >
                      {item.value}
                    </p>
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

export function Approach() {
  return (
    <main>
      <SEO {...pageSEO.approach} />
      {/* SECTION 1: Page Header */}
      <section className="bg-white border-b border-gray-100">
        <div style={{ height: "4px", background: "linear-gradient(90deg, #FF5C00, #FF8C42, #FF5C00)" }} />
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="flex items-center justify-between">
            <div style={{ maxWidth: "640px" }}>
              <p
                className="text-xs uppercase tracking-[0.2em] font-semibold mb-4"
                style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
              >
                How We Think
              </p>
              <h1
                className="font-bold tracking-tight text-gray-900 mb-4"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: 1.1,
                }}
              >
                Four disciplines that separate structured reasoning from reactive decision-making.
              </h1>
              <p
                className="text-base text-gray-500 leading-relaxed"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Where most thinking stops, we begin. The OASA framework is how
                we move from observation to strategic action — without skipping
                the hard middle.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center shrink-0">
              <img
                src="/illustration-approach.svg"
                alt=""
                style={{ width: "260px", height: "200px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OASA Progress Indicator */}
      <section className="bg-[#1A1A1A] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p
            className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-10"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            The OASA Framework
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
            {oasaSections.map((s, i) => (
              <div
                key={s.num}
                className="flex flex-row md:flex-col md:flex-1 items-center gap-0"
              >
                <div
                  className="flex flex-col gap-3 flex-1 md:flex-none rounded-2xl"
                  style={{
                    backgroundColor: "#242424",
                    border: "1px solid #333333",
                    padding: "20px",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xl"
                      style={{ color: "#FF5C00", lineHeight: 1 }}
                    >
                      {s.icon}
                    </span>
                    <span
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      {s.num}
                    </span>
                  </div>
                  <span
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {s.title}
                  </span>
                  <span
                    className="text-xs text-gray-500 leading-snug"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {s.subtitle}
                  </span>
                </div>
                {i < oasaSections.length - 1 && (
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <span
                      className="hidden md:block text-lg"
                      style={{ color: "#FF5C00" }}
                    >
                      →
                    </span>
                    <span
                      className="md:hidden text-lg"
                      style={{ color: "#FF5C00" }}
                    >
                      ↓
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Governing Principles */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-10"
            style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
          >
            Governing Principles
          </p>
          <div className="flex flex-col divide-y divide-gray-200">
            {principles.map((p, i) => (
              <div
                key={i}
                className="flex flex-row gap-6 items-start py-8"
              >
                <span
                  className="font-bold shrink-0 opacity-90"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "clamp(40px, 5vw, 60px)",
                    color: "#FF5C00",
                    lineHeight: 0.9,
                    width: "80px",
                  }}
                >
                  {p.num}
                </span>
                <p
                  className="font-semibold text-gray-900 leading-snug"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "clamp(18px, 2vw, 22px)",
                    paddingTop: "8px",
                  }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS 4–7: OASA phases — scroll-tracked ring per section */}
      {oasaSections.map((s, idx) => (
        <OasaPhaseSection key={s.num} s={s} idx={idx} />
      ))}

      {/* SECTION: CTA */}
      <section className="relative" style={{ backgroundColor: "#1A1A1A" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 200px at 50% 0%, rgba(255,92,0,0.12), transparent)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col items-center gap-5 text-center">
            <h2
              className="font-bold text-white"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "clamp(24px, 3vw, 36px)",
                lineHeight: 1.2,
              }}
            >
              Want to see the{" "}
              <span style={{ color: "#FF8C42" }}>approach applied?</span>
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                color: "#888888",
                maxWidth: "520px",
              }}
            >
              Read through a case study to see how Observe → Analyze →
              Synthesize → Act plays out on a real engagement.
            </p>
            <div className="flex flex-col gap-3 mt-2 md:flex-row">
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-full text-sm font-semibold text-white transition-colors"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  background: "linear-gradient(135deg, #FF5C00, #FF8C42)",
                  padding: "14px 28px",
                  boxShadow: "0 4px 20px rgba(255,92,0,0.4)",
                }}
              >
                View case study
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full text-sm font-semibold text-white border transition-colors"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  borderColor: "#444",
                  padding: "14px 28px",
                }}
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
