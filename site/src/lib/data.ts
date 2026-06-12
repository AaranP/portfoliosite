import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

// Hard rule (SITE_SPEC.md §3): every query filters visibility === 'public'.
// All page code must go through these helpers, never raw getCollection.

export async function publicProjects(): Promise<CollectionEntry<'projects'>[]> {
  const all = await getCollection('projects', ({ data }) => data.visibility === 'public');
  return all.sort((a, b) => b.data.start.localeCompare(a.data.start));
}

export async function featuredProjects(): Promise<CollectionEntry<'projects'>[]> {
  // spec §5.2 caps featured cards at 4; the data currently flags 6 — take
  // the newest 4 rather than editing the data's featured flags
  return (await publicProjects()).filter((p) => p.data.featured).slice(0, 4);
}

export async function publicExperience(): Promise<CollectionEntry<'experience'>[]> {
  const all = await getCollection('experience', ({ data }) => data.visibility === 'public');
  // newest first; entries with unknown ('') start dates sort last
  return all.sort((a, b) => (b.data.start || '0000').localeCompare(a.data.start || '0000'));
}

export async function aboutEntry() {
  const about = await getEntry('profile', 'about');
  if (!about || !('name' in about.data)) throw new Error('profile/about.md missing or malformed');
  return { ...about, data: about.data };
}

export async function skillsEntry() {
  const skills = await getEntry('skills', 'skills');
  if (!skills) throw new Error('profile/skills.yaml missing');
  return skills;
}

/** "2024-09" → "Sep 2024"; "present" → "Present"; "" → "" */
export function formatDate(yyyymm: string): string {
  if (!yyyymm) return '';
  if (yyyymm === 'present') return 'Present';
  const [y, m] = yyyymm.split('-').map(Number);
  return new Date(y!, m! - 1).toLocaleString('en-CA', { month: 'short', year: 'numeric' });
}

export function dateRange(start: string, end: string): string {
  const s = formatDate(start);
  const e = formatDate(end);
  if (!s && !e) return '';
  if (s === e) return s;
  return `${s} – ${e}`;
}

/**
 * The data carries deferred inline TODO markers that must never render on
 * the site. Returns '' for TODO-bearing strings so callers can fall back.
 */
export function noTodo(s: string | undefined): string {
  if (!s || /\bTODO\b/.test(s)) return '';
  return s.trim();
}

// Filter groups (SITE_SPEC.md §5.3) — the data's granular domain tags roll
// up into the coarse recruiter-facing lanes. Chips are generated from the
// union of groups actually present in public projects, so an unmapped tag
// falls back to its own prettified name rather than vanishing.
const DOMAIN_GROUPS: Record<string, { slug: string; label: string }> = {
  'digital-design': { slug: 'asic-digital', label: 'ASIC & Digital Design' },
  fpga: { slug: 'asic-digital', label: 'ASIC & Digital Design' },
  verification: { slug: 'asic-digital', label: 'ASIC & Digital Design' },
  'computer-architecture': { slug: 'asic-digital', label: 'ASIC & Digital Design' },
  'ic-design': { slug: 'asic-digital', label: 'ASIC & Digital Design' },
  analog: { slug: 'asic-digital', label: 'ASIC & Digital Design' },
  security: { slug: 'asic-digital', label: 'ASIC & Digital Design' },
  audio: { slug: 'asic-digital', label: 'ASIC & Digital Design' },
  graphics: { slug: 'asic-digital', label: 'ASIC & Digital Design' },
  embedded: { slug: 'robotics-embedded', label: 'Robotics & Embedded' },
  robotics: { slug: 'robotics-embedded', label: 'Robotics & Embedded' },
  autonomy: { slug: 'robotics-embedded', label: 'Robotics & Embedded' },
  instrumentation: { slug: 'robotics-embedded', label: 'Robotics & Embedded' },
  'machine-learning': { slug: 'machine-learning', label: 'Machine Learning' },
  'deep-learning': { slug: 'machine-learning', label: 'Machine Learning' },
  'generative-models': { slug: 'machine-learning', label: 'Machine Learning' },
  'data-science': { slug: 'machine-learning', label: 'Machine Learning' },
  'power-systems': { slug: 'power-systems', label: 'Power Systems' },
};

export function domainGroups(domains: string[]): { slug: string; label: string }[] {
  const seen = new Map<string, { slug: string; label: string }>();
  for (const d of domains) {
    const g = DOMAIN_GROUPS[d] ?? {
      slug: d,
      label: d.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    };
    seen.set(g.slug, g);
  }
  return [...seen.values()];
}

export function filterChips(projects: CollectionEntry<'projects'>[]) {
  const groups = domainGroups(projects.flatMap((p) => p.data.domains));
  groups.sort((a, b) => a.label.localeCompare(b.label));
  return groups;
}
