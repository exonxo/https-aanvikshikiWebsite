import { Link } from "react-router";
import { cn } from "@/lib/utils";

const proofCards = [
  {
    figure: "25% faster",
    context: "average reduction in decision cycle time",
    source: "Aanvikshiki engagement data",
    colSpan: "lg:col-span-3 lg:row-span-2",
    tint: "bg-primary/[0.07]",
  },
  {
    figure: "260%",
    context: "improvement in AI initiative ROI",
    source: "Aanvikshiki engagement data",
    colSpan: "lg:col-span-3 lg:row-span-1",
    tint: "bg-primary/[0.05]",
  },
  {
    figure: "4 days",
    context: "to achieve strategic clarity on a legacy data infrastructure",
    source: "AI Infrastructure engagement — 2024",
    colSpan: "lg:col-span-2 lg:row-span-1",
    tint: "bg-primary/[0.04]",
  },
  {
    figure: "259 packages",
    context: "mapped across legacy SSIS infrastructure",
    source: "AI Infrastructure engagement — 2024",
    colSpan: "lg:col-span-4 lg:row-span-1",
    tint: "bg-primary/[0.06]",
  },
  {
    figure: "2,847",
    context: "dependencies analyzed and graphed",
    source: "AI Infrastructure engagement — 2024",
    colSpan: "lg:col-span-3 lg:row-span-1",
    tint: "bg-primary/[0.03]",
  },
];

export function BentoProof() {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 border-l-2 border-primary pl-3">
              Work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-primary to-[#0043CE] bg-clip-text text-transparent">
              Thinking in Practice.
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden md:inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            See case study →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-6">
          {proofCards.map(({ figure, context, source, colSpan, tint }) => (
            <div
              key={figure}
              className={cn(
                "border border-primary/10 rounded-lg p-8 flex flex-col justify-between gap-4",
                colSpan,
                tint
              )}
            >
              <div>
                <p className="text-[2.5rem] font-semibold leading-none text-primary mb-3">
                  {figure}
                </p>
                <p className="text-sm text-muted-foreground leading-snug">{context}</p>
              </div>
              <p className="text-xs text-muted-foreground/60 font-mono">{source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
