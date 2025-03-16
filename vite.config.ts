import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import env from "vite-plugin-env-compatible";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  react(),
  // ここでprefixをVITEに設定しているのか
  env({ prefix: "VITE" }) 
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ← これがあるか確認
    },
  },
  build: {
    outDir: 'build', // ビルド出力先
  }
});