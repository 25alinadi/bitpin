import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/socket.io': {
        target: 'wss://ws.bitpin.ir',
        ws: true,
        changeOrigin: true,
      },
    },
  },
})
