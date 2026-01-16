import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path for GitHub Pages - change this to your repository name
  // For example, if your repo is "username/ahmed-s-digital-hub", set base to "/ahmed-s-digital-hub/"
  // If deploying to root domain, set base to "/"
  base: process.env.GITHUB_PAGES === "true" ? "/ahmed-s-digital-hub-main/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
