import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/Badger_Transferology_Interface/',
  build: {
    outDir: 'docs'
  }
})
