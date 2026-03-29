import { useState, useEffect, useRef, Fragment } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Eye, Network, GitMerge, Zap } from "lucide-react";
import { Anchor } from "antd";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Observe",
    Icon: Eye,
    description:
      "Understand context, systems, and constraints. We don't begin with solutions — we begin with the environment the problem lives in. What are the forces at work? What has been tried? What is the organization actually optimizing for, as opposed to what it says it is?",
    inPractice:
      "Stakeholder interviews, system audits, data landscape reviews, and a structured analysis of decision-making patterns within the organization.",
    contrast: {
      conventional: "Begin with proposed solutions and seek data to validate them.",
      aanvikshiki:
        "Map the environment — stakeholders, systems, and the actual decisions being made — before naming the challenge.",
    },
    caseStudy: {
      quote:
        "The stated problem was 'we need to migrate to Azure.' Through stakeholder interviews, we discovered the actual problem: no one could say what data was being transformed or why.",
      source: "SSIS Infrastructure Engagement, 2024",
    },
  },
  {
    number: "02",
    title: "Analyze",
    Icon: Network,
    description:
      "Break down complexity into structured insights. Most complex problems are not single problems — they are clusters of interdependent conditions. We map these dependencies before we name the challenge, because the wrong diagnosis produces the wrong response.",
    inPractice:
      "Root cause analysis, dependency mapping, scenario modeling, and structured decomposition of the problem space into addressable components.",
    contrast: {
      conventional: "Define the problem as stated, then work to solve it.",
      aanvikshiki:
        "Distinguish between the stated problem and the actual problem. The wrong diagnosis produces the wrong response.",
    },
    caseStudy: {
      quote:
        "Mapping 259 SSIS packages revealed 47 data flows with no apparent downstream consumers — orphaned logic accumulated over 8 years that no one had documented.",
      source: "SSIS Infrastructure Engagement, 2024",
    },
  },
  {
    number: "03",
    title: "Synthesize",
    Icon: GitMerge,
    description:
      "Connect insights into strategic direction. Synthesis is where analysis becomes useful. We draw lines between what we have observed, what the data reveals, and what a credible path forward looks like — grounded in what the organization can actually execute.",
    inPractice:
      "Strategic framing, options development, AI capability assessment, and the construction of a decision framework tailored to the specific context.",
    contrast: {
      conventional:
        "Present findings as a set of recommendations and move to implementation.",
      aanvikshiki:
        "Build a strategic framework grounded in what the organization can actually execute — not just what's theoretically correct.",
    },
    caseStudy: {
      quote:
        "Rather than a migration plan, we produced a dependency graph and a tiered classification: critical paths, deprecated flows, and candidates for elimination — a decision framework, not a recommendation.",
      source: "SSIS Infrastructure Engagement, 2024",
    },
  },
  {
    number: "04",
    title: "Act",
    Icon: Zap,
    description:
      "Enable execution with clarity and alignment. A strategy that cannot be acted upon is a document. We stay through the transition from insight to implementation — ensuring the thinking holds when it meets reality.",
    inPractice:
      "Implementation planning, team alignment, AI system deployment, and decision framework activation with measurable checkpoints.",
    contrast: {
      conventional: "Hand off the strategy and disengage.",
      aanvikshiki:
        "Stay through the transition from insight to implementation, ensuring the thinking holds when it meets reality.",
    },
    caseStudy: {
      quote:
        "The client used the framework to defer 60% of the migration scope, focusing engineering capacity on the 15% of packages driving 80% of business value.",
      source: "SSIS Infrastructure Engagement, 2024",
    },
  },
];

const principles = [
  "Every engagement begins with questions, not proposals.",
  "Complexity is not simplified — it is structured.",
  "We distinguish between the stated problem and the actual problem.",
  "Speed of execution follows clarity of thinking.",
  "Ethics is embedded at synthesis, not added at the end.",
];

export function Approach() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollToStep = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="pt-16">

      {/* ── Page Header ── */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 border-l-2 border-primary pl-3">Approach</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl leading-tight bg-gradient-to-r from-primary to-[#0043CE] bg-clip-text text-transparent">
            How We Think.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Every engagement follows the same four-phase discipline — regardless of whether the challenge is a strategic pivot, an AI deployment, or a decision framework build.
          </p>

          {/* Animated DAG diagram */}
          <div className="flex items-center justify-center gap-0 mt-14 max-w-lg">
            {steps.map((step, i) => (
              <Fragment key={step.number}>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className="flex flex-col items-center gap-2 px-2"
                >
                  <div className="size-10 rounded-full border border-border bg-secondary/30 flex items-center justify-center">
                    <step.Icon className="size-4 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                    {step.title}
                  </span>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.35, ease: "easeOut" }}
                    style={{ originX: 0 }}
                    className="h-px w-10 sm:w-16 bg-border shrink-0"
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky Timeline Header ── */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-2.5">
          <div className="flex items-center">
            {steps.map((step, i) => (
              <Fragment key={step.number}>
                <button
                  onClick={() => scrollToStep(i)}
                  className={cn(
                    "flex items-center gap-1.5 px-2 py-1 rounded text-sm transition-colors whitespace-nowrap",
                    activeStep === i
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <step.Icon
                    className={cn("size-3", activeStep === i ? "text-primary" : "")}
                  />
                  <span className="hidden sm:inline">{step.title}</span>
                  <span className="font-mono text-xs text-muted-foreground">{step.number}</span>
                </button>
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-px mx-1 transition-colors duration-500",
                      activeStep > i ? "bg-primary/40" : "bg-border"
                    )}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── Step Sections ── */}
      {steps.map((step, i) => (
        <section
          key={step.number}
          id={`step-${step.number}`}
          ref={(el) => {
            sectionRefs.current[i] = el;
          }}
          className={cn(
            "min-h-[85vh] border-b border-border flex items-center py-20",
            i % 2 === 0 ? "bg-background" : "bg-secondary/10"
          )}
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left col */}
              <div className="lg:col-span-4">
                {/* Faded giant number */}
                <p aria-hidden="true" className="text-[9rem] leading-none font-semibold text-foreground/[0.04] -ml-2 select-none pointer-events-none">
                  {step.number}
                </p>
                <div className="flex items-center gap-3 -mt-6 mb-5">
                  <div className="text-primary">
                    <step.Icon className="size-6" />
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight">{step.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    In practice
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.inPractice}</p>
                </div>
              </div>

              {/* Right col */}
              <div className="lg:col-span-8 space-y-6">

                {/* Contrast callout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 border border-border rounded-lg bg-secondary/20">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                      Most organizations
                    </p>
                    <p className="text-sm leading-relaxed">{step.contrast.conventional}</p>
                  </div>
                  <div className="p-5 rounded-lg bg-foreground text-background">
                    <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
                      Aanvikshiki
                    </p>
                    <p className="text-sm leading-relaxed opacity-85">{step.contrast.aanvikshiki}</p>
                  </div>
                </div>

                {/* Case study splice */}
                <div className="border-l-2 border-primary/30 pl-5 py-1">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    From the field
                  </p>
                  <blockquote className="text-sm italic leading-relaxed text-foreground">
                    "{step.caseStudy.quote}"
                  </blockquote>
                  <p className="text-xs text-muted-foreground mt-3">— {step.caseStudy.source}</p>
                </div>

              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Principles ── */}
      <section id="principles" className="border-b border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
              Governing Principles
            </p>
            <div className="space-y-4">
              {principles.map((p, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-xs font-mono text-muted-foreground mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Want to see the approach applied?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Read through a case study to see how Observe → Analyze → Synthesize → Act plays out on a real engagement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link to="/work">View case study</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Anchor right-rail (xl screens only) ── */}
      <div className="hidden xl:block fixed right-8 top-1/3 z-30">
        <Anchor
          affix={false}
          items={[
            ...steps.map((s) => ({
              key: s.number,
              href: `#step-${s.number}`,
              title: s.title,
            })),
            { key: "principles", href: "#principles", title: "Principles" },
          ]}
          getCurrentAnchor={() =>
            `#step-${String(activeStep + 1).padStart(2, "0")}`
          }
        />
      </div>

    </main>
  );
}
