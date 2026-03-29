import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const contexts = [
  "Strategic Advisory",
  "AI Strategy",
  "Decision Frameworks",
  "General enquiry",
  "Other — I'll describe it",
];

// Replace FORMSPREE_FORM_ID with your actual Formspree form ID from formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORMSPREE_FORM_ID";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [service, setService] = useState("");
  const [challenge, setChallenge] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, organization: org, service, challenge }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Email us directly at contact@aanvikshiki.com");
      }
    } catch {
      setError("Something went wrong. Email us directly at contact@aanvikshiki.com");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="pt-16">
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl leading-tight">
            Start Thinking Differently.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Let's explore how structured thinking can transform your business.
            Describe what you're navigating — we'll respond with a clear
            assessment of how we can help, not a sales deck.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left: process */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                What to expect
              </p>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    label: "Initial response",
                    detail:
                      "We review your submission and respond within 2 business days with specific questions about the challenge you're navigating.",
                  },
                  {
                    step: "02",
                    label: "Structured conversation",
                    detail:
                      "A focused call to understand the problem, the context, and what a good outcome looks like. No presentations — just questions.",
                  },
                  {
                    step: "03",
                    label: "Clear assessment",
                    detail:
                      "We provide a written assessment of what we see, how we'd approach it, and what a realistic engagement looks like.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span className="text-xs font-mono text-muted-foreground mt-1 shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold mb-1">{item.label}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-10" />

              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Direct contact
                </p>
                <p className="text-sm text-muted-foreground">For time-sensitive enquiries:</p>
                <p className="text-sm mt-1">contact@aanvikshiki.com</p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-sm font-semibold mb-2">Received.</p>
                    <p className="text-sm text-muted-foreground">
                      We'll review your submission and respond within 2 business days.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        required
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        required
                        type="email"
                        placeholder="you@organization.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="org">Organization</Label>
                    <Input
                      id="org"
                      type="text"
                      placeholder="Where you work"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>What are you looking for?</Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service area" />
                      </SelectTrigger>
                      <SelectContent>
                        {contexts.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="challenge">Describe the challenge</Label>
                    <Textarea
                      id="challenge"
                      required
                      rows={6}
                      placeholder="What is the organization navigating? What decisions need to improve? What have you already tried?"
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}

                  <Button type="submit" className="w-full" disabled={submitting}>
                    {submitting ? "Sending…" : "Get in Touch"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respond to every submission within 2 business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
