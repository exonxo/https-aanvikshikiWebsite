import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { TextRotate } from "./ui/text-rotate";
import svgPaths from "../../imports/svg-nhtnz5gik0";

interface LoadingScreenProps {
  onFinish: () => void;
  duration?: number;
}

export function LoadingScreen({ onFinish, duration = 4000 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          {/* Brand Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="h-[48px] w-[48px] relative">
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48.0034 48">
                <path d={svgPaths.p1a54da80} fill="#F97316" />
              </svg>
            </div>
          </motion.div>

          {/* Text Rotator */}
          <div
            className="w-full text-2xl sm:text-3xl md:text-5xl flex flex-row items-center justify-center overflow-hidden px-12 sm:px-20 md:px-24"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <LayoutGroup>
              <motion.div className="flex whitespace-pre" layout>
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2 text-white"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  Make it{" "}
                </motion.span>
                <TextRotate
                  texts={[
                    "work!",
                    "fancy *",
                    "right",
                    "fast",
                    "fun",
                    "rock",
                  ]}
                  mainClassName="text-white px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  style={{
                    background: "linear-gradient(135deg, #FF9937, #FE6A2E)",
                  }}
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-120%" }}
                  animatePresenceInitial={true}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={400}
                />
              </motion.div>
            </LayoutGroup>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
