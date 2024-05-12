import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api')
      },
    },
  },
  plugins: [react()],
});

