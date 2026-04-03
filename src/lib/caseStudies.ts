// ============================================================
// CMS DATA LAYER — Aanvikshiki Case Studies
// ============================================================
// Currently using static mock data. To connect a headless CMS,
// replace the functions below with API calls to your chosen CMS.
//
// RECOMMENDED: Sanity (https://www.sanity.io)
//   - Best fit for a React/Vite SPA
//   - Generous free tier (100k API requests/month)
//   - Powerful GROQ query language + TypeScript support
//   - Hosted Studio at yourproject.sanity.studio
//   ──────────────────────────────────────────────────────────
//   1. npm install @sanity/client
//   2. Create a Sanity project at sanity.io/manage
//   3. Replace getCaseStudies() / getCaseStudy() with:
//
//      import { createClient } from '@sanity/client'
//      const sanity = createClient({
//        projectId: 'YOUR_PROJECT_ID',     // from sanity.io/manage
//        dataset: 'production',
//        apiVersion: '2024-01-01',
//        useCdn: true,
//      })
//      export async function getCaseStudies(): Promise<CaseStudyMeta[]> {
//        return sanity.fetch(`*[_type == "caseStudy"] | order(publishedAt desc) {
//          slug, title, description, category, industry, publishedAt,
//          "thumbnail": thumbnail.asset->url
//        }`)
//      }
//      export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
//        return sanity.fetch(`*[_type == "caseStudy" && slug.current == $slug][0]`, { slug })
//      }
//
// OTHER CMS OPTIONS:
//   - Contentful: contentful.createClient({ space, accessToken }).getEntries(...)
//   - Strapi (self-hosted): fetch(`${STRAPI_URL}/api/case-studies?populate=*`)
//   - Notion: use notion-to-md to render Notion pages as case studies
// ============================================================

export interface MetricItem {
  stat: string;
  label: string;
}

// Content blocks: paragraphs and inline images
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; caption?: string };

export interface CaseStudyMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  thumbnail: string;
  publishedAt: string;
}

export interface CaseStudy extends CaseStudyMeta {
  content: ContentBlock[];
  metrics: MetricItem[];
}

// ── Static data (replace with CMS API call) ──────────────────
const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "healthcare-data-migration",
    title: "Strategic Clarity Before Migration: Learning What You Have Before Deciding Where to Go",
    description:
      "A regional healthcare provider needed to migrate 259 SSIS packages across 12 source systems — none documented. We mapped the entire data estate in 4 days.",
    category: "AI Strategy",
    industry: "Healthcare",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    publishedAt: "2025-11-01",
    content: [
      {
        type: "paragraph",
        text: "A regional healthcare provider needed to migrate its data infrastructure. The mandate was clear. The path was not. Eleven years of incremental system-building had produced 259 SSIS packages spanning 12 source systems — none of them documented, many of them interdependent in ways no one fully understood.",
      },
      {
        type: "paragraph",
        text: "Power BI reports had been built by multiple teams over time, with dependencies tracing back to staging tables that were themselves undocumented. Before any strategic decision could be made about where to go, the organization needed to understand where it was. Manual analysis was estimated at 6–8 weeks — before migration planning could even begin.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=80",
        caption: "Data dependency mapping — 2,847 edges visualized in the directed acyclic graph.",
      },
      {
        type: "paragraph",
        text: "An AI agent was deployed against the full package catalog and Power BI metadata store. Rather than documenting the system manually, the agent constructed a directed dependency graph — each package a node, each data relationship an edge. What had been invisible became structural. What had been assumed became verifiable. Within the first two days, 2,847 edges had been mapped and three circular references flagged for strategic resolution.",
      },
      {
        type: "paragraph",
        text: "Column-level lineage was traced from report visuals back to source tables. Business logic embedded in transformation expressions was extracted and annotated. By the end of Day 4, the organization had a complete strategic picture of its data estate — the first time that had ever been true. Infrastructure analysis was completed in 4 days. The output was not a report — it was a migration architecture derived directly from the dependency graph topology. The organization entered its migration with complete strategic clarity about what it had, what depended on what, and in what order to move it.",
      },
    ],
    metrics: [
      { stat: "4 days", label: "vs. 6–8 weeks estimated for manual analysis" },
      { stat: "259", label: "SSIS packages parsed and mapped" },
      { stat: "2,847", label: "Data dependencies identified and documented" },
    ],
  },
  {
    slug: "legal-contract-intelligence",
    title: "From Inbox to Insight: How a Law Firm Eliminated 80% of Manual Contract Review",
    description:
      "A 120-attorney firm was spending 14,000 hours per year on first-pass contract review. We built an AI intake layer that reduced that to under 2,800 hours — without changing how attorneys work.",
    category: "AI Strategy",
    industry: "Legal Services",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
    publishedAt: "2025-09-15",
    content: [
      {
        type: "paragraph",
        text: "A mid-sized litigation and corporate law firm had grown its contract practice significantly over five years. The growth had not been matched by process investment. First-pass contract review — reading, flagging risk clauses, summarizing obligations — was still performed manually by junior attorneys and paralegals working from printed documents and shared drives.",
      },
      {
        type: "paragraph",
        text: "The consequence was predictable: a 9-day average from intake to first markup, inconsistent risk identification across reviewers, and senior partners spending billable time correcting work that could have been triaged earlier. The firm wanted to invest in AI but had no framework for doing so without destabilizing existing workflows.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        caption: "The clause taxonomy — 217 distinct clause types extracted from 4,200 historical contracts.",
      },
      {
        type: "paragraph",
        text: "We began with the corpus, not the technology. Four thousand two hundred historical contracts were analyzed to extract the clause taxonomy the firm actually worked with — 217 distinct clause types, grouped by risk tier as defined by the firm's own senior partners. The AI model was benchmarked against attorney-reviewed documents before any production deployment, reaching 94.3% precision on high-risk clause detection.",
      },
      {
        type: "paragraph",
        text: "The critical design decision was interface placement. The AI does not make decisions — it prepares attorneys to make better ones faster. Every flagged clause includes the AI's reasoning, the firm's standard position, and a one-click accept or override. Within four weeks of rollout, the intake-to-markup cycle had dropped from 9 days to 1.8 days. The firm's attorneys did not change how they practiced — they simply started work at a higher level.",
      },
    ],
    metrics: [
      { stat: "80%", label: "Reduction in manual contract review hours" },
      { stat: "9→1.8 days", label: "Intake-to-first-markup cycle time" },
      { stat: "94.3%", label: "Precision on high-risk clause detection" },
    ],
  },
  {
    slug: "retail-analytics-transformation",
    title: "Seeing the Store Clearly: A Retailer's Move from Reporting to Decision Intelligence",
    description:
      "A national retailer had 47 dashboards and no shared understanding of what was true. We replaced the reporting layer with a single source of truth that executives actually use.",
    category: "Data Strategy",
    industry: "Retail",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    publishedAt: "2025-07-20",
    content: [
      {
        type: "paragraph",
        text: "A national retail chain with 340 locations had invested heavily in business intelligence tooling over a decade. The investment had produced 47 dashboards, six different BI platforms, and a situation where the VP of Finance and the VP of Operations regularly arrived at the same meeting with different revenue figures — both derived from internal systems.",
      },
      {
        type: "paragraph",
        text: "The problem was not a lack of data. The problem was a lack of a governing definition of what the data meant. 'Revenue' had three live definitions. 'In-stock rate' had five. Executives had quietly stopped trusting internal reporting and were making decisions based on instinct and spreadsheets maintained by individual teams.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        caption: "The unified semantic layer — one authoritative definition for every metric.",
      },
      {
        type: "paragraph",
        text: "We audited all 47 dashboards before touching any infrastructure. The audit revealed that the problem was not technical — it was definitional. We built the meaning layer first. Twelve core KPIs were defined, debated, and ratified by the CFO and COO before a single line of code was written for the new system. The semantic layer sat above the existing data warehouse — no migration, no new infrastructure, just an authoritative interpretation layer that all reporting tools read from.",
      },
      {
        type: "paragraph",
        text: "Eight weeks after the audit, the retailer had one dashboard that everyone trusted, connected to real-time feeds with a 4-hour maximum decision latency. Forty-six of the original 47 dashboards were decommissioned. The remaining one replaced all of them — not because it had more features, but because it had clearer meaning.",
      },
    ],
    metrics: [
      { stat: "46", label: "Dashboards decommissioned — replaced by one trusted source" },
      { stat: "4 days→4 hrs", label: "Decision latency for the executive team" },
      { stat: "12", label: "Core KPIs ratified and governed across the organization" },
    ],
  },
  {
    slug: "financial-compliance-automation",
    title: "Compliance as Infrastructure: Automating Regulatory Reporting Without the Risk",
    description:
      "A regional bank was spending 2,200 staff-hours per quarter on regulatory filings. We built a compliance engine that reduced that to 340 hours — with a complete audit trail.",
    category: "AI Strategy",
    industry: "Financial Services",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    publishedAt: "2025-05-10",
    content: [
      {
        type: "paragraph",
        text: "A regional bank with $4.2 billion in assets was spending 2,200 staff-hours every quarter on regulatory filings — pulling data from 14 different reporting frameworks, reconciling it manually, and submitting it under significant time pressure. The process had grown organically over fifteen years and had never been redesigned.",
      },
      {
        type: "paragraph",
        text: "The risk was compounding. A 3.2% error rate on manual data extraction meant errors that had to be caught by senior staff before submission — creating a bottleneck in the final two weeks of every quarter. More concerning: the bank had no machine-readable audit trail. Every regulatory review required manual reconstruction of how figures had been derived.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
        caption: "Compliance pipeline — every figure tagged with its source, extraction method, and reviewer.",
      },
      {
        type: "paragraph",
        text: "We began by mapping every data field required across all 14 regulatory frameworks back to its source system. Eighty-nine percent of required fields existed in structured databases and could be extracted with deterministic pipelines. Eleven percent existed only in unstructured documents — loan files, correspondence, exception reports — and required an AI extraction layer with human-in-the-loop review.",
      },
      {
        type: "paragraph",
        text: "The compliance engine was designed around the audit trail, not the output. Every figure in every filing was tagged with its source record, extraction method, and reviewer. The first live quarterly filing took 340 hours — an 85% reduction. The machine-readable audit trail meant that regulatory reviewers could verify any figure in under two minutes.",
      },
    ],
    metrics: [
      { stat: "85%", label: "Reduction in quarterly compliance filing hours" },
      { stat: "2,200→340", label: "Staff-hours per quarter" },
      { stat: "100%", label: "Machine-readable audit trail across all filings" },
    ],
  },
];

// ── Public API ───────────────────────────────────────────────
// Swap these with async CMS fetches when ready.

export function getCaseStudies(): CaseStudyMeta[] {
  return CASE_STUDIES.map(({ slug, title, description, category, industry, thumbnail, publishedAt }) => ({
    slug,
    title,
    description,
    category,
    industry,
    thumbnail,
    publishedAt,
  }));
}

export function getCaseStudy(slug: string): CaseStudy | null {
  return CASE_STUDIES.find((cs) => cs.slug === slug) ?? null;
}
