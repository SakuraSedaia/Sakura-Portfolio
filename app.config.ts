import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    prerender: {
      crawlLinks: true
    }
  },
  start: {
    ssr: false,
    server: {
      baseURL: process.env.BASE_PATH,
      preset: "static"
    }
  }
});
