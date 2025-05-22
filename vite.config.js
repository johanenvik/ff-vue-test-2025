import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // allows you to use @ as alias for /src
      '~': path.resolve(__dirname, '.'),      // optional: ~ for root project directory
    },
  },
})
