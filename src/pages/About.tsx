import { Link } from "react-router";
import { Linkedin, Twitter, Globe, Mail } from "lucide-react";
import { SEO, pageSEO } from "@/components/SEO";

const founders = [
  {
    name: "Arjun Mehta",
    title: "Co-Founder & CEO",
    bio: "Former McKinsey principal with 15 years building data strategy for Fortune 500 organizations. Led AI transformation programmes across healthcare and financial services.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
      email: "arjun@aanvikshiki.com",
    },
  },
  {
    name: "Sasha Verma",
    title: "Co-Founder & COO",
    bio: "Data infrastructure architect who has designed decision systems for government agencies and global enterprises. Deep expertise in knowledge graphs and semantic data modelling.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
      email: "sasha@aanvikshiki.com",
    },
  },
  {
    name: "Marcus Oyelaran",
    title: "Head of AI Strategy",
    bio: "Research background in applied machine learning with a decade in enterprise AI deployment. Builds the analytical engines that power Aanvikshiki's intelligence layer.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
      email: "marcus@aanvikshiki.com",
    },
  },
  {
    name: "Leila Nassiri",
    title: "Head of Client Strategy",
    bio: "Specialises in translating complex analytical outputs into executive decisions. Previously led strategy for a $3B retail group through a full digital infrastructure overhaul.",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
      email: "leila@aanvikshiki.com",
    },
  },
];

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

const impactStats = [
  { figure: "4 days", label: "to achieve strategic infrastructure clarity" },
  { figure: "259", label: "SSIS packages parsed and mapped" },
  { figure: "2,847", label: "data dependencies identified" },
  { figure: "25%", label: "average reduction in decision cycle time" },
  { figure: "260%", label: "improvement in AI initiative ROI" },
];

export function About() {
  return (
    <main>
      <SEO {...pageSEO.about} />
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
                About
              </p>
              <h1
                className="font-bold tracking-tight text-gray-900 mb-4"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: 1.1,
                }}
              >
                The Science of Thinking, Reimagined.
              </h1>
              <p
                className="text-base text-gray-500 leading-relaxed"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Aanvikshiki is rooted in the ancient Indian discipline of
                inquiry and reasoning — Ānvīkṣikī, the science of critical
                thinking — reinterpreted for modern organizations navigating
                complexity, uncertainty, and technological change.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center shrink-0">
              <img
                src="/illustration-about.svg"
                alt=""
                style={{ width: "260px", height: "200px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Etymology */}
      <section className="bg-[#1A1A1A] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div
            className="mx-auto flex flex-col items-center gap-6 text-center"
            style={{ maxWidth: "680px" }}
          >
            <p
              className="text-xs uppercase tracking-[0.2em] font-medium"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                color: "#FF5C00",
              }}
            >
              The Name
            </p>
            <h2
              className="font-bold text-white"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "clamp(22px, 2.5vw, 32px)",
                lineHeight: 1.25,
              }}
            >
              Ancient Wisdom. Modern Execution.
            </h2>
            <p
              className="text-base text-gray-400 leading-relaxed"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Ānvīkṣikī appears in the Arthashastra — Kautilya's treatise on
              statecraft — as one of the four sciences a leader must master. It
              is defined as the lamp of all learning, the means of all action,
              and the foundation of all knowledge.
            </p>
            <p
              className="text-base text-gray-400 leading-relaxed"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              We took the name because it captures what we believe is missing in
              most AI-enabled organizations: not more data, not more models, but
              a rigorous discipline of inquiry that precedes any of it. The
              ancient idea is that structured thinking is not a soft skill — it
              is a strategic capability. That belief is the foundation of
              everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Impact Stats */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-10"
            style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
          >
            Impact
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {impactStats.map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <p
                  className="text-3xl font-bold tracking-tight mb-2"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    color: "#FF5C00",
                  }}
                >
                  {s.figure}
                </p>
                <p
                  className="text-xs text-gray-600 leading-snug"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: What We Believe */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
          >
            What We Believe
          </p>
          <h2
            className="font-bold tracking-tight text-gray-900 mb-14"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(28px, 3vw, 40px)",
            }}
          >
            The principles that guide every engagement.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beliefs.map((b, i) => (
              <div
                key={b.title}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{
                  background: "linear-gradient(135deg, #fffbf7 0%, #fff3e8 100%)",
                  borderTop: "3px solid #FF5C00",
                  border: "1px solid rgba(255,92,0,0.15)",
                  borderTopWidth: "3px",
                  borderTopColor: "#FF5C00",
                }}
              >
                <span
                  className="self-start text-xs font-bold"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    color: "#FF5C00",
                    background: "rgba(255,92,0,0.10)",
                    border: "1px solid rgba(255,92,0,0.22)",
                    borderRadius: "999px",
                    padding: "3px 12px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-gray-500"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: How We Operate */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p
            className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-3"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            How We Operate
          </p>
          <h2
            className="font-bold tracking-tight text-gray-900 mb-12"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(24px, 2.5vw, 32px)",
            }}
          >
            Four operating principles.
          </h2>
          <div className="flex flex-col divide-y divide-gray-200">
            {operations.map((op) => (
              <div
                key={op.num}
                className="flex flex-row gap-8 py-8 items-start"
              >
                <span
                  className="shrink-0 text-xs font-medium font-mono pt-1"
                  style={{ color: "#FF5C00", width: "32px" }}
                >
                  {op.num}
                </span>
                <div>
                  <h4
                    className="text-lg font-semibold text-gray-900 mb-2"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {op.title}
                  </h4>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {op.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Founders */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ fontFamily: "'Open Sans', sans-serif", color: "#FF5C00" }}
          >
            The Team
          </p>
          <h2
            className="font-bold tracking-tight text-gray-900 mb-12"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(26px, 3vw, 38px)",
            }}
          >
            The people behind the thinking.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((f) => (
              <div
                key={f.name}
                className="relative rounded-2xl overflow-hidden group"
                style={{ height: "480px" }}
              >
                {/* Background photo */}
                <img
                  src={f.photo}
                  alt={f.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 50%, transparent 100%)",
                  }}
                />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                  <h3
                    className="text-lg font-bold text-white leading-tight"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {f.name}
                  </h3>
                  <span
                    className="text-xs font-semibold self-start"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      background: "linear-gradient(90deg, #FF5C00, #FF8C42)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {f.title}
                  </span>
                  <p
                    className="text-xs leading-relaxed mt-1"
                    style={{ fontFamily: "'Open Sans', sans-serif", color: "rgba(255,255,255,0.65)" }}
                  >
                    {f.bio}
                  </p>
                  {/* Social links */}
                  <div className="flex items-center gap-3 mt-3">
                    <a
                      href={f.socials.linkedin}
                      aria-label="LinkedIn"
                      className="transition-opacity hover:opacity-100 opacity-60"
                      style={{ color: "#fff" }}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={f.socials.twitter}
                      aria-label="Twitter / X"
                      className="transition-opacity hover:opacity-100 opacity-60"
                      style={{ color: "#fff" }}
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={f.socials.website}
                      aria-label="Website"
                      className="transition-opacity hover:opacity-100 opacity-60"
                      style={{ color: "#fff" }}
                    >
                      <Globe size={16} />
                    </a>
                    <a
                      href={`mailto:${f.socials.email}`}
                      aria-label="Email"
                      className="transition-opacity hover:opacity-100 opacity-60"
                      style={{ color: "#fff" }}
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section
        className="relative"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 200px at 50% 0%, rgba(255,92,0,0.12), transparent)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-3">
              <p
                className="font-bold text-white"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(20px, 2vw, 28px)",
                  lineHeight: 1.3,
                }}
              >
                Thinking differently about a{" "}
                <span style={{ color: "#FF8C42" }}>complex problem?</span>
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Open Sans', sans-serif", color: "#888888" }}
              >
                Start with a conversation. We'll ask the right questions before
                proposing anything.
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
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
