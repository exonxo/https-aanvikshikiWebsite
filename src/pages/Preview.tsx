import type React from "react";
import { FAQAccordionBlock } from "../../Components/FAQAccordionBlock";
import { AnimatedGradient } from "../../Components/AnimatedGradient";
import { HeroHighlight, Highlight } from "../../Components/HeroHighlight";
import { CTASection } from "../../Components/CTASection";
import { Gallery4 } from "../../Components/Gallery4";
import { About3 } from "../../Components/About3";
import { Features } from "../../Components/Features";
import { Feature } from "../../Components/Feature";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-4 border-b border-border">
      <div className="px-6 pt-8 pb-2">
        <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
          {title}
        </span>
      </div>
      {children}
    </section>
  );
}

export function Preview() {
  return (
    <div className="pt-16">
      <div className="px-6 py-8 border-b border-border">
        <h1 className="text-lg font-semibold">Component Preview</h1>
        <p className="text-xs text-muted-foreground mt-1">
          Paste new components → they appear here automatically
        </p>
      </div>

      <Section title="HeroHighlight">
        <HeroHighlight>
          <h1 className="text-3xl font-bold text-center text-white">
            Build something <Highlight>extraordinary</Highlight>
          </h1>
        </HeroHighlight>
      </Section>

      <Section title="AnimatedGradient">
        <div className="p-6">
          <div className="relative h-64 w-full rounded-xl overflow-hidden border border-border">
            <AnimatedGradient
              colors={["#6366f1", "#8b5cf6", "#ec4899", "#3b82f6"]}
              speed={3}
              blur="medium"
            />
            <div className="relative z-10 flex h-full items-center justify-center">
              <p className="text-white font-semibold text-lg">Animated Background</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="CTASection">
        <CTASection
          badge={{ text: "New release" }}
          title="Ready to get started?"
          description="Join thousands of teams already using our platform."
          action={{ text: "Get started free", href: "#", variant: "default" }}
        />
      </Section>

      <Section title="Feature (checklist)">
        <Feature />
      </Section>

      <Section title="Features (bento grid)">
        <Features />
      </Section>

      <Section title="Gallery4 (carousel)">
        <Gallery4 items={[]} />
      </Section>

      <Section title="About3">
        <About3 />
      </Section>

      <Section title="FAQAccordionBlock">
        <FAQAccordionBlock />
      </Section>
    </div>
  );
}
