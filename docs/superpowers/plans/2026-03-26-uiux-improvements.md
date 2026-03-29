# Aanvikshiki UI/UX Improvement Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix critical credibility, trust, and usability issues identified in the full UI/UX audit to make the site function as a real B2B consultancy platform.

**Architecture:** Four phases — (1) broken functionality first, (2) trust/credibility fixes, (3) component system unification, (4) content and copy polish. Each phase is independently shippable.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS 4, React Router 7, motion/react, Radix UI, shadcn-style components, Resend (new)

---

## Phase 1 — Critical (Broken Functionality & Active Trust Damage)

These must ship before anything else. Every day they exist, the site loses leads and credibility.

---

### Task 1: Wire the Contact Form

**Files:**
- Modify: `src/pages/Contact.tsx`
- Create: `src/lib/contact.ts`

**What it does:** Send form submissions to a real email via Resend (or Formspree as fallback). Currently the form shows a success state but sends nothing.

- [ ] **Step 1:** Install Resend SDK
  ```bash
  npm install resend
  ```

- [ ] **Step 2:** Create `src/lib/contact.ts` — form submission handler
  ```ts
  export interface ContactPayload {
    name: string;
    email: string;
    organization?: string;
    service: string;
    challenge: string;
  }

  export async function submitContactForm(payload: ContactPayload): Promise<{ ok: boolean; error?: string }> {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      return { ok: true };
    } catch (err) {
      return { ok: false, error: String(err) };
    }
  }
  ```

- [ ] **Step 3:** Since this is a Vite SPA (not Next.js), use Formspree as the simplest no-backend option. Replace the fake submit handler in `Contact.tsx`:
  ```tsx
  // Replace handleSubmit in Contact.tsx
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, organization, service, challenge }),
    });
    setSubmitting(false);
    if (res.ok) setSubmitted(true);
    else setError('Something went wrong. Email us directly at contact@aanvikshiki.com');
  };
  ```

- [ ] **Step 4:** Add submitting + error states to the form UI (disable button, show error message)

- [ ] **Step 5:** Sign up at formspree.io, create a form, replace `YOUR_FORM_ID`

- [ ] **Step 6:** Test — submit the form, verify email arrives

- [ ] **Step 7:** Commit
  ```bash
  git add src/pages/Contact.tsx src/lib/contact.ts
  git commit -m "fix: wire contact form to Formspree — leads were silently dropped"
  ```

---

### Task 2: Remove Fake Testimonials

**Files:**
- Modify: `src/components/sections/Testimonials.tsx` (or equivalent)
- Modify: `src/pages/Home.tsx`

**What it does:** Replace placeholder testimonials (generic company names, no verifiable identities) with a placeholder section that doesn't actively destroy credibility.

- [ ] **Step 1:** Read the current Testimonials component
- [ ] **Step 2:** Replace the three fake testimonial cards with one of two options:

  **Option A (recommended until real proof exists):** Remove the section entirely from the homepage. Silence is better than fake.

  **Option B:** Replace with a "Case Studies Coming Soon" placeholder that redirects to Contact:
  ```tsx
  <section className="border-b border-border">
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Client Results</p>
      <h2 className="text-3xl font-semibold tracking-tight mb-4">Real results, documented properly.</h2>
      <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8">
        We're preparing full case studies with client attribution. In the meantime — ask us directly.
      </p>
      <Button asChild variant="outline"><Link to="/contact">Talk to Us</Link></Button>
    </div>
  </section>
  ```

- [ ] **Step 3:** Remove the testimonials import from `Home.tsx`
- [ ] **Step 4:** Commit
  ```bash
  git add src/components/sections/ src/pages/Home.tsx
  git commit -m "remove: fake testimonials replaced with honest placeholder"
  ```

---

### Task 3: Remove Hero Progress Bars & Replace with One Real Metric

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**What it does:** The three Ant Design Progress bars (82% Strategic clarity, 94% Decision quality, 71% AI readiness) are decorative noise that imply precision without meaning. Replace with one real, attributed result.

- [ ] **Step 1:** Open `src/components/sections/HeroSection.tsx`
- [ ] **Step 2:** Remove the entire metrics/progress bar block
- [ ] **Step 3:** Replace with a single proof stat — use the most specific number you own. If the 259 packages / 2,847 dependencies / 4 days is a real engagement, use that:
  ```tsx
  <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
    <span className="font-mono text-white font-semibold">259 packages.</span>
    <span>2,847 dependencies mapped in 4 days.</span>
    <span className="text-white/40">— AI Infrastructure engagement, 2024</span>
  </div>
  ```
- [ ] **Step 4:** Remove Ant Design Progress imports from this file if no longer needed
- [ ] **Step 5:** Commit
  ```bash
  git add src/components/sections/HeroSection.tsx
  git commit -m "fix: remove meaningless hero progress bars, add real attributed metric"
  ```

---

### Task 4: Fix SEO Meta Tags

**Files:**
- Modify: `index.html`

**What it does:** Add `<meta name="description">`, Open Graph tags, and Twitter card meta. Currently link previews are broken.

- [ ] **Step 1:** Open `index.html`
- [ ] **Step 2:** Add inside `<head>`:
  ```html
  <meta name="description" content="Aanvikshiki designs and builds AI systems that drive real business decisions — strategic advisory, AI strategy, and ethical decision frameworks for enterprise and mission-driven organisations." />

  <!-- Open Graph -->
  <meta property="og:title" content="Aanvikshiki — Intelligence Amplified. Ethics Applied." />
  <meta property="og:description" content="AI systems and strategic consulting that move beyond dashboards." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://aanvikshiki.com" />
  <meta property="og:image" content="https://aanvikshiki.com/og-image.png" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Aanvikshiki — Intelligence Amplified. Ethics Applied." />
  <meta name="twitter:description" content="AI systems and strategic consulting that move beyond dashboards." />
  ```
- [ ] **Step 3:** Create a 1200×630px OG image and place at `/public/og-image.png`
- [ ] **Step 4:** Commit
  ```bash
  git add index.html public/og-image.png
  git commit -m "feat: add SEO meta, OG tags, Twitter card"
  ```

---

## Phase 2 — Credibility & Trust

---

### Task 5: Remove Unsplash Avatar Stack from CTA Section

**Files:**
- Modify: `src/components/sections/CTASection.tsx` (or equivalent in `Home.tsx`)

**What it does:** The avatar stack of anonymous Unsplash strangers is a fake social proof pattern. Remove it or replace with real team photos.

- [ ] **Step 1:** Find the avatar stack component in the CTA section
- [ ] **Step 2:** If you have real team photos → replace with those + names
- [ ] **Step 3:** If you don't → remove the avatar stack entirely. Keep the CTA text and button.
- [ ] **Step 4:** Commit
  ```bash
  git commit -m "remove: unsplash avatar stack from CTA — fake social proof removed"
  ```

---

### Task 6: Add Team Page

**Files:**
- Create: `src/pages/Team.tsx`
- Modify: `src/app/routes.tsx` (or router config)
- Modify: `src/components/Navbar.tsx` — add Team to About dropdown

**What it does:** For a consulting firm, people are the product. Buyers need to see who they're hiring.

- [ ] **Step 1:** Create `src/pages/Team.tsx` with a clean grid layout:
  ```tsx
  // Each team member:
  interface TeamMember {
    name: string;
    role: string;
    bio: string;
    linkedin?: string;
    photo?: string;
  }
  ```
- [ ] **Step 2:** Include: name, role, 2-sentence bio, LinkedIn URL, photo (or initials fallback)
- [ ] **Step 3:** Add route `/team` to the router
- [ ] **Step 4:** Add "Team" link to the Navbar under the "About" dropdown
- [ ] **Step 5:** Commit
  ```bash
  git add src/pages/Team.tsx src/app/ src/components/Navbar.tsx
  git commit -m "feat: add Team page — founders and advisors visible to buyers"
  ```

---

### Task 7: Attribute the Bento Grid Metrics

**Files:**
- Modify: `src/components/sections/BentoProof.tsx` (or equivalent)

**What it does:** Metrics without attribution read as invented. Add context to each number.

- [ ] **Step 1:** Open the Bento Grid component
- [ ] **Step 2:** For each metric card, add a source label below the number:
  ```tsx
  // Example pattern:
  <div className="text-xs text-muted-foreground mt-1">AI Infrastructure engagement — 2024</div>
  ```
- [ ] **Step 3:** If a metric cannot be attributed, remove it
- [ ] **Step 4:** Commit
  ```bash
  git commit -m "fix: add attribution context to bento grid metrics"
  ```

---

### Task 8: Separate Products into Ventures vs Services

**Files:**
- Modify: `src/pages/Products.tsx`
- Modify: `src/components/sections/ProductsFeature.tsx`
- Modify: `src/components/Navbar.tsx`

**What it does:** Neuro-D-Forecast, EaseCare, and AI Infrastructure Systems have three different buyers and three different contexts. Presenting them as one product suite creates confusion. Restructure into "Ventures" (Neuro-D-Forecast, EaseCare) and "Services" (AI Infrastructure, Strategic Advisory).

- [ ] **Step 1:** Update the Navbar products dropdown — rename from "Products" to "Ventures" for the two stand-alone products, keep "Services" separate
- [ ] **Step 2:** On the Products page, add a visible section divider between product types:
  ```tsx
  <div className="py-4 border-b border-border mb-12">
    <p className="text-xs uppercase tracking-widest text-muted-foreground">Ventures</p>
    <p className="text-sm text-muted-foreground mt-1">Independent products in development</p>
  </div>
  ```
- [ ] **Step 3:** Add a similar divider before AI Infrastructure Systems labeled "Consulting Services"
- [ ] **Step 4:** Update the homepage ProductsFeature tab labels to reflect this split
- [ ] **Step 5:** Commit
  ```bash
  git commit -m "refactor: separate products into ventures vs consulting services"
  ```

---

## Phase 3 — Component System Unification

---

### Task 9: Replace Ant Design Progress with Custom Component

**Files:**
- Create: `src/components/ui/metric-bar.tsx`
- Modify: any component currently using `antd` Progress

**What it does:** The Ant Design Progress bars visually clash with the Radix/custom design system. Replace with a Tailwind-native component.

- [ ] **Step 1:** Create `src/components/ui/metric-bar.tsx`:
  ```tsx
  interface MetricBarProps {
    label: string;
    value: number; // 0-100
    className?: string;
  }

  export function MetricBar({ label, value, className }: MetricBarProps) {
    return (
      <div className={cn("space-y-1.5", className)}>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{label}</span>
          <span className="font-mono">{value}%</span>
        </div>
        <div className="h-1 w-full bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-700"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    );
  }
  ```
- [ ] **Step 2:** Replace all `antd` Progress usages with `<MetricBar>`
- [ ] **Step 3:** Commit

---

### Task 10: Replace Ant Design Tabs in Products Section

**Files:**
- Modify: `src/components/sections/ProductsFeature.tsx`
- Create: `src/components/ui/tabs.tsx` (if not already in shadcn set)

**What it does:** The Ant Design Tabs component uses its own styling system and leaks Ant Design's blue accent color. Replace with Radix-based Tabs or a custom implementation.

- [ ] **Step 1:** Check if `@radix-ui/react-tabs` is already installed:
  ```bash
  grep -r "radix-ui/react-tabs" package.json
  ```
- [ ] **Step 2:** If not: `npm install @radix-ui/react-tabs`
- [ ] **Step 3:** Create `src/components/ui/tabs.tsx` following the existing shadcn pattern in the codebase
- [ ] **Step 4:** Swap Ant Tabs for the new component in `ProductsFeature.tsx`
- [ ] **Step 5:** Remove `antd` Tabs import
- [ ] **Step 6:** Commit

---

### Task 11: Replace Ant Design Drawer with Custom Mobile Nav

**Files:**
- Modify: `src/components/Navbar.tsx`

**What it does:** Ant Design Drawer is the last major Ant Design dependency in the nav. Replace with Radix Dialog or a native CSS slide panel to unify the component system.

- [ ] **Step 1:** Check if `@radix-ui/react-dialog` is already in use (it is — listed in package.json)
- [ ] **Step 2:** Replace the Ant Design `Drawer` with a Radix `Dialog` (Sheet-style) for the mobile menu
- [ ] **Step 3:** Replicate the same nav link structure inside the new panel
- [ ] **Step 4:** Once removed, run:
  ```bash
  # Check if antd is still needed anywhere
  grep -r "from 'antd'" src/
  ```
- [ ] **Step 5:** If no remaining antd imports, remove the dependency:
  ```bash
  npm uninstall antd
  ```
  This removes ~2MB from the bundle.
- [ ] **Step 6:** Commit
  ```bash
  git commit -m "refactor: replace Ant Design Drawer with Radix Dialog, unify component system"
  ```

---

## Phase 4 — Copy & Content Polish

---

### Task 12: Tighten Hero Copy

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**What it does:** Remove clichés. "Move beyond dashboards" and "scale with confidence" are overused. Sharpen the subhead.

- [ ] **Step 1:** Replace hero subhead:
  ```
  BEFORE:
  "We design and build intelligent systems that move beyond dashboards — helping teams think clearer, act faster, and scale with confidence."

  AFTER (choose one):
  "We design the thinking layer your AI is missing — structured frameworks that turn data into defensible decisions."

  OR:
  "Strategic consulting and AI systems for organisations that need clarity, not another dashboard."
  ```
- [ ] **Step 2:** Commit

---

### Task 13: Remove Unused Font Load

**Files:**
- Modify: `index.html`

**What it does:** `Oxanium` is loaded from Google Fonts but not referenced in CSS. Every page load fetches a font that isn't used.

- [ ] **Step 1:** Verify Oxanium is unused:
  ```bash
  grep -r "Oxanium" src/
  ```
- [ ] **Step 2:** If unused, remove the Google Fonts `<link>` for Oxanium from `index.html`
- [ ] **Step 3:** Commit

---

### Task 14: Fix Footer Watermark Opacity

**Files:**
- Modify: `src/components/Footer.tsx`

**What it does:** The large background watermark text is too heavy at current opacity. Reduce to ~3% for a proper background effect.

- [ ] **Step 1:** Find the watermark element in `Footer.tsx`
- [ ] **Step 2:** Adjust class from current opacity to `opacity-[0.03]`
- [ ] **Step 3:** Commit

---

## Summary: What to Ignore for Now

| Item | Why |
|------|-----|
| Dark mode | ThemeContext exists but non-functional; build after core trust issues fixed |
| Animation refinements | Current animations are fine |
| Performance optimization | Not a priority until content is credible |
| Pricing page restructure | Content decision, not code |
| Name/brand change | Strategic decision, out of scope |
| New features | Fix what's broken before adding anything |

---

## Improvement List (Quick Reference)

### 🔴 Phase 1 — Critical (do first)
1. Wire contact form to Formspree
2. Remove fake testimonials
3. Remove hero progress bars, add one real metric
4. Add OG/SEO meta tags

### 🟠 Phase 2 — Credibility
5. Remove Unsplash avatar stack from CTA
6. Add Team page with real names + LinkedIn
7. Add attribution to Bento Grid metrics
8. Separate products into Ventures vs Services

### 🟡 Phase 3 — Component Unification
9. Replace Ant Design Progress with custom MetricBar
10. Replace Ant Design Tabs with Radix Tabs in Products
11. Replace Ant Design Drawer with Radix Dialog in mobile nav → then remove `antd`

### 🟢 Phase 4 — Polish
12. Tighten hero subhead copy
13. Remove unused Oxanium font load
14. Fix footer watermark opacity
