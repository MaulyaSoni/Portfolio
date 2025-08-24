import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    outDir: 'build'  // <-- maybe dist is renamed to 'build' or something else
  }
});