import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ExoQuest/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
