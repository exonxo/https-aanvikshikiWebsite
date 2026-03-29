import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { MagicCard } from "./MagicCard";

export function CtaSection() {
  return (
    <section id="contact" className="bg-[#0a0a0a] px-6 pt-[90px] pb-[60px] overflow-hidden">
      <div className="max-w-[1228px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <MagicCard
            className="rounded-[45px] bg-gradient-to-b from-[#161616] from-[55%] to-[#111] border border-[#222] px-8 md:px-16 py-16 md:py-20 text-center flex flex-col items-center gap-8"
            gradientSize={350}
          >
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
              Ready to Transform Your Organization?
            </h2>
            <p
              className="max-w-[600px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#999" }}
            >
              Partner with us to harness the power of ethical AI for your organization. Let's build systems that create measurable, sustainable impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <a
                href="#"
                className="px-8 py-3.5 rounded-lg text-white flex items-center gap-2 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_4px_20px_rgba(254,106,46,0.3)] active:translate-y-[1px] active:scale-[0.97] animate-breathe-glow"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 15, background: "linear-gradient(135deg, #FF9937, #FE6A2E)" }}
              >
                Explore Solutions
                <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="px-8 py-3.5 rounded-lg border border-[#2a2a2a] text-[#ccc] bg-[#141414] transition-all duration-200 hover:bg-[#1a1a1a] hover:border-[#3a3a3a] hover:text-white hover:translate-y-[-2px] active:translate-y-[1px] active:scale-[0.97]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 15 }}
              >
                Schedule a Conversation
              </a>
            </div>
          </MagicCard>
        </motion.div>
      </div>
    </section>
  );
}