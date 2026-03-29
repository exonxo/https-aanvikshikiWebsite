import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const areas = [
  {
    number: "01",
    title: "Biosignal Processing from Consumer Hardware",
    summary:
      "Extracting clinically meaningful signal from hardware designed for general consumer use requires handling variable sampling rates, sensor noise profiles, and user compliance variance. Research focuses on signal preprocessing pipelines that produce consistent feature vectors across device types and session conditions.",
    methods: [
      "Adaptive bandpass filtering calibrated per device accelerometer spec",
      "Session quality scoring to flag low-compliance recordings before model ingestion",
      "Cross-device normalization using reference task anchoring",
      "Tremor frequency analysis: 4–8 Hz band isolation for resting tremor classification",
    ],
  },
  {
    number: "02",
    title: "Probabilistic Forecasting in Clinical Contexts",
    summary:
      "Point-estimate predictions in clinical AI suppress uncertainty information that is directly relevant to clinical decision-making. Research focuses on Bayesian inference architectures that generate posterior distributions over risk states, with credible intervals that reflect both model uncertainty and data sparsity.",
    methods: [
      "Hidden Markov Models for latent state inference over longitudinal observations",
      "Bayesian updating: posterior from session N becomes prior for session N+1",
      "Calibration testing: predicted probability distributions versus observed event rates",
      "Minimum data requirements for actionable posteriors: 3-session threshold analysis",
    ],
  },
  {
    number: "03",
    title: "Graph-Based Data Lineage Extraction",
    summary:
      "Legacy data infrastructure contains implicit dependencies that are not represented in any schema or documentation. Research focuses on automated extraction of data lineage from ETL package definitions, stored procedures, and report metadata — producing formal graph representations of data flow across complex systems.",
    methods: [
      "XML parsing of SSIS package definitions for source-transformation-destination extraction",
      "Dependency graph construction: directed acyclic graph with typed edges",
      "Business logic extraction from derived column expressions and conditional splits",
      "Cross-system lineage resolution: joining ETL graph with BI model metadata",
    ],
  },
  {
    number: "04",
    title: "Clinical AI Validation Methodology",
    summary:
      "Clinical AI systems require validation frameworks that go beyond accuracy metrics. Research focuses on sensitivity, specificity, and calibration benchmarked against clinician-adjudicated ground truth, with explicit protocols for handling class imbalance in rare-event clinical prediction tasks.",
    methods: [
      "Clinician adjudication protocol: independent review by two specialists with tie-breaking rule",
      "Calibration assessment: reliability diagrams and expected calibration error",
      "Class imbalance handling: SMOTE-NC for structured clinical tabular data",
      "Temporal validation: out-of-time test sets to detect distributional shift",
    ],
  },
];

export function Research() {
  return (
    <main className="pt-16">
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Research
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl">
            Every system begins as a research question.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            We document methodology before we build. Signal processing
            pipelines are formally specified. Statistical models are validated
            before deployment. The research record is maintained independently
            of product timelines.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-12">
            Research Areas
          </p>
          <div className="space-y-0 divide-y divide-border">
            {areas.map((a) => (
              <div key={a.number} className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <span className="text-xs font-mono text-muted-foreground block mb-2">
                    {a.number}
                  </span>
                  <h2 className="text-base font-semibold leading-snug">{a.title}</h2>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground leading-relaxed mb-6">{a.summary}</p>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                      Methods
                    </p>
                    {a.methods.map((m) => (
                      <div key={m} className="flex items-start gap-3">
                        <span className="text-muted-foreground mt-1 shrink-0">—</span>
                        <p className="text-sm text-muted-foreground">{m}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Principle */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Methodology Principle
              </p>
              <h2 className="text-2xl font-semibold tracking-tight mb-6">
                We publish methodology before we ship products.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Production systems built on undocumented methods cannot be
                audited, replicated, or improved. Every statistical approach we
                use in a deployed system has a corresponding specification: the
                model family, the training objective, the validation protocol,
                and the known limitations. These specifications are maintained
                in our research record and made available to clinical and
                enterprise partners during technical due diligence.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  label: "Reproducibility",
                  body: "All experiments use fixed random seeds and versioned datasets. Results reported with standard deviations across five trials.",
                },
                {
                  label: "Limitation documentation",
                  body: "Every model specification includes a section on known failure modes and out-of-distribution behavior.",
                },
                {
                  label: "Clinical calibration",
                  body: "Probabilistic outputs are calibrated against observed event rates. Miscalibration is reported as a known limitation until resolved.",
                },
              ].map((item) => (
                <div key={item.label} className="border border-border rounded-lg p-5">
                  <p className="text-sm font-semibold mb-2">{item.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-8">
            Research specifications and validation reports are available to
            qualified partners. Contact us to request access for technical due
            diligence.
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">Request research documentation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
