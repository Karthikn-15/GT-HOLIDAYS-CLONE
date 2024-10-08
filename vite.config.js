import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],
  base: "/GT-Holidays-clone/",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
