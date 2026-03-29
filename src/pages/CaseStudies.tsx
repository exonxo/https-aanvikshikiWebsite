import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "259", label: "SSIS packages parsed" },
  { value: "12", label: "Source systems mapped" },
  { value: "2,847", label: "Data dependencies identified" },
  { value: "4 days", label: "Infrastructure analysis (vs. 6–8 weeks manual)" },
  { value: "0", label: "Undocumented dependencies in target architecture" },
  { value: "100%", label: "Power BI model dependencies resolved" },
];

const timeline = [
  {
    day: "Day 1",
    activity:
      "AI agent deployed against SSIS package catalog. XML parsing initialized. Initial dependency graph seed constructed from 259 packages.",
  },
  {
    day: "Day 2",
    activity:
      "Dependency traversal completed. 2,847 edges identified in directed acyclic graph. Circular references flagged for manual review (3 identified).",
  },
  {
    day: "Day 3",
    activity:
      "Power BI metadata extracted and cross-referenced against lineage graph. 94 reports mapped to 612 upstream data sources. Column-level lineage generated.",
  },
  {
    day: "Day 4",
    activity:
      "Migration architecture generated from lineage graph. Azure Data Factory pipeline structure output. Sequencing derived from dependency order. Handoff documentation produced.",
  },
];

export function CaseStudies() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Case Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl">
            Outcomes from production deployments.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Each case study documents a specific problem, the system deployed to
            address it, and the measurable outcome. We do not use projected
            figures.
          </p>
        </div>
      </section>

      {/* Case Study 01 */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Case study header with image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-start gap-3 mb-6">
                <span className="text-xs font-mono text-muted-foreground mt-1">01</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Healthcare — Data Infrastructure
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    AI-Driven Infrastructure Analysis for Healthcare Data Migration
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A regional healthcare provider needed to migrate its data
                infrastructure from on-premise SQL Server and SSIS to
                cloud-native platforms — with 259 undocumented packages, 12
                source systems, and no lineage map.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=80"
                alt="Enterprise data infrastructure"
                className="w-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
          </div>

          {/* Problem */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              The Problem
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A regional healthcare provider needed to migrate its data
                  infrastructure from on-premise SQL Server and SSIS to
                  cloud-native platforms. The existing architecture had been
                  built incrementally over 11 years, with 259 SSIS packages
                  spanning 12 source systems and no centralized documentation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Power BI reports had been developed by multiple teams over
                  time, with dependencies traced back to intermediate staging
                  tables that were themselves undocumented. The data engineering
                  team estimated manual analysis at 6–8 weeks before migration
                  sequencing could begin.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  ["SSIS packages", "259 across 12 source systems"],
                  ["Documentation status", "None — no lineage, no dependency map"],
                  ["Power BI reports", "94 reports with unresolved upstream dependencies"],
                  ["Manual analysis estimate", "6–8 weeks (pre-migration only)"],
                  ["Business logic location", "SSIS expressions, stored procedures, view definitions"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 py-2 border-b border-border last:border-0">
                    <p className="text-sm text-muted-foreground shrink-0">{k}</p>
                    <p className="text-sm text-right">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              The System
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              An AI agent was deployed against the full SSIS package catalog and
              Power BI metadata store. The agent parsed XML package definitions
              to extract source connections, transformation logic, destination
              targets, and event handler configurations. A directed acyclic
              graph (DAG) was constructed in memory, with each package
              represented as a node and each data dependency as a directed edge.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Power BI report metadata was extracted via the Power BI REST API
              and cross-referenced against the DAG. Column-level lineage was
              traced from report visuals back to source system tables. Business
              logic embedded in SSIS expression transformations and derived
              column components was extracted and annotated in the lineage map.
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

          {/* Outcome */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              The Outcome
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Infrastructure analysis was completed in 4 days. The output
              included a full dependency graph, column-level lineage
              documentation, and a migration sequencing plan generated directly
              from the DAG topology. The target Azure Data Factory architecture
              was designed with zero undocumented dependencies — every pipeline
              in the target state could be traced to a source system record.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="border border-border rounded-lg p-5 bg-secondary/20">
                  <p className="text-2xl font-semibold mb-1">{m.value}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <Button asChild variant="outline">
            <Link to="/contact">
              Discuss a similar engagement <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* More coming */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Additional Case Studies
          </p>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-8">
            Additional case studies are available under NDA for qualified
            engagements. Contact us to request access to case studies relevant
            to your domain.
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">Request case study access</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
