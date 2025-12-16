import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name]-[hash].js',
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three') || id.includes('postprocessing')) {
              return 'three-vendors'
            }
            if (id.includes('framer-motion') || id.includes('gsap')) {
              return 'motion-vendors'
            }
            return 'vendor'
          }
        },
      },
    },
  },
})
