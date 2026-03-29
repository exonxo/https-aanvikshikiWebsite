import { Link } from "react-router";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatButton } from "antd";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/approach" },
  ],
  Work: [
    { label: "Case Studies", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Products", href: "/products" },
  ],
};

export function Footer() {
  return (
    <>
      <footer className="border-t border-border relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #ffffff 0%, #EEF4FF 100%)" }}>

        {/* ── Oversized wordmark anchor ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden leading-none select-none"
        >
          <span className="text-[18vw] font-semibold tracking-tight text-primary/[0.06] whitespace-nowrap translate-y-[15%]">
            Aanvikshiki
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">

          {/* ── Main grid ── */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">

            {/* Brand + social */}
            <div className="col-span-2 md:col-span-2">
              <Link to="/" className="text-base font-semibold tracking-tight">
                Aanvikshiki
              </Link>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[220px] mb-6">
                Intelligence Amplified. Ethics Applied.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2 mb-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center size-8 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Linkedin className="size-3.5" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="flex items-center justify-center size-8 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Twitter className="size-3.5" />
                </a>
              </div>

              {/* Email CTA */}
              <Button asChild variant="outline" size="sm">
                <a href="mailto:contact@aanvikshiki.com">
                  <Mail className="mr-2 size-3.5" />
                  contact@aanvikshiki.com
                </a>
              </Button>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  {category}
                </p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Bottom bar — two zones ── */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-border gap-3">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Aanvikshiki. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground italic hidden md:block">
              Rooted in ancient inquiry. Built for modern complexity.
            </p>
          </div>

        </div>
      </footer>
      <FloatButton.BackTop type="primary" style={{ bottom: 24, right: 24 }} />
    </>
  );
}
