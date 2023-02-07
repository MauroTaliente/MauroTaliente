import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url';
import express from "express";
// SSR
import compression from "compression";
import serveStatic from "serve-static";
import { createServer as createViteServer, ViteDevServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const base = (p: any) => path.resolve(__dirname, p);
const dist = (p: any) => path.join(__dirname, 'dist/', p);
const src = (p: any) => path.join(__dirname, 'src/', p);

// console.log({
//   SOURCE_DIR: src('SOURCE'),
//   PUBLISH_DIR: dist('PUBLISH'),
//   ABSOLUTE_DIR: base('ABSOLUTE'),
// });

const app = express();

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === "production",
  isTest =  process.env.NODE_ENV === "test",
  ) {
  // API =>
  const apiDir = src("server/index.ts");
  const api = (await import(apiDir)).default;
  app.use(api);
  // SSR =>
  let vite = null as ViteDevServer | null;
  if (!isProd) {
    vite = await createViteServer({
      root,
      logLevel: isTest ? "error" : "info",
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(compression());
    const clientPublishDir = dist("client");
    const staticFiles = serveStatic(clientPublishDir, { index: false });
    app.use(staticFiles);
  }
  app.use("*", async (req, res) => {
    const url = '/'
    let indexDir, template, appDir, render;
    if (!isProd && !!vite) {
      indexDir = base("index.html");
      template = fs.readFileSync(indexDir, "utf-8");
      template = await vite.transformIndexHtml(url, template);
      appDir = src("client/entry-server.tsx");
      render = (await vite.ssrLoadModule(appDir)).render;
    } else {
      indexDir = dist("client/index.html");
      template = fs.readFileSync(indexDir, "utf-8");
      appDir = dist("server/entry-server.js");
      render =(await import(appDir)).render;
    }
    const appHtml = await render(url);
    const html = template.replace(`<!--app-html-->`, appHtml);
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  });
  return { app, vite };
}

createServer().then(({ app }) =>
  app.listen(5173, () => {
    console.log('http://localhost:5173');
  })
);
