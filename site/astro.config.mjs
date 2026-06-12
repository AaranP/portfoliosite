// @ts-check
import { defineConfig } from 'astro/config';
import { stripTodos } from './src/lib/remark-strip-todos.mjs';

// GitHub Pages project-page URL — assumes the repo will be pushed as
// github.com/AaranP/portfoliosite. If the repo gets a different name (or a
// custom domain), update `site`/`base` together with the deploy workflow.
export default defineConfig({
  site: 'https://aaranp.github.io',
  base: '/portfoliosite',
  markdown: {
    remarkPlugins: [stripTodos],
  },
  vite: {
    server: {
      fs: {
        // data folders (projects/, experience/, profile/, assets/) live one
        // level above this Astro project
        allow: ['..'],
      },
    },
  },
});
