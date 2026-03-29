import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Smooth cursor — a small orange-gradient circle that trails the real cursor
 * with spring physics. Hidden on touch devices and when reduced motion is preferred.
 */
export function SmoothCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  // Don't render on touch devices (SSR-safe check via CSS)
  return (
    <>
      {/* Outer glow ring */}
      
      {/* Inner dot */}
      
    </>
  );
}
