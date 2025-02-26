import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3333
  },
  build: {
    outDir: 'out',
    sourcemap: true
  }
});
