import { SectionLabel } from "./SectionLabel";
import { motion } from "motion/react";
import { Link2, BarChart2, FileText, Cog, Globe, Lock } from "lucide-react";
import { MagicCard } from "./MagicCard";

const GradientIconLarge = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative rounded-full shrink-0 size-[60px] flex items-center justify-center border border-[#2a2a2a]"
    style={{
      background: "radial-gradient(ellipse at center, rgba(30,28,25,1) 0%, rgba(20,20,20,1) 100%)",
    }}
  >
    {children}
  </div>
);

const features = [
  {
    icon: Link2,
    title: "Seamless Integration",
    description: "Unite your tools and workflows for cohesive AI-powered operations.",
  },
  {
    icon: BarChart2,
    title: "Advanced Reporting",
    description: "Reports customized to your metrics for data-driven decisions.",
  },
  {
    icon: FileText,
    title: "Research Commercialization",
    description: "Transform academic innovations into market-ready products.",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Simply automate follow-ups and workflows to drive results.",
  },
  {
    icon: Globe,
    title: "Care Coordination",
    description: "AI-powered tools bridging gaps between caregivers and communities.",
  },
  {
    icon: Lock,
    title: "Ethical Governance",
    description: "Transparent AI governance guided by timeless ethical principles.",
  },
];

export function UsefulFeatures() {
  return (
    null
  );
}
