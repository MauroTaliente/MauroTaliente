import fs from "fs/promises";
import path from "path";
import { createServer as createViteServer } from "vite";

const resolve = (p: string) => path.resolve(__dirname, p);

const getStyleSheets = async () => {
  const assetpath = resolve("dist/assets");
  const files = await fs.readdir(assetpath);
  const cssAssets = files.filter(l => l.endsWith(".css"));
  const allContent = [];
  for (const asset of cssAssets) {
    const content = await fs.readFile(path.join(assetpath, asset), "utf-8");
    allContent.push(`<style type="text/css">${content}</style>`);
  }
  return allContent.join("\n");
};

async function renderSite() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "info",
  });
  const stylesheets = getStyleSheets();
  try {
    const cssAssets = await stylesheets;
    const template = await fs.readFile(resolve('./dist/client/index.html'), 'utf-8');
    const buildPath = path.join(__dirname, "./dist/server/entry-server.mjs");
    // determine routes to pre-render from src/client/pages
    const pages = await fs.readdir(resolve('src/client/pages'));
    const routesToPrerender = pages.map((file) => {
      const name = file.replace(/\.tsx$/, '').toLowerCase();
      return name === 'main' ? `/` : `/${name}`;
    });
    await (async () => {
      // await fs.mkdir(resolve('./dist/static'))
      const { render } = await vite.ssrLoadModule(buildPath);
      // pre-render each route...
      for (const url of routesToPrerender) {
        const appHtml = await render(url);
        const html = template.replace(`<!--app-html-->`, appHtml).replace(`<!--head-->`, cssAssets);

        const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
        await fs.appendFile(resolve(filePath), html);
        console.log('pre-rendered:', filePath)
      }
    })();
    return;
  } catch (e: any) {
    console.log(e.stack);
  }
}

renderSite();
