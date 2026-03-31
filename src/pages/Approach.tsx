import { Link } from "react-router";

const principles = [
  "01 — Every engagement begins with questions, not proposals.",
  "02 — Complexity is not simplified — it is structured.",
  "03 — We distinguish between the stated problem and the actual problem.",
  "04 — Speed of execution follows clarity of thinking.",
  "05 — Ethics is embedded at synthesis, not added at the end.",
];

const oasaSections = [
  {
    num: "01",
    title: "Observe",
    subtitle: "See what's actually there.",
    description:
      "Before forming any hypothesis, we map the actual landscape. Primary sources, not secondary summaries. Data patterns, not anecdotal examples. We observe without agenda.",
    practice:
      "Stakeholder interviews, data audits, system mapping, process observation",
  },
  {
    num: "02",
    title: "Analyze",
    subtitle: "Break down complexity into structured insights.",
    description:
      "Most complex problems are not single problems — they are clusters of interdependent conditions. We map these dependencies before we name the challenge, because the wrong diagnosis produces the wrong response.",
    practice:
      "Root cause analysis, dependency mapping, scenario modeling, and structured decomposition of the problem space into addressable components.",
  },
  {
    num: "03",
    title: "Synthesize",
    subtitle: "Connect insights into strategic direction.",
    description:
      "Synthesis is where analysis becomes useful. We draw lines between what we have observed, what the data reveals, and what a credible path forward looks like — grounded in what the organization can actually execute.",
    practice:
      "Strategic framing, options development, AI capability assessment, and the construction of a decision framework tailored to the specific context.",
  },
  {
    num: "04",
    title: "Act",
    subtitle: "Enable execution with clarity and alignment.",
    description:
      "A strategy that cannot be acted upon is a document. We stay through the transition from insight to implementation — ensuring the thinking holds when it meets reality.",
    practice:
      "Implementation planning, team alignment, AI system deployment, and decision framework activation with measurable checkpoints.",
  },
];

export function Approach() {
  return (
    <main>
      {/* SECTION 1: Header */}
      <section
        className="bg-white px-6 py-10 md:px-15 md:py-16"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "11px",
            color: "#FF5C00",
            letterSpacing: "2px",
            fontWeight: 500,
            marginBottom: "16px",
          }}
        >
          HOW WE THINK
        </p>
        <h1
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            color: "#1A1A1A",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          How We Think.
        </h1>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "16px",
            color: "#666666",
            lineHeight: 1.6,
            maxWidth: "720px",
          }}
        >
          Where most thinking stops, we begin. Four disciplines that separate
          structured reasoning from reactive decision-making.
        </p>
      </section>

      {/* SECTION 2: Governing Principles */}
      <section
        className="bg-white px-6 py-10 md:px-15 md:py-16"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "11px",
            color: "#888888",
            letterSpacing: "2px",
            marginBottom: "32px",
          }}
        >
          GOVERNING PRINCIPLES
        </p>
        <div className="flex flex-col">
          {principles.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "14px",
                color: "#666666",
                lineHeight: 1.6,
                padding: "16px 0",
                borderBottom:
                  i < principles.length - 1 ? "1px solid #F3F4F6" : "none",
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* SECTIONS 3–6: OASA */}
      {oasaSections.map((s) => (
        <section
          key={s.num}
          className="bg-white px-6 py-10 md:px-15 md:py-16"
          style={{ borderBottom: "1px solid #F3F4F6" }}
        >
          <div className="flex flex-col gap-8 md:flex-row md:gap-12 md:items-stretch">
            {/* Left column */}
            <div className="flex flex-col gap-3 md:w-[360px] md:shrink-0">
              <span
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#888888",
                }}
              >
                {s.num}
              </span>
              <h2
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h2>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  lineHeight: 1.5,
                }}
              >
                {s.subtitle}
              </p>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "14px",
                  color: "#666666",
                  lineHeight: 1.65,
                }}
              >
                {s.description}
              </p>
            </div>

            {/* Right column: dark card */}
            <div
              className="flex-1 rounded-xl flex flex-col gap-4"
              style={{
                backgroundColor: "#1A1A1A",
                padding: "32px",
                minHeight: "180px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#FF5C00",
                  letterSpacing: "2px",
                }}
              >
                IN PRACTICE
              </p>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "15px",
                  color: "#d1d1d1",
                  lineHeight: 1.7,
                }}
              >
                {s.practice}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* SECTION 7: CTA */}
      <section
        className="bg-[#1A1A1A] px-6 py-16 md:px-15 md:py-20"
      >
        <div className="flex flex-col items-center gap-5 text-center">
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            Want to see the approach applied?
          </h2>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "16px",
              color: "#888888",
              lineHeight: 1.6,
              maxWidth: "600px",
            }}
          >
            Read through a case study to see how Observe → Analyze → Synthesize
            → Act plays out on a real engagement.
          </p>
          <div className="flex flex-col gap-3 mt-2 md:flex-row">
            <Link
              to="/work"
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                backgroundColor: "#FF5C00",
                color: "#FFFFFF",
                borderRadius: "9999px",
                padding: "12px 24px",
                textDecoration: "none",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              View case study
            </Link>
            <Link
              to="/contact"
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                backgroundColor: "transparent",
                border: "1px solid #333333",
                color: "#FFFFFF",
                borderRadius: "9999px",
                padding: "12px 24px",
                textDecoration: "none",
                display: "inline-block",
                textAlign: "center",
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
