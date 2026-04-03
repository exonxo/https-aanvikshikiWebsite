import { Link } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { SEO, pageSEO } from "@/components/SEO";

const OS = "'Open Sans', sans-serif";

const testimonials = [
  {
    text: "They didn't come in with a pitch deck or a pre-built framework. They asked better questions than we had asked ourselves — and the analysis they produced in four days changed the entire direction of our migration.",
    name: "Rachel Osei",
    role: "Chief Data Officer, Regional Healthcare Network",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop",
  },
  {
    text: "Our attorneys now start every contract review at a higher level. The intake system doesn't replace judgment — it removes the grunt work so judgment can actually happen. That's a meaningful distinction.",
    name: "David Marchetti",
    role: "Managing Partner, Marchetti & Associates LLP",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&auto=format&fit=crop",
  },
  {
    text: "We had 47 dashboards and no shared truth. Eight weeks later we had one dashboard every executive trusted. The difference wasn't the technology — it was the discipline they brought to the definitions.",
    name: "Priya Anand",
    role: "VP of Operations, National Retail Group",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=150&h=150&auto=format&fit=crop",
  },
  {
    text: "We were spending 2,200 hours a quarter on regulatory filings. Their compliance engine cut that to 340 hours and gave us a complete audit trail for the first time. Regulators noticed the difference.",
    name: "James Okafor",
    role: "Chief Compliance Officer, Meridian Bank",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
  },
  {
    text: "What impressed me most was the speed of clarity. By day two we understood our data estate better than we had in eleven years. The dependency graph they built became the foundation of our entire migration plan.",
    name: "Sofia Reyes",
    role: "Head of Infrastructure, Apex Health Systems",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
  },
  {
    text: "They don't propose before they understand. That sounds obvious, but it's genuinely rare. The questions they asked in week one surfaced problems we hadn't articulated yet — and shaped the entire engagement.",
    name: "Martin Kowalski",
    role: "CEO, Structura Capital",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
  },
  {
    text: "The OASA framework gave our leadership team a shared language for making decisions under uncertainty. We still use it internally, long after the engagement ended. That's the mark of good methodology.",
    name: "Anita Krishnamurthy",
    role: "Strategy Director, Vanta Technologies",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop",
  },
  {
    text: "Every senior partner who reviewed the AI's first-pass work came back with the same observation: it catches things we used to miss. The precision on high-risk clauses is genuinely better than manual review.",
    name: "Claire Fontaine",
    role: "Senior Partner, Fontaine & Webb",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&h=150&auto=format&fit=crop",
  },
  {
    text: "We engaged Aanvikshiki expecting a report. What we got was a decision architecture we could actually act on. The distinction matters enormously at the executive level.",
    name: "Bernard Osei",
    role: "COO, Clearwater Logistics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
  },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

function TestimonialsColumn({
  items,
  duration = 15,
  className,
}: {
  items: typeof testimonials;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-5 pb-5 list-none m-0 p-0"
      >
        {[0, 1].map((copy) =>
          items.map((t, i) => (
            <li
              key={`${copy}-${i}`}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="rounded-2xl border border-gray-100 bg-white p-6 max-w-xs w-full"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
            >
              <blockquote className="m-0 p-0">
                <p
                  className="text-sm text-gray-600 leading-relaxed m-0"
                  style={{ fontFamily: OS }}
                >
                  "{t.text}"
                </p>
                <footer className="flex items-center gap-3 mt-5">
                  <img
                    width={36}
                    height={36}
                    src={t.image}
                    alt={t.name}
                    className="rounded-full object-cover shrink-0"
                    style={{ width: 36, height: 36 }}
                  />
                  <div>
                    <cite
                      className="not-italic text-sm font-semibold text-gray-900 block"
                      style={{ fontFamily: OS }}
                    >
                      {t.name}
                    </cite>
                    <span
                      className="text-xs mt-0.5 block"
                      style={{ fontFamily: OS, color: "#FF5C00" }}
                    >
                      {t.role}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </li>
          ))
        )}
      </motion.ul>
    </div>
  );
}

const faqs = [
  {
    q: "What kinds of organizations do you work with?",
    a: "We work with mid-sized to enterprise organizations across healthcare, legal, financial services, retail, and technology. The common thread is complexity — organizations that have grown faster than their decision-making structures, or that are navigating a transformation without a clear analytical foundation.",
  },
  {
    q: "How quickly can an engagement begin?",
    a: "Most engagements begin within one to two weeks of first contact. We review every enquiry within two business days and schedule an initial structured conversation to understand the problem before proposing anything.",
  },
  {
    q: "What is the OASA framework?",
    a: "OASA — Observe, Analyze, Synthesize, Act — is our core engagement methodology. It ensures that every engagement begins with a clear-eyed assessment of reality (Observe), applies rigorous analysis before synthesis, and produces outputs that are actually actionable (Act), not just informative.",
  },
  {
    q: "Do you implement solutions, or only advise?",
    a: "Both, depending on the engagement. Some clients bring us in to provide strategic clarity and hand off to internal teams. Others engage us through implementation. We define the scope precisely at the outset so there are no ambiguities about where our work ends.",
  },
  {
    q: "How do you use AI in your engagements?",
    a: "AI is applied where it produces superior results to manual methods — typically in large-scale data analysis, dependency mapping, document processing, and pattern recognition. We never use AI as a substitute for judgment. Every AI-produced output is reviewed, validated, and contextualized by experienced practitioners.",
  },
  {
    q: "What does a typical engagement cost?",
    a: "Engagements are scoped and priced on a fixed-fee basis, defined by deliverables rather than hours. We will not propose a scope until we understand the problem well enough to define it precisely. Most initial diagnostic engagements range from two to six weeks.",
  },
  {
    q: "Can you work with our existing internal teams?",
    a: "Yes — in most cases we are working alongside internal data, technology, or strategy teams. We bring the analytical framework and methodology; your internal teams bring the institutional knowledge. The combination is typically more effective than either alone.",
  },
  {
    q: "What happens after an engagement ends?",
    a: "Every engagement closes with a handoff package: documented outputs, decision frameworks, and implementation guidance. We design our work to transfer — the goal is that your team can operate independently once we step back, not that you need us indefinitely.",
  },
];

const stats = [
  {
    figure: "25%",
    label: "average reduction in decision cycle time",
    source: "Aanvikshiki engagement data",
  },
  {
    figure: "260%",
    label: "improvement in AI initiative ROI",
    source: "Aanvikshiki engagement data",
  },
  {
    figure: "4 days",
    label: "to achieve strategic clarity on a legacy data infrastructure",
    source: "AI Infrastructure engagement — 2024",
  },
];

const disciplines = [
  {
    num: "01",
    title: "Strategic Intelligence",
    description:
      "We translate complexity into clear, actionable decision frameworks by breaking down intricate problems into structured layers that leadership teams can confidently engage with.",
    bullets: [
      "Stakeholder interviews & hypothesis mapping",
      "Root cause analysis across organizational complexity",
      "Decision frameworks with ranked priorities",
      "Synthesis into cohesive strategic analysis",
    ],
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
  },
  {
    num: "02",
    title: "AI Integration",
    description:
      "We embed AI directly into decision-making processes — not as a superficial add-on, but as a genuine force multiplier for structured thinking and human judgment.",
    bullets: [
      "AI readiness assessment across your organization",
      "Integration roadmap aligned to strategy",
      "Governance and risk framework design",
      "Computational intelligence with human context",
    ],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
  {
    num: "03",
    title: "Decision Architecture",
    description:
      "Designing systems and processes that enable consistently better decisions requires a deliberate, end-to-end approach — from governance frameworks to intuitive workflows.",
    bullets: [
      "Decision authority matrix (RACI)",
      "Criteria-weighted evaluation frameworks",
      "Escalation protocols and exception rules",
      "Implementation playbook for leadership teams",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
];

const framework = [
  {
    num: "01",
    title: "Observe",
    desc: "See what's actually there. Before forming any hypothesis, we map the actual landscape — primary sources, not secondary summaries.",
    color: "#FF5C00",
  },
  {
    num: "02",
    title: "Analyze",
    desc: "Break down complexity into structured insights. Most complex problems are clusters of interdependent conditions, not single issues.",
    color: "#E85500",
  },
  {
    num: "03",
    title: "Synthesize",
    desc: "Connect insights into strategic direction. This is where analysis becomes useful — grounded in what the organization can actually execute.",
    color: "#CC4A00",
  },
  {
    num: "04",
    title: "Act",
    desc: "Enable execution with clarity and alignment. A strategy that cannot be acted upon is a document. We stay through the transition.",
    color: "#B34200",
  },
];

const beliefs = [
  {
    title: "Clarity beats speed.",
    description:
      "Most organizations move fast in the wrong direction. We slow the thinking down before the execution speeds up.",
    icon: "◎",
  },
  {
    title: "Thinking beats reacting.",
    description:
      "Reactive organizations mistake activity for progress. Structured thinking creates the conditions for decisions that hold under pressure.",
    icon: "⬡",
  },
  {
    title: "Ethics beats short-term gains.",
    description:
      "Intelligence without integrity compounds risk. Every framework we build embeds the question: what are the downstream consequences of this decision?",
    icon: "◈",
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <p
          className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
          style={{ fontFamily: OS, color: "#FF5C00" }}
        >
          FAQ
        </p>
        <h2
          className="font-bold tracking-tight text-gray-900 mb-12"
          style={{ fontFamily: OS, fontSize: "clamp(26px, 3vw, 38px)" }}
        >
          Common questions.
        </h2>
        <div className="flex flex-col divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="text-sm font-semibold text-gray-900"
                  style={{ fontFamily: OS }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform"
                  style={{
                    background: open === i
                      ? "linear-gradient(135deg, #FF5C00, #FF8C42)"
                      : "rgba(255,92,0,0.08)",
                    border: "1px solid rgba(255,92,0,0.2)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    color: open === i ? "#fff" : "#FF5C00",
                    fontSize: "18px",
                    lineHeight: 1,
                    fontWeight: 300,
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p
                  className="text-sm text-gray-500 leading-relaxed pb-5"
                  style={{ fontFamily: OS, maxWidth: "680px" }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <main>
      <SEO {...pageSEO.home} />
      {/* ── SECTION 1: Hero (background image) ── */}
      <section
        className="relative flex items-center"
        style={{
          minHeight: "720px",
          backgroundImage: "url('/Gemini_Generated_Image_p6mu14p6mu14p6mu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.58) 100%)",
          }}
        />
        {/* Orange accent stripe */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, #FF5C00, #FF8C42)" }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-36">
          <p
            className="text-xs uppercase tracking-[0.25em] font-semibold mb-6 inline-flex items-center gap-2"
            style={{ fontFamily: OS, color: "#FF8C42" }}
          >
            <span
              className="inline-block w-8 h-px"
              style={{ backgroundColor: "#FF8C42" }}
            />
            Structured Thinking. Applied AI.
          </p>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-20">
            <h1
              className="font-bold leading-[1.05] text-white mb-8 md:mb-0"
              style={{
                fontFamily: OS,
                fontSize: "clamp(40px, 5.5vw, 72px)",
                maxWidth: "660px",
                letterSpacing: "-0.01em",
              }}
            >
              Where Structured
              <br />
              <span style={{ color: "#FF8C42" }}>Thinking</span> Meets AI.
            </h1>

            <div className="flex flex-col gap-6 md:max-w-[300px] md:pt-4">
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: OS, color: "rgba(255,255,255,0.82)" }}
              >
                We help organizations make better decisions by combining
                rigorous analytical frameworks with AI-powered execution. No
                hype. No shortcuts. Just structured thinking at scale.
              </p>
              <div className="flex flex-row gap-3 flex-wrap">
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{
                    fontFamily: OS,
                    background: "linear-gradient(135deg, #FF5C00, #CC4A00)",
                    boxShadow: "0 4px 20px rgba(255,92,0,0.4)",
                  }}
                >
                  See our work
                </Link>
                <Link
                  to="/approach"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white border transition-colors hover:bg-white/10"
                  style={{
                    fontFamily: OS,
                    borderColor: "rgba(255,255,255,0.4)",
                  }}
                >
                  Our approach →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Three Disciplines (white with image cards) ── */}
      <section
        className="bg-white border-b border-gray-100"
        style={{ borderTopColor: "#FF5C00", borderTopWidth: "3px" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p
                className="text-xs uppercase tracking-[0.2em] font-semibold mb-3 inline-flex items-center gap-2"
                style={{ fontFamily: OS, color: "#FF5C00" }}
              >
                <span
                  className="inline-block w-6 h-px"
                  style={{ backgroundColor: "#FF5C00" }}
                />
                What We Do
              </p>
              <h2
                className="font-bold tracking-tight text-gray-900"
                style={{
                  fontFamily: OS,
                  fontSize: "clamp(28px, 3.5vw, 46px)",
                  lineHeight: 1.1,
                }}
              >
                Three disciplines that
                <br />
                <span style={{ color: "#FF5C00" }}>separate us.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden md:inline-flex items-center text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
              style={{ fontFamily: OS }}
            >
              See all services →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {disciplines.map((d) => (
              <div
                key={d.num}
                className="flex flex-col rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}
              >
                {/* Card image */}
                <div
                  className="h-48 w-full"
                  style={{
                    backgroundImage: `url('${d.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Card content */}
                <div className="flex flex-col gap-5 p-8 flex-1 bg-white">
                  <div>
                    <span
                      className="text-xs font-bold font-mono"
                      style={{ color: "#FF5C00" }}
                    >
                      {d.num}
                    </span>
                    <h3
                      className="text-xl font-bold text-gray-900 mt-2 mb-3"
                      style={{ fontFamily: OS }}
                    >
                      {d.title}
                    </h3>
                    <p
                      className="text-sm text-gray-600 leading-relaxed"
                      style={{ fontFamily: OS }}
                    >
                      {d.description}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-gray-50">
                    {d.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                        style={{ fontFamily: OS }}
                      >
                        <span
                          className="mt-0.5 shrink-0 text-xs font-bold"
                          style={{ color: "#FF5C00" }}
                        >
                          ✓
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Quote + Stats (dark) ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#111111",
          borderBottom: "1px solid #222222",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <h2
            className="font-semibold text-white mb-10 max-w-2xl"
            style={{
              fontFamily: OS,
              fontSize: "clamp(18px, 2.2vw, 26px)",
            }}
          >
            Thinking organizations are choosing structure over reaction.
          </h2>
          <blockquote
            className="pl-8 mb-16"
            style={{ borderLeft: "4px solid #FF5C00" }}
          >
            <p
              className="font-medium text-white leading-snug max-w-3xl"
              style={{ fontFamily: OS, fontSize: "clamp(20px, 2.5vw, 32px)" }}
            >
              "We believe the best decisions come from structure, not instinct.
              Most organizations are drowning in data and starving for insight."
            </p>
            <footer
              className="mt-4 text-sm"
              style={{ fontFamily: OS, color: "rgba(255,255,255,0.4)" }}
            >
              — Aanvikshiki Founding Principle
            </footer>
          </blockquote>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
            {stats.map((s, i) => (
              <div
                key={s.figure}
                className="md:px-10"
                style={{
                  paddingLeft: i === 0 ? 0 : undefined,
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <p
                  className="font-bold tracking-tight mb-2"
                  style={{
                    fontFamily: OS,
                    fontSize: "clamp(36px, 4vw, 52px)",
                    color: "#FF8C42",
                    lineHeight: 1,
                  }}
                >
                  {s.figure}
                </p>
                <p
                  className="text-sm leading-snug mb-1"
                  style={{ fontFamily: OS, color: "rgba(255,255,255,0.65)" }}
                >
                  {s.label}
                </p>
                <p
                  className="text-xs font-mono"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {s.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OASA Framework ── */}
      <section
        style={{
          background: "#f9fafb",
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3 inline-flex items-center gap-2"
            style={{ fontFamily: OS, color: "#FF5C00" }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ backgroundColor: "#FF5C00" }}
            />
            How We Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <h2
              className="font-bold tracking-tight text-gray-900 max-w-xl mb-4 md:mb-0"
              style={{
                fontFamily: OS,
                fontSize: "clamp(26px, 3vw, 40px)",
                lineHeight: 1.15,
              }}
            >
              The OASA framework — built-in decision structure from day one.
            </h2>
            <Link
              to="/approach"
              className="hidden md:inline-flex items-center text-sm font-semibold transition-colors"
              style={{ fontFamily: OS, color: "#FF5C00" }}
            >
              Learn the full framework →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {framework.map((f) => (
              <div
                key={f.num}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 2px 12px rgba(255,92,0,0.06)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${f.color}, ${f.color}cc)`,
                  }}
                >
                  <span
                    className="text-xs font-bold text-white font-mono"
                  >
                    {f.num}
                  </span>
                </div>
                <h4
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: OS }}
                >
                  {f.title}
                </h4>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: OS }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Case Study Feature (full image banner) ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3 inline-flex items-center gap-2"
            style={{ fontFamily: OS, color: "#FF5C00" }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ backgroundColor: "#FF5C00" }}
            />
            Work
          </p>
          {/* Banner image */}
          <div
            className="w-full h-48 md:h-64 rounded-2xl mb-10 overflow-hidden relative"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
              alt="Case study"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center px-10">
              <span
                className="text-xl md:text-2xl font-bold text-white max-w-2xl leading-snug"
                style={{ fontFamily: OS }}
              >
                AI Strategy — Healthcare Infrastructure
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2
                className="font-bold tracking-tight text-gray-900 leading-tight mb-6"
                style={{
                  fontFamily: OS,
                  fontSize: "clamp(24px, 3vw, 36px)",
                }}
              >
                How an organization learned what it had before deciding where
                to go — in 4 days.
              </h2>
              <p
                className="text-gray-600 leading-relaxed mb-6"
                style={{ fontFamily: OS }}
              >
                A regional healthcare provider needed to migrate its data
                infrastructure across 259 SSIS packages spanning 12 source
                systems — none documented, many interdependent in ways no one
                fully understood. Manual analysis was estimated at 6–8 weeks
                before migration planning could even begin.
              </p>
              <Link
                to="/work"
                className="inline-flex items-center text-sm font-semibold transition-colors"
                style={{ fontFamily: OS, color: "#FF5C00" }}
              >
                Read case study →
              </Link>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { fig: "4 days", desc: "strategic analysis (vs. 6–8 weeks estimated)" },
                  { fig: "2,847", desc: "dependencies analyzed across 259 packages" },
                ].map((item) => (
                  <div
                    key={item.fig}
                    className="rounded-2xl p-6"
                    style={{
                      background: "#f9fafb",
                      border: "1px solid #f3f4f6",
                    }}
                  >
                    <p
                      className="font-bold tracking-tight mb-2"
                      style={{
                        fontFamily: OS,
                        fontSize: "clamp(28px, 3vw, 40px)",
                        color: "#FF5C00",
                        lineHeight: 1,
                      }}
                    >
                      {item.fig}
                    </p>
                    <p
                      className="text-sm text-gray-600 leading-snug"
                      style={{ fontFamily: OS }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <blockquote
                className="pl-6 rounded-r-xl py-3"
                style={{
                  borderLeft: "4px solid #FF5C00",
                  backgroundColor: "#f9fafb",
                }}
              >
                <p
                  className="text-sm text-gray-700 leading-relaxed italic"
                  style={{ fontFamily: OS }}
                >
                  "Infrastructure analysis was completed in 4 days. The output
                  was not a report — it was a migration architecture derived
                  directly from the dependency graph topology."
                </p>
                <footer
                  className="mt-3 text-xs text-gray-400"
                  style={{ fontFamily: OS }}
                >
                  — AI Infrastructure Engagement, 2024
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Beliefs (image bg with overlay cards) ── */}
      <section
        className="relative"
        style={{ borderBottom: "1px solid #f3f4f6" }}
      >
        {/* Background image with tint */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.88)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3 inline-flex items-center gap-2"
            style={{ fontFamily: OS, color: "#FF8C42" }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ backgroundColor: "#FF8C42" }}
            />
            What We Believe
          </p>
          <h2
            className="font-bold tracking-tight text-white mb-14"
            style={{
              fontFamily: OS,
              fontSize: "clamp(26px, 3vw, 40px)",
            }}
          >
            The principles behind every engagement.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beliefs.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span
                  className="text-3xl"
                  style={{ color: "#FF8C42" }}
                >
                  {b.icon}
                </span>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: OS }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: OS, color: "rgba(255,255,255,0.7)" }}
                >
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: About Teaser ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-center md:gap-20">
            <div className="flex flex-col gap-5 md:flex-1 mb-10 md:mb-0">
              <p
                className="text-xs uppercase tracking-[0.2em] font-semibold inline-flex items-center gap-2"
                style={{ fontFamily: OS, color: "#FF5C00" }}
              >
                <span
                  className="inline-block w-6 h-px"
                  style={{ backgroundColor: "#FF5C00" }}
                />
                About
              </p>
              <h2
                className="font-bold tracking-tight text-gray-900 leading-tight"
                style={{
                  fontFamily: OS,
                  fontSize: "clamp(26px, 3vw, 40px)",
                }}
              >
                The Science of Thinking, Reimagined.
              </h2>
              <p
                className="text-base text-gray-600 leading-relaxed max-w-lg"
                style={{ fontFamily: OS }}
              >
                Aanvikshiki is rooted in the ancient Indian discipline of
                inquiry and reasoning — Ānvīkṣikī, the science of critical
                thinking — reinterpreted for modern organizations navigating
                complexity, uncertainty, and technological change.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-sm font-semibold transition-colors"
                style={{ fontFamily: OS, color: "#FF5C00" }}
              >
                Learn more about us →
              </Link>
            </div>
            <div
              className="w-full h-[300px] rounded-2xl md:w-[520px] md:h-[400px] md:shrink-0 overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.10)",
                backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-28">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-14">
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em] border border-gray-200 rounded-full px-4 py-1 mb-5"
              style={{ fontFamily: OS, color: "#FF5C00" }}
            >
              Testimonials
            </span>
            <h2
              className="font-bold tracking-tight text-gray-900 mb-4"
              style={{ fontFamily: OS, fontSize: "clamp(26px, 3vw, 40px)" }}
            >
              What clients say.
            </h2>
            <p
              className="text-base text-gray-500 leading-relaxed"
              style={{ fontFamily: OS }}
            >
              Organisations across healthcare, legal, finance, and retail — on what structured thinking actually changes.
            </p>
          </div>

          {/* Scrolling columns — faded top & bottom */}
          <div
            className="flex justify-center gap-5"
            style={{
              maxHeight: "660px",
              maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <TestimonialsColumn items={col1} duration={18} />
            <TestimonialsColumn items={col2} duration={22} className="hidden md:block" />
            <TestimonialsColumn items={col3} duration={16} className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── SECTION 8: Final CTA (dark) ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        {/* Orange glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "#FF5C00" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <h2
            className="font-bold tracking-tight text-white mb-6 max-w-2xl"
            style={{
              fontFamily: OS,
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.1,
            }}
          >
            Start with clarity,{" "}
            <span style={{ color: "#FF8C42" }}>scale with confidence.</span>
          </h2>
          <p
            className="text-lg leading-relaxed mb-14 max-w-2xl"
            style={{ fontFamily: OS, color: "rgba(255,255,255,0.6)" }}
          >
            Aanvikshiki helps modern organizations make better decisions —
            with structured thinking, AI integration, and decision architecture
            that holds under pressure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 max-w-2xl">
            <div>
              <p
                className="text-sm font-semibold text-white mb-2"
                style={{ fontFamily: OS }}
              >
                Fast engagement
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: OS, color: "rgba(255,255,255,0.45)" }}
              >
                We respond within 2 business days. Most engagements begin
                within a week of first contact.
              </p>
            </div>
            <div>
              <p
                className="text-sm font-semibold text-white mb-2"
                style={{ fontFamily: OS }}
              >
                Built for complexity
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: OS, color: "rgba(255,255,255,0.45)" }}
              >
                No open-ended retainers — just defined outputs at every
                stage, from single-problem analysis to full decision
                architecture.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{
              fontFamily: OS,
              background: "linear-gradient(135deg, #FF5C00, #CC4A00)",
              color: "#ffffff",
              boxShadow: "0 4px 20px rgba(255,92,0,0.35)",
            }}
          >
            Get started now
          </Link>
        </div>
      </section>

      {/* ── SECTION 9: Contact ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col gap-14 md:flex-row md:gap-20">
            {/* Left */}
            <div className="flex flex-col gap-8 md:flex-1">
              <p
                className="text-xs uppercase tracking-[0.2em] font-semibold inline-flex items-center gap-2"
                style={{ fontFamily: OS, color: "#FF5C00" }}
              >
                <span
                  className="inline-block w-6 h-px"
                  style={{ backgroundColor: "#FF5C00" }}
                />
                What to Expect
              </p>
              <div className="flex flex-col gap-7">
                {[
                  {
                    num: "01",
                    title: "Initial response",
                    body: "We review your submission and respond within 2 business days with specific questions about the challenge you're navigating.",
                  },
                  {
                    num: "02",
                    title: "Structured conversation",
                    body: "A focused call to understand the problem, the context, and what a good outcome looks like. No presentations — just questions.",
                  },
                  {
                    num: "03",
                    title: "Clear assessment",
                    body: "We provide a written assessment of what we see, how we'd approach it, and what a realistic engagement looks like.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, #FF5C00, #CC4A00)",
                      }}
                    >
                      <span
                        className="text-xs font-bold text-white font-mono"
                      >
                        {step.num}
                      </span>
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold text-gray-900 mb-1"
                        style={{ fontFamily: OS }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="text-sm text-gray-500 leading-relaxed"
                        style={{ fontFamily: OS }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-px bg-gray-100" />
              <div className="flex flex-col gap-1">
                <p
                  className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1"
                  style={{ fontFamily: OS }}
                >
                  Direct Contact
                </p>
                <p
                  className="text-sm text-gray-500"
                  style={{ fontFamily: OS }}
                >
                  For time-sensitive enquiries:
                </p>
                <p
                  className="text-sm font-bold text-gray-900"
                  style={{ fontFamily: OS }}
                >
                  contact@aanvikshiki.com
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:flex-1">
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm text-gray-900 outline-none transition-colors bg-white placeholder:text-gray-400 focus:border-orange-400"
                    style={{ fontFamily: OS }}
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm text-gray-900 outline-none transition-colors bg-white placeholder:text-gray-400 focus:border-orange-400"
                    style={{ fontFamily: OS }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Organisation"
                  className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm text-gray-900 outline-none transition-colors bg-white placeholder:text-gray-400 focus:border-orange-400"
                  style={{ fontFamily: OS }}
                />
                <select
                  defaultValue=""
                  className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm text-gray-600 outline-none transition-colors bg-white focus:border-orange-400"
                  style={{ fontFamily: OS }}
                >
                  <option value="" disabled>
                    What are you looking for?
                  </option>
                  <option value="strategy-ai">Strategy &amp; AI Advisory</option>
                  <option value="ai-integration">AI Integration</option>
                  <option value="decision-architecture">
                    Decision Architecture
                  </option>
                  <option value="research-to-implementation">
                    Research to Implementation
                  </option>
                  <option value="responsible-ai">Responsible AI</option>
                </select>
                <textarea
                  placeholder="Describe the challenge — the more specific, the better"
                  rows={4}
                  className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm text-gray-900 outline-none transition-colors resize-none bg-white placeholder:text-gray-400 focus:border-orange-400"
                  style={{ fontFamily: OS }}
                />
                <button
                  type="submit"
                  className="w-full text-white rounded-full py-3.5 text-sm font-bold transition-all hover:scale-[1.01] cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #FF5C00, #CC4A00)",
                    fontFamily: OS,
                    boxShadow: "0 4px 20px rgba(255,92,0,0.3)",
                  }}
                >
                  Get in Touch
                </button>
                <p
                  className="text-center text-xs text-gray-400"
                  style={{ fontFamily: OS }}
                >
                  We respond to every submission within 2 business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
