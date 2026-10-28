import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // <-- ВАЖНО: здесь должен быть просто слэш, так как у тебя user site
})
