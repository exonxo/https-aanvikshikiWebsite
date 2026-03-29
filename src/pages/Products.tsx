import { Link } from "react-router";
import { ArrowRight, Brain, Activity, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const ventures = [
  {
    name: "Neuro-D-Forecast",
    category: "Clinical Prediction System",
    href: "/products/neuro-d-forecast",
    Icon: Brain,
    summary:
      "A passive monitoring system that captures cognitive and motor biomarkers from standard smartphone sensors and generates probabilistic neurological risk forecasts.",
    mechanism: [
      {
        label: "Capture",
        detail:
          "Accelerometer, gyroscope, and touchscreen pressure data collected during 15–30 second standardized tasks. No peripheral hardware required.",
      },
      {
        label: "Process",
        detail:
          "Bandpass filtering (0.5–20 Hz), Fourier transform, and feature extraction yield amplitude variance, frequency regularity, and interlimb asymmetry scores.",
      },
      {
        label: "Model",
        detail:
          "Hidden Markov Models classify temporal motor states. Bayesian inference generates posterior distributions over risk levels, updated with each session.",
      },
      {
        label: "Output",
        detail:
          "Risk score with 95% confidence interval. Trajectory analysis across 30, 90, and 180-day windows. Clinical alert when risk threshold is exceeded.",
      },
    ],
    specs: ["iOS and Android compatible", "No wearable required", "HIPAA-aligned data pipeline", "HL7 FHIR export"],
  },
  {
    name: "EaseCare",
    category: "Home Care Marketplace",
    href: "/products",
    Icon: Activity,
    summary:
      "A request-first home care marketplace connecting Kolkata families with background-verified caretakers, house helpers, and elder care specialists. Built on the belief that finding trusted home help should take seconds, not days.",
    mechanism: [
      {
        label: "Post",
        detail:
          "Families describe their care need in under 5 seconds — type of help, location, and schedule. No lengthy forms, no account required to browse.",
      },
      {
        label: "Match",
        detail:
          "Hyperlocal algorithm surfaces verified helpers within the requester's Kolkata neighborhood. Profiles include background check status, experience, and availability.",
      },
      {
        label: "Negotiate",
        detail:
          "Families and helpers communicate directly on price and terms. Zero platform markup — what is agreed is what is paid.",
      },
      {
        label: "Care",
        detail:
          "Helper arrives, care is delivered. Families rate the experience; helpers build verified track records over time.",
      },
    ],
    specs: ["100% background-verified helpers", "Hyperlocal Kolkata matching", "0% hidden fees", "Coming soon — pre-launch"],
  },
];

const consulting = [
  {
    name: "AI Infrastructure Systems",
    category: "Data Engineering & Migration",
    href: "/services",
    Icon: Database,
    summary:
      "An AI-driven infrastructure analysis system that parses legacy ETL pipelines, constructs dependency graphs, extracts data lineage, and generates migration architecture for cloud-native platforms.",
    mechanism: [
      {
        label: "Parse",
        detail:
          "AI agent ingests SSIS package XML, SSRS report definitions, and stored procedure catalogs. Structural analysis extracts transformation logic and data flow.",
      },
      {
        label: "Graph",
        detail:
          "A directed acyclic graph (DAG) is constructed across all packages and reports. Source-to-output lineage traced for every data element.",
      },
      {
        label: "Lineage",
        detail:
          "Business logic extracted from transformations. Power BI model dependencies cross-referenced. Complete column-level lineage map generated.",
      },
      {
        label: "Architect",
        detail:
          "Lineage graph used to generate migration architecture. Cloud-native equivalents mapped. Target-state design output with zero undocumented dependencies.",
      },
    ],
    specs: ["SSIS, SSRS, ADF compatible", "Azure and AWS target patterns", "Column-level lineage", "Migration readiness scoring"],
  },
];

function ProductRow({ name, category, href, Icon, summary, mechanism, specs }: typeof ventures[0]) {
  return (
    <section className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-start justify-between mb-12 gap-6">
          <div className="flex items-start gap-5">
            <div className="border border-border rounded-lg p-3 mt-1 shrink-0">
              <Icon className="size-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {category}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight mb-3">{name}</h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">{summary}</p>
            </div>
          </div>
          <Button asChild variant="outline" size="sm" className="shrink-0 hidden md:flex">
            <Link to={href}>
              Full details <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            How It Works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {mechanism.map((step, i) => (
              <div key={step.label} className="bg-background p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {step.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {specs.map((s) => (
            <span
              key={s}
              className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Products
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl">
            Three production systems. Each built to specification.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Each system was designed to solve a specific, well-defined problem.
            Architecture decisions are documented. Outputs are measurable.
            Deployment is structured.
          </p>
        </div>
      </section>

      {/* Ventures */}
      <div className="border-b border-border bg-secondary/5">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Ventures</p>
          <p className="text-sm text-muted-foreground mt-1">Independent products in development</p>
        </div>
      </div>
      {ventures.map((p) => (
        <ProductRow key={p.name} {...p} />
      ))}

      {/* Consulting Services */}
      <div className="border-b border-border bg-secondary/5">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Consulting Services</p>
          <p className="text-sm text-muted-foreground mt-1">Deployed for enterprise clients</p>
        </div>
      </div>
      {consulting.map((p) => (
        <ProductRow key={p.name} {...p} />
      ))}

      {/* CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Evaluate
          </p>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Ready to assess fit for your environment?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            We start with a structured discovery process — no demos before we
            understand the system you're working with.
          </p>
          <Button asChild>
            <Link to="/contact">Request a technical conversation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
