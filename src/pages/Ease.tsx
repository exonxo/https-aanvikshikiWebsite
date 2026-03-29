import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function Ease() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-emerald-600 mb-4 border-l-2 border-emerald-600 pl-3">Project EASE</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl leading-tight">
            Empowering Action for Societal Evolution.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Intelligence should not be a privilege. Project EASE is Aanvikshiki's commitment to
            bringing structured AI capabilities to underserved communities — where the need for
            better decisions is highest and the access to tools is lowest.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        className="border-b border-border text-background"
        style={{ background: "radial-gradient(ellipse at 30% 60%, rgba(5,150,105,0.18) 0%, transparent 60%), #1e293b" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-widest opacity-40 mb-10">Mission</p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] max-w-4xl">
            Every community deserves systems that help them make better decisions — about health,
            resources, education, and opportunity.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-emerald-600 mb-12 border-l-2 border-emerald-600 pl-3">Focus Areas</p>
          <div className="divide-y divide-border">
            {[
              {
                number: "01",
                title: "Healthcare Access",
                description:
                  "AI-assisted triage and care pathway tools for clinics operating without specialist access. Structured decision support where human expertise is scarce.",
              },
              {
                number: "02",
                title: "Educational Intelligence",
                description:
                  "Adaptive learning tools and outcome prediction systems for schools in resource-constrained environments. Built to close gaps, not widen them.",
              },
              {
                number: "03",
                title: "Resource Allocation",
                description:
                  "Data-driven tools for NGOs and social enterprises to allocate resources where impact is highest — turning fragmented field data into structured action.",
              },
              {
                number: "04",
                title: "Research Accessibility",
                description:
                  "Translating academic AI research into deployable tools for social sector organizations that lack the technical capacity to implement them alone.",
              },
            ].map((area) => (
              <div key={area.number} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12">
                <div className="lg:col-span-1">
                  <span className="font-mono text-xs text-muted-foreground">{area.number}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-semibold tracking-tight">{area.title}</h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-muted-foreground leading-relaxed max-w-xl">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-border bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-600 mb-6 border-l-2 border-emerald-600 pl-3">How We Operate</p>
              <h2 className="text-3xl font-semibold tracking-tight mb-8 leading-snug">
                Impact measured.<br />Not assumed.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every EASE engagement begins with a measurable impact hypothesis. We don't deploy
                technology and hope for the best — we define what success looks like before we begin,
                and we track it throughout.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Aanvikshiki applies the same OASA framework — Observe, Analyze, Synthesize, Act —
                to social impact work as to enterprise engagements. Rigor doesn't disappear because
                the client isn't paying.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Community partnerships before technology deployment" },
                { label: "Local language and context built into every system" },
                { label: "Open-source tools preferred over proprietary lock-in" },
                { label: "Measurable impact metrics defined upfront" },
                { label: "Capacity building, not dependency creation" },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-emerald-200/60 last:border-0">
                  <span className="font-mono text-xs text-muted-foreground mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-600 mb-6 border-l-2 border-emerald-600 pl-3 inline-block">Partner With Us</p>
          <h2 className="text-3xl font-semibold tracking-tight mb-4 max-w-xl mx-auto leading-snug">
            Want to bring structured intelligence to your community?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            We partner with NGOs, social enterprises, research institutions, and governments.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Start the conversation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
