import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import type { UserConfig } from "vitest/config";

const test = {
  globals: true,
  environment: "jsdom",
  setupFiles: ["src/__tests__/setupTests.ts"],
  threads: false,
  watch: false,
} as UserConfig["test"];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  server: { port: 3000 },
  clearScreen: false,
  build: { minify: false },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  base: '/MauroTaliente',
  root: "",
  // @ts-ignore
  test,
});
