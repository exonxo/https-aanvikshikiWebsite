import { useState, useEffect, useCallback } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import svgPaths from "../../imports/svg-nhtnz5gik0";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-linked active state
  const updateActiveSection = useCallback(() => {
    if (location.pathname !== "/") return;
    const sections = ["hero", "solutions", "benefits", "easecare-section", "how-it-works", "faq", "contact"];
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
    }
    setActiveSection(current);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  const navLinks = [
    { label: "Solutions", href: "#solutions", id: "solutions", hasDropdown: true },
    { label: "Why us?", href: "#benefits", id: "benefits" },
    { label: "EaseCare", href: "#easecare-section", id: "easecare-section" },
    { label: "How We Work", href: "#how-it-works", id: "how-it-works" },
    { label: "FAQ", href: "#faq", id: "faq" },
  ];

  const isEasecareActive = activeSection === "easecare-section";

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 navbar-takeover relative ${
          scrolled
            ? "shadow-[0px_4px_24px_-4px_rgba(0,0,0,0.3)]"
            : ""
        }`}
        style={{
          backdropFilter: "var(--glass-blur)",
          WebkitBackdropFilter: "var(--glass-blur)",
          background: scrolled
            ? "rgba(10,10,10,0.85)"
            : "rgba(10,10,10,0.6)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "var(--glass-shadow), inset 0 1px 0 rgba(255,255,255,0.04)"
            : "none",
          transition: "background 1000ms cubic-bezier(0.4, 0, 0.2, 1), border-bottom-color 1000ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 600ms ease",
        }}
      >
        <div className="max-w-[1228px] mx-auto px-6 flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="h-[36px] w-[36px] relative shrink-0 nav-logo transition-all duration-500">
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48.0034 48">
                <path d={svgPaths.p1a54da80} fill="#F97316" />
              </svg>
            </div>
            <div className="flex items-center font-['Poppins:SemiBold',sans-serif] whitespace-nowrap" style={{ fontSize: 20 }}>
              <span className="text-white">aanvishiki</span>
              <span className="text-[#f97316]">.AI</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 transition-colors duration-200 relative"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    color: isActive
                      ? isEasecareActive ? "#06AED4" : "#FE6A2E"
                      : "#ccc",
                    transition: "color 600ms ease",
                  }}
                >
                  {item.label}
                  {item.hasDropdown && null}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{
                        background: isEasecareActive
                          ? "linear-gradient(90deg, #06AED4, #0ECFFF)"
                          : "linear-gradient(90deg, #FF9937, #FE6A2E)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 rounded-md hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 cursor-pointer">
              <Search size={16} className="text-[#ccc]" />
            </button>
            <a
              href="#contact"
              className="nav-cta-button px-4 py-2.5 rounded-md text-white flex items-center justify-center no-underline transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(254,106,46,0.2)]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                background: "linear-gradient(135deg, #FF9937, #FE6A2E)",
                boxShadow: "0px 0px 32px 0px rgba(198,95,57,0.15)",
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 cursor-pointer" onClick={() => setMobileOpen(true)}>
            <Menu size={24} className="text-white" />
          </button>
        </div>
        {/* Border sweep line */}
        <div className="navbar-border-sweep" />
      </nav>

      {/* Mobile Drawer — Liquid Glass */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden"
              style={{ backdropFilter: "blur(4px)" }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] z-50 lg:hidden"
              style={{
                background: "rgba(17,17,17,0.92)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow: "-8px 0 32px rgba(0,0,0,0.3), inset 1px 0 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Drawer header with brand logo */}
              <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.08)]">
                <Link to="/" className="flex items-center gap-2 no-underline" onClick={() => setMobileOpen(false)}>
                  <div className="h-[28px] w-[28px] relative shrink-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48.0034 48">
                      <path d={svgPaths.p1a54da80} fill="#F97316" />
                    </svg>
                  </div>
                  <div className="flex items-center font-['Poppins:SemiBold',sans-serif] whitespace-nowrap" style={{ fontSize: 16 }}>
                    <span className="text-white">aanvishiki</span>
                    <span className="text-[#f97316]">.AI</span>
                  </div>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="cursor-pointer p-1 rounded-md hover:bg-[rgba(255,255,255,0.06)] transition-colors">
                  <X size={22} className="text-white" />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-1">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="py-3 px-4 rounded-lg text-[#ccc] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 no-underline"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 16 }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.08)]">
                  <a
                    href="#contact"
                    className="block w-full text-center px-6 py-3 rounded-md text-white no-underline transition-all duration-200 hover:shadow-[0_0_20px_rgba(254,106,46,0.3)]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, background: "linear-gradient(135deg, #FF9937, #FE6A2E)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}