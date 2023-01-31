import React from 'react'
import useAtomsGuilde from '../../build/atoms';

import { css } from '@emotion/react';

const Hero = () => {
  const {
    theme: { name, colors },
    helpers: { styleSheets, setTheme },
    atoms: { flex, briks, texts },
    state: { 
      mediaFlags: { md },
      themesFlags,
    },
  } = useAtomsGuilde(1);

  const hero = styleSheets({
    container: {
      ...briks.container,
      label: 'container',
      zIndex: 2,
      backgroundColor: `${colors.bgSecondary}30`,
    },
    content: {
      ...briks.content,
      label: 'content',
      minHeight: '480px',
      flexDirection: md ? 'row' : 'column',
    },
    hola: {
      ...flex.rc,
      label: 'hola',
      paddingTop: '4rem',
      flex: 1,
    },
    h1: {
      ...texts.h1,
      label: 'hola',
      paddingBottom: '1rem',
      cursor: 'pointer',
    },
    b1: {
      ...texts.b1,
      label: 'info',
      paddingBottom: '1rem'
    },
    mauro: {
      label: 'mauro',
      display: 'flex',
      alignSelf: 'flex-end',
      maxWidth: '320px',
      marginBottom: '-2rem',
      imageRendering: 'crisp-edges',
    },
  });

  const applyNextTheme = () => {
    const themeNames = Object.keys(themesFlags);
    const lastIndex = themeNames.length - 1;
    const currentIndex = themeNames.findIndex((x) => x === name);
    const selectIndex = lastIndex === currentIndex ? 0 : currentIndex + 1;
    const selectName = themeNames[selectIndex];
    setTheme(selectName);
  };

  return (
    <section css={hero.container}>
      <div css={css(hero.content)}>
        <main css={hero.hola}>
          <h1 css={hero.h1}
            onClick={applyNextTheme}
          >{
            `Hola 👋,
            soy Mauro.`
          }</h1>
          <h4 css={hero.b1}>{
            `Sr FrontEnd Developer 
            con más de 8 años de experiencia
            y conocimiento de JavaScript, 
            React & Native, Node.js etc.`
          }</h4>
          <a css={texts.a}
            href='mailto:mauro.taliente3@gmail.com'
          >{
          `🤘 Disponible para trabajar`
          }</a>
        </main>
        <img css={hero.mauro}
          src="static/assets/images/mauro_saludo.png"
          srcSet="static/assets/images/mauro_saludo@2x.png 1.5x"
          alt="emogi de Mauro saludando"
        />
      </div>
    </section>
  );
};

export default Hero;
