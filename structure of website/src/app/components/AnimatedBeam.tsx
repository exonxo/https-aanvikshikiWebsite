import { useEffect, useRef, useState, type RefObject } from "react";

interface AnimatedBeamProps {
  containerRef: RefObject<HTMLDivElement | null>;
  fromRef: RefObject<HTMLDivElement | null>;
  toRef: RefObject<HTMLDivElement | null>;
  curvature?: number;
  endYOffset?: number;
  startYOffset?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  gradientStartColor?: string;
  gradientStopColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  endYOffset = 0,
  startYOffset = 0,
  reverse = false,
  duration = 2,
  delay = 0,
  pathColor = "rgba(42,42,42,0.4)",
  gradientStartColor = "#FF9937",
  gradientStopColor = "#FE6A2E",
  pathWidth = 2,
  pathOpacity = 0.5,
}: AnimatedBeamProps) {
  const [pathD, setPathD] = useState("");
  const [svgDims, setSvgDims] = useState({ width: 0, height: 0 });
  const beamRef = useRef<SVGPathElement>(null);
  const animId = useRef(
    `beam-grad-${Math.random().toString(36).slice(2, 9)}`
  );

  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const cr = containerRef.current.getBoundingClientRect();
      const fr = fromRef.current.getBoundingClientRect();
      const tr = toRef.current.getBoundingClientRect();

      setSvgDims({ width: cr.width, height: cr.height });

      const x1 = fr.left - cr.left + fr.width / 2;
      const y1 = fr.top - cr.top + fr.height / 2 + startYOffset;
      const x2 = tr.left - cr.left + tr.width / 2;
      const y2 = tr.top - cr.top + tr.height / 2 + endYOffset;

      const midX = (x1 + x2) / 2;
      const cy1 = y1 - curvature;
      const cy2 = y2 + curvature;

      setPathD(`M ${x1},${y1} C ${midX},${cy1} ${midX},${cy2} ${x2},${y2}`);
    };

    // Slight delay to let layout settle
    const timer = setTimeout(update, 50);

    const observer = new ResizeObserver(update);
    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener("resize", update);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [containerRef, fromRef, toRef, curvature, endYOffset, startYOffset]);

  if (!pathD) return null;

  // CSS keyframes name unique to this beam
  const animName = `beam-dash-${animId.current}`;

  return (
    <svg
      className="pointer-events-none absolute inset-0"
      width={svgDims.width}
      height={svgDims.height}
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient
          id={animId.current}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="30%" stopColor={gradientStopColor} stopOpacity="0.9" />
          <stop offset="70%" stopColor={gradientStopColor} stopOpacity="0.9" />
          <stop offset="100%" stopColor={gradientStartColor} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Static base path */}
      <path
        d={pathD}
        fill="none"
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />

      {/* Animated beam traveling along the path */}
      <path
        ref={beamRef}
        d={pathD}
        fill="none"
        stroke={`url(#${animId.current})`}
        strokeWidth={pathWidth}
        strokeLinecap="round"
        strokeDasharray="60 500"
        style={{
          animation: `${animName} ${duration}s linear ${delay}s infinite${reverse ? " reverse" : ""}`,
        }}
      />

      <style>{`
        @keyframes ${animName} {
          0% { stroke-dashoffset: 560; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
}
