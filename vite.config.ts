import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base keeps assets GitHub Pages-safe for both project pages and custom domains.
// Override with VITE_BASE_PATH=/repo-name/ only if you intentionally want absolute asset URLs.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || './',
  build: {
    sourcemap: false,
    assetsDir: 'assets'
  }
});
