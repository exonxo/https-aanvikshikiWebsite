// ============================================================
// SEO HEAD MANAGER — Aanvikshiki
// ============================================================
// Zero-dependency per-page meta tag management.
// Uses useEffect to imperatively update <head> on route changes.
//
// CMS INTEGRATION POINT:
// When Sanity (or your chosen CMS) is connected, each page's
// SEO props can be populated from CMS fields:
//
//   Sanity schema example:
//   defineType({
//     name: 'seo',
//     type: 'object',
//     fields: [
//       defineField({ name: 'title', type: 'string' }),
//       defineField({ name: 'description', type: 'text' }),
//       defineField({ name: 'ogImage', type: 'image' }),
//       defineField({ name: 'noIndex', type: 'boolean' }),
//     ],
//   })
//
//   Usage:  <SEO title={page.seo.title} description={page.seo.description} />
// ============================================================

import { useEffect } from "react";

const SITE_NAME = "Aanvikshiki";
const BASE_URL = "https://aanvikshiki.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const TWITTER_HANDLE = "@aanvikshiki";

interface SEOProps {
  /** Page-specific title. Automatically appended with " — Aanvikshiki" */
  title: string;
  /** Page-specific meta description (aim for 140–160 characters) */
  description: string;
  /** Canonical URL for this page, e.g. "/services" or "/work/slug" */
  canonical?: string;
  /** Optional Open Graph image URL (falls back to og-image.png) */
  ogImage?: string;
  /** Set true for pages you never want indexed (e.g. /ease, /admin) */
  noIndex?: boolean;
  /** "website" for most pages, "article" for case studies */
  ogType?: "website" | "article";
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  ogType = "website",
}: SEOProps) {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Standard meta
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", noIndex ? "noindex,nofollow" : "index,follow");

    // Open Graph
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", ogType);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", ogImage);

    // Twitter / X
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
  }, [fullTitle, description, canonicalUrl, ogImage, noIndex, ogType]);

  return null;
}

// ── Page-level SEO data ────────────────────────────────────────
// Centralised here so copy changes are one-file edits.
// CMS INTEGRATION: Replace these static strings with CMS queries.
// Each field maps directly to a CMS "seo" object on the page document.

export const pageSEO = {
  home: {
    title: "Intelligence Amplified. Ethics Applied",
    description:
      "Aanvikshiki helps organizations make better decisions — with structured AI strategy, data architecture, and decision frameworks that hold under real pressure.",
    canonical: "/",
  },
  services: {
    title: "Services",
    description:
      "Five services for organizations navigating complexity: AI strategy, data architecture, decision frameworks, implementation, and responsible AI governance.",
    canonical: "/services",
  },
  about: {
    title: "About",
    description:
      "Aanvikshiki is a structured-thinking consultancy. We apply the OASA framework — Observe, Analyze, Synthesize, Act — to problems that resist conventional approaches.",
    canonical: "/about",
  },
  work: {
    title: "Work",
    description:
      "Case studies from healthcare, legal, financial services, and retail. Real problems, documented thinking, and measurable outcomes — no projected figures.",
    canonical: "/work",
  },
  approach: {
    title: "Our Approach",
    description:
      "The OASA framework — Observe, Analyze, Synthesize, Act — is how Aanvikshiki structures every engagement. Rigorous thinking before any recommendation.",
    canonical: "/approach",
  },
  contact: {
    title: "Contact",
    description:
      "Start a conversation with Aanvikshiki. We respond to every enquiry within two business days and begin with questions, not proposals.",
    canonical: "/contact",
  },
} as const;
