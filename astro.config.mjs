import { defineConfig } from "astro/config";

export default defineConfig({
  // Set this to the production URL once the Vercel domain is connected,
  // so the social image gets an absolute link.
  site: process.env.SITE_URL || "https://norma-landing.vercel.app",
  build: { inlineStylesheets: "auto" },
});
