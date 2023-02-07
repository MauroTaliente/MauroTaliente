// main vite
import { defineConfig } from 'vite';
// plugins
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// test
import type { UserConfig } from 'vitest/config';

const test = {
  globals: true,
  environment: 'jsdom',
  setupFiles: ['src/__tests__/setupTests.ts'],
  threads: false,
  watch: false,
} as UserConfig['test'];

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
  // @ts-ignore
  test,
});
