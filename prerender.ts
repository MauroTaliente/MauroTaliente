import fs from 'node:fs'
import path from 'node:path'
import { createServer as createViteServer } from "vite";

const SRC_DIR = './src';
const SSR_DIR = 'dist/ssr/';
const SSG_DIR = 'dist/ssg/';

const getRootDir = (p: string) => path.resolve(__dirname, p);
const getSourceDir = (p: string) => path.join(__dirname, SRC_DIR, p);
const getSsrPublishDir = (p: string) => path.join(__dirname, SSR_DIR, p);
const getSsgPublishDir = (p: string) => path.join(__dirname, SSG_DIR, p);

async function renderSite() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "info",
  });
  try {
    const indexDir = getSsrPublishDir("client/index.html");
    const template = fs.readFileSync(indexDir, "utf-8");
    const appDir = getSsrPublishDir("server/entry-server.mjs");
    const { render } = await vite.ssrLoadModule(appDir);
    const routesDir = getSourceDir('client/pages');
    const routesToPrerender = fs.readdirSync(routesDir).map((file) => {
      const name = file.replace(/\.tsx$/, '').toLowerCase();
      return name === 'main' ? `/` : `/${name}`;
    });
    (async () => {
      // pre-render each route...
      for (const url of routesToPrerender) {
        const appHtml = render(url);
        const html = template.replace(`<!--app-html-->`, appHtml);
        const filePath = getSsgPublishDir(`${url === '/' ? '/index' : url}.html`);
        fs.writeFileSync(filePath, html);
      }
    })();
    return;
  } catch (e: any) {
    console.log(e.stack);
  }
}

renderSite();
