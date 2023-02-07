import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const dist = (p: any) => path.join(dirname, 'dist/', p);
const src = (p: any) => path.join(dirname, 'src/', p);

async function renderSite() {
  const indexDir = dist('static/index.html');
  const template = fs.readFileSync(indexDir, 'utf-8');
  const appDir = dist('server/entry-server.js');
  const render = (await import(appDir)).render;

  const routesDir = src('client/pages');
  const routesToPrerender = fs.readdirSync(routesDir).map((file) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase();
    return name === 'main' ? '/' : `/${name}`;
  });
  (async () => {
    // pre-render each route...
    for (const url of routesToPrerender) {
      const appHtml = render(url);
      const html = template.replace('<!--app-html-->', appHtml);
      const filePath = dist(`static${url === '/' ? '/index' : url}.html`);
      fs.writeFileSync(filePath, html);
      console.log('pre-rendered:', filePath);
    }
  })();
}

renderSite();
