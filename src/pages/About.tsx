import { Link } from "react-router";

const beliefs = [
  {
    title: "Clarity beats speed.",
    description:
      "Most organizations move fast in the wrong direction. We slow the thinking down before the execution speeds up.",
  },
  {
    title: "Thinking beats reacting.",
    description:
      "Reactive organizations mistake activity for progress. Structured thinking creates the conditions for decisions that hold under pressure.",
  },
  {
    title: "Ethics beats short-term gains.",
    description:
      "Intelligence without integrity compounds risk. Every framework we build embeds the question: what are the downstream consequences of this decision?",
  },
];

const operations = [
  {
    num: "01",
    title: "Inquiry before conclusion",
    description:
      "We do not arrive at engagements with pre-formed answers. We arrive with structured questions. The problem defines the approach — not the other way around.",
  },
  {
    num: "02",
    title: "Transparency over comfort",
    description:
      "We tell clients what we find, not what they want to hear. A strategic assessment that obscures inconvenient truths is not an assessment — it is a performance.",
  },
  {
    num: "03",
    title: "Human judgment, amplified",
    description:
      "AI is the instrument. Human judgment remains the authority. We design systems that sharpen decision-making rather than replace it.",
  },
  {
    num: "04",
    title: "Long arc thinking",
    description:
      "The decisions that matter most play out over years, not quarters. We build frameworks that remain sound under conditions that don't yet exist.",
  },
];

export function About() {
  return (
    <main>
      {/* SECTION 1: Header */}
      <section
        className="bg-white px-6 py-10 md:px-15 md:py-20"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-20">
          {/* Left text */}
          <div className="flex flex-col gap-5 md:flex-1">
            <p
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "11px",
                color: "#888888",
                letterSpacing: "2px",
              }}
            >
              ABOUT
            </p>
            <h1
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.1,
              }}
            >
              The Science of Thinking, Reimagined.
            </h1>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "16px",
                color: "#666666",
                lineHeight: 1.7,
              }}
            >
              Aanvikshiki is rooted in the ancient Indian discipline of inquiry
              and reasoning — Ānvīkṣikī, the science of critical thinking —
              reinterpreted for modern organizations navigating complexity,
              uncertainty, and technological change.
            </p>
          </div>

          {/* Right image */}
          <div
            className="w-full h-[240px] rounded-xl bg-[#F7F8FA] md:w-[560px] md:h-[420px] md:shrink-0"
          />
        </div>
      </section>

      {/* SECTION 2: Etymology (dark) */}
      <section
        className="bg-[#1A1A1A] px-6 py-16 md:px-15"
        style={{ borderBottom: "1px solid #2E2E2E" }}
      >
        <div
          className="mx-auto flex flex-col items-center gap-6 text-center"
          style={{ maxWidth: "680px" }}
        >
          <p
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "11px",
              color: "#FF5C00",
              letterSpacing: "2px",
            }}
          >
            THE NAME
          </p>
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: "clamp(22px, 2.5vw, 30px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.25,
            }}
          >
            Ancient Wisdom. Modern Execution.
          </h2>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "16px",
              color: "#d1d1d1",
              lineHeight: 1.7,
            }}
          >
            Ānvīkṣikī appears in the Arthashastra — Kautilya's treatise on
            statecraft — as one of the four sciences a leader must master. It
            is defined as the lamp of all learning, the means of all action,
            and the foundation of all knowledge.
          </p>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "16px",
              color: "#d1d1d1",
              lineHeight: 1.7,
            }}
          >
            We took the name because it captures what we believe is missing in
            most AI-enabled organizations: not more data, not more models, but
            a rigorous discipline of inquiry that precedes any of it. The
            ancient idea is that structured thinking is not a soft skill — it
            is a strategic capability. That belief is the foundation of
            everything we do.
          </p>
        </div>
      </section>

      {/* SECTION 3: What We Believe */}
      <section
        className="bg-[#F7F8FA] px-6 py-10 md:px-15 md:py-20"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "11px",
            color: "#888888",
            letterSpacing: "2px",
            marginBottom: "48px",
          }}
        >
          WHAT WE BELIEVE
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {beliefs.map((b) => (
            <div key={b.title} className="flex flex-col gap-3">
              <h3
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  lineHeight: 1.3,
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "15px",
                  color: "#666666",
                  lineHeight: 1.7,
                }}
              >
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: How We Operate */}
      <section
        className="bg-white px-6 py-10 md:px-15 md:py-20"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "11px",
            color: "#888888",
            letterSpacing: "2px",
            marginBottom: "48px",
          }}
        >
          HOW WE OPERATE
        </p>
        <div className="flex flex-col">
          {operations.map((op, i) => (
            <div
              key={op.num}
              className="flex flex-row gap-8 py-8"
              style={{
                borderBottom:
                  i < operations.length - 1 ? "1px solid #F3F4F6" : "none",
                alignItems: "flex-start",
              }}
            >
              <span
                className="shrink-0"
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#FF5C00",
                  width: "32px",
                  paddingTop: "3px",
                }}
              >
                {op.num}
              </span>
              <div className="flex flex-col gap-2">
                <h4
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    lineHeight: 1.3,
                  }}
                >
                  {op.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "14px",
                    color: "#666666",
                    lineHeight: 1.65,
                  }}
                >
                  {op.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="bg-white px-6 py-10 md:px-15 md:py-20">
        <div
          className="flex flex-col gap-6 pt-10 md:flex-row md:justify-between md:items-center"
          style={{ borderTop: "1px solid #F3F4F6" }}
        >
          <div className="flex flex-col gap-2">
            <p
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.3,
              }}
            >
              Thinking differently about a complex problem?
            </p>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "15px",
                color: "#666666",
                lineHeight: 1.6,
              }}
            >
              Start with a conversation. We'll ask the right questions before
              proposing anything.
            </p>
          </div>
          <Link
            to="/contact"
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              backgroundColor: "#FF5C00",
              color: "#FFFFFF",
              borderRadius: "9999px",
              padding: "12px 28px",
              textDecoration: "none",
              display: "inline-block",
              flexShrink: 0,
              alignSelf: "flex-start",
            }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
