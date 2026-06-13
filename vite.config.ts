import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project URL target: https://ranad0.github.io/test/
// Change VITE_BASE_PATH when deploying under another repository or custom path.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/test/',
  build: {
    sourcemap: false,
    assetsDir: 'assets'
  }
});
