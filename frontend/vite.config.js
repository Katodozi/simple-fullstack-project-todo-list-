import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api/todos': {
        target: 'http://127.0.0.1:8000', // Use 127.0.0.1 for IPv4 safety
        changeOrigin: true,
        // Optionally, if you want to remove `/api` prefix before forwarding:
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
