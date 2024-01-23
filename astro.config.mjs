import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://main--vermillion-mandazi-4ce414.netlify.app/",
  integrations: [react(), tailwind(), sitemap()],
  output: "hybrid",
  adapter: netlify(),
});
