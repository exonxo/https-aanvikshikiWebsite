import { useState } from "react";
import { Link } from "react-router";
import {
  Menu as MenuIcon,
  Brain,
  Activity,
  Database,
  Lightbulb,
  GitBranch,
  LayoutGrid,
  Target,
  Share2,
  Rocket,
  Scale,
  Users,
  ChevronDown,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "antd";
import { cn } from "@/lib/utils";

/* ── Menu data ── */

const ventureItems = [
  {
    title: "Neuro-D-Forecast",
    description: "Probabilistic neurological risk signals from smartphone sensor data.",
    href: "/products#neuro-d-forecast",
    Icon: Brain,
  },
  {
    title: "EaseCare",
    description: "Clinical intelligence platform for care pathway recommendations.",
    href: "/products#easecare",
    Icon: Activity,
  },
];

const approachItems = [
  {
    title: "Philosophy",
    description: "The ancient discipline of inquiry that underpins everything we do.",
    href: "/about",
    Icon: Lightbulb,
  },
  {
    title: "Methodology",
    description: "Observe, Analyze, Synthesize, Act — our four-phase engagement model.",
    href: "/approach",
    Icon: GitBranch,
  },
  {
    title: "Frameworks",
    description: "Structured decision systems built for consistent, high-quality outcomes.",
    href: "/approach#frameworks",
    Icon: LayoutGrid,
  },
];

const capabilityItems = [
  {
    title: "Strategic Advisory",
    description: "Define direction and clarity in complex, uncertain environments.",
    href: "/services#strategic-advisory",
    Icon: Target,
  },
  {
    title: "AI Strategy",
    description: "Translate AI capabilities into genuine business advantage.",
    href: "/services#ai-strategy",
    Icon: Brain,
  },
  {
    title: "AI Infrastructure Systems",
    description: "AI-driven legacy dependency mapping and migration architecture.",
    href: "/products#ai-infrastructure",
    Icon: Database,
  },
  {
    title: "Systems Thinking",
    description: "Map the interdependencies that drive real organizational change.",
    href: "/services#systems-thinking",
    Icon: Share2,
  },
  {
    title: "Research to Product",
    description: "From validated research to deployed, market-ready AI systems.",
    href: "/services#research-to-product",
    Icon: Rocket,
  },
  {
    title: "Ethical AI Governance",
    description: "Accountability, transparency, and regulatory alignment built in from day one.",
    href: "/services#ethical-ai-governance",
    Icon: Scale,
  },
];

/* ── Submenu label with icon ── */

function SubMenuLabel({
  item,
}: {
  item: { title: string; description: string; href: string; Icon: React.ComponentType<{ className?: string }> };
}) {
  return (
    <Link
      to={item.href}
      className="flex items-start gap-3 py-1 no-underline text-inherit hover:text-inherit"
    >
      <item.Icon className="size-4 mt-0.5 shrink-0 text-primary" />
      <div>
        <p className="text-sm font-semibold leading-none mb-1">{item.title}</p>
        <p className="text-xs leading-snug text-gray-400">{item.description}</p>
      </div>
    </Link>
  );
}

/* ── Desktop antd Menu items ── */

const desktopMenuItems = [
  {
    key: "ventures",
    label: "Ventures",
    children: ventureItems.map((item) => ({
      key: item.href,
      label: <SubMenuLabel item={item} />,
    })),
  },
  {
    key: "approach",
    label: "Approach",
    children: approachItems.map((item) => ({
      key: item.href,
      label: <SubMenuLabel item={item} />,
    })),
  },
  {
    key: "capabilities",
    label: "Services",
    children: capabilityItems.map((item) => ({
      key: item.href,
      label: <SubMenuLabel item={item} />,
    })),
  },
  {
    key: "/insights",
    label: <Link to="/insights" className="no-underline text-inherit">Insights</Link>,
  },
  {
    key: "/about",
    label: <Link to="/about" className="no-underline text-inherit">About</Link>,
  },
  {
    key: "/team",
    label: <Link to="/team" className="no-underline text-inherit">Team</Link>,
  },
  {
    key: "/pricing",
    label: <Link to="/pricing" className="no-underline text-inherit">Pricing</Link>,
  },
  {
    key: "/ease",
    label: <Link to="/ease" className="no-underline text-inherit">EASE</Link>,
  },
];

/* ── Mobile nav groups ── */

interface MobileNavGroup {
  label: string;
  items: { title: string; description: string; href: string; Icon: React.ComponentType<{ className?: string }> }[];
}

const mobileNavGroups: MobileNavGroup[] = [
  { label: "Ventures", items: ventureItems },
  { label: "Approach", items: approachItems },
  { label: "Services", items: capabilityItems },
];

const mobileDirectLinks = [
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Pricing", href: "/pricing" },
  { label: "EASE", href: "/ease" },
  { label: "FAQ", href: "/faq" },
];

/* ── Main Navbar ── */

export function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  function toggleGroup(label: string) {
    setOpenGroups((prev) =>
      prev.includes(label) ? prev.filter((g) => g !== label) : [...prev, label]
    );
  }

  function closeSheet() {
    setSheetOpen(false);
    setOpenGroups([]);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-base font-semibold tracking-tight shrink-0">
          Aanvikshiki
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center flex-1 px-4">
          <Menu
            mode="horizontal"
            items={desktopMenuItems}
            selectedKeys={[]}
            style={{
              background: "transparent",
              border: "none",
              lineHeight: "64px",
              flex: 1,
            }}
          />
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Button asChild size="sm">
            <Link to="/contact">Talk to Us</Link>
          </Button>
        </div>

        {/* Mobile: sheet trigger */}
        <div className="flex lg:hidden items-center gap-1">
          <button
            type="button"
            aria-label="Open menu"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            onClick={() => setSheetOpen(true)}
          >
            <MenuIcon className="size-5" />
          </button>

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetContent
              className="inset-y-0 left-0 right-auto w-72 translate-x-0 data-[state=closed]:-translate-x-full border-l-0 border-r border-border p-0"
              aria-describedby={undefined}
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>

              {/* Header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-border">
                <Link
                  to="/"
                  className="text-base font-semibold tracking-tight"
                  onClick={closeSheet}
                >
                  Aanvikshiki
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                  onClick={closeSheet}
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Nav content */}
              <div className="overflow-y-auto py-4">
                {/* Grouped items */}
                {mobileNavGroups.map((group) => (
                  <div key={group.label}>
                    <button
                      type="button"
                      onClick={() => toggleGroup(group.label)}
                      className="flex items-center justify-between w-full px-5 py-2.5 text-sm font-semibold hover:bg-secondary/50 transition-colors"
                    >
                      {group.label}
                      <ChevronDown
                        className={cn(
                          "size-4 text-muted-foreground transition-transform duration-200",
                          openGroups.includes(group.label) && "rotate-180"
                        )}
                      />
                    </button>
                    {openGroups.includes(group.label) && (
                      <div className="py-1 bg-secondary/20">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={closeSheet}
                            className="flex items-start gap-3 px-5 py-2.5 hover:bg-secondary/50 transition-colors"
                          >
                            <item.Icon className="size-4 mt-0.5 shrink-0 text-primary" />
                            <div>
                              <p className="text-sm font-medium leading-none mb-0.5">{item.title}</p>
                              <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Divider */}
                <div className="my-3 border-t border-border" />

                {/* Direct links */}
                {mobileDirectLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeSheet}
                    className="flex items-center px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* CTA */}
                <div className="px-5 pt-4 mt-2 border-t border-border">
                  <Button asChild className="w-full">
                    <Link to="/contact" onClick={closeSheet}>
                      Talk to Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
