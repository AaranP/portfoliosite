import type { ImageMetadata } from 'astro';

// Media files live in the data repo at ../assets/projects/<slug>/ and are
// referenced by bare filename in each entry's `media:` list (SCHEMA.md).
// Vite globs them at build time; images become ImageMetadata for
// astro:assets, PDFs become emitted asset URLs.

const images = import.meta.glob<{ default: ImageMetadata }>(
  '../../../assets/projects/**/*.{png,jpg,jpeg,gif,webp,avif}',
  { eager: true },
);

const documents = import.meta.glob<string>('../../../assets/projects/**/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
});

export type ResolvedMedia =
  | { kind: 'image'; image: ImageMetadata; caption: string }
  | { kind: 'document'; url: string; caption: string };

export function resolveMedia(slug: string, file: string, caption = ''): ResolvedMedia | null {
  const key = `../../../assets/projects/${slug}/${file}`;
  if (key in images) return { kind: 'image', image: images[key]!.default, caption };
  if (key in documents) return { kind: 'document', url: documents[key]!, caption };
  // referenced file missing from assets/ — surface loudly at build time
  throw new Error(`media file not found: assets/projects/${slug}/${file}`);
}

/** First *image* in an entry's media list — used as its card thumbnail. */
export function thumbnail(
  slug: string,
  media: { file: string; caption: string }[],
): { image: ImageMetadata; caption: string } | null {
  for (const m of media) {
    const r = resolveMedia(slug, m.file, m.caption);
    if (r?.kind === 'image') return { image: r.image, caption: r.caption };
  }
  return null;
}
