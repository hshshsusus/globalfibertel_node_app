import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    // Bind to 0.0.0.0 to make the server accessible to any device on the network
    host: '0.0.0.0', // This binds the server to all available network interfaces
    port: 5173, // Optional: you can specify a port (default is 5173)
    // You can also set CORS headers if needed
    cors: true,
  },
})