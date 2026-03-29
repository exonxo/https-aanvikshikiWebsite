import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Client Results
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Real results, documented properly.
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          We're preparing full case studies with client attribution. In the meantime — ask us
          directly.
        </p>
        <Button asChild variant="outline">
          <Link to="/contact">Talk to Us</Link>
        </Button>
      </div>
    </section>
  );
}
