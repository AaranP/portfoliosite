// One-shot generator for the Open Graph card (public/og.png) — a simple
// branded card with name + headline (SITE_SPEC.md §8). Re-run after changing
// the name/headline: node scripts/make-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../public/og.png', import.meta.url));

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#F6F1E7"/>
  <rect x="0" y="0" width="14" height="630" fill="#1E5AA8"/>
  <!-- bus-tap motif echoing the favicon -->
  <line x1="92" y1="430" x2="92" y2="560" stroke="#1E5AA8" stroke-width="6"/>
  <rect x="80" y="455" width="24" height="24" fill="#1E5AA8"/>
  <rect x="80" y="510" width="24" height="24" fill="#1E5AA8"/>
  <line x1="104" y1="467" x2="170" y2="467" stroke="#1E5AA8" stroke-width="6"/>
  <line x1="104" y1="522" x2="170" y2="522" stroke="#1E5AA8" stroke-width="6"/>
  <text x="80" y="270" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="700" fill="#1A1A1A">Aaran Poon</text>
  <text x="80" y="350" font-family="Helvetica, Arial, sans-serif" font-size="40" fill="#5A5A55">Electrical EIT — ASIC Verification &amp; Power Systems</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
