import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ShieldCheck,
  MessageSquare,
  MapPin,
  Clock,
  Users,
  Heart,
  Play,
  CheckCircle2,
  ArrowRight,
  Bell,
  Star,
  Home,
  UserCheck,
  Search,
  Send,
  Handshake,
  CalendarCheck,
} from "lucide-react";
import { EaseCareLogo } from "./EaseCareLogo";
import { EaseCareLogoFull } from "./EaseCareLogoFull";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MagicCard } from "./MagicCard";
import { BackToTop } from "./BackToTop";
import easecareAppImg from "figma:asset/ee99e109b192573487d99e7fcd320d20da0adcc3.png";

const coreFeatures = [
  {
    icon: ShieldCheck,
    title: "Background-Verified Helpers",
    desc: "Every caretaker and house helper on EaseCare goes through thorough background verification. Trust and safety are non-negotiable.",
    color: "#08C5EF",
  },
  {
    icon: MessageSquare,
    title: "Direct Price Negotiation",
    desc: "No fixed pricing, no hidden fees. Communicate directly with helpers, negotiate rates that work for both sides, and book with confidence.",
    color: "#E35406",
  },
  {
    icon: MapPin,
    title: "Hyperlocal Matching",
    desc: "EaseCare connects you with helpers near your Kolkata neighborhood. Local relevance means faster responses and better availability.",
    color: "#4B58E4",
  },
  {
    icon: Clock,
    title: "Request in Under 5 Seconds",
    desc: "Our request-first flow is designed for speed. Post what you need, when you need it, and let helpers come to you — no endless browsing.",
    color: "#08C5EF",
  },
  {
    icon: Users,
    title: "Elder Care Specialists",
    desc: "Dedicated elder care category for families needing compassionate, reliable support for aging parents and grandparents.",
    color: "#E35406",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    desc: "Get instant alerts when helpers respond to your request. Track status, manage bookings, and stay in control at every step.",
    color: "#4B58E4",
  },
];

const serviceCategories = [
  {
    icon: UserCheck,
    title: "Caretakers",
    desc: "Experienced caregivers for children, elderly, and patients. Verified, compassionate, and available on your schedule.",
    examples: ["Child caretakers", "Patient attendants", "Live-in caretakers", "Part-time care support"],
  },
  {
    icon: Home,
    title: "House Help",
    desc: "Reliable house helpers for cooking, cleaning, and daily household tasks. Vetted and matched to your neighborhood.",
    examples: ["Cooks", "Cleaners", "Laundry help", "All-purpose house help"],
  },
  {
    icon: Heart,
    title: "Elder Care",
    desc: "Specialized support for senior family members — from companionship to medical assistance coordination.",
    examples: ["Companionship care", "Mobility assistance", "Medication reminders", "Daily routine support"],
  },
];

const howItWorks = [
  {
    step: "01",
    icon: Search,
    title: "Post Your Requirement",
    desc: "Tell us what you need — service type, location, timing, and budget. It takes less than 5 seconds.",
  },
  {
    step: "02",
    icon: Send,
    title: "Receive Responses",
    desc: "Nearby verified helpers see your request and respond with their availability and rates.",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Negotiate & Choose",
    desc: "Review helper profiles, chat directly, negotiate pricing, and pick the best fit for your family.",
  },
  {
    step: "04",
    icon: CalendarCheck,
    title: "Confirm Booking",
    desc: "Lock in your booking. Manage everything from the app — reschedule, extend, or re-book with ease.",
  },
];

export function EaseCarePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-[24px] pt-[24px] pb-[90px]">
        {/* Background glows */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[200px] pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #08C5EF, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #4B58E4, transparent 70%)" }}
        />

        <div className="max-w-[1228px] mx-auto relative">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#777] hover:text-[#08C5EF] transition-colors mb-10 no-underline"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14 }}
            >
              <ArrowLeft size={16} />
              Back to Aanvikshiki
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <EaseCareLogoFull scale={1.3} />
                <span
                  className="px-2.5 rounded-full text-white shrink-0 px-[14px] py-[4px] ml-[44px] mr-[0px] my-[0px]"
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

              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 5vw, 56px)",
                  lineHeight: 1.15,
                  letterSpacing: "-1.5px",
                  color: "#e5e5e5",
                }}
              >
                Home care,{" "}
                <span
                  style={{
                    fontSize: "inherit",
                    background: "linear-gradient(135deg, #08C5EF, #4B58E4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  handled.
                </span>
              </h1>

              <p
                className="mt-6 max-w-[540px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 18,
                  lineHeight: "30px",
                  color: "#999",
                }}
              >
                EaseCare is a Kolkata-based service marketplace that connects
                mid to high-income households with trusted, background-verified
                caretakers and house helpers. Post a requirement, receive
                responses, negotiate directly, and book — all in seconds.
              </p>

              <p
                className="mt-4 max-w-[540px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: "24px",
                  color: "#666",
                  fontStyle: "italic",
                }}
              >
                "I don't have to worry anymore. This is handled."
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,197,239,0.35)] hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(135deg, #08C5EF, #4B58E4)",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 15,
                    border: "none",
                  }}
                >
                  Join the Waitlist
                  <ArrowRight size={16} />
                </button>
                
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-[#1a1a1a]">
                {[
                  { value: "<5s", label: "To Post a Request" },
                  { value: "100%", label: "Verified Helpers" },
                  { value: "0%", label: "Hidden Fees" },
                  { value: "24/7", label: "Support Planned" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: 28,
                        background: "linear-gradient(135deg, #08C5EF, #4B58E4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 13, color: "#666" }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative max-w-[480px] w-full flex justify-center">
                {/* Glow behind phone */}
                <div
                  className="absolute inset-0 rounded-full blur-[80px] opacity-20 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, #08C5EF, #4B58E4)" }}
                />
                {/* App screenshot */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <img
                    src={easecareAppImg}
                    alt="EaseCare app home screen"
                    className="relative w-[260px] h-auto rounded-[24px] drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="px-6 py-4">
        <div className="max-w-[1228px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[20px] border border-[#FF9937]/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "linear-gradient(135deg, rgba(255,153,55,0.06), rgba(254,106,46,0.04))" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ background: "linear-gradient(135deg, #FF9937, #FE6A2E)" }}
              />
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 15, color: "#e5e5e5" }}>
                EaseCare is relaunching soon.{" "}
                <span style={{ color: "#999", fontWeight: 300 }}>
                  We're rebuilding from the ground up for a better experience.
                </span>
              </p>
            </div>
            <span
              className="px-4 py-1.5 rounded-full shrink-0"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 12,
                color: "#FF9937",
                border: "1px solid rgba(255,153,55,0.3)",
                background: "rgba(255,153,55,0.08)",
              }}
            >
              Relaunch 2026
            </span>
          </motion.div>
        </div>
      </section>

      {/* Video Demo Placeholder */}
      <section className="px-6 py-[90px] bg-[#0f0f0f]">
        <div className="max-w-[1228px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div
              className="inline-flex items-center justify-center overflow-hidden rounded-[30px] bg-[#141414] relative mb-4"
              style={{ padding: "7.3px 25px 8px" }}
            >
              <span
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: "15px" }}
                className="text-[#ccc] text-center"
              >
                Product Demo
              </span>
              <div className="absolute inset-0 rounded-[30px] pointer-events-none border border-[#2a2a2a]" />
            </div>
            <h2
              className="mt-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.5vw, 40px)",
                lineHeight: 1.3,
                letterSpacing: "-0.5px",
                color: "#e5e5e5",
              }}
            >
              See EaseCare in Action
            </h2>
            <p
              className="mt-3 max-w-[560px] mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: "26px", color: "#999" }}
            >
              From posting a requirement to booking a verified helper — see how
              EaseCare makes home care effortless.
            </p>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative max-w-[900px] mx-auto"
          >
            <div
              className="relative rounded-[24px] border border-[#2a2a2a] overflow-hidden cursor-pointer group"
              style={{
                aspectRatio: "16 / 9",
                background: "linear-gradient(135deg, rgba(8,197,239,0.04) 0%, rgba(75,88,228,0.06) 50%, #111 100%)",
              }}
            >
              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Center play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <div
                  className="w-[80px] h-[80px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(8,197,239,0.4)]"
                  style={{ background: "linear-gradient(135deg, #08C5EF, #4B58E4)" }}
                >
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
                <div className="text-center">
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: 18,
                      color: "#e5e5e5",
                    }}
                  >
                    Product Walkthrough
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: 14,
                      color: "#666",
                    }}
                  >
                    Video coming soon — we'll add the full demo here before launch
                  </p>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <EaseCareLogo size={28} />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 13,
                    background: "linear-gradient(135deg, #08C5EF, #4B58E4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  EaseCare Demo
                </span>
              </div>
              <div className="absolute bottom-6 right-6">
                <span
                  className="px-3 py-1.5 rounded-full border border-[#2a2a2a]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 12, color: "#666", background: "rgba(20,20,20,0.8)" }}
                >
                  Placeholder
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-[90px]">
        <div className="max-w-[1228px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center justify-center overflow-hidden rounded-[30px] bg-[#141414] relative mb-4"
              style={{ padding: "7.3px 25px 8px" }}
            >
              <span
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: "15px" }}
                className="text-[#ccc] text-center"
              >
                How It Works
              </span>
              <div className="absolute inset-0 rounded-[30px] pointer-events-none border border-[#2a2a2a]" />
            </div>
            <h2
              className="mt-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.5vw, 40px)",
                lineHeight: 1.3,
                letterSpacing: "-0.5px",
                color: "#e5e5e5",
              }}
            >
              From Request to Booking in 4 Steps
            </h2>
            <p
              className="mt-3 max-w-[520px] mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: "26px", color: "#999" }}
            >
              No endless browsing. EaseCare is request-first — you say what you need, and helpers come to you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <MagicCard
                  className="relative bg-[#111] rounded-[24px] border border-[#2a2a2a] p-8 group hover:border-[#3a3a3a] transition-all duration-300 h-full"
                >
                  <span
                    className="absolute top-6 right-6"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: 48,
                      lineHeight: 1,
                      background: "linear-gradient(135deg, rgba(8,197,239,0.15), rgba(75,88,228,0.08))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.step}
                  </span>
                  <div
                    className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, rgba(8,197,239,0.15), rgba(75,88,228,0.15))" }}
                  >
                    <item.icon size={22} className="text-[#08C5EF]" />
                  </div>
                  <h3
                    className="mb-3 mt-4"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 18, color: "#e5e5e5" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, lineHeight: "22px", color: "#777" }}
                  >
                    {item.desc}
                  </p>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="px-6 py-[90px] bg-[#0f0f0f]">
        <div className="max-w-[1228px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center justify-center overflow-hidden rounded-[30px] bg-[#141414] relative mb-4"
              style={{ padding: "7.3px 25px 8px" }}
            >
              <span
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: "15px" }}
                className="text-[#ccc] text-center"
              >
                Why EaseCare
              </span>
              <div className="absolute inset-0 rounded-[30px] pointer-events-none border border-[#2a2a2a]" />
            </div>
            <h2
              className="mt-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.5vw, 40px)",
                lineHeight: 1.3,
                letterSpacing: "-0.5px",
                color: "#e5e5e5",
              }}
            >
              Built for Trust, Speed, and Peace of Mind
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <MagicCard
                  className="group bg-[#111] rounded-[24px] border border-[#2a2a2a] p-8 transition-all duration-300 hover:border-[#3a3a3a] hover:bg-[#151515] h-full"
                >
                  <div
                    className="w-[52px] h-[52px] rounded-[16px] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${feat.color}20, ${feat.color}10)`,
                    }}
                  >
                    <feat.icon size={24} style={{ color: feat.color }} />
                  </div>
                  <h3
                    className="mb-3"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 19, color: "#e5e5e5" }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: "24px", color: "#777" }}
                  >
                    {feat.desc}
                  </p>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-6 py-[90px]">
        <div className="max-w-[1228px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center justify-center overflow-hidden rounded-[30px] bg-[#141414] relative mb-4"
              style={{ padding: "7.3px 25px 8px" }}
            >
              <span
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: "15px" }}
                className="text-[#ccc] text-center"
              >
                Services
              </span>
              <div className="absolute inset-0 rounded-[30px] pointer-events-none border border-[#2a2a2a]" />
            </div>
            <h2
              className="mt-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.5vw, 40px)",
                lineHeight: 1.3,
                letterSpacing: "-0.5px",
                color: "#e5e5e5",
              }}
            >
              What You Can Book on EaseCare
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <MagicCard
                  className="bg-[#111] rounded-[24px] border border-[#2a2a2a] p-8 h-full"
                >
                  <div
                    className="w-[52px] h-[52px] rounded-[16px] flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, rgba(8,197,239,0.15), rgba(75,88,228,0.15))" }}
                  >
                    <cat.icon size={24} className="text-[#08C5EF]" />
                  </div>
                  <h3
                    className="mb-3"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 20, color: "#e5e5e5" }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className="mb-5"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: "24px", color: "#999" }}
                  >
                    {cat.desc}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {cat.examples.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#08C5EF] shrink-0 mt-0.5" />
                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, lineHeight: "20px", color: "#777" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UX Principles / What to Expect */}
      <section className="px-6 py-[90px] bg-[#0f0f0f]">
        <div className="max-w-[1228px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center justify-center overflow-hidden rounded-[30px] bg-[#141414] relative mb-4"
              style={{ padding: "7.3px 25px 8px" }}
            >
              <span
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: "15px" }}
                className="text-[#ccc] text-center"
              >
                Design Philosophy
              </span>
              <div className="absolute inset-0 rounded-[30px] pointer-events-none border border-[#2a2a2a]" />
            </div>
            <h2
              className="mt-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.5vw, 40px)",
                lineHeight: 1.3,
                letterSpacing: "-0.5px",
                color: "#e5e5e5",
              }}
            >
              Designed to Reduce Anxiety
            </h2>
            <p
              className="mt-3 max-w-[600px] mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: "26px", color: "#999" }}
            >
              EaseCare isn't just another marketplace. Every screen is designed to
              feel calm, clear, and trustworthy — even for elderly family members
              using it for the first time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Request-First, Not Browse-First", desc: "You don't scroll through listings. You say what you need, and helpers come to you. Action over exploration." },
              { title: "Calm & Reassuring Interface", desc: "Soft curves, accessible typography, minimal clutter. Designed so you feel safe, not overwhelmed." },
              { title: "Optimized for Speed", desc: "Post a requirement in under 5 seconds. No complex filters, no infinite scrolling, no unnecessary steps." },
              { title: "Smart Status Cards", desc: "Ongoing requests, helper responses, and active bookings surface automatically — no hunting through menus." },
              { title: "Elderly-Friendly", desc: "Large touch targets, clear language, and simple flows make EaseCare usable by every family member." },
              { title: "Built to Scale", desc: "Admin dashboards, ratings, verified badges, and more planned for future versions as the platform grows." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <MagicCard
                  className="bg-[#111] rounded-[20px] border border-[#2a2a2a] p-7 h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Star size={16} className="text-[#FF9937]" />
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 16, color: "#e5e5e5" }}>
                      {item.title}
                    </h4>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, lineHeight: "22px", color: "#777" }}>
                    {item.desc}
                  </p>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-[90px]">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <EaseCareLogo size={80} />
            <div className="mt-6" />
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.5vw, 40px)",
                lineHeight: 1.3,
                letterSpacing: "-0.5px",
                color: "#e5e5e5",
              }}
            >
              Ready for Home Care Without the Worry?
            </h2>
            <p
              className="mt-4 max-w-[520px] mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: "26px", color: "#999" }}
            >
              EaseCare is relaunching soon. Join the waitlist to be the first to
              know when we go live in Kolkata.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,197,239,0.35)] hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #08C5EF, #4B58E4)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  border: "none",
                }}
              >
                Join the Waitlist
                <ArrowRight size={18} />
              </button>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[#ccc] cursor-pointer transition-all duration-300 hover:text-white hover:border-[#555] no-underline"
                style={{
                  background: "transparent",
                  border: "1px solid #333",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                Back to Aanvikshiki
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}