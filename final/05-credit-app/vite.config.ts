import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/credit-app.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit-element/
    }
  }
})
