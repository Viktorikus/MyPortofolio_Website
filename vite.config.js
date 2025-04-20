import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Tambahkan konfigurasi berikut:
  base: '/', // Base path untuk asset (penting untuk SPA)
  build: {
    outDir: 'dist', // Folder output build
    emptyOutDir: true, // Bersihkan folder dist sebelum build
    sourcemap: false // Nonaktifkan sourcemap untuk production
  },
  server: {
    port: 3000 // Port development server
  }
});