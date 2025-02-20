// content-start Filename: wizard-showcase\vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs/promises'
import path from 'path'
import fg from 'fast-glob'

export default defineConfig({
  base: '',
  plugins: [
    react()
  ]
})
// content-end Filename: wizard-showcase\vite.config.js
