
import { defineConfig } from 'vite';
import path from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: './', // Use a relative base so that built asset URLs are relative
  plugins: [
    copy({
      targets: [
        // directly to the build "dist" folder with no modifications.
        { src: 'optics-showcase.html', dest: 'dist' }
      ],
      // Use hook: 'writeBundle' to ensure the copy happens after the build is done
      hook: 'writeBundle'
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});