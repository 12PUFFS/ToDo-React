import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/ToDo-React/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Для Docker/WSL
      interval: 1000, // Проверять изменения каждую секунду
    },
  },
});
