import newStyleGuide from 'react-emotion-styles-guide';

import mauro from './themes/mauro';
import { scope, formal } from './themes/exp';
import fabi from './themes/fabi';

const {
 useStyleGuide,
 StyleGuideProvider,
} = newStyleGuide({
  noSsr: { active: true },
  breakPoints: { sm: 640, md: 768, lg: 1024, xl: 1280, sl: 1440, ul: 1920 },
  initThemeName: 'mauro',
  root: {
    colors: { color: '#eaeaea' },
    fontFamily: { display: `'Lato', sans-serif;'` },
  },
  scheme: {
    // name: ['mauro', 'fabi', 'themeMila', 'pancho'],
    // tags: ['dark', 'light', 'small', 'rounded'],
    colors: ['acent', 'primary', 'secondary', 'ngAcent', 'bgPrimary', 'bgSecondary'],
    fontFamily: ['display', 'body', 'element'],
  },
  themes: [
    mauro,
    // scope,
    // formal,
    fabi,
  ],
} as const);

export {
  StyleGuideProvider,
  useStyleGuide as default,
};