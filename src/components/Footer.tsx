import { Link } from "react-router";

const serviceLinks = [
  { label: "Strategic Advisory", href: "/services" },
  { label: "AI Strategy", href: "/services" },
];

export function Footer() {
  return (
    <footer
      className="flex flex-col px-6 py-16 md:px-20 md:py-20"
      style={{ backgroundColor: "#121212", gap: "40px" }}
    >
      {/* Top row */}
      <div className="flex flex-col gap-8 md:flex-row md:gap-20 md:items-start">
        {/* Left: branding */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
          >
            Aanvikshiki
          </div>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "13px",
              color: "#666666",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Structured thinking. Applied AI.
          </p>
        </div>

        {/* Right: services column */}
        <div>
          <p
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "12px",
              color: "#888888",
              fontWeight: 600,
              letterSpacing: "1px",
              marginBottom: "12px",
            }}
          >
            Services
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "13px",
                    color: "#888888",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #333333",
          paddingTop: "16px",
        }}
      >
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "12px",
            color: "#888888",
            margin: 0,
          }}
        >
          © 2026 Aanvikshiki. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
