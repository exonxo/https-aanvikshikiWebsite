import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const beliefs = [
  {
    statement: "Clarity beats speed.",
    expansion:
      "Most organizations move fast in the wrong direction. We slow the thinking down before the execution speeds up.",
  },
  {
    statement: "Thinking beats reacting.",
    expansion:
      "Reactive organizations mistake activity for progress. Structured thinking creates the conditions for decisions that hold under pressure.",
  },
  {
    statement: "Ethics beats short-term gains.",
    expansion:
      "Intelligence without integrity compounds risk. Every framework we build embeds the question: what are the downstream consequences of this decision?",
  },
];

const principles = [
  {
    label: "Inquiry before conclusion",
    body: "We do not arrive at engagements with pre-formed answers. We arrive with structured questions. The problem defines the approach — not the other way around.",
  },
  {
    label: "Transparency over comfort",
    body: "We tell clients what we find, not what they want to hear. A strategic assessment that obscures inconvenient truths is not an assessment — it is a performance.",
  },
  {
    label: "Human judgment, amplified",
    body: "AI is the instrument. Human judgment remains the authority. We design systems that sharpen decision-making rather than replace it.",
  },
  {
    label: "Long arc thinking",
    body: "The decisions that matter most play out over years, not quarters. We build frameworks that remain sound under conditions that don't yet exist.",
  },
];

export function About() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                About
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                The Science of Thinking, Reimagined.
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Aanvikshiki is rooted in the ancient Indian discipline of
                inquiry and reasoning — <em>Ānvīkṣikī</em>, the science of
                critical thinking — reinterpreted for modern organizations
                navigating complexity, uncertainty, and technological change.
              </p>
            </div>
            <div className="hidden md:block overflow-hidden rounded-lg border border-border">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80"
                alt="Strategic thinking environment"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Etymology */}
      <section className="border-b border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              The Name
            </p>
            <p className="text-2xl font-semibold tracking-tight mb-6 leading-snug">
              Ancient Wisdom. Modern Execution.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              <em>Ānvīkṣikī</em> appears in the Arthashastra — Kautilya's
              treatise on statecraft — as one of the four sciences a leader must
              master. It is defined as the lamp of all learning, the means of
              all action, and the foundation of all knowledge.
            </p>
            <p className="text-muted-foreground leading-relaxed">
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

      {/* Beliefs */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-12">
            What We Believe
          </p>
          <div className="divide-y divide-border">
            {beliefs.map((b, i) => (
              <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <h3 className="text-xl font-semibold tracking-tight">{b.statement}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.expansion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-12">
            How We Operate
          </p>
          <div className="divide-y divide-border">
            {principles.map((p, i) => (
              <div key={p.label} className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-muted-foreground mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold">{p.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed md:col-span-2">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Separator className="mb-16" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2">
                Thinking differently about a complex problem?
              </h2>
              <p className="text-muted-foreground max-w-md">
                Start with a conversation. We'll ask the right questions before
                proposing anything.
              </p>
            </div>
            <Button asChild className="shrink-0">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
