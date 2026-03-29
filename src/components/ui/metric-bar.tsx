import { cn } from "@/lib/utils";

interface MetricBarProps {
  label: string;
  value: number;
  className?: string;
}

export function MetricBar({ label, value, className }: MetricBarProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{label}</span>
        <span className="font-mono">{value}%</span>
      </div>
      <div className="h-1 w-full bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
