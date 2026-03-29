import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, Activity, Database, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  category: string;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: "neuro-d-forecast",
    name: "Neuro-D-Forecast",
    category: "Clinical Prediction Intelligence",
    Icon: Brain,
    description:
      "Probabilistic neurological risk forecasts from standard smartphone sensors — no wearable required. Supports, not replaces, clinical judgment.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "easecare",
    name: "EaseCare",
    category: "Home Care Marketplace",
    Icon: Activity,
    description:
      "Request-first marketplace connecting Kolkata families with background-verified caretakers, house helpers, and elder care specialists. Post a request in under 5 seconds, negotiate directly, no hidden fees.",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "ai-infrastructure",
    name: "AI Infrastructure Systems",
    category: "Legacy Intelligence & Data Lineage",
    Icon: Database,
    description:
      "AI-driven analysis that maps undocumented code, dependencies, and data flows across legacy systems. 259 packages, 2,847 dependencies mapped in 4 days.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
  },
];

export function ProductsFeature() {
  const [activeId, setActiveId] = useState<string>(products[0].id);

  return (
    <div className="flex flex-col gap-6">
      <Tabs.Root value={activeId} onValueChange={setActiveId}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">

          {/* Tab list */}
          <Tabs.List
            aria-label="Products"
            className="flex flex-row md:flex-col gap-1 shrink-0 md:min-w-[220px] border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-6"
          >
            {products.map((product) => (
              <Tabs.Trigger
                key={product.id}
                value={product.id}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-left transition-colors cursor-pointer",
                  "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                  "data-[state=active]:text-foreground data-[state=active]:bg-secondary"
                )}
              >
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors",
                    activeId === product.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  <product.Icon className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium leading-snug whitespace-nowrap">
                  {product.name}
                </span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* Tab content — animated on switch */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {products
                .filter((p) => p.id === activeId)
                .map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col gap-4"
                  >
                    {/* Product image with caption overlay */}
                    <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                          {product.category}
                        </p>
                        <p className="mt-0.5 text-base font-semibold text-white">
                          {product.name}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

        </div>
      </Tabs.Root>

      {/* View all products link */}
      <Link
        to="/products"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline self-start"
      >
        View all products
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
