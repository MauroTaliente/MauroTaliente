import React, { useMemo } from 'react';

import useStyleGuide from  '@/styles';

const assets = (p = '') => 'https://storage.googleapis.com/mauro-web-bucket/' + p;

const useAtomsGuilde = (refreshLevel: 0 | 1 = 0) => {
  const styleGuide = useStyleGuide(refreshLevel);
  const {
    breakPoints: bp,
    theme: { colors, fontFamily },
    helpers: { styleSheets },
    state: { tagsFlags: { small } },
  } = styleGuide;
  const atomsGuide = useMemo(() => {

    // right-top | center-top | left-top
    // right-center | center-center | left-center
    // right-bottom | center-bottom | left-bottom
    const flex = styleSheets({
      rt: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
      ct: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      lt: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      },
      rc: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      cc: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      lc: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
      rb: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
      cb: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      lb: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
    }, 'simple');

    const commons = styleSheets({
      hedings: {
        fontWeight: 500,
        fontFamily: fontFamily.display,
        color: colors.primary,
        lineHeight: '1.35em',
        whiteSpace: 'pre-line',
      },
      texts: {
        fontWeight: 300,
        fontFamily: fontFamily.body,
        color: colors.secondary,
        lineHeight: '1.35em',
      }
    }, 'simple');

    const texts = styleSheets({
      h1: {
        ...commons.hedings,
        fontWeight: 700,
        fontSize: '3em',
      },
      h2: {
        ...commons.hedings,
        fontSize: '2.4em',
      },
      h3: {
        ...commons.hedings,
        fontSize: '1.9em',
      },
      h4: {
        ...commons.hedings,
        fontSize: '1.5em',
      },
      h5: {
        ...commons.hedings,
        fontSize: '1.2em',
      },
      h6: {
        ...commons.hedings,
        fontSize: '1em',
      },
      b1: {
        ...commons.texts,
        fontSize: ['1.2em', '1.5em'],
      },
      b2: {
        ...commons.texts,
        fontSize: ['1.2em', '1.5em'],
      },
      d1: {
        ...commons.texts,
        color: colors.primary,
        fontSize: '1em',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
      },
      d2: {
        ...commons.texts,
        fontSize: '0.8em',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
      },
      a: {
        color: colors.acent,
        fontFamily: fontFamily.body,
        fontSize: '1em',
        textDecoration: 'underline',
      }
    }, 'facepaint');

    const briks = styleSheets({
      container: {
        ...flex.cc,
        width: '100%',
      },
      content: {
        ...flex.rc,
        width: '100%',
        maxWidth: `${bp.lg}px`,
        padding: '2rem',
      }
    }, 'simple');

    return {
      ...styleGuide,
      atoms: { flex, briks, texts },
    };
  }, [styleGuide]);

  return atomsGuide;
};

export {
  assets,
  useAtomsGuilde as default,
};