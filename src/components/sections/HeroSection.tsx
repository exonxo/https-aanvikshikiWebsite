import { Link } from "react-router";
import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-border overflow-hidden">

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* Dark overlay */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-foreground/60" />

      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">

          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Link
              to="/contact"
              className={cn(
                "group inline-flex items-center gap-3 rounded-sm border border-white/20 bg-white/10 px-1 py-1",
                "hover:border-white/40 transition-colors duration-200"
              )}
            >
              <div className="rounded-sm border border-white/20 bg-white/10 px-1.5 py-0.5">
                <p className="font-mono text-[10px] font-medium tracking-widest text-white">
                  NOW
                </p>
              </div>
              <span className="text-xs text-white/70 pr-1">
                Accepting select projects
              </span>
              <span className="h-4 border-l border-white/20" />
              <ArrowRight className="size-3 text-white/70 mr-1.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white mt-6"
          >
            AI Systems That Actually Drive Business Decisions.
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            className="text-lg text-white/70 max-w-lg leading-relaxed mt-6"
          >
            Strategic consulting and AI systems for organisations that need
            clarity, not another dashboard.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.30, ease: "easeOut" }}
            className="flex flex-wrap gap-3 pt-1 mt-6"
          >
            <Button asChild size="lg">
              <Link to="/contact">
                <MessageSquare className="mr-2 size-4" />
                Talk to Us
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                Explore Capabilities
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Single attributed metric */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/70"
          >
            <span className="font-mono text-white font-semibold">259 packages.</span>
            <span>2,847 dependencies mapped in 4 days.</span>
            <span className="text-white/40">— AI Infrastructure engagement, 2024</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
