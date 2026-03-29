import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface HeroMetric {
  value: string;
  label: string;
}

interface HeroProps {
  eyebrow: string;
  headline: React.ReactNode;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  metrics: HeroMetric[];
  image: { src: string; alt: string };
}

export function Hero({
  eyebrow,
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  metrics,
  image,
}: HeroProps) {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
              {eyebrow}
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8 max-w-xl">
              {headline}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-10">
              {subtext}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button asChild size="lg">
                <Link to={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to={secondaryCta.href}>
                  {secondaryCta.label} <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>

            <Separator className="mb-8" />

            <div className="grid grid-cols-3 gap-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-semibold tracking-tight">{m.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover rounded-lg border border-border"
              style={{ aspectRatio: "4/3" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
