// main vite
import { defineConfig } from 'vite';
// plugins
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    tsconfigPaths(),
    react({
      include: '**/*.tsx',
      jsxImportSource: '@emotion/react',
      babel: { plugins: ['@emotion/babel-plugin'] },
    }),
  ],
  resolve: { preserveSymlinks: true },
  server: { port: 3000 },
  clearScreen: false,
  build: { minify: false },
  esbuild: { logOverride: { 'this-is-undefined-in-esm': 'silent' } },
  publicDir: 'public',
});
