import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Tag } from "antd";

const { CheckableTag } = Tag;

const FILTER_TAGS = ["All", "AI Strategy", "Strategic Thinking", "Ethical Decision-Making", "Decision Frameworks"] as const;
type FilterTag = (typeof FILTER_TAGS)[number];

const categoryTagColor: Record<string, string> = {
  "AI Strategy": "purple",
  "Strategic Thinking": "geekblue",
  "Ethical Decision-Making": "volcano",
  "Decision Frameworks": "cyan",
};

const articles = [
  {
    category: "AI Strategy",
    title: "Why AI Strategy Must Precede AI Deployment",
    summary:
      "Organizations that deploy AI before defining the decisions they are trying to improve consistently underperform those that reverse the order. The question is not what AI can do — it is what judgment it is meant to amplify.",
    readTime: "7 min",
    date: "February 2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
  },
  {
    category: "Strategic Thinking",
    title: "The Strategic Cost of Undocumented Complexity",
    summary:
      "When organizations cannot see what they have built, they cannot make good decisions about where to go. Undocumented systems are not just a technical liability — they are a strategic one. Leaders cannot reason well about things they cannot see.",
    readTime: "9 min",
    date: "January 2025",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
  },
  {
    category: "Ethical Decision-Making",
    title: "Uncertainty Is Not the Enemy of Good Decisions",
    summary:
      "The goal of ethical decision-making is not to eliminate uncertainty — it is to reason honestly within it. A clinical AI system that reports a risk score without a confidence interval is not being precise. It is hiding its own limitations.",
    readTime: "6 min",
    date: "December 2024",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop&q=80",
  },
  {
    category: "Decision Frameworks",
    title: "Structure Is Not the Opposite of Judgment — It Is Its Precondition",
    summary:
      "Structured decision-making is often resisted as mechanistic. The opposite is true. Without structure, individual decisions are made in isolation, without the benefit of accumulated organizational thinking. Structure is what makes judgment transferable.",
    readTime: "8 min",
    date: "November 2024",
    image:
      "https://images.unsplash.com/photo-1504639725590-b7f46b33c99b?w=600&auto=format&fit=crop&q=80",
  },
];

export function Insights() {
  const [selectedTag, setSelectedTag] = useState<FilterTag>("All");

  const filteredArticles =
    selectedTag === "All"
      ? articles
      : articles.filter((a) => a.category === selectedTag);

  return (
    <main className="pt-16">
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl leading-tight">
            Ideas That Shape Decisions.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Explore perspectives on strategy, AI, and thinking systems. Written
            for leaders who are trying to think more clearly about complex
            problems — not for audiences looking for validation of decisions
            already made.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-2">
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_TAGS.map((tag) => (
              <CheckableTag
                key={tag}
                checked={selectedTag === tag}
                onChange={() => setSelectedTag(tag)}
                style={
                  selectedTag === tag
                    ? { backgroundColor: "#6366f1", borderColor: "#6366f1", color: "#fff" }
                    : undefined
                }
              >
                {tag}
              </CheckableTag>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="divide-y divide-border">
            {filteredArticles.map((a, i) => (
              <article key={i} className="py-10 group cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
                  <div className="overflow-hidden rounded-lg border border-border shrink-0">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: "4/3" }}
                    />
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Tag color={categoryTagColor[a.category] ?? "default"}>
                          {a.category}
                        </Tag>
                        <span className="text-xs text-muted-foreground">{a.date}</span>
                        <span className="text-xs text-muted-foreground">{a.readTime} read</span>
                      </div>
                      <h2 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-muted-foreground transition-colors">
                        {a.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-sm">{a.summary}</p>
                    </div>
                    <ArrowRight className="size-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <p className="py-20 text-center text-muted-foreground text-sm">
              No insights found for this category yet.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
