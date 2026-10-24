// @ts-check
import { defineConfig } from 'astro/config';

// SITE_BASE is set by the deploy workflow: "/<site-id>/" in production,
// "/previews/<site-id>/pr-<number>/" for pull request previews.
export default defineConfig({
  base: process.env.SITE_BASE ?? '/',
  trailingSlash: 'always',
});
