import { Link } from "react-router";

export function Home() {
  return (
    <main>
      {/* SECTION 1: Hero */}
      <section
        className="relative flex items-center"
        style={{
          minHeight: "702px",
          backgroundImage:
            "url('/Gemini_Generated_Image_p6mu14p6mu14p6mu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid #F3F4F6",
        }}
      >
        <div className="w-full flex flex-col gap-8 px-6 py-16 md:px-20 md:py-20">
          <p
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "11px",
              color: "#FF5C00",
              letterSpacing: "2px",
              fontWeight: 500,
            }}
          >
            STRUCTURED THINKING. APPLIED AI.
          </p>

          {/* H1 + Subtitle: side-by-side on desktop, stacked on mobile */}
          <div
            className="flex flex-col gap-6 md:flex-row md:justify-between md:items-stretch"
            style={{ minHeight: "120px" }}
          >
            <h1
              className="md:max-w-[537px]"
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 700,
                color: "#000000",
                lineHeight: 1.1,
                whiteSpace: "pre-line",
              }}
            >
              {"Where Structured\nThinking Meets AI."}
            </h1>
            <p
              className="md:w-[230px]"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "18px",
                color: "#000000",
                lineHeight: 1.6,
              }}
            >
              We help organizations make better decisions by combining rigorous
              analytical frameworks with AI-powered execution. No hype. No
              shortcuts. Just structured thinking at scale.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-row gap-4 flex-wrap">
            <Link
              to="/work"
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                backgroundColor: "#FF5C00",
                color: "#fff",
                borderRadius: "9999px",
                padding: "12px 24px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              See our work
            </Link>
            <Link
              to="/approach"
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                backgroundColor: "transparent",
                border: "1px solid #000000",
                color: "#000000",
                borderRadius: "9999px",
                padding: "12px 24px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Our approach →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Three Disciplines (WHAT WE DO) */}
      <section className="bg-white" style={{ borderBottom: "1px solid #F3F4F6" }}>
        {/* Header */}
        <div className="px-6 pt-10 pb-5 md:px-20 md:pt-10 md:pb-5">
          <p
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#FF5C00",
              letterSpacing: "2px",
            }}
          >
            WHAT WE DO
          </p>
        </div>

        {/* Row 1: text left, image right */}
        <div
          className="flex flex-col gap-8 px-6 py-10 md:flex-row md:gap-20 md:px-20 md:py-20"
          style={{ borderBottom: "1px solid #F3F4F6" }}
        >
          <div className="flex flex-col gap-3 md:flex-1">
            <span
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "12px",
                color: "#888",
              }}
            >
              01
            </span>
            <h3
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "18px",
                fontWeight: 600,
                color: "#1A1A1A",
              }}
            >
              Strategic Intelligence
            </h3>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              We translate complexity into clear, actionable decision frameworks
              by breaking down intricate problems into structured, comprehensible
              layers that leadership teams can confidently engage with. Instead
              of overwhelming stakeholders with fragmented data, we synthesize
              information into cohesive analyses that reveal patterns,
              dependencies, risks, and opportunities — enabling decision-makers
              to see the full picture with clarity and precision.
            </p>
          </div>
          <div
            className="h-[260px] md:flex-1 md:h-[380px] rounded-xl"
            style={{
              backgroundImage:
                "url('/startae-team-7tXA8xwe4W4-unsplash.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Row 2: image left, text right */}
        <div
          className="flex flex-col gap-8 px-6 py-10 md:flex-row md:gap-20 md:px-20 md:py-20"
          style={{ borderBottom: "1px solid #F3F4F6" }}
        >
          <div
            className="h-[260px] md:h-[380px] md:w-[566px] md:shrink-0 rounded-xl"
            style={{
              backgroundImage:
                "url('/Gemini_Generated_Image_3l6aso3l6aso3l6a.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex flex-col gap-3 md:flex-1">
            <span
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "12px",
                color: "#888",
              }}
            >
              02
            </span>
            <h3
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "18px",
                fontWeight: 600,
                color: "#1A1A1A",
              }}
            >
              AI Integration
            </h3>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              We embed AI directly into decision-making processes — not as a
              superficial add-on or a trend-driven gimmick, but as a genuine
              force multiplier for structured thinking. By combining
              computational intelligence with clear frameworks and human context,
              we enable faster, sharper, and more resilient decisions — ensuring
              that leadership operates with both speed and depth, rather than
              having to trade one for the other.
            </p>
          </div>
        </div>

        {/* Row 3: text left, image right */}
        <div className="flex flex-col gap-8 px-6 py-10 md:flex-row md:gap-20 md:px-20 md:py-20">
          <div className="flex flex-col gap-3 md:flex-1">
            <span
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "12px",
                color: "#888",
              }}
            >
              03
            </span>
            <h3
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "18px",
                fontWeight: 600,
                color: "#1A1A1A",
              }}
            >
              Decision Architecture
            </h3>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              Designing systems and processes that enable consistently better
              decisions requires more than isolated improvements — it demands a
              deliberate, end-to-end approach. From defining robust governance
              frameworks to crafting intuitive workflows, every layer is
              intentionally designed to reinforce clarity and consistency. By
              embedding structure into how information flows, organizations can
              eliminate ambiguity and create repeatable systems that scale.
            </p>
          </div>
          <div
            className="h-[260px] md:flex-1 md:h-[380px] rounded-xl"
            style={{
              backgroundImage:
                "url('/vitaly-gariev-5txln04Cx7I-unsplash.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>


      {/* SECTION 4: Beliefs (WHAT WE BELIEVE) */}
      <section
        className="bg-[#1A1A1A] px-6 py-10 md:px-15 md:py-20"
        style={{ borderBottom: "1px solid #2E2E2E" }}
      >
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "11px",
            color: "#FFFFFF",
            letterSpacing: "2px",
            marginBottom: "48px",
          }}
        >
          WHAT WE BELIEVE
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {/* Card 1 */}
          <div className="flex flex-col gap-4">
            <h4
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.3,
              }}
            >
              Clarity beats speed.
            </h4>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "16px",
                color: "#d1d1d1",
                lineHeight: 1.7,
              }}
            >
              Most organizations move fast in the wrong direction. We slow the
              thinking down before the execution speeds up.
            </p>
            <div
              className="mt-4 rounded-xl w-full"
              style={{
                backgroundImage: "url('/4.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "1 / 1",
                maxWidth: "408px",
              }}
            />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4">
            <h4
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.3,
              }}
            >
              Thinking beats reacting.
            </h4>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "15px",
                color: "#d1d1d1",
                lineHeight: 1.7,
              }}
            >
              Reactive organizations mistake activity for progress. Structured
              thinking creates the conditions for decisions that hold under
              pressure.
            </p>
            <div
              className="mt-4 rounded-xl w-full"
              style={{
                backgroundImage: "url('/2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "1 / 1",
                maxWidth: "408px",
              }}
            />
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4">
            <h4
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.3,
              }}
            >
              Ethics beats short-term gains.
            </h4>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "15px",
                color: "#d1d1d1",
                lineHeight: 1.7,
              }}
            >
              Intelligence without integrity compounds risk. Every framework we
              build embeds the question: what are the downstream consequences of
              this decision?
            </p>
            <div
              className="mt-4 rounded-xl w-full"
              style={{
                backgroundImage: "url('/3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "1 / 1",
                maxWidth: "408px",
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: About Teaser */}
      <section
        className="bg-white flex flex-col gap-10 px-6 py-10 md:flex-row md:items-center md:gap-16 md:px-15 md:py-20"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <div className="flex-1 flex flex-col gap-5">
          <p
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "11px",
              color: "#888",
              letterSpacing: "2px",
            }}
          >
            ABOUT
          </p>
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: "clamp(32px, 3.5vw, 44px)",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.15,
            }}
          >
            The Science of Thinking, Reimagined.
          </h2>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "16px",
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            Aanvikshiki is rooted in the ancient Indian discipline of inquiry
            and reasoning — Ānvīkṣikī, the science of critical thinking —
            reinterpreted for modern organizations navigating complexity,
            uncertainty, and technological change.
          </p>
        </div>
        <div
          className="w-full h-[280px] rounded-xl md:w-[560px] md:h-[420px] md:shrink-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1758876019274-b5b3a459b1cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </section>

      {/* SECTION 6: Manifesto */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: "509px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/manifesto-bg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#000000b8" }}
        />
        <div
          className="relative z-10 w-full flex flex-col gap-6 px-6 py-16 md:px-20 md:py-20"
        >
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              maxWidth: "960px",
            }}
          >
            We believe the best decisions come from structure, not instinct.
          </h2>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "16px",
              color: "#dbdbdb",
              lineHeight: 1.7,
              maxWidth: "720px",
            }}
          >
            Most organizations are drowning in data and starving for insight. We
            apply analytical rigor — the kind used in philosophy, military
            intelligence, and strategic consulting — to help you navigate
            complexity with clarity.
          </p>
        </div>
      </section>

      {/* SECTION 7: Contact (inline) */}
      <section
        className="bg-white px-6 py-10 md:px-15 md:py-20"
      >
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
            <div className="flex flex-col gap-6">
              {/* Step 1 */}
              <div className="flex flex-row gap-5">
                <span
                  className="shrink-0"
                  style={{
                    fontFamily: "'Funnel Sans', sans-serif",
                    fontSize: "11px",
                    color: "#888",
                    width: "32px",
                  }}
                >
                  01
                </span>
                <div className="flex flex-col gap-1">
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1A1A1A",
                    }}
                  >
                    Initial response
                  </p>
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.65,
                    }}
                  >
                    We review your submission and respond within 2 business days
                    with specific questions about the challenge you're
                    navigating.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-row gap-5">
                <span
                  className="shrink-0"
                  style={{
                    fontFamily: "'Funnel Sans', sans-serif",
                    fontSize: "11px",
                    color: "#888",
                    width: "32px",
                  }}
                >
                  02
                </span>
                <div className="flex flex-col gap-1">
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1A1A1A",
                    }}
                  >
                    Structured conversation
                  </p>
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.65,
                    }}
                  >
                    A focused call to understand the problem, the context, and
                    what a good outcome looks like. No presentations — just
                    questions.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-row gap-5">
                <span
                  className="shrink-0"
                  style={{
                    fontFamily: "'Funnel Sans', sans-serif",
                    fontSize: "11px",
                    color: "#888",
                    width: "32px",
                  }}
                >
                  03
                </span>
                <div className="flex flex-col gap-1">
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1A1A1A",
                    }}
                  >
                    Clear assessment
                  </p>
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.65,
                    }}
                  >
                    We provide a written assessment of what we see, how we'd
                    approach it, and what a realistic engagement looks like.
                  </p>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="h-px bg-[#E2E8F0]" />
            {/* Direct contact */}
            <div className="flex flex-col gap-2">
              <p
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#888",
                  letterSpacing: "2px",
                }}
              >
                DIRECT CONTACT
              </p>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "14px",
                  color: "#666",
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

          {/* Right column: Form */}
          <div className="md:flex-1">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name"
                  style={{
                    border: "1px solid #E2E8F0",
                    padding: "12px",
                    borderRadius: 0,
                    fontSize: "14px",
                    fontFamily: "'Geist', sans-serif",
                    outline: "none",
                  }}
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    border: "1px solid #E2E8F0",
                    padding: "12px",
                    borderRadius: 0,
                    fontSize: "14px",
                    fontFamily: "'Geist', sans-serif",
                    outline: "none",
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Organisation"
                style={{
                  border: "1px solid #E2E8F0",
                  padding: "12px",
                  borderRadius: 0,
                  fontSize: "14px",
                  fontFamily: "'Geist', sans-serif",
                  outline: "none",
                }}
              />
              <select
                defaultValue=""
                style={{
                  border: "1px solid #E2E8F0",
                  padding: "12px",
                  borderRadius: 0,
                  fontSize: "14px",
                  fontFamily: "'Geist', sans-serif",
                  color: "#666",
                  outline: "none",
                  backgroundColor: "#fff",
                }}
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
                style={{
                  border: "1px solid #E2E8F0",
                  padding: "12px",
                  borderRadius: 0,
                  fontSize: "14px",
                  fontFamily: "'Geist', sans-serif",
                  outline: "none",
                  resize: "vertical",
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#FF5C00",
                  color: "#fff",
                  borderRadius: "9999px",
                  padding: "14px 0",
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                }}
              >
                Get in Touch
              </button>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "12px",
                  color: "#888",
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
