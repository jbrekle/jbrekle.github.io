import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: '',
  plugins: [
    react(),
    copy({
      targets: [
        // directly to the build "dist" folder with no modifications.
        { src: 'src/configs/tenant-*-config.ts', dest: 'dist/assets/configs' }
      ],
      // Use hook: 'writeBundle' to ensure the copy happens after the build is done
      hook: 'writeBundle'
    })
  ], 
  resolve: {
    alias     : {
        'assets/configs/tenant-steuerberater-config': "assets/configs/tenant-steuerberater-config.ts"
      }
    }
})
