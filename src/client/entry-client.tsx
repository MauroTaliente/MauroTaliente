import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

// app const.
const container = document.getElementById('app') as HTMLElement;
const missingApp = !container?.innerText;
// dev consts.
const hotReload = import.meta.hot;
// App compose Strict => Router => CotenteApp.
const FullApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

if (hotReload || missingApp) {
  // build new app.
  // console.log('RENDER');
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  // hydrate new app.
  // console.log('HYDRATE');
  hydrateRoot(container, <FullApp />);
}
