import { createStyleGuide } from 'react-emotion-styles-guide';

import { formal, scope } from './themes/experimentals';
import mauro from './themes/mauro';
import fabi from './themes/fabi';

const {
  useStyleGuide,
  StyleGuideProvider,
} = createStyleGuide({
  forceIrr: false,
  styles: { mode: 'facepaint' },
  breakPoints: { sm: 640, md: 768, lg: 1024, xl: 1280, sl: 1440, ul: 1920 },
  initThemeName: 'formal',
  root: {
    colors: { primary: '#eaeaea' },
    fontFamily: { display: '\'Lato\', sans-serif\'' },
  },
  scheme: {
    name: ['mauro', 'fabi', 'formal', 'scope'],
    tags: ['dark', 'light', 'clean', 'rounded'],
    colors: ['acent', 'primary', 'secondary', 'ngAcent', 'bgPrimary', 'bgSecondary'],
    fontFamily: ['display', 'body', 'element'],
  },
  themes: [ mauro, fabi, formal, scope ],
} as const);

export {
  StyleGuideProvider,
  useStyleGuide as default,
};