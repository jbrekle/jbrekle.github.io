
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: './', // Use a relative base so that built asset URLs are relative
  plugins: [
    react(),
    copy({
      targets: [
        // directly to the build "dist" folder with no modifications.
        { src: 'optics-showcase.html', dest: 'dist' },
        { src: 'valentines.html', dest: 'dist' },
        { src: 'game-showcase', dest: 'dist' }
      ],
      // Use hook: 'writeBundle' to ensure the copy happens after the build is done
      hook: 'writeBundle'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});