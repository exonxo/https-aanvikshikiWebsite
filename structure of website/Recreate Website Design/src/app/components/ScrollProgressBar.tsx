import { useEffect, useRef, useCallback } from "react";

/**
 * Global scroll progress bar — always visible at the very top of the page.
 * Uses Aanvikshiki brand orange gradient. No React state on scroll — pure DOM.
 */
export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const updateProgress = useCallback(() => {
    const bar = barRef.current;
    if (!bar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;
    bar.style.transform = `scaleX(${progress})`;
  }, []);

  const onScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateProgress);
  }, [updateProgress]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [onScroll, updateProgress]);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9998] pointer-events-none"
      style={{ background: "rgba(255,255,255,0.04)" }}
    >
      <div
        ref={barRef}
        className="h-full origin-left"
        style={{
          background: "linear-gradient(90deg, #FF9937, #FE6A2E)",
          transform: "scaleX(0)",
          willChange: "transform",
          transition: "none",
        }}
      >
        {/* Glowing edge */}
        <div
          className="absolute right-0 top-[-3px] w-[10px] h-[10px] rounded-full"
          style={{
            background: "#FF9937",
            boxShadow: "0 0 12px 4px rgba(255,153,55,0.6)",
          }}
        />
      </div>
    </div>
  );
}
