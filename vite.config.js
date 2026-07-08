import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  plugins: [
    react(),
    babel({
      presets: ['@babel/preset-react'],
      plugins: ['babel-plugin-react-compiler'],
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  base: '/Xarizma/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
