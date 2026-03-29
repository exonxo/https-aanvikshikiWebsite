import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What is Aanvikshiki and what makes your approach unique?",
    answer: "Aanvikshiki is an AI enablement consultancy that combines ancient wisdom with modern technology. Our Human-in-the-Loop approach ensures every AI-generated output receives human review, creativity, and strategic insight. We believe AI should augment, not replace human judgment.",
  },
  {
    question: "What industries do you serve?",
    answer: "We primarily serve mission-driven organizations in healthcare, research institutions, and enterprises needing AI-driven data engineering. Our supporting services also extend to small business growth and AI adoption & culture transformation.",
  },
  {
    question: "How does your Human-in-the-Loop approach work?",
    answer: "Every AI output goes through human review for the critical 10% that makes content truly engaging and aligned with your vision. This includes strategic insight, cultural context, creative nuance, and ethical considerations that AI alone cannot provide.",
  },
  {
    question: "What is Project EASE?",
    answer: "Project EASE (Empowering Action for Societal Evolution) brings AI-powered solutions to underserved communities. It focuses on making technology accessible and actionable for real communities, with measurable social impact including 24/7 AI-powered caregiver support.",
  },
  {
    question: "How do you ensure ethical AI governance?",
    answer: "Our ethical framework is inspired by Chanakya's timeless principles of foresight, integrity, accountability, and resource mobilization—translated into modern AI governance standards including algorithm transparency, bias reduction, and privacy-first design.",
  },
  {
    question: "What kind of results can I expect?",
    answer: "Our clients typically see 25% faster decision cycles, up to 260% conversion rate improvements, and sub-second query performance for mission-critical data. Every engagement is designed to deliver measurable, evidence-based outcomes.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0a0a0a] px-6 py-[90px]">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-6 mb-16"
        >
          <SectionLabel>FAQ</SectionLabel>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "62.4px",
              letterSpacing: "-1px",
              color: "#e5e5e5",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="max-w-[650px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#999" }}
          >
            Find answers to common questions about our AI enablement services and approach.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border-b border-[#222]"
              >
                <button
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer transition-colors duration-200 hover:opacity-80"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 18, color: "#e5e5e5" }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 ml-4 text-[#999] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className="overflow-hidden">
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <div className="pb-6">
                          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: "27px", color: "#999" }}>
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}