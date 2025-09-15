import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Main_PF_10/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

