import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { asyncCss } from './vite.async-css.ts'

export default defineConfig({
  plugins: [react(), tailwindcss(), asyncCss()],
  build: {
    cssCodeSplit: true,
    modulePreload: {
      resolveDependencies: (_filename, deps) => deps,
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
})
