import { useParams, Link, Navigate } from "react-router";
import { getCaseStudy } from "@/lib/caseStudies";
import { SEO } from "@/components/SEO";

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const cs = slug ? getCaseStudy(slug) : null;

  if (!cs) return <Navigate to="/work" replace />;

  return (
    <main>
      <SEO
        title={cs.title}
        description={cs.description}
        canonical={`/work/${cs.slug}`}
        ogType="article"
      />
      {/* Page Header */}
      <section className="bg-white border-b border-gray-100">
        <div style={{ height: "4px", background: "linear-gradient(90deg, #FF5C00, #FF8C42, #FF5C00)" }} />
        <div className="max-w-3xl mx-auto px-6 py-10 md:py-14">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold mb-8"
            style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
          >
            ← Back to Work
          </Link>
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
          >
            {cs.category} — {cs.industry}
          </p>
          <h1
            className="font-bold tracking-tight text-gray-900"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(24px, 3vw, 40px)",
              lineHeight: 1.15,
            }}
          >
            {cs.title}
          </h1>
        </div>
      </section>

      {/* Thumbnail */}
      <div style={{ width: "100%", height: "clamp(240px, 45vw, 520px)", overflow: "hidden" }}>
        <img
          src={cs.thumbnail}
          alt={cs.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Article body */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
          <div className="flex flex-col gap-8">
            {cs.content.map((block, i) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={i}
                    className="text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {block.text}
                  </p>
                );
              }
              return (
                <figure key={i} className="flex flex-col gap-3">
                  <div style={{ borderRadius: "12px", overflow: "hidden", width: "100%" }}>
                    <img
                      src={block.src}
                      alt={block.caption ?? ""}
                      style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  {block.caption && (
                    <figcaption
                      className="text-xs text-gray-400 text-center"
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>

          {/* Results */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <p
              className="text-xs uppercase tracking-[0.2em] font-semibold mb-8"
              style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
            >
              Results
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {cs.metrics.map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg, #FF5C00, #FF8C42)"
                      : "linear-gradient(135deg, #fffbf7 0%, #fff3e8 100%)",
                    borderTop: i !== 0 ? "3px solid #FF5C00" : "none",
                    border: i !== 0 ? "1px solid rgba(255,92,0,0.18)" : "none",
                    borderTopWidth: i !== 0 ? "3px" : undefined,
                    borderTopColor: i !== 0 ? "#FF5C00" : undefined,
                  }}
                >
                  <p
                    className="font-bold tracking-tight mb-2"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "clamp(22px, 2.5vw, 32px)",
                      color: i === 0 ? "#ffffff" : "#FF5C00",
                      lineHeight: 1,
                    }}
                  >
                    {m.stat}
                  </p>
                  <p
                    className="text-xs leading-snug"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      color: i === 0 ? "rgba(255,255,255,0.8)" : "#6b7280",
                    }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
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
        <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h2
            className="font-bold text-white mb-3"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(22px, 2.5vw, 32px)",
            }}
          >
            Facing a similar{" "}
            <span style={{ color: "#FF8C42" }}>challenge?</span>
          </h2>
          <p
            className="text-sm mb-8"
            style={{ fontFamily: "'Open Sans', sans-serif", color: "#888888" }}
          >
            Start with a conversation. We'll ask the right questions before proposing anything.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full text-sm font-semibold text-white"
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
      </section>
    </main>
  );
}
