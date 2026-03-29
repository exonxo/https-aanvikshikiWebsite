import { Link } from "react-router";
import { ArrowRight, Target, Brain, GitBranch, Rocket, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    number: "01",
    title: "Strategic Advisory",
    badge: { Icon: Target, bg: "bg-amber-100", text: "text-amber-700" },
    tagline: "Direction in uncertain environments.",
    description:
      "We help leaders define where they are going and why — before they decide how to get there. Most organizations struggling with strategy are not short on data. They are short on structured thinking about what the data means and what it demands.",
    deliverables: [
      "Strategic landscape assessment",
      "Direction-setting workshops",
      "Decision architecture design",
      "Competitive positioning analysis",
      "Long-arc scenario modeling",
    ],
    forWhom: "CEOs, executive teams, and boards navigating significant transitions or uncertainty.",
  },
  {
    number: "02",
    title: "AI Strategy",
    badge: { Icon: Brain, bg: "bg-blue-100", text: "text-blue-700" },
    tagline: "AI as an amplifier, not a replacement.",
    description:
      "We translate AI capabilities into real business advantage — not by deploying models, but by answering the question that most AI initiatives skip: what decisions are we trying to improve, and how does AI change the quality of those decisions?",
    deliverables: [
      "AI readiness assessment",
      "Use-case prioritization framework",
      "AI ethics and governance structure",
      "Implementation roadmap",
      "AI-human decision interface design",
    ],
    inAction: {
      label: "AI Strategy in action",
      examples: [
        {
          name: "Clinical prediction intelligence",
          detail:
            "Worked with a healthcare organization to build a decision support system that surfaces probabilistic risk signals from patient-generated data — giving clinicians structured input rather than replacing clinical judgment.",
        },
        {
          name: "Healthcare data intelligence",
          detail:
            "Designed an intelligence layer across fragmented EHR and lab systems to produce care pathway recommendations grounded in population evidence — structured to support, not automate, clinical decisions.",
        },
        {
          name: "Infrastructure strategic clarity",
          detail:
            "Helped a healthcare data team achieve strategic clarity on their legacy infrastructure before committing to a migration. AI-powered analysis mapped 259 undocumented packages and 2,847 dependencies in 4 days.",
        },
      ],
    },
    forWhom: "Organizations deploying AI who want strategic clarity before technical investment.",
  },
  {
    number: "03",
    title: "Decision Frameworks",
    badge: { Icon: GitBranch, bg: "bg-cyan-100", text: "text-cyan-700" },
    tagline: "Consistent, high-quality decisions at scale.",
    description:
      "Individual brilliance does not scale. We build structured systems for decision-making that encode judgment, embed ethical guardrails, and produce consistent quality regardless of who is in the room.",
    deliverables: [
      "Decision taxonomy and classification",
      "Structured decision protocol design",
      "Ethical review framework integration",
      "Decision quality metrics",
      "Institutional knowledge capture",
    ],
    forWhom:
      "Organizations where decision quality is inconsistent across teams, leadership levels, or business units.",
  },
  {
    number: "04",
    title: "Research to Product",
    badge: { Icon: Rocket, bg: "bg-violet-100", text: "text-violet-700" },
    tagline: "From academic insight to market-ready intelligence.",
    description:
      "Most research stops at the paper. We bridge the gap between validated findings and deployed products — translating AI research into systems that organizations can actually use, measure, and trust.",
    deliverables: [
      "Technology readiness assessment",
      "MVP architecture and development",
      "Market validation framework",
      "IP protection and commercialization roadmap",
      "Research-to-deployment timeline design",
    ],
    forWhom: "Research institutions, university spinouts, and enterprises with internal R&D looking to productize AI findings.",
  },
  {
    number: "05",
    title: "Ethical AI Governance",
    badge: { Icon: Scale, bg: "bg-emerald-100", text: "text-emerald-700" },
    tagline: "Accountability built in, not bolted on.",
    description:
      "AI systems without governance frameworks are liabilities. We design transparency, accountability, and regulatory alignment into your AI from the start — not as compliance overhead, but as a competitive advantage that builds trust with users, regulators, and boards.",
    deliverables: [
      "AI ethics audit and risk assessment",
      "Bias detection and mitigation protocol",
      "Explainability framework design",
      "EU AI Act and NIST AI RMF alignment",
      "Governance board structure and reporting",
    ],
    forWhom: "Organizations deploying AI in regulated industries, or any team that needs to demonstrate accountable AI to stakeholders.",
  },
];

export function Services() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 border-l-2 border-primary pl-3">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl leading-tight">
            What We Do.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Five services. One discipline: structured thinking applied to the
            problems that matter most. We work across strategy, AI, research
            commercialization, and governance because intelligent organizations
            need all of these — and they are inseparable.
          </p>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-4">
          {services.map((service, idx) => (
            <div
              key={service.number}
              className={`border-b border-border py-20 ${idx === 0 ? "pt-20" : ""}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* Left label */}
                <div className="md:col-span-1">
                  <span className="text-xs font-mono text-muted-foreground">{service.number}</span>
                </div>

                {/* Main content */}
                <div className="md:col-span-11 space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <div
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-lg shrink-0",
                          service.badge.bg
                        )}
                      >
                        <service.badge.Icon className={cn("size-5", service.badge.text)} />
                      </div>
                      <h2 className="text-3xl font-semibold tracking-tight">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground text-lg italic mb-6 pl-14">{service.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Deliverables */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 border-l-2 border-primary pl-3">
                        What we deliver
                      </p>
                      <ul className="space-y-2">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm">
                            <span className="text-muted-foreground mt-0.5">—</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* For whom */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 border-l-2 border-primary pl-3">
                        Best suited for
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.forWhom}
                      </p>
                    </div>
                  </div>

                  {/* In Action examples (AI Strategy only) */}
                  {"inAction" in service && service.inAction && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 border-l-2 border-primary pl-3">
                        {service.inAction.label}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {service.inAction.examples.map((ex) => (
                          <Card key={ex.name} className="bg-secondary/30">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">{ex.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription className="leading-relaxed text-xs">
                                {ex.detail}
                              </CardDescription>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2">
                Not sure which service fits?
              </h2>
              <p className="text-muted-foreground max-w-md">
                Most engagements begin with a conversation about the problem,
                not a service selection. Tell us what you're navigating.
              </p>
            </div>
            <Button asChild className="shrink-0">
              <Link to="/contact">
                Start a conversation <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
