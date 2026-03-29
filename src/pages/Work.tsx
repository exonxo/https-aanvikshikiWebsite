import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const outcomes = [
  { value: "4 days", label: "Strategic infrastructure analysis (vs. 6–8 weeks estimated)" },
  { value: "259", label: "SSIS packages parsed and mapped" },
  { value: "2,847", label: "Data dependencies identified and documented" },
  { value: "0", label: "Undocumented dependencies remaining in the target architecture" },
];

const timeline = [
  {
    day: "Day 1",
    activity:
      "AI agent deployed against the full SSIS package catalog. Dependency graph seeded from 259 packages. Initial structure of the data estate becomes visible for the first time.",
  },
  {
    day: "Day 2",
    activity:
      "Full dependency traversal completed. 2,847 edges mapped in a directed acyclic graph. Three circular references flagged for strategic resolution before migration.",
  },
  {
    day: "Day 3",
    activity:
      "Power BI report metadata cross-referenced against the lineage graph. 94 reports traced to 612 upstream sources. Column-level lineage generated — executives can now see what breaks if any component changes.",
  },
  {
    day: "Day 4",
    activity:
      "Migration architecture generated from lineage topology. Azure Data Factory pipeline structure produced. Sequencing derived from dependency order. Strategic handoff documentation delivered.",
  },
];

export function Work() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Work
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl leading-tight">
            Thinking in practice.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Case studies document specific problems, the thinking we applied,
            and the outcomes that followed. We do not use projected figures.
          </p>
        </div>
      </section>

      {/* Case Study 01 */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-start gap-3 mb-6">
                <span className="text-xs font-mono text-muted-foreground mt-1 shrink-0">01</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    AI Strategy — Healthcare
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight leading-snug">
                    Strategic Clarity Before Migration: How an Organization Learned What It Had Before Deciding Where to Go
                  </h2>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=80"
                alt="Strategic data infrastructure analysis"
                className="w-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
          </div>

          {/* Observe */}
          <div className="mb-16">
            <div className="flex items-start gap-3 mb-6">
              <span className="text-xs font-mono text-muted-foreground mt-0.5 shrink-0">Observe</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A regional healthcare provider needed to migrate its data
                  infrastructure. The mandate was clear. The path was not.
                  Eleven years of incremental system-building had produced 259
                  SSIS packages spanning 12 source systems — none of them
                  documented, many of them interdependent in ways no one fully
                  understood.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Power BI reports had been built by multiple teams over time,
                  with dependencies tracing back to staging tables that were
                  themselves undocumented. Before any strategic decision could
                  be made about where to go, the organization needed to
                  understand where it was. Manual analysis was estimated at 6–8
                  weeks — before migration planning could even begin.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  ["The challenge", "Migrate without a map"],
                  ["Infrastructure scope", "259 SSIS packages, 12 source systems"],
                  ["Documentation", "None — no lineage, no dependency graph"],
                  ["BI layer", "94 Power BI reports with unresolved dependencies"],
                  ["Pre-migration estimate", "6–8 weeks of manual analysis"],
                ].map(([k, v]) => (
                  <div key={k as string} className="flex justify-between gap-6 py-2 border-b border-border last:border-0">
                    <p className="text-sm text-muted-foreground shrink-0">{k}</p>
                    <p className="text-sm text-right">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Analyze + Synthesize */}
          <div className="mb-16">
            <div className="flex items-start gap-3 mb-6">
              <span className="text-xs font-mono text-muted-foreground mt-0.5 shrink-0">Analyze → Synthesize</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              An AI agent was deployed against the full package catalog and
              Power BI metadata store. Rather than documenting the system
              manually, the agent constructed a directed dependency graph — each
              package a node, each data relationship an edge. What had been
              invisible became structural. What had been assumed became
              verifiable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Column-level lineage was traced from report visuals back to source
              tables. Business logic embedded in transformation expressions was
              extracted and annotated. By the end of Day 4, the organization had
              a complete strategic picture of its data estate — the first time
              that had ever been true.
            </p>

            {/* Timeline */}
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-secondary/40">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Execution Timeline
                </p>
              </div>
              <div className="divide-y divide-border">
                {timeline.map((t) => (
                  <div key={t.day} className="grid grid-cols-5 gap-6 px-6 py-5">
                    <p className="text-sm font-semibold col-span-1">{t.day}</p>
                    <p className="text-sm text-muted-foreground col-span-4 leading-relaxed">
                      {t.activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Act — Outcomes */}
          <div>
            <div className="flex items-start gap-3 mb-6">
              <span className="text-xs font-mono text-muted-foreground mt-0.5 shrink-0">Act</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Infrastructure analysis was completed in 4 days. The output was
              not a report — it was a migration architecture derived directly
              from the dependency graph topology. The organization entered its
              migration with complete strategic clarity about what it had, what
              depended on what, and in what order to move it.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {outcomes.map((o) => (
                <div key={o.label} className="border border-border rounded-lg p-5 bg-secondary/20">
                  <p className="text-2xl font-semibold mb-1">{o.value}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{o.label}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="outline">
              <Link to="/contact">
                Discuss a similar challenge <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Additional Work
          </p>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-8">
            Additional case studies are available under NDA for qualified
            engagements. Contact us to request access to work relevant to your
            domain.
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">Request access</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
