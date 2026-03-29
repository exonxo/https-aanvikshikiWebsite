import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const principles = [
  {
    label: "Research precedes product",
    body: "We do not build a system until we have documented the problem formally and validated that the approach addresses it. This adds time to early stages and removes risk from later ones.",
  },
  {
    label: "Uncertainty is not hidden",
    body: "Our systems surface confidence intervals, data quality flags, and model limitations at the point of output. A system that obscures its own uncertainty is not fit for clinical or enterprise use.",
  },
  {
    label: "Documentation is not optional",
    body: "Every signal processing pipeline, every statistical model, and every data dependency we work with is documented to specification before a system goes into production.",
  },
  {
    label: "Complexity is not an excuse",
    body: "Legacy systems are complex by accumulation, not by necessity. Our job is to reduce operational complexity by understanding it structurally, not by building around it.",
  },
];

const notUs = [
  "An AI agency that packages existing models as proprietary products",
  "A consulting firm that delivers reports and leaves",
  "A SaaS platform built for general-purpose use cases",
  "A prototyping studio that ships demos",
];

const domains = [
  { label: "Healthcare", detail: "Clinical prediction systems, patient intelligence platforms, care coordination infrastructure" },
  { label: "Enterprise Data", detail: "Legacy infrastructure analysis, data lineage extraction, migration architecture design" },
  { label: "Applied Research", detail: "Biosignal processing, probabilistic forecasting, clinical AI validation" },
];

export function Company() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Company
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-xl">
                The science of inquiry, applied to systems.
              </h1>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                <em>Ānvīkṣikī</em> is the ancient Indian science of critical
                inquiry, systematic reasoning, and analytical thinking — the
                discipline of asking precise questions and tracing rigorous answers.
                The name reflects how we work: before a system is built, the
                problem must be understood with enough precision that the solution
                can be specified.
              </p>
            </div>
            <div className="hidden md:block overflow-hidden rounded-lg border border-border">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80"
                alt="Aanvikshiki — applied AI research environment"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we are */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                What We Are
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Aanvikshiki is an applied AI research and engineering company.
                We design and deploy predictive models, data infrastructure
                systems, and healthcare intelligence platforms for organizations
                operating in domains where data quality, clinical validity, and
                system reliability are non-negotiable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our work spans three domains: healthcare, enterprise data
                infrastructure, and applied research. In each, we build
                production systems — not frameworks, not scaffolding, and not
                demonstrations of potential.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                What We Are Not
              </p>
              <div className="space-y-3">
                {notUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-0.5 shrink-0">×</span>
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="border-b border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">
            Domains
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {domains.map((d) => (
              <div key={d.label} className="bg-background p-8">
                <h3 className="text-base font-semibold mb-3">{d.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">
            Operating Principles
          </p>
          <div className="divide-y divide-border">
            {principles.map((p, i) => (
              <div key={p.label} className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-muted-foreground mt-0.5">
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
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2">
                Working on a problem that fits?
              </h2>
              <p className="text-muted-foreground max-w-md">
                We take on a small number of engagements. We start every
                conversation by understanding the system before discussing the
                solution.
              </p>
            </div>
            <Button asChild className="shrink-0">
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
