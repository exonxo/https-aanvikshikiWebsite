import { Link } from "react-router";

const focusAreas = [
  {
    num: "01",
    title: "Healthcare Access",
    description:
      "AI-assisted triage and care pathway tools for clinics operating without specialist access. Structured decision support where human expertise is scarce.",
  },
  {
    num: "02",
    title: "Educational Intelligence",
    description:
      "Adaptive learning tools and outcome prediction systems for schools in resource-constrained environments. Built to close gaps, not widen them.",
  },
  {
    num: "03",
    title: "Resource Allocation",
    description:
      "Data-driven tools for NGOs and social enterprises to allocate resources where impact is highest — turning fragmented field data into structured action.",
  },
  {
    num: "04",
    title: "Research Accessibility",
    description:
      "Translating academic AI research into deployable tools for social sector organizations that lack the technical capacity to implement them alone.",
  },
];

const operatingPrinciples = [
  "Community partnerships before technology deployment",
  "Local language and context built into every system",
  "Open-source tools preferred over proprietary lock-in",
  "Measurable impact metrics defined upfront",
  "Capacity building, not dependency creation",
];

export function Ease() {
  return (
    <main>
      {/* SECTION 1: Header */}
      <section
        className="bg-white px-6 py-10 md:px-15 md:py-20"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <span
          style={{
            display: "inline-block",
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            color: "#FF5C00",
            backgroundColor: "#FFF5F0",
            borderRadius: "9999px",
            padding: "4px 12px",
            marginBottom: "24px",
            letterSpacing: "1px",
          }}
        >
          Project EASE
        </span>
        <h1
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            color: "#1A1A1A",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Empowering Action for Societal Evolution.
        </h1>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "16px",
            color: "#666666",
            lineHeight: 1.7,
            maxWidth: "560px",
          }}
        >
          Intelligence should not be a privilege. Project EASE is Aanvikshiki's
          commitment to bringing structured AI capabilities to underserved
          communities — where the need for better decisions is highest and the
          access to tools is lowest.
        </p>
      </section>

      {/* SECTION 2: Mission (dark) */}
      <section
        className="bg-[#1A1A1A] px-6 py-10 md:px-15 md:py-20"
        style={{ borderBottom: "1px solid #2E2E2E" }}
      >
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "11px",
            color: "#FF5C00",
            letterSpacing: "2px",
            marginBottom: "40px",
          }}
        >
          MISSION
        </p>
        <p
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "clamp(22px, 2.5vw, 32px)",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.4,
            maxWidth: "900px",
          }}
        >
          Every community deserves systems that help them make better decisions
          — about health, resources, education, and opportunity.
        </p>
      </section>

      {/* SECTION 3: Focus Areas */}
      <section
        className="bg-white px-6 py-10 md:px-15 md:py-20"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <p
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "20px",
            fontWeight: 600,
            color: "#1A1A1A",
            marginBottom: "48px",
          }}
        >
          Focus Areas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {focusAreas.map((area, i) => (
            <div
              key={area.num}
              className="p-6 md:p-10"
              style={{
                borderRight:
                  i % 2 === 0 ? "1px solid #F3F4F6" : "none",
                borderBottom:
                  i < focusAreas.length - 2
                    ? "1px solid #F3F4F6"
                    : i < focusAreas.length - 1 && i % 2 === 0
                    ? "1px solid #F3F4F6"
                    : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#FF5C00",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                {area.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {area.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "14px",
                  color: "#666666",
                  lineHeight: 1.65,
                }}
              >
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Impact (2 columns) */}
      <section
        className="bg-white px-6 py-10 md:px-15 md:py-20"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <div className="flex flex-col gap-10 md:flex-row md:gap-20">
          {/* Left */}
          <div className="flex flex-col gap-6 md:flex-1">
            <h2
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "clamp(22px, 2.5vw, 28px)",
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.2,
              }}
            >
              Impact measured.
              <br />
              Not assumed.
            </h2>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "15px",
                color: "#666666",
                lineHeight: 1.7,
              }}
            >
              Every EASE engagement begins with a measurable impact hypothesis.
              We don't deploy technology and hope for the best — we define what
              success looks like before we begin, and we track it throughout.
            </p>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "15px",
                color: "#666666",
                lineHeight: 1.7,
              }}
            >
              Aanvikshiki applies the same OASA framework — Observe, Analyze,
              Synthesize, Act — to social impact work as to enterprise
              engagements. Rigor doesn't disappear because the client isn't
              paying.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 md:flex-1">
            <p
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "12px",
                color: "#888888",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              How We Operate
            </p>
            {operatingPrinciples.map((principle, i) => (
              <div
                key={i}
                className="flex items-start gap-3 pb-4"
                style={{
                  borderBottom:
                    i < operatingPrinciples.length - 1
                      ? "1px solid #F3F4F6"
                      : "none",
                }}
              >
                <span
                  className="shrink-0 mt-1.5"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#FF5C00",
                    display: "inline-block",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "14px",
                    color: "#1A1A1A",
                    lineHeight: 1.6,
                  }}
                >
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="bg-white px-6 py-16 md:px-15 md:py-20">
        <div className="flex flex-col items-center gap-5 text-center">
          <p
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "11px",
              color: "#888888",
              letterSpacing: "2px",
            }}
          >
            PARTNER WITH US
          </p>
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.2,
              maxWidth: "560px",
            }}
          >
            Want to bring structured intelligence to your community?
          </h2>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "16px",
              color: "#666666",
              lineHeight: 1.6,
              maxWidth: "440px",
            }}
          >
            We partner with NGOs, social enterprises, research institutions, and
            governments.
          </p>
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
              marginTop: "8px",
            }}
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
