const timeline = [
  {
    day: "Day 1",
    text: "AI agent deployed against the full SSIS package catalog. Dependency graph seeded from 259 packages. Initial structure of the data estate becomes visible for the first time.",
  },
  {
    day: "Day 2",
    text: "Full dependency traversal completed. 2,847 edges mapped in a directed acyclic graph. Three circular references flagged for strategic resolution before migration.",
  },
  {
    day: "Day 3",
    text: "Power BI report metadata cross-referenced against the lineage graph. 94 reports traced to 612 upstream sources. Column-level lineage generated — executives can now see what breaks if any component changes.",
  },
  {
    day: "Day 4",
    text: "Migration architecture generated from lineage topology. Azure Data Factory pipeline structure produced. Sequencing derived from dependency order. Strategic handoff documentation delivered.",
  },
];

const challengeStats = [
  { label: "Infrastructure scope", value: "259 SSIS packages, 12 source systems" },
  { label: "Documentation", value: "None — no lineage, no dependency graph" },
  { label: "BI layer", value: "94 Power BI reports with unresolved dependencies" },
  { label: "Pre-migration estimate", value: "6–8 weeks of manual analysis" },
];

const metrics = [
  {
    stat: "4 days",
    label: "Strategic infrastructure analysis (vs. 6–8 weeks estimated)",
  },
  { stat: "259", label: "SSIS packages parsed and mapped" },
  { stat: "2,847", label: "Data dependencies identified and documented" },
];

export function Work() {
  return (
    <main>
      {/* SECTION 1: Header */}
      <section
        className="bg-white px-6 py-10 md:px-15 md:py-20"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "11px",
            color: "#FF5C00",
            letterSpacing: "2px",
            marginBottom: "16px",
          }}
        >
          WORK
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
          Thinking in practice.
        </h1>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "16px",
            color: "#666666",
            lineHeight: 1.6,
            maxWidth: "520px",
          }}
        >
          Case studies document specific problems, the thinking we applied, and
          the outcomes that followed. We do not use projected figures.
        </p>
      </section>

      {/* SECTION 2: Case Study */}
      <section className="bg-[#F7F8FA] px-6 py-10 md:px-15 md:py-16">
        {/* Case study header card */}
        <div
          className="bg-white rounded-t-xl px-6 py-8 md:p-10"
          style={{
            borderTop: "3px solid #FF5C00",
            borderBottom: "1px solid #F3F4F6",
          }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <div className="flex flex-col gap-1 md:shrink-0">
              <span
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#888888",
                }}
              >
                01
              </span>
              <span
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#FF5C00",
                  fontWeight: 600,
                }}
              >
                AI Strategy — Healthcare
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.3,
              }}
            >
              Strategic Clarity Before Migration: How an Organization Learned
              What It Had Before Deciding Where to Go
            </h2>
          </div>
        </div>

        {/* OBSERVE */}
        <div
          className="bg-white px-6 py-8 md:p-10"
          style={{ borderBottom: "1px solid #F3F4F6" }}
        >
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            {/* Left: Observe text */}
            <div className="flex flex-col gap-5 md:flex-1">
              <h3
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                }}
              >
                Observe
              </h3>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "14px",
                  color: "#666666",
                  lineHeight: 1.7,
                }}
              >
                A regional healthcare provider needed to migrate its data
                infrastructure. The mandate was clear. The path was not. Eleven
                years of incremental system-building had produced 259 SSIS
                packages spanning 12 source systems — none of them documented,
                many of them interdependent in ways no one fully understood.
              </p>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "14px",
                  color: "#666666",
                  lineHeight: 1.7,
                }}
              >
                Power BI reports had been built by multiple teams over time,
                with dependencies tracing back to staging tables that were
                themselves undocumented. Before any strategic decision could be
                made about where to go, the organization needed to understand
                where it was. Manual analysis was estimated at 6–8 weeks —
                before migration planning could even begin.
              </p>
            </div>

            {/* Right: Challenge stats */}
            <div
              className="rounded-xl flex flex-col md:w-[340px] md:shrink-0"
              style={{
                backgroundColor: "#1A1A1A",
                padding: "32px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#888888",
                  letterSpacing: "1px",
                  marginBottom: "20px",
                }}
              >
                The challenge: Migrate without a map
              </p>
              {challengeStats.map((cs, i) => (
                <div
                  key={i}
                  style={{
                    paddingBottom: "16px",
                    marginBottom: i < challengeStats.length - 1 ? "16px" : "0",
                    borderBottom:
                      i < challengeStats.length - 1
                        ? "1px solid #2E2E2E"
                        : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Funnel Sans', sans-serif",
                      fontSize: "11px",
                      color: "#666666",
                      marginBottom: "4px",
                    }}
                  >
                    {cs.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "13px",
                      color: "#FFFFFF",
                      lineHeight: 1.5,
                    }}
                  >
                    {cs.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ANALYZE → SYNTHESIZE */}
        <div
          className="bg-white px-6 py-8 md:p-10"
          style={{ borderBottom: "1px solid #F3F4F6" }}
        >
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            {/* Left: Analyze text */}
            <div className="flex flex-col gap-5 md:flex-1">
              <h3
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                }}
              >
                Analyze → Synthesize
              </h3>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "14px",
                  color: "#666666",
                  lineHeight: 1.7,
                }}
              >
                An AI agent was deployed against the full package catalog and
                Power BI metadata store. Rather than documenting the system
                manually, the agent constructed a directed dependency graph —
                each package a node, each data relationship an edge. What had
                been invisible became structural. What had been assumed became
                verifiable.
              </p>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "14px",
                  color: "#666666",
                  lineHeight: 1.7,
                }}
              >
                Column-level lineage was traced from report visuals back to
                source tables. Business logic embedded in transformation
                expressions was extracted and annotated. By the end of Day 4,
                the organization had a complete strategic picture of its data
                estate — the first time that had ever been true.
              </p>
            </div>

            {/* Right: Execution timeline */}
            <div
              className="rounded-xl flex flex-col md:w-[420px] md:shrink-0"
              style={{
                backgroundColor: "#1A1A1A",
                padding: "32px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#888888",
                  letterSpacing: "1px",
                  marginBottom: "20px",
                }}
              >
                EXECUTION TIMELINE
              </p>
              {timeline.map((t, i) => (
                <div
                  key={i}
                  style={{
                    paddingBottom: "16px",
                    marginBottom: i < timeline.length - 1 ? "16px" : "0",
                    borderBottom:
                      i < timeline.length - 1 ? "1px solid #2E2E2E" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Funnel Sans', sans-serif",
                      fontSize: "11px",
                      color: "#FF5C00",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}
                  >
                    {t.day}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "12px",
                      color: "#d1d1d1",
                      lineHeight: 1.6,
                    }}
                  >
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ACT */}
        <div
          className="bg-white px-6 py-8 md:p-10"
          style={{ borderBottom: "1px solid #F3F4F6" }}
        >
          <h3
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#1A1A1A",
              marginBottom: "20px",
            }}
          >
            Act
          </h3>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "14px",
              color: "#666666",
              lineHeight: 1.7,
              maxWidth: "720px",
            }}
          >
            Infrastructure analysis was completed in 4 days. The output was not
            a report — it was a migration architecture derived directly from the
            dependency graph topology. The organization entered its migration
            with complete strategic clarity about what it had, what depended on
            what, and in what order to move it.
          </p>
        </div>

        {/* METRICS */}
        <div className="bg-white rounded-b-xl px-6 py-8 md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="md:px-10"
                style={{
                  paddingLeft: i > 0 ? undefined : undefined,
                  borderRight:
                    i < metrics.length - 1 ? "1px solid #F3F4F6" : "none",
                  borderBottom:
                    i < metrics.length - 1
                      ? "1px solid #F3F4F6"
                      : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: "clamp(32px, 3.5vw, 40px)",
                    fontWeight: 700,
                    color: "#FF5C00",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {m.stat}
                </p>
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "13px",
                    color: "#666666",
                    lineHeight: 1.5,
                  }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
