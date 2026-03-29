import { SectionLabel } from "./SectionLabel";
import { motion } from "motion/react";
import { ShieldCheck, MessageSquare, MapPin, Clock, ArrowRight } from "lucide-react";
import { EaseCareLogoFull } from "./EaseCareLogoFull";
import { Link } from "react-router";
import { MagicCard } from "./MagicCard";
import easecareAppImg from "figma:asset/ee99e109b192573487d99e7fcd320d20da0adcc3.png";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Helpers",
    desc: "Every caretaker and house helper is background-verified so you can feel safe letting them into your home.",
  },
  {
    icon: MessageSquare,
    title: "Direct Negotiation",
    desc: "Post your requirement, receive responses, and negotiate pricing directly — no hidden fees or middlemen.",
  },
  {
    icon: MapPin,
    title: "Hyperlocal Matching",
    desc: "Instantly connects you with trusted helpers near your location across Kolkata neighborhoods.",
  },
  {
    icon: Clock,
    title: "Book in Seconds",
    desc: "Post a requirement in under 5 seconds. Get responses from nearby helpers and confirm your booking fast.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="easecare-section" className="relative px-6 py-[90px]" style={{ background: "#0f0f0f", transition: "background 1200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
      {/* Spotlight top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 transition-opacity duration-[800ms]"
        style={{
          background: "linear-gradient(90deg, transparent 10%, rgba(6,174,212,0.6) 50%, transparent 90%)",
          boxShadow: "0 0 20px 2px rgba(6,174,212,0.3)",
        }}
        id="easecare-spotlight-border"
      />
      <div className="max-w-[1228px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Our Latest Product</SectionLabel>
          <h2
            className="mt-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "62.4px",
              letterSpacing: "-1px",
              color: "#e5e5e5",
            }}
          >
            Introducing{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #08C5EF, #4B58E4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "inherit",
                lineHeight: "inherit",
                fontWeight: "inherit",
              }}
            >
              EaseCare
            </span>
          </h2>
          <p
            className="mt-4 max-w-[640px] mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 18,
              lineHeight: "27px",
              color: "#999",
            }}
          >
            A trusted platform for booking caretakers and house helpers in Kolkata
            — built so you never have to worry again.
          </p>
        </motion.div>

        {/* Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-[30px] border border-[#2a2a2a] overflow-hidden mb-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(8,197,239,0.06) 0%, rgba(75,88,228,0.06) 50%, rgba(254,106,46,0.04) 100%)",
          }}
        >
          {/* Glow accent */}
          <div
            className="absolute -top-[120px] -right-[120px] w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(8,197,239,0.15), transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-[100px] -left-[100px] w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(75,88,228,0.12), transparent 70%)",
            }}
          />

          <div className="relative flex flex-col lg:flex-row items-center gap-12 p-10 lg:p-16">
            {/* App screenshot */}
            <div className="flex flex-col items-center gap-6 shrink-0">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <img
                  src={easecareAppImg}
                  alt="EaseCare app home screen"
                  className="relative w-[180px] h-auto rounded-[20px] drop-shadow-2xl"
                />
                {/* Glow behind image */}
                <div
                  className="absolute -inset-8 rounded-full blur-[60px] opacity-25 pointer-events-none -z-10"
                  style={{ background: "linear-gradient(135deg, #08C5EF, #4B58E4)" }}
                />
              </motion.div>
              <p
                className="text-center max-w-[240px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  color: "#777",
                }}
              >
                A product by Aanvikshiki
              </p>
            </div>

            {/* Info side */}
            <div className="flex-1">
              {/* Logo at top of info area */}
              <div className="flex items-center gap-3 mb-5">
                <EaseCareLogoFull scale={1.15} />
                <span
                  className="px-2 py-0.5 rounded-full text-white ml-1"
                  style={{
                    fontSize: 11,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    background: "linear-gradient(135deg, #FF9937, #FE6A2E)",
                  }}
                >
                  COMING SOON
                </span>
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(24px, 3vw, 32px)",
                  lineHeight: 1.3,
                  color: "#e5e5e5",
                }}
              >
                Home care, handled.
              </h3>
              <p
                className="mb-4 max-w-[520px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 16,
                  lineHeight: "26px",
                  color: "#999",
                }}
              >
                EaseCare is a request-first service marketplace that connects
                Kolkata households with background-verified caretakers, house
                helpers, and elder care professionals. Post a requirement, get
                responses from nearby helpers, negotiate directly, and book —
                all in seconds.
              </p>
              <p
                className="mb-8 max-w-[520px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: "22px",
                  color: "#666",
                  fontStyle: "italic",
                }}
              >
                "I don't have to worry anymore. This is handled."
              </p>

              {/* Quick info */}
              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { value: "<5s", label: "To Post a Request" },
                  { value: "100%", label: "Verified Helpers" },
                  { value: "0%", label: "Hidden Fees" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: 30,
                        lineHeight: "34px",
                        background:
                          "linear-gradient(135deg, #08C5EF, #4B58E4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 300,
                        fontSize: 13,
                        color: "#777",
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/easecare"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white cursor-pointer transition-all duration-300 hover:shadow-[0_0_24px_rgba(8,197,239,0.3)] hover:scale-[1.03] no-underline"
                style={{
                  background: "linear-gradient(135deg, #08C5EF, #4B58E4)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  border: "none",
                }}
              >
                Learn More About EaseCare
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <MagicCard
                className="group rounded-[20px] border border-[#2a2a2a] p-7 transition-all duration-300 hover:border-[#3a3a3a] h-full hover:shadow-[0_8px_30px_rgba(6,174,212,0.08)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(8,197,239,0.06) 0%, rgba(75,88,228,0.06) 50%, rgba(254,106,46,0.04) 100%)",
                }}
              >
                <div
                  className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(8,197,239,0.15), rgba(75,88,228,0.15))",
                  }}
                >
                  <feat.icon size={22} className="text-[#08C5EF]" />
                </div>
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 17,
                    color: "#e5e5e5",
                  }}
                >
                  {feat.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    lineHeight: "22px",
                    color: "#777",
                  }}
                >
                  {feat.desc}
                </p>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}