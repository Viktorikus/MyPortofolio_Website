import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  base: '/', 
  build: {
    outDir: 'dist', 
    emptyOutDir: true, 
    sourcemap: false 
  },
  server: {
    port: 3000 // Port development server
  }
});