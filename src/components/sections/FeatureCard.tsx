import { Link } from "react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface FeatureCardProps {
  name: string;
  category: string;
  description: string;
  href: string;
  Icon: LucideIcon;
}

export function FeatureCard({ name, category, description, href, Icon }: FeatureCardProps) {
  return (
    <Link to={href} className="group block h-full">
      <Card className="h-full transition-all hover:border-foreground/30 hover:bg-secondary/40 hover:shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-4">
            <Icon className="size-5 text-muted-foreground" strokeWidth={1.5} />
            <ArrowRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {category}
          </p>
          <CardTitle className="text-base">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="leading-relaxed text-sm">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
