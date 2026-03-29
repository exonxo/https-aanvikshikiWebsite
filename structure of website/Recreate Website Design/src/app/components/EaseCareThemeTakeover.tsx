import { useEffect, useRef, useMemo, useCallback } from "react";

// Generate particle configs once outside render
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 3 + Math.random() * 4,
    left: `${5 + Math.random() * 90}%`,
    bottom: `${-5 - Math.random() * 10}%`,
    duration: `${8 + Math.random() * 12}s`,
    delay: `${Math.random() * 8}s`,
  }));
}

// Gentle warm chime — two soft sine tones forming a soothing major third
// Evokes warmth, trust, and care — matching the EaseCare brand
function playChime() {
  try {
    // Respect reduced motion preference (no audio surprises)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = new AudioContext();
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, now);
    masterGain.connect(ctx.destination);

    // Helper: create a single gentle bell tone
    const makeTone = (freq: number, start: number, dur: number, vol: number) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;

      const g = ctx.createGain();
      g.gain.setValueAtTime(0, now + start);
      g.gain.linearRampToValueAtTime(vol, now + start + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, now + start + dur);

      osc.connect(g);
      g.connect(masterGain);
      osc.start(now + start);
      osc.stop(now + start + dur);
    };

    // Fade master in softly
    masterGain.gain.linearRampToValueAtTime(1, now + 0.02);

    // Two-note ascending chime (C5 → E5 major third) — warm & reassuring
    makeTone(523.25, 0, 1.2, 0.045);     // C5 — root
    makeTone(659.25, 0.12, 1.0, 0.035);  // E5 — major third, slightly delayed
    // Soft octave shimmer for depth
    makeTone(1046.5, 0.06, 0.7, 0.015);  // C6 — gentle overtone

    // Graceful master fade-out
    masterGain.gain.setValueAtTime(1, now + 0.8);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

    // Cleanup
    setTimeout(() => ctx.close(), 1600);
  } catch {
    // Silently fail if AudioContext unavailable
  }
}

export function EaseCareThemeTakeover() {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const isActiveRef = useRef(false);
  const rafRef = useRef<number>(0);
  const hasInteractedRef = useRef(false);
  const particles = useMemo(() => generateParticles(14), []);

  // Smooth scroll-driven progress using rAF — no React state, no re-renders
  const updateProgress = useCallback(() => {
    const section = document.getElementById("easecare-section");
    const bar = progressBarRef.current;
    if (!section || !bar) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const totalTravel = sectionHeight + viewportHeight;
    const traveled = viewportHeight - rect.top;
    const progress = Math.max(0, Math.min(1, traveled / totalTravel));

    bar.style.width = `${progress * 100}%`;

    // Robust fallback: also check visibility on every scroll frame
    // This catches cases where IntersectionObserver misses a threshold
    const sectionBottom = rect.top + sectionHeight;
    const isVisible = rect.top < viewportHeight && sectionBottom > 0;
    const overlapTop = Math.max(rect.top, 0);
    const overlapBottom = Math.min(sectionBottom, viewportHeight);
    const overlapRatio = isVisible ? (overlapBottom - overlapTop) / sectionHeight : 0;
    const shouldBeActive = isVisible && overlapRatio >= 0.12;

    if (shouldBeActive !== isActiveRef.current) {
      isActiveRef.current = shouldBeActive;
      document.body.classList.toggle("easecare-active", shouldBeActive);
      if (shouldBeActive && hasInteractedRef.current) {
        playChime();
      }
    }
  }, []);

  const onScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateProgress);
  }, [updateProgress]);

  // IntersectionObserver — use multiple thresholds for smoother toggling
  useEffect(() => {
    const section = document.getElementById("easecare-section");
    if (!section) return;

    // Track user interaction so we don't play sound on page load
    const markInteracted = () => {
      hasInteractedRef.current = true;
      window.removeEventListener("scroll", markInteracted);
    };
    window.addEventListener("scroll", markInteracted, { passive: true, once: false });

    const observer = new IntersectionObserver(
      ([entry]) => {
        const active = entry.isIntersecting && entry.intersectionRatio >= 0.12;
        if (active === isActiveRef.current) return;
        isActiveRef.current = active;
        document.body.classList.toggle("easecare-active", active);
        if (active && hasInteractedRef.current) {
          playChime();
        }
      },
      { threshold: [0, 0.05, 0.1, 0.12, 0.15, 0.2, 0.3, 0.5] }
    );

    observer.observe(section);

    // Attach scroll for progress bar (passive, rAF-throttled)
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", markInteracted);
      cancelAnimationFrame(rafRef.current);
      document.body.classList.remove("easecare-active");
    };
  }, [onScroll]);

  return (
    <>
      {/* Ambient breathing orb */}
      <div className="easecare-ambient-orb" />

      {/* Bioluminescent particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="easecare-particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: p.bottom,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* EaseCare section scroll progress bar */}
      <div ref={progressBarRef} className="easecare-progress-bar" style={{ width: "0%" }}>
        <div className="easecare-progress-glow" />
      </div>
    </>
  );
}
