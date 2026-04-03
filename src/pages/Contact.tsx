import { Link } from "react-router";
import { SEO, pageSEO } from "@/components/SEO";

const contactCards = [
  {
    type: "Inquiry",
    description:
      "Fill out our form or email us directly with your question or challenge.",
    email: "contact@aanvikshiki.com",
    cta: "Submit an inquiry",
    href: "#form",
  },
  {
    type: "Start an Engagement",
    description:
      "Connect with our team to discuss your challenge and explore how we can help.",
    email: null,
    cta: "Begin the conversation",
    href: "#form",
  },
  {
    type: "Media & Press",
    description:
      "Reach out for press requests, media opportunities, or speaking engagements.",
    email: "press@aanvikshiki.com",
    cta: "Email us",
    href: "mailto:press@aanvikshiki.com",
  },
];

export function Contact() {
  return (
    <main>
      <SEO {...pageSEO.contact} />
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
                Contact
              </p>
              <h1
                className="font-bold tracking-tight text-gray-900 mb-4"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: 1.1,
                }}
              >
                How can we help?
              </h1>
              <p
                className="text-base text-gray-500 leading-relaxed"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Whether you're ready to begin an engagement or just need a hand
                with a question, our team is here to help. Describe what you're
                navigating — we'll respond with a clear assessment, not a sales deck.
              </p>
            </div>
            <div
              className="hidden md:flex items-center justify-center shrink-0"
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,92,0,0.06)",
                border: "2px solid rgba(255,92,0,0.15)",
              }}
            >
              <span style={{ fontSize: "42px", color: "#FF5C00", lineHeight: 1 }}>◇</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Three Contact Cards */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => (
              <div
                key={card.type}
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{
                  background: "linear-gradient(135deg, #fffbf7 0%, #fff3e8 100%)",
                  borderTop: "3px solid #FF5C00",
                  border: "1px solid rgba(255,92,0,0.15)",
                  borderTopWidth: "3px",
                  borderTopColor: "#FF5C00",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full shrink-0 self-start"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "linear-gradient(135deg, #FF5C00, #FF8C42)",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#fff" }}>
                    {i === 0 ? "✉" : i === 1 ? "→" : "◎"}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {card.type}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-gray-500"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {card.description}
                  </p>
                  {card.email && (
                    <a
                      href={`mailto:${card.email}`}
                      className="block mt-2 text-sm font-medium hover:underline"
                      style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
                    >
                      {card.email}
                    </a>
                  )}
                </div>
                <a
                  href={card.href}
                  className="mt-auto inline-flex items-center justify-center rounded-full text-sm font-medium text-white transition-colors"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    background: "linear-gradient(135deg, #FF5C00, #FF8C42)",
                    padding: "10px 20px",
                  }}
                >
                  {card.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Main — 2 columns */}
      <section id="form" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col gap-14 md:flex-row md:gap-20">
            {/* Left column */}
            <div className="flex flex-col gap-8 md:flex-1">
              <p
                className="text-xs uppercase tracking-[0.2em] font-medium"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#FF5C00",
                }}
              >
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
                  <div key={step.num} className="flex flex-row gap-5">
                    <span
                      className="shrink-0 text-xs font-medium font-mono mt-0.5"
                      style={{ color: "#FF5C00", width: "28px" }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <p
                        className="text-sm font-semibold text-gray-900 mb-1"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="text-sm text-gray-500 leading-relaxed"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
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
                  className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-1"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Direct Contact
                </p>
                <p
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  For time-sensitive enquiries:
                </p>
                <p
                  className="text-sm font-semibold text-gray-900"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  contact@aanvikshiki.com
                </p>
              </div>
            </div>

            {/* Right column — Form */}
            <div className="md:flex-1">
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors bg-white placeholder:text-gray-400"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors bg-white placeholder:text-gray-400"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Organisation"
                  className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors bg-white placeholder:text-gray-400"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                />
                <select
                  defaultValue=""
                  className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm text-gray-600 outline-none focus:border-gray-900 transition-colors bg-white"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  <option value="" disabled>
                    What are you looking for?
                  </option>
                  <option value="strategy-ai-advisory">
                    Strategy &amp; AI Advisory
                  </option>
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
                  rows={4}
                  placeholder="Describe the challenge — the more specific, the better"
                  className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors resize-none bg-white placeholder:text-gray-400"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                />
                <button
                  type="submit"
                  className="w-full text-white rounded-full py-3.5 text-sm font-semibold transition-colors cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #FF5C00, #FF8C42)",
                    fontFamily: "'Open Sans', sans-serif",
                    boxShadow: "0 4px 20px rgba(255,92,0,0.35)",
                  }}
                >
                  Get in Touch
                </button>
                <p
                  className="text-center text-xs text-gray-400"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
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
