import { SectionLabel } from "./SectionLabel";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { MagicCard } from "./MagicCard";
import { useRef, useEffect, useState, useCallback } from "react";
import imgAvatar1 from "figma:asset/e82d799a42df53e7a27ff8382105be366e2f2bb9.png";
import imgAvatar2 from "figma:asset/ab0493ed83286012e60b0c060a92494a5406923d.png";
import imgAvatar3 from "figma:asset/78912099e68a0cda05ac31c981aad216e2ac694d.png";

const testimonials = [
  {
    text: "Aanvikshiki transformed how we approach evidence-based medicine. Their AI tools cut our research appraisal time in half while maintaining the highest ethical standards.",
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    avatar: imgAvatar1,
  },
  {
    text: "As a small business, we never thought we could compete with enterprise-level AI capabilities. Their team made it possible, affordable, and ethical. Our conversion rates speak for themselves.",
    name: "Marcus Chen",
    role: "Founder & CEO, TechStart",
    avatar: imgAvatar2,
  },
  {
    text: "The Human-in-the-Loop approach gave us confidence in the AI outputs. Every recommendation was reviewed and refined by their expert team before implementation.",
    name: "Priya Sharma",
    role: "VP of Operations, Global Health",
    avatar: imgAvatar3,
  },
];

// Duplicate for marquee effect
const marqueeTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);

  const animate = useCallback(() => {
    if (!scrollRef.current || isPaused) {
      animRef.current = requestAnimationFrame(animate);
      return;
    }
    posRef.current += 0.5;
    const halfWidth = scrollRef.current.scrollWidth / 2;
    if (posRef.current >= halfWidth) posRef.current = 0;
    scrollRef.current.style.transform = `translateX(-${posRef.current}px)`;
    animRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  return (
    <section className="px-6 py-[90px] overflow-hidden">
      <div className="max-w-[1228px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-6 mb-16"
        >
          <SectionLabel>Client Stories</SectionLabel>
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
            What Our Clients Say
          </h2>
          <p
            className="max-w-[650px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#999" }}
          >
            Trusted by mission-driven organizations across healthcare, research, and enterprise.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0a] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#0a0a0a] to-transparent" />

          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex gap-8" style={{ willChange: "transform" }}>
              {marqueeTestimonials.map((t, i) => (
                <div key={`${t.name}-${i}`} className="shrink-0 w-[400px]">
                  <MagicCard
                    className="bg-gradient-to-b from-[#161616] from-[55%] to-[#111] rounded-[30px] p-8 flex flex-col gap-6 border border-[#222] h-full"
                  >
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} fill="#FE6A2E" stroke="#FE6A2E" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p
                      className="flex-1"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#999" }}
                    >
                      "{t.text}"
                    </p>

                    {/* Avatar + Name */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#2a2a2a]">
                      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[#1a1a1a]">
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 16, color: "#e5e5e5" }}>
                          {t.name}
                        </p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, color: "#999" }}>
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
