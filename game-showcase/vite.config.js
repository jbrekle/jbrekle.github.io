import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Optional, default is "dist", but let's be explicit
    outDir: 'dist',
    rollupOptions: {
      // Ensure our index.html is the entry point
      input: 'index.html'
    }
  }
});
