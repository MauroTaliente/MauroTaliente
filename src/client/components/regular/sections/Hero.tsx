import React from 'react'
import useAtomsGuilde from '../../build/atoms';

const Hero = () => {
  const {
    theme: { name, colors },
    helpers: { styleSheets, setTheme },
    atoms: { flex, briks, texts },
    state: { 
      themesFlags,
      mediaFlags: { md },
    },
  } = useAtomsGuilde(1);

  const css = styleSheets({
    container: {
      ...briks.container,
      label: 'container',
      zIndex: 2,
      backgroundColor: `${colors.bgSecondary}30`,
    },
    content: {
      ...briks.content,
      alignItems: 'flex-end',
      label: 'content',
      flexDirection: md ? 'row' : 'column',
    },
    hola: {
      ...flex.rc,
      label: 'hola',
      flex:  4,
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
      ...flex.cc,
      label: 'mauro',
      display: 'flex',
      flex: 3,
      marginBottom: '-2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    image: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    }
  });

  const image = 'https://storage.cloud.google.com/mauro-web-bucket/images/mauro_saludo';

  const applyNextTheme = () => {
    const themeNames = Object.keys(themesFlags);
    const lastIndex = themeNames.length - 1;
    const currentIndex = themeNames.findIndex((x) => x === name);
    const selectIndex = lastIndex === currentIndex ? 0 : currentIndex + 1;
    const selectName = themeNames[selectIndex];
    setTheme(selectName);
  };

  return (
    <section css={css.container}>
      <div css={css.content}>
        <main css={css.hola}>
          <h1 css={css.h1}
            onClick={applyNextTheme}
          >{
            `Hola 👋,
            soy Mauro.`
          }</h1>
          <h4 css={css.b1}>{
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
        <aside css={css.mauro}>
          <img css={css.image}
            src={`${image}.png`}
            srcSet={`${image}@2x.png 1.5x`}
            alt="emogi de Mauro saludando"
          />
        </aside>
      </div>
    </section>
  );
};

export default Hero;
