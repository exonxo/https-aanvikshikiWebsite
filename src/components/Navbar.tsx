import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
];

export function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
      setMenuOpen(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderBottom: "1px solid #f3f4f6",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Main bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">
        <Link
          to="/"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "17px",
            fontWeight: 600,
            color: "#111827",
            textDecoration: "none",
          }}
        >
          Aanvikshiki
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center" style={{ gap: "32px" }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#111827" : "#6b7280",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center" style={{ gap: "16px" }}>
          {/* Desktop CTA button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              backgroundColor: "#1A1A1A",
            }}
          >
            Get in Touch
          </Link>

          {/* Hamburger toggle */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#111827",
              padding: "4px",
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid #f3f4f6",
            padding: "8px 24px 24px",
            backgroundColor: "rgba(255, 255, 255, 0.99)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#111827" : "#374151",
                  textDecoration: "none",
                  display: "block",
                  padding: "14px 0",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center rounded-full text-sm font-medium text-white transition-colors"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              backgroundColor: "#1A1A1A",
              padding: "12px 24px",
              textDecoration: "none",
              marginTop: "16px",
            }}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </motion.header>
  );
}
