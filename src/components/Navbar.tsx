import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "EASE", href: "/ease" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
];

export function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #F3F4F6" }}>
      {/* Main bar */}
      <div className="flex items-center justify-between px-6 py-5 md:px-6 md:py-6">
        <Link
          to="/"
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: "16px",
            fontWeight: 600,
            color: "#1A1A1A",
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
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#FF5C00" : "#666666",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center" style={{ gap: "12px" }}>
          {/* Desktop contact button */}
          <Link
            to="/contact"
            className="hidden md:inline-block"
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#FF5C00",
              borderRadius: "9999px",
              padding: "10px 20px",
              textDecoration: "none",
            }}
          >
            Contact
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
              color: "#1A1A1A",
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
          style={{ borderTop: "1px solid #F3F4F6", padding: "8px 24px 24px" }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#FF5C00" : "#1A1A1A",
                  textDecoration: "none",
                  display: "block",
                  padding: "14px 0",
                  borderBottom: "1px solid #F3F4F6",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#FF5C00",
              borderRadius: "9999px",
              padding: "12px 24px",
              textDecoration: "none",
              display: "block",
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
