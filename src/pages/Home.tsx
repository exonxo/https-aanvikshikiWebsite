import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/HeroSection";
import { MagicText } from "@/components/sections/MagicText";
import { ProductsFeature } from "@/components/sections/ProductsFeature";
import { BentoProof } from "@/components/sections/BentoProof";
import { Testimonials } from "@/components/sections/Testimonials";

const pillars = [
  {
    title: "Strategic Thinking",
    description:
      "Develop deeper, structured thinking frameworks that drive long-term decisions. Strategy is not a document — it is a discipline.",
  },
  {
    title: "AI Enablement",
    description:
      "Leverage AI not just as a tool, but as an amplifier of human intelligence. The right question is never 'what can AI do?' It is 'what decisions do we need to improve?'",
  },
  {
    title: "Ethical Decision-Making",
    description:
      "Embed responsibility and long-term impact into every strategic move. Intelligence without integrity compounds risk.",
  },
];

export function Home() {
  return (
    <main className="pt-16">

      {/* ── 1. Hero ── */}
      <HeroSection />

      {/* ── 2. Manifesto — dark full-width strip ── */}
      <section
        className="text-background"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(15,98,254,0.14) 0%, transparent 62%), #1e293b",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-widest opacity-40 mb-8">
            Where Intelligence Meets Intent
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] max-w-4xl bg-gradient-to-r from-white to-[#a8c8ff] bg-clip-text text-transparent">
            Modern businesses don't lack data — they lack clarity. Aanvikshiki
            bridges this gap by aligning AI capabilities with ethical,
            strategic decision-making.
          </p>
        </div>
      </section>

      {/* ── 3. Pillars — numbered horizontal rows ── */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-16 border-l-2 border-primary pl-3">
            Three Disciplines
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="divide-y divide-border">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-12 items-start"
              >
                <div className="lg:col-span-1">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Philosophy — MagicText scroll reveal ── */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6 border-l-2 border-primary pl-3">
                Philosophy
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
                Human-in-the-Loop
              </h2>
              <p className="text-xl text-muted-foreground italic mb-8">
                AI That Keeps You in Control
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-10">
                We believe AI should augment, not replace human judgment. Our
                Human-in-the-Loop approach ensures every AI-generated output
                receives human review, creativity, and strategic insight — the
                critical 10% that makes content truly engaging and aligned with
                your vision.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">
                  Our Philosophy <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:pt-4">
              <MagicText text="AI is a powerful machine tool. We harness its efficiency while preserving the complexity of human language, culture, context, and intention — elements that require human judgment to translate successfully." />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Products — auto-advancing feature carousel ── */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 border-l-2 border-primary pl-3">
              Products
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Intelligence, Built.
            </h2>
          </div>
          <ProductsFeature />
        </div>
      </section>

      <Testimonials />

      {/* ── 6. Proof — bento grid ── */}
      <BentoProof />

      {/* ── 7. CTA — gradient card close ── */}
      <section className="py-28 md:py-36 px-4">
        <div
          className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center rounded-2xl px-8 md:px-16 py-20 text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #0F62FE 0%, #0043CE 55%, #001D6C 100%)",
          }}
        >

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-2xl mb-4 bg-gradient-to-r from-white to-[#a8c8ff] text-transparent bg-clip-text">
            Clarity is a Competitive Advantage.
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed max-w-md">
            If your strategy isn't evolving, it's decaying.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-primary font-semibold rounded-full text-sm hover:bg-white/90 transition-colors"
          >
            Start a Conversation
          </Link>

        </div>
      </section>

    </main>
  );
}
