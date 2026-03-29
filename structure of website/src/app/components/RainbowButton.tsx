import type { ReactNode, CSSProperties } from "react";

interface RainbowButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  href?: string;
  onClick?: () => void;
}

export function RainbowButton({
  children,
  className = "",
  style,
  href,
  onClick,
}: RainbowButtonProps) {
  const Tag = href ? "a" : "button";

  return (
    null
  );
}
