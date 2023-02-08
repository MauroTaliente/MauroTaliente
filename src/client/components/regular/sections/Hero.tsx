import React from 'react';
import useAtomsGuilde, { assets } from '@/components/build/atoms';

const getData = (clean: boolean) => ({
  title: `Hola 👋,
  soy Mauro.`,
  about: `Sr FrontEnd Developer 
  con más de 8 años de experiencia
  y conocimiento de JavaScript, 
  React & Native, Node.js etc.`,
  button: {
    label: '🤘 Disponible para trabajar',
    href: 'mailto:mauro.taliente3@gmail.com',
  },
  image: {
    src: assets(clean ? 'images/mauro_yellow.png' : 'images/mauro_saludo.png'),
    srcSet: assets(clean ? 'images/mauro_yellow@2x.png 1.5x' : 'images/mauro_saludo@2x.png 1.5x'),
    alt: 'emogi de Mauro saludando',
  },
});

const Hero = () => {
  const {
    theme: { name, colors },
    helpers: { styleSheets, setTheme },
    atoms: { flex, briks, texts },
    state: { 
      themesFlags,
      tagsFlags: { clean },
    },
  } = useAtomsGuilde(1);

  const css = styleSheets({
    container: [briks.container, {
      zIndex: 2,
      backgroundColor: `${colors.bgSecondary}30`,
    }],
    content: [briks.content, {
      alignItems: 'flex-end',
      label: 'content',
      flexDirection: ['column', 'row'],
    }],
    hola: [flex.rc, {
      flex: 4,
      cursor: 'pointer',
    }],
    h1: [texts.h1, { paddingBottom: '1rem' }],
    b1: [texts.b1, { paddingBottom: '1rem' }],
    mauro: [flex.cc, {
      display: 'flex',
      flex: 3,
      marginBottom: '-2rem',
      position: 'relative',
      overflow: 'hidden',
    }],
    image: {
      objectFit: 'contain',
      width: '100%',
      height: '100%',
      maxHeight: '410px',
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

  const data = getData(clean);

  return (
    <section css={css.container}>
      <div css={css.content}>
        <main css={css.hola} role="button" onClick={applyNextTheme}>
          <h1 css={css.h1}>{ data.title }</h1>
          <h4 css={css.b1}>{ data.about }</h4>
          <a css={texts.a} href={data.button.href}>{ data.button.label }</a>
        </main>
        <aside css={css.mauro}>
          <img css={css.image} {...data.image} />
        </aside>
      </div>
    </section>
  );
};

export default Hero;
