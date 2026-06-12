# Portfolio Site Specification (SITE_SPEC.md)

Companion to `SCHEMA.md`. That file defines the data; this file defines the site
built from it. Hand both to Claude Code. Decisions here were made deliberately —
follow them, and propose changes rather than silently deviating.

---

## 1. Goals and audience

- Audience: recruiters and hiring managers in two lanes — (a) ASIC/digital
  verification, (b) power systems / consulting EIT. Both must feel addressed.
- A recruiter on a phone, arriving from LinkedIn, must reach featured projects
  within one scroll and understand who I am within ~10 seconds.
- The site is generated FROM the data repo. No content is hand-written into
  components; everything renders from `experience/`, `projects/`, `profile/`.

## 2. Stack and repos

- **Framework:** Astro (content collections + zero-JS-by-default).
- **Hosting:** GitHub Pages via GitHub Actions (`withastro/action`).
- **Repo layout:** two options — pick at scaffold time:
  - A) Site repo with the data repo as a git submodule at `src/content/`
  - B) Single repo: data folders live in `src/content/`, site code around them.
  Default to (B) for simplicity unless the data repo must stay private, in which
  case (A) with a private submodule and a PAT in the deploy action.
- Interactivity budget: ONE small client-side island (project domain filter).
  Everything else is static HTML/CSS.

## 3. Content collections (validation layer)

Define Astro content collections that mirror SCHEMA.md exactly, so builds fail
on malformed frontmatter:

```ts
// src/content.config.ts (sketch — implement fully from SCHEMA.md)
const projects = defineCollection({
  schema: z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(['course','capstone','personal','work','hackathon']),
    course: z.string().optional(),
    client: z.string().optional(),
    start: z.string().regex(/^\d{4}-\d{2}$/),
    end: z.string(),                    // YYYY-MM or "present"
    status: z.enum(['completed','ongoing','archived']),
    team_size: z.number().int().min(1),
    my_role: z.string(),
    domains: z.array(z.string()),
    tech: z.array(z.string()),
    repo: z.string(),
    demo: z.string().optional(),
    summary: z.string(),
    problem: z.string(),
    outcomes: z.array(z.object({ text: z.string(), evidence: z.string().optional() })),
    media: z.array(z.object({ file: z.string(), caption: z.string().optional() })).optional(),
    resume_bullets: z.array(z.string()),
    featured: z.boolean().default(false),
    visibility: z.enum(['public','private']),
  }),
});
// experience collection: mirror the experience schema the same way
```

**Hard rule:** every query filters `visibility === 'public'`. Private entries
must never appear in built output — verify by grepping `dist/` for a known
private string as a build check.

## 4. Routes

| Route | Source | Notes |
|---|---|---|
| `/` | all collections | single scrolling landing page |
| `/projects/[id]/` | projects body content | one page per public project |
| `/resume.pdf` | static asset | latest general resume |
| 404 | static | plain, on-theme |

No separate /about or /experience pages — those are landing-page sections.

## 5. Landing page layout (top to bottom)

1. **Hero.** Photo + name + headline "Electrical EIT — ASIC Verification &
   Power Systems" + links (GitHub, LinkedIn, email, resume PDF). Desktop:
   photo left or right of text, max-width ~1000px container. Mobile: photo
   stacked above text, centered.
   - Photo: `profile/photo` source image, output ~400–600px square via Astro
     `<Image>`, WebP with fallback, rounded crop, descriptive alt text.
2. **Featured projects.** Cards from `featured: true`, max 4. Card = media
   thumbnail, name, summary, tech tags, domain tag. Whole card is a link
   (tap-target rule). Grid: 2 columns desktop, 1 column mobile.
3. **All projects + filter.** Filter chips generated from the union of
   `domains` across public projects (expect: ASIC/Verification, Power Systems,
   Robotics/Embedded, plus "All"). Client-side island; chips are buttons with
   visible focus states; filtering hides/shows cards, no page reload, state in
   URL hash so a filtered view is shareable (e.g. `/#projects=power-systems`).
4. **Experience timeline.** Vertical timeline from `experience/`, newest first.
   Desktop: line with dots, content cards alternating or single-sided —
   single-sided is fine and simpler. Mobile: left-aligned line, cards full
   width. Each item: company, title, dates, 2–3 achievement bullets, tech tags.
5. **Skills.** Grouped tag clusters straight from `skills.yaml` categories.
   No proficiency bars or percentages. Include EIT (EGBC) under certifications.
6. **About + footer.** Short bio from `profile/about.md`, contact links
   repeated, "Built with Astro · source on GitHub" if the repo is public.

Navigation: a slim sticky top bar with anchor links (Projects, Experience,
Skills, Contact). No hamburger — at 4 links it fits on mobile as-is.

## 6. Design tokens

Implement as CSS custom properties on `:root` and `[data-theme="dark"]`.
Light is default; toggle respects `prefers-color-scheme` on first visit and
persists choice (one tiny inline script to avoid flash of wrong theme).

```css
:root {
  --bg: #FAFAF8;            /* off-white, not pure white */
  --text: #1A1A1A;
  --text-muted: #5A5A55;
  --accent: #1E5AA8;        /* the ONE accent: links, chips, timeline dots */
  --accent-soft: #E8EFF8;   /* chip/tag backgrounds */
  --surface: #FFFFFF;       /* cards */
  --border: #E4E2DC;
}
[data-theme="dark"] {
  --bg: #121417;            /* dark grey, never pure black */
  --text: #E6E6E6;
  --text-muted: #9AA0A6;
  --accent: #F5A623;        /* warm amber accent in dark mode */
  --accent-soft: #2A2418;
  --surface: #1A1D21;
  --border: #2A2E33;
}
```

Usage discipline: accent appears only on links, active filter chips, timeline
dots, and primary buttons. Domain/tech tags use `--accent-soft` backgrounds
with `--text-muted` text — no per-category rainbow.

**Typography:** body in a clean grotesque (e.g. Inter or system stack);
headings the same family at heavier weight is acceptable, but preferred: a
slightly characterful display face for the name/headline only (e.g. a
geometric or semi-mono face that nods to engineering — pick one, use it in
exactly two places: hero name and section headings). Code/tech tags in a
monospace face. Type scale: 1.25 ratio, body 16px mobile / 17–18px desktop,
line-height 1.6. Self-host fonts (no Google Fonts CDN) for speed and privacy.

**Signature element (the one memorable thing):** the experience timeline
rendered as a subtle single-line-diagram motif — straight line, square node
"bus taps" at each role, in the accent color. It quietly references electrical
SLD drafting (CANAL work) without being a gimmick. Keep everything else quiet.

## 7. Responsive rules

- Mobile-first CSS. Breakpoints: 640px (grid to 2-col), 960px (full layout).
- All interactive elements ≥ 44×44px touch targets; cards fully tappable.
- Images: explicit width/height to prevent layout shift; lazy-load below fold.
- Test on a real phone before calling it done, not only devtools emulation.

## 8. Quality floor (non-negotiable)

- Lighthouse mobile: Performance ≥ 95, Accessibility ≥ 95, SEO ≥ 95.
- Semantic HTML (header/nav/main/section/footer), one h1, logical heading order.
- Visible keyboard focus everywhere; filter usable by keyboard.
- `prefers-reduced-motion` respected (only transitions are theme fade and
  chip hover anyway — keep it that way).
- Meta: title, description, Open Graph image (can be a simple branded card
  with name + headline) so the link unfurls nicely in LinkedIn/messages.
- No analytics, or privacy-light only (e.g. GoatCounter) if wanted later.

## 9. Deployment (GitHub Pages)

- Workflow: on push to `main`, build with `withastro/action@v3`, deploy with
  `actions/deploy-pages@v4`. Set `site` and `base` in `astro.config.mjs`
  correctly for project pages (`https://<user>.github.io/<repo>/`) — or use a
  custom domain later by adding a CNAME.
- Add a CI step that fails the build if any `visibility: private` content
  string appears in `dist/` (the privacy check from §3).
- Add Lighthouse CI (or `unlighthouse`) as a non-blocking report step.

## 10. Build order

1. Scaffold Astro project; wire content collections against the real data
   repo; build must pass with current data (fix data, not schema, on errors).
2. Landing page with real data end-to-end, light theme only, mobile-first.
3. Project detail pages from markdown bodies + media.
4. Filter island with URL-hash state.
5. Dark mode + theme toggle.
6. Hero photo pipeline, OG image, favicon.
7. GitHub Pages workflow + privacy build check; deploy.
8. Lighthouse pass on a real phone; fix; done — iterate later.