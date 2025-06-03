import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    allowedHosts: [
      'portfolio-omgba.onrender.com',
      'localhost' // Pour garder le dev local
    ]
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [react(), tailwindcss()],
})
