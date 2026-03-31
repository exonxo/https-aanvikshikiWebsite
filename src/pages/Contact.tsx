import { Link } from "react-router";

const inputClass =
  "w-full border border-[#E2E8F0] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5C00] transition-colors";

export function Contact() {
  return (
    <main>
      {/* Section 1: Header */}
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
          CONTACT
        </p>
        <h1
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 600,
            color: "#1A1A1A",
            marginBottom: "16px",
          }}
        >
          Start Thinking Differently.
        </h1>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "16px",
            color: "#666666",
            lineHeight: 1.7,
            maxWidth: "520px",
          }}
        >
          Let's explore how structured thinking can transform your business.
          Describe what you're navigating — we'll respond with a clear
          assessment of how we can help, not a sales deck.
        </p>
      </section>

      {/* Section 2: Main — 2 columns */}
      <section className="bg-white px-6 py-10 md:px-15 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          {/* Left column */}
          <div className="flex flex-col gap-8 md:flex-1">
            <p
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "11px",
                color: "#FF5C00",
                letterSpacing: "2px",
              }}
            >
              WHAT TO EXPECT
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-6">
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
                <div
                  key={step.num}
                  className="flex flex-row gap-5"
                >
                  <span
                    className="shrink-0"
                    style={{
                      fontFamily: "'Funnel Sans', sans-serif",
                      fontSize: "12px",
                      color: "#FF5C00",
                      marginTop: "2px",
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Newsreader', serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#1A1A1A",
                        marginBottom: "6px",
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontSize: "14px",
                        color: "#666666",
                        lineHeight: 1.6,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-[#F3F4F6]" />

            {/* Direct contact */}
            <div className="flex flex-col gap-2">
              <p
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#FF5C00",
                  letterSpacing: "2px",
                }}
              >
                DIRECT CONTACT
              </p>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "14px",
                  color: "#666666",
                }}
              >
                For time-sensitive enquiries:
              </p>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1A1A1A",
                }}
              >
                contact@aanvikshiki.com
              </p>
            </div>
          </div>

          {/* Right column — Form */}
          <div className="md:flex-1">
            <form className="flex flex-col gap-5">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input type="text" placeholder="Name" className={inputClass} />
                <input
                  type="email"
                  placeholder="Email"
                  className={inputClass}
                />
              </div>

              {/* Organisation */}
              <input
                type="text"
                placeholder="Organisation"
                className={inputClass}
              />

              {/* Select */}
              <select className={inputClass} defaultValue="">
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

              {/* Textarea */}
              <textarea
                rows={4}
                placeholder="Describe the challenge — the more specific, the better"
                className={`${inputClass} resize-none`}
              />

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#FF5C00",
                  color: "#ffffff",
                  borderRadius: "9999px",
                  padding: "14px 0",
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Get in Touch
              </button>

              {/* Note */}
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "12px",
                  color: "#888888",
                  textAlign: "center",
                }}
              >
                We respond to every submission within 2 business days.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
