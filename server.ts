import fs from 'node:fs'
import path from 'node:path'
import express from "express";
// SSR
import compression from "compression";
import serveStatic from "serve-static";
import { createServer as createViteServer } from "vite";
// API ROUTER
import apiRouter from "./src/server/router";

const IS_TEST = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD;
const SSR_DIR = 'dist/ssr/';
const SRC_DIR = './src';

const getRootDir = (p: string) => path.resolve(__dirname, p);
const getSourceDir = (p: string) => path.join(__dirname, SRC_DIR, p);
const getPublishDir = (p: string) => path.join(__dirname, SSR_DIR, p);

// console.log({
//   SOURCE_DIR: getSourceDir('SOURCE'),
//   PUBLISH_DIR: getPublishDir('PUBLISH'),
//   ABSOLUTE_DIR: getRootDir('ABSOLUTE'),
// });

const getStyleSheets = () => {
  const assetpath = getPublishDir("assets");
  const files = fs.readdirSync(assetpath);
  const cssAssets = files.filter(l => l.endsWith(".css"));
  const allContent = [];
  for (const asset of cssAssets) {
    const content = fs.readFileSync(path.join(assetpath, asset), "utf-8");
    allContent.push(`<style type="text/css">${content}</style>`);
  }
  return allContent.join("\n");
};

async function createServer(isProd = process.env.NODE_ENV === "production") {
  const app = express();
  // API =>
  app.use(apiRouter);
  // SSR =>
  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: IS_TEST ? "error" : "info",
  });
  // use vite's connect instance as middleware
  app.use(vite.middlewares);
  // assets files => expose
  const assetsRootDir = getRootDir("static/assets");
  const requestHandler = express.static(assetsRootDir);
  app.use(requestHandler);
  app.use("/assets", requestHandler);
  // client files => compression and expose
  if (isProd) {
    app.use(compression());
    const staticPublishDir = getPublishDir("client");
    const staticFiles = serveStatic(staticPublishDir, { index: false });
    app.use(staticFiles);
  }
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template, indexDir, appDir;
      if (isProd) {
        // 1. Read index.html
        indexDir = getPublishDir("client/index.html");
        template = fs.readFileSync(indexDir, "utf-8");
        // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
        //    also applies HTML transforms from Vite plugins, e.g. global preambles
        //    from @vitejs/plugin-react
        template = await vite.transformIndexHtml(url, template);
        // 3. Load the server entry. vite.ssrLoadModule automatically transforms
        //    your ESM source code to be usable in Node.js! There is no bundling
        //    required, and provides efficient invalidation similar to HMR.
        appDir = getPublishDir("server/entry-server.mjs");
        const { render } = await vite.ssrLoadModule(appDir);
        // 4. render the app HTML. This assumes entry-server.js's exported `render`
        //    function calls appropriate framework SSR APIs,
        //    e.g. ReactDOMServer.renderToString()
        const appHtml = await render(url);
        // 5. Inject the app-rendered HTML into the template.
        const html = template.replace(`<!--app-html-->`, appHtml);
        return res.status(200).set({ "Content-Type": "text/html" }).end(html);
      }
      // 1. Read index.html
      indexDir = getRootDir("index.html");
      template = fs.readFileSync(indexDir, "utf-8");
      // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
      //    also applies HTML transforms from Vite plugins, e.g. global preambles
      //    from @vitejs/plugin-react
      template = await vite.transformIndexHtml(url, template);
      // 3. Load the server entry. vite.ssrLoadModule automatically transforms
      //    your ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      appDir = getSourceDir("client/entry-server.tsx");
      const { render } = await vite.ssrLoadModule(appDir);
      // 4. render the app HTML. This assumes entry-server.js's exported `render`
      //    function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      const appHtml = await render(url);
      // 4.1 styles files => generate
      const stylesheets = getStyleSheets();
      // 5. Inject the app-rendered HTML into the template.
      const html = template.replace(`<!--app-html-->`, appHtml).replace(`<!--head-->`, stylesheets);
      // 6. Send the rendered HTML back.
      return res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e);
      console.log(e.stack);
      // If an error is caught, let Vite fix the stack trace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
  const port = process.env.PORT || 7456;
  app.listen(Number(port), "0.0.0.0", () => {
    console.log(`App is listening on http://localhost:${port}`);
  });
}

createServer();
