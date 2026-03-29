import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapse } from "antd";

const faqs = [
  {
    question: "What is Aanvikshiki and what makes your approach unique?",
    answer:
      "Aanvikshiki is rooted in Ānvīkṣikī — the ancient Indian science of rigorous inquiry. We apply structured thinking before strategy, strategy before AI, and AI before execution. Most organizations invert this order and wonder why their AI initiatives fail. Our differentiator is not a tool or a methodology — it is a discipline: the commitment to understand a problem deeply before attempting to solve it.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Our primary focus is healthcare, research institutions, and mission-driven enterprises — anywhere where the cost of a poor decision is high and the complexity of the environment is significant. We have worked on clinical prediction systems, legacy data infrastructure, AI strategy in regulated industries, and research commercialization. The discipline is the same regardless of sector.",
  },
  {
    question: "How does Human-in-the-Loop AI work in practice?",
    answer:
      "Human-in-the-Loop (HITL) is not a feature — it is a design principle. In every AI system we build or advise on, we define the specific points where human judgment must be present: review checkpoints, escalation triggers, override mechanisms, and feedback loops. The AI handles volume and pattern recognition. The human handles context, ethics, and edge cases. The 10% of human involvement we design for is what makes the other 90% trustworthy.",
  },
  {
    question: "What is Project EASE?",
    answer:
      "Project EASE — Empowering Action for Societal Evolution — is Aanvikshiki's commitment to bringing structured AI capabilities to underserved communities. We apply the same OASA framework to social impact work as to enterprise engagements. Current focus areas include healthcare access, educational intelligence, and resource allocation for NGOs and social enterprises. If you represent an organization doing this kind of work, we want to hear from you.",
  },
  {
    question: "How do you approach ethical AI governance?",
    answer:
      "Ethics is embedded at the Synthesize phase of every engagement — not added as a compliance checklist at the end. Practically, this means bias auditing during model design, explainability requirements in system architecture, regulatory alignment (EU AI Act, NIST AI RMF) built into deployment plans, and governance board structures that give humans meaningful oversight. We believe transparent AI is not just ethical — it is strategically superior.",
  },
  {
    question: "What results can we expect?",
    answer:
      "Clients working through a full Engagement see an average of 25% faster decision cycles within three months of framework activation. Organizations that deploy AI strategy before AI technology report materially better outcomes than those that reverse the order — in our engagements, this has translated to 260% improvement in AI initiative ROI. The SSIS infrastructure engagement achieved strategic clarity on a 259-package legacy system in 4 days. Results depend on complexity and organizational readiness, but the direction is consistent: structured thinking produces measurably better outcomes.",
  },
];

const items = faqs.map((faq, i) => ({
  key: String(i),
  label: <span className="text-base font-medium">{faq.question}</span>,
  children: <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>,
}));

export function FAQ() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl leading-tight">
            Questions, Answered.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            The questions we hear most often — about who we are, how we work, and what you
            can expect from an engagement with Aanvikshiki.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Collapse
            items={items}
            accordion
            ghost
            className="divide-y divide-border"
            expandIcon={({ isActive }) => (
              <ChevronDown
                className={cn(
                  "size-4 text-muted-foreground transition-transform duration-200",
                  isActive && "rotate-180"
                )}
              />
            )}
          />
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Still curious?
          </p>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Still have questions? Start a conversation.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            We'll ask the right questions before proposing anything. No pitch decks, no
            obligation.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
