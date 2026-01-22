import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Usamos el punto para referenciar la raíz de forma segura
      '@': path.resolve(new URL('.', import.meta.url).pathname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true, // Esto es lo mismo que '0.0.0.0'
  },
  // Si vas a desplegar en GitHub Pages, añade esta línea:
  // base: '/nombre-de-tu-repositorio/', 
});
