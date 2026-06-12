// Build check (SITE_SPEC.md §3/§9): no `visibility: private` entry may leak
// into dist/. Reads the data folders, collects identifying strings from every
// private entry, and fails if any appears in the built output. Runs as part
// of `npm run build`.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const siteRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataRoot = join(siteRoot, '..');
const dist = join(siteRoot, 'dist');

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else yield p;
  }
}

// identifying strings of private entries: the slug/id always, plus distinctive
// human-readable fields when present and non-generic
const needles = new Map(); // needle -> source file
for (const kind of ['projects', 'experience']) {
  for (const file of walk(join(dataRoot, kind))) {
    if (!file.endsWith('.md')) continue;
    const fm = readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/);
    if (!fm) continue;
    const data = parse(fm[1]);
    if (data.visibility !== 'private') continue;
    for (const v of [data.id, data.name, data.title]) {
      if (typeof v === 'string' && v.length >= 8) needles.set(v, file);
    }
  }
}

if (needles.size === 0) {
  console.log('privacy-check: no private entries in data — pass');
  process.exit(0);
}

const leaks = [];
for (const file of walk(dist)) {
  if (!/\.(html|js|css|json|txt|xml)$/.test(file)) continue;
  const content = readFileSync(file, 'utf8');
  for (const [needle, source] of needles) {
    if (content.includes(needle)) leaks.push({ file, needle, source });
  }
}

if (leaks.length) {
  console.error('privacy-check: PRIVATE CONTENT LEAKED INTO BUILD OUTPUT:');
  for (const l of leaks) {
    console.error(`  "${l.needle}" (from ${l.source})\n    found in ${l.file}`);
  }
  process.exit(1);
}

console.log(
  `privacy-check: ${needles.size} private string(s) from data absent from dist — pass`,
);
