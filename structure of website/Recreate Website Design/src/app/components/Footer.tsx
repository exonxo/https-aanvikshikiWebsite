import svgPaths from "../../imports/svg-nhtnz5gik0";
import { EaseCareLogo } from "./EaseCareLogo";
import { Link } from "react-router";

export function Footer() {
  const columns = [
    {
      title: "Solutions",
      links: [
        { label: "Data Engineering", href: "#" },
        { label: "Medical AI", href: "#" },
        { label: "Research to Product", href: "#" },
        { label: "Small Business Growth", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Mission", href: "#" },
        { label: "Impact", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Project EASE",
      links: [
        { label: "CareGivers Platform", href: "#" },
        { label: "Community Impact", href: "#" },
        { label: "Research", href: "#" },
        { label: "Partners", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "AI Ethics", href: "#" },
        { label: "Accessibility", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] px-6 pt-[60px] pb-[24px]">
      <div className="max-w-[1228px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Brand */}
          <div className="lg:w-[280px] shrink-0">
            <Link to="/" className="flex items-center gap-2 mb-4 no-underline">
              <div className="h-[36px] w-[36px] relative shrink-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48.0034 48">
                  <path d={svgPaths.p1a54da80} fill="#F97316" />
                </svg>
              </div>
              <div className="flex items-center font-['Poppins:SemiBold',sans-serif] whitespace-nowrap" style={{ fontSize: 20 }}>
                <span className="text-white">aanvishiki</span>
                <span className="text-[#f97316]">.AI</span>
              </div>
            </Link>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: "24px", color: "#999" }}>
              Intelligence Amplified. Ethics Applied. Strategic AI solutions for high-impact organizations.
            </p>

            {/* Product - EaseCare */}
            <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
              <p
                className="mb-3"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 13, color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}
              >
                Our Product
              </p>
              <Link
                to="/easecare"
                className="flex items-center gap-3 group no-underline p-3 rounded-[14px] border border-[#1a1a1a] hover:border-[#2a2a2a] hover:bg-[#111] transition-all duration-300"
              >
                <EaseCareLogo size={36} />
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: 15,
                      background: "linear-gradient(135deg, #08C5EF, #4B58E4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    EaseCare
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 12, color: "#666" }}>
                    Caretakers & House Help
                  </span>
                </div>
                <span
                  className="ml-auto px-2 py-0.5 rounded-full text-white shrink-0"
                  style={{
                    fontSize: 9,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    background: "linear-gradient(135deg, #FF9937, #FE6A2E)",
                  }}
                >
                  COMING SOON
                </span>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4
                  className="mb-4"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 15, color: "#e5e5e5" }}
                >
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#777] hover:text-[#FE6A2E] transition-colors no-underline"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14 }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, color: "#777" }}>
            © 2026 Aanvikshiki. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 12, color: "#777" }}>
            Built with ethical AI principles · Privacy-first design · Community-validated
          </p>
        </div>
      </div>
    </footer>
  );
}