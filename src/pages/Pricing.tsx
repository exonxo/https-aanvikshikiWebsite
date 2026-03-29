import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Discovery",
    description: "For teams exploring AI strategy before committing to implementation.",
    badge: null,
    includes: [
      "AI readiness assessment",
      "Strategic landscape brief",
      "1 structured workshop (half-day)",
      "Decision quality diagnostic",
      "Written findings report",
    ],
    forWhom:
      "Leadership teams, founders, and boards evaluating whether and how to engage with AI.",
    cta: "Start with Discovery",
  },
  {
    name: "Engagement",
    description: "Our core advisory model. Full OASA framework applied to your specific challenge.",
    badge: "Most chosen",
    includes: [
      "Everything in Discovery",
      "Full Observe → Analyze → Synthesize → Act engagement",
      "AI strategy roadmap",
      "Decision architecture design",
      "Ethical review framework",
      "Implementation planning support",
    ],
    forWhom:
      "Organizations navigating a significant transition — strategic pivot, AI deployment, or decision quality improvement.",
    cta: "Begin an Engagement",
  },
  {
    name: "Partnership",
    description:
      "Ongoing strategic partnership for organizations that want Aanvikshiki thinking embedded in their operations.",
    badge: null,
    includes: [
      "Everything in Engagement",
      "Retainer advisory access",
      "Quarterly strategy reviews",
      "AI governance framework build",
      "Research to Product pathway",
      "Project EASE alignment (if applicable)",
      "Priority access to new frameworks",
    ],
    forWhom:
      "Mission-driven organizations, research institutions, and enterprises that need continuous strategic intelligence support.",
    cta: "Explore Partnership",
  },
];

export function Pricing() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Engagement</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl leading-tight">
            Work With Us.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Every engagement is custom. The structure below reflects how we typically engage —
            starting from a defined problem and building toward measurable clarity.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => {
              const isFeatured = tier.badge !== null;
              return (
                <Card
                  key={tier.name}
                  className={cn(
                    "flex flex-col",
                    isFeatured && "border-primary bg-primary/[0.03]"
                  )}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <CardTitle className="text-2xl font-semibold tracking-tight">
                        {tier.name}
                      </CardTitle>
                      {tier.badge && (
                        <span className="shrink-0 text-xs font-medium uppercase tracking-widest text-primary border border-primary/40 rounded-full px-2.5 py-1">
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 gap-8">
                    {/* Includes */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                        What's included
                      </p>
                      <ul className="space-y-3">
                        {tier.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm">
                            <CheckCircle
                              className={cn(
                                "mt-0.5 h-4 w-4 shrink-0",
                                isFeatured ? "text-primary" : "text-muted-foreground"
                              )}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best for */}
                    <div className="mt-auto">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        Best for
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tier.forWhom}
                      </p>
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      variant={isFeatured ? "default" : "outline"}
                      className="w-full"
                    >
                      <Link to="/contact">{tier.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom note */}
          <p className="text-sm text-muted-foreground text-center mt-12 max-w-2xl mx-auto leading-relaxed">
            All engagements are scoped after an initial conversation. Pricing is determined by
            complexity, scope, and timeline — not by a rate card.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Ready to Begin
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-4 max-w-xl mx-auto leading-snug">
            Not sure which tier fits your situation?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            Start with a conversation. We'll help you identify the right level of engagement
            before any commitment is made.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
