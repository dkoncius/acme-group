import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/',
  server: {
    open: true,
    host: true
  },

  build: {
    // Output directory for build files
    outDir: 'dist',
    
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        landing: path.resolve(__dirname, 'src/pages/landing.html'),
        tvarumas: path.resolve(__dirname, 'src/pages/tvarumas.html'),
        veiklosKryptys: path.resolve(__dirname, 'src/pages/veiklos-kryptys.html'),
        pagrindinesVeiklos: path.resolve(__dirname, 'src/pages/pagrindines-veiklos.html'),
      }
    }
  },

   // Server-specific configurations
   server: {
    // Configure the development server here
    port: 3000,
  }
});