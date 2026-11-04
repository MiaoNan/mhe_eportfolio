// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://miaonan.github.io",
  base: "/mhe_eportfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
