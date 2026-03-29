import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const phases = [
  {
    number: "01",
    phase: "Signal Capture",
    headline: "Standard smartphone. No custom hardware.",
    body: "Users perform three standardized tasks on their personal iOS or Android device: a 15-second bilateral finger-tapping protocol, a 30-second gait recording during a calibrated walking segment, and a spiral-drawing task measuring fine motor control. Raw data is collected from the device accelerometer, gyroscope, and touchscreen pressure sensors at 100 Hz. No peripheral attachments or clinical equipment are required.",
    technical: [
      "Accelerometer: 3-axis at 100 Hz",
      "Gyroscope: rotational velocity during ambulation",
      "Touchscreen: pressure and trajectory during spiral task",
      "Session duration: 90–120 seconds total",
    ],
  },
  {
    number: "02",
    phase: "Signal Processing",
    headline: "Noise reduction, feature isolation, structured extraction.",
    body: "Raw sensor data passes through a preprocessing pipeline before any model inference occurs. A Butterworth bandpass filter (0.5–20 Hz) removes low-frequency drift and high-frequency electrical noise from accelerometer signals. Fast Fourier Transform (FFT) converts the time-domain signal into frequency-domain representation. A feature extraction module then computes 14 quantitative measures from each recording session.",
    technical: [
      "Bandpass filter: Butterworth 4th-order, 0.5–20 Hz",
      "FFT window: 256-point Hamming window",
      "14 features extracted per session including amplitude variance, dominant frequency, frequency regularity index",
      "Interlimb asymmetry score computed from bilateral tapping",
    ],
  },
  {
    number: "03",
    phase: "Statistical Modeling",
    headline: "Probability distributions over time — not single scores.",
    body: "The modeling layer uses a Hidden Markov Model (HMM) to classify the underlying motor state at each session. Four states are defined: baseline, mild risk, moderate risk, and elevated risk. Each new session updates the state posterior using Bayesian inference. The prior from the previous session is updated with the likelihood of the current feature vector, generating a posterior distribution over the four states. This longitudinal updating means the model improves with each session and reflects individual baseline rather than population mean.",
    technical: [
      "HMM: 4-state, first-order Markov chain",
      "Emission model: multivariate Gaussian per state",
      "Prior update: full Bayesian posterior at each session",
      "Minimum sessions for confidence threshold: 3",
    ],
  },
  {
    number: "04",
    phase: "Clinical Output",
    headline: "Confidence intervals, not point predictions.",
    body: "The system outputs a risk score expressed as a posterior probability with a 95% credible interval. Example output: 'Moderate-high risk: 62% probability (95% CI: 48–74%)'. Trajectory analysis is computed over 30, 90, and 180-day rolling windows to identify progressive decline patterns. A clinical decision support flag is triggered when the posterior probability of moderate or elevated risk exceeds a configurable threshold for two consecutive sessions. All outputs include a trace back to the session data and model state at the time of generation.",
    technical: [
      "Output: posterior probability + 95% Bayesian credible interval",
      "Trajectory windows: 30 / 90 / 180 days",
      "Alert logic: configurable threshold, minimum 2 consecutive sessions",
      "Export: HL7 FHIR Observation resource",
    ],
  },
];

const validation = [
  {
    label: "Sensitivity",
    value: "84%",
    note: "for moderate-to-high risk classification",
  },
  {
    label: "Specificity",
    value: "91%",
    note: "against clinician-adjudicated ground truth",
  },
  {
    label: "Sessions to stable posterior",
    value: "3",
    note: "minimum for clinically actionable output",
  },
  {
    label: "Signal latency",
    value: "<2 min",
    note: "from task completion to risk score",
  },
];

export function ProductDetail() {
  return (
    <main className="pt-16">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            to="/products"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
          >
            <ArrowLeft className="size-4" />
            All Products
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Clinical Prediction System
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Neuro-D-Forecast
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A passive monitoring system that analyzes cognitive and motor
                biomarkers captured from standard smartphone sensors. Generates
                probabilistic neurological risk forecasts expressed as posterior
                distributions with confidence intervals — designed for clinical
                decision support, not consumer wellness.
              </p>
              <Button asChild>
                <Link to="/contact">Request Technical Briefing</Link>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                  Core Approach
                </p>
                <p className="text-sm">
                  Bayesian inference over Hidden Markov Model states, updated
                  longitudinally with each monitoring session.
                </p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                  Hardware Required
                </p>
                <p className="text-sm">Standard iOS or Android smartphone. No wearables.</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                  Output Format
                </p>
                <p className="text-sm">
                  Posterior probability + 95% credible interval + longitudinal
                  trajectory. HL7 FHIR Observation export.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture — 4 Phases */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-12">
            System Architecture
          </p>
          <div className="space-y-0 divide-y divide-border">
            {phases.map((p) => (
              <div key={p.number} className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <span className="text-xs font-mono text-muted-foreground block mb-2">
                    {p.number}
                  </span>
                  <h3 className="text-base font-semibold uppercase tracking-wider text-muted-foreground">
                    {p.phase}
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold mb-4">{p.headline}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">{p.body}</p>
                  <div className="border border-border rounded-lg p-4 space-y-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                      Technical Parameters
                    </p>
                    {p.technical.map((t) => (
                      <div key={t} className="flex items-start gap-3">
                        <span className="text-muted-foreground mt-1">—</span>
                        <p className="text-sm text-muted-foreground">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Clinical Validation
          </p>
          <h2 className="text-2xl font-semibold tracking-tight mb-12">
            Benchmarked against clinician-adjudicated ground truth.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {validation.map((v) => (
              <div key={v.label} className="border border-border rounded-lg p-6">
                <p className="text-3xl font-semibold mb-2">{v.value}</p>
                <p className="text-xs font-semibold mb-1">{v.label}</p>
                <p className="text-xs text-muted-foreground">{v.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Deployment
              </p>
              <h2 className="text-2xl font-semibold tracking-tight mb-6">
                Designed for clinical integration, not standalone use.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Neuro-D-Forecast is deployed as a backend service, not a
                standalone application. The risk assessment pipeline integrates
                with existing clinical workflows via REST API and HL7 FHIR. A
                lightweight patient-facing mobile interface handles session
                collection. Clinician-facing outputs are delivered within the
                EHR or via a structured report endpoint.
              </p>
            </div>
            <div className="space-y-3">
              {[
                ["Patient interface", "iOS / Android app (white-label available)"],
                ["Clinician interface", "EHR integration via FHIR R4 or REST"],
                ["Data pipeline", "HIPAA-aligned, encrypted at rest and in transit"],
                ["Model updates", "Quarterly retraining against enrolled cohort"],
                ["Deployment model", "Cloud-hosted (tenant isolation) or on-premise"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-start justify-between py-3 border-b border-border last:border-0 gap-6"
                >
                  <p className="text-sm text-muted-foreground shrink-0">{k}</p>
                  <p className="text-sm text-right">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2">
                Evaluating Neuro-D-Forecast for your clinical environment?
              </h2>
              <p className="text-muted-foreground">
                We begin with a technical briefing — no sales process before we
                understand your use case.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button asChild>
                <Link to="/contact">Request Briefing</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/products">
                  All Products <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
