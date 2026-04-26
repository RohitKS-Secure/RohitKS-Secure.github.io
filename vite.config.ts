import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // User/Org pages repo (`username.github.io`) is served from the root.
  // Keeping this explicit avoids base-path surprises.
  base: '/',
  plugins: [react(), tailwindcss()],
})
