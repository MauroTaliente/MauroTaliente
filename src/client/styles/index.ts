import newStyleGuide from 'react-emotion-styles-guide';
import mauro from './themes/mauro';
import fabi from './themes/fabi';

const {
 useStyleGuide,
 StyleGuideProvider,
} = newStyleGuide({
  breakPoints: { sm: 640, md: 768, lg: 1024, xl: 1280, sl: 1440, ul: 1920 },
  initThemeName: 'mauro',
  root: {
    colors: { color: '#eaeaea' },
    fontFamily: { display: 'Font Family' },
  },
  scheme: {
    name: ['mauro', 'fabi', 'themeMila', 'pancho'],
    tags: ['dark', 'light', 'small', 'rounded'],
    colors: ['acent', 'primary', 'secondary', 'ngAcent', 'bgPrimary', 'bgSecondary'],
    fontFamily: ['display', 'body', 'element'],
  },
  themes: [
    mauro,
    fabi,
    {
      name: 'themeMila',
      tags: ['dark', 'rounded'],
      colors: {
        acent: '#9e8de5',
        primary: '#0f0f11',
        secondary: '#393e43',
        ngAcent: '#ffffff',
        bgPrimary: '#ffffff',
        bgSecondary: '#edf0fa',
      },
      fontFamily: {
        display: 'Unbounded',
        body: 'Raleway',
        element: 'Raleway',
      },
    },
    {
      name: 'pancho',
      tags: ['light', 'small'],
      colors: {
        acent: '#ff4e30',
        primary: '#020202',
        secondary: '#747474',
        ngAcent: '#f0f0f0',
        bgPrimary: '#f0f0f0',
        bgSecondary: '#ffffff',
      },
      fontFamily: {
        display: 'Playfair Display',
        body: 'IBM Plex Sans',
        element: 'IBM Plex Sans',
      },
    },
  ],
} as const);

export {
  StyleGuideProvider,
  useStyleGuide as default,
};