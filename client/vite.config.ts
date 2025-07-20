import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    proxy: {
      // все запросы к /api/* будут проксированы на backend
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
    },
  }
})
