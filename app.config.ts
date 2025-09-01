import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    prerender: {
      crawlLinks: true
    },
    baseURL: process.env.BASE_PATH,
    preset: "static"
  },
});
