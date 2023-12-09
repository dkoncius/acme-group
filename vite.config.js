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
        apieMus: path.resolve(__dirname, 'src/pages/apie-mus.html'),
        tvarumas: path.resolve(__dirname, 'src/pages/tvarumas.html'),
        veiklosKryptys: path.resolve(__dirname, 'src/pages/veiklos-kryptys.html'),
        kontaktai: path.resolve(__dirname, 'src/pages/kontaktai.html'),
        naujienos: path.resolve(__dirname, 'src/pages/naujienos.html'),
        naujienosVidus: path.resolve(__dirname, 'src/pages/naujienos-vidus.html'),
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