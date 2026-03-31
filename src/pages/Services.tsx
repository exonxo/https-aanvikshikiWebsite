import { Link } from "react-router";

export function Services() {
  return (
    <main>
      {/* Section 1: Header */}
      <section
        className="bg-white px-6 py-10 md:px-20 md:py-20"
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
          SERVICES
        </p>
        <h1
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: "20px",
          }}
        >
          What we do.
        </h1>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "16px",
            color: "#666666",
            lineHeight: 1.6,
            maxWidth: "600px",
          }}
        >
          Each engagement is structured to deliver clarity, not just analysis.
          We work in defined phases with specific outputs at every stage.
        </p>
      </section>

      {/* Section 2: Service 01 */}
      <section
        className="bg-white px-6 py-10 md:px-20 md:py-20 flex flex-col gap-3"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <div className="flex gap-3 items-center">
          <span
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#FF5C00",
            }}
          >
            01
          </span>
          <span
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#FF5C00",
              backgroundColor: "#FFF5F0",
              borderRadius: "9999px",
              padding: "4px 12px",
            }}
          >
            STRATEGIC THINKING
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "22px",
            fontWeight: 600,
            color: "#1A1A1A",
          }}
        >
          Structured Problem Analysis
        </h2>
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "14px",
            color: "#666666",
          }}
        >
          When the problem is real but the path forward isn't clear.
        </p>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "14px",
            color: "#666666",
            lineHeight: 1.6,
            maxWidth: "640px",
          }}
        >
          We work with leadership teams to define the actual problem — not the
          presenting symptom. Stakeholder interviews, hypothesis mapping, and
          constraint analysis to produce a clear decision framework.
        </p>
      </section>

      {/* Section 3: Service 02 */}
      <section
        className="bg-[#F7F8FA] px-6 py-10 md:px-20 md:py-20 flex flex-col gap-3"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <div className="flex gap-3 items-center">
          <span
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#FF5C00",
            }}
          >
            02
          </span>
          <span
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#FF5C00",
              backgroundColor: "#FFF5F0",
              borderRadius: "9999px",
              padding: "4px 12px",
            }}
          >
            AI ENABLEMENT
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "22px",
            fontWeight: 600,
            color: "#1A1A1A",
          }}
        >
          AI Readiness &amp; Integration
        </h2>
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "14px",
            color: "#666666",
          }}
        >
          When leadership knows AI is important but doesn't know where to start.
        </p>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "14px",
            color: "#666666",
            lineHeight: 1.6,
            maxWidth: "640px",
          }}
        >
          We assess your organization's AI readiness and design an integration
          roadmap. Not a technology audit — a strategic alignment exercise that
          identifies where AI creates leverage, and where it doesn't.
        </p>
      </section>

      {/* Section 4: Service 03 */}
      <section
        className="bg-white px-6 py-10 md:px-20 md:py-20 flex flex-col gap-3"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <div className="flex gap-3 items-center">
          <span
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#FF5C00",
            }}
          >
            03
          </span>
          <span
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#FF5C00",
              backgroundColor: "#F7F8FA",
              borderRadius: "9999px",
              padding: "4px 12px",
            }}
          >
            DECISION DESIGN
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "22px",
            fontWeight: 600,
            color: "#1A1A1A",
          }}
        >
          Decision Architecture
        </h2>
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "14px",
            color: "#666666",
          }}
        >
          When decisions are slow, inconsistent, or politically charged.
        </p>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "14px",
            color: "#666666",
            lineHeight: 1.6,
            maxWidth: "640px",
          }}
        >
          We design the decision-making infrastructure: frameworks, roles, and
          processes that turn difficult decisions into repeatable, defensible
          ones.
        </p>
      </section>

      {/* Section 5: Service 04 */}
      <section
        className="bg-[#F7F8FA] px-6 py-10 md:px-20 md:py-20 flex flex-col gap-3"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <div className="flex gap-3 items-center">
          <span
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#FF5C00",
            }}
          >
            04
          </span>
          <span
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#FF5C00",
              backgroundColor: "#FFF5F0",
              borderRadius: "9999px",
              padding: "4px 12px",
            }}
          >
            EXECUTION
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "22px",
            fontWeight: 600,
            color: "#1A1A1A",
          }}
        >
          From Insight to Execution
        </h2>
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "14px",
            color: "#666666",
          }}
        >
          When the research is done but nothing has changed.
        </p>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "14px",
            color: "#666666",
            lineHeight: 1.6,
            maxWidth: "640px",
          }}
        >
          We bridge the gap between strategic insight and operational reality,
          translating research findings into actionable product decisions and
          organizational change.
        </p>
      </section>

      {/* Section 6: Service 05 */}
      <section
        className="bg-white px-6 py-10 md:px-20 md:py-20 flex flex-col gap-3"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <div className="flex gap-3 items-center">
          <span
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#FF5C00",
            }}
          >
            05
          </span>
          <span
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#FF5C00",
              backgroundColor: "#F7F8FA",
              borderRadius: "9999px",
              padding: "4px 12px",
            }}
          >
            GOVERNANCE
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "22px",
            fontWeight: 600,
            color: "#1A1A1A",
          }}
        >
          Responsible AI Implementation
        </h2>
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "14px",
            color: "#666666",
          }}
        >
          When speed creates risk and risk creates liability.
        </p>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "14px",
            color: "#666666",
            lineHeight: 1.6,
            maxWidth: "640px",
          }}
        >
          We design governance frameworks for AI systems: bias assessment,
          transparency requirements, accountability structures, and ongoing
          monitoring protocols.
        </p>
      </section>

      {/* Section 7: CTA Bar */}
      <section
        className="flex flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-20 md:py-20"
        style={{ backgroundColor: "#FF5C00" }}
      >
        <h2
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 600,
            color: "#1A1A1A",
          }}
        >
          Not sure which service fits?
        </h2>
        <Link
          to="/contact"
          style={{
            display: "inline-block",
            backgroundColor: "#1A1A1A",
            color: "#ffffff",
            borderRadius: "9999px",
            padding: "12px 24px",
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
            whiteSpace: "nowrap",
            alignSelf: "flex-start",
          }}
        >
          Start a conversation
        </Link>
      </section>
    </main>
  );
}
