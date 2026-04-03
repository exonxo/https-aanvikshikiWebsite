import { Link } from "react-router";
import { getCaseStudies } from "@/lib/caseStudies";
import { SEO, pageSEO } from "@/components/SEO";

const caseStudies = getCaseStudies();

export function Work() {
  return (
    <main>
      <SEO {...pageSEO.work} />
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
                Work
              </p>
              <h1
                className="font-bold tracking-tight text-gray-900 mb-4"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: 1.1,
                }}
              >
                Thinking in practice.
              </h1>
              <p
                className="text-base text-gray-500 leading-relaxed"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Case studies document specific problems, the thinking we applied, and the
                outcomes that followed. We do not use projected figures.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center shrink-0">
              <img
                src="/illustration-work.svg"
                alt=""
                style={{ width: "260px", height: "200px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Case Study Grid */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                to={`/work/${cs.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white transition-shadow hover:shadow-lg"
                style={{ textDecoration: "none" }}
              >
                {/* Thumbnail */}
                <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
                  <img
                    src={cs.thumbnail}
                    alt={cs.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform 0.4s ease",
                    }}
                    className="group-hover:scale-105"
                  />
                  {/* Industry tag overlay */}
                  <div
                    className="absolute top-4 left-4"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      borderRadius: "999px",
                      padding: "4px 12px",
                    }}
                  >
                    <span
                      className="text-xs font-semibold text-white"
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      {cs.industry}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.15em]"
                    style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
                  >
                    {cs.category}
                  </p>
                  <h3
                    className="font-bold text-gray-900 leading-snug"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "clamp(15px, 1.2vw, 18px)",
                    }}
                  >
                    {cs.title}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed flex-1"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {cs.description}
                  </p>

                  {/* Read link */}
                  <div className="flex items-center gap-1 mt-2">
                    <span
                      className="text-xs font-semibold"
                      style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
                    >
                      Read case study
                    </span>
                    <span
                      className="text-xs transition-transform group-hover:translate-x-1"
                      style={{ color: "#FF5C00", display: "inline-block" }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative" style={{ backgroundColor: "#1A1A1A" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 200px at 50% 0%, rgba(255,92,0,0.12), transparent)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2
                className="font-bold text-white mb-2"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                }}
              >
                Ready to see this approach applied to your{" "}
                <span style={{ color: "#FF8C42" }}>challenge?</span>
              </h2>
              <p
                className="text-sm"
                style={{ fontFamily: "'Open Sans', sans-serif", color: "#888888" }}
              >
                Start with a conversation. We'll ask the right questions before proposing anything.
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
