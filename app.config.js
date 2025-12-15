import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: { port: 3232 },
  vite: {
    plugins: [tailwindcss()]
  }
});
