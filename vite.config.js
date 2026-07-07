import { defineConfig } from 'vite';

export default defineConfig({
  // Configuración para el despliegue en GitHub Pages
  base: './',
  
  // Configuración unificada para Vitest
  test: {
    environment: 'jsdom',
  },
});
