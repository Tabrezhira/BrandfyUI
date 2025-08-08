import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // ❌ Removed assetsInclude for .html because it breaks index.html parsing
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @ → /src
    },
  },
});
