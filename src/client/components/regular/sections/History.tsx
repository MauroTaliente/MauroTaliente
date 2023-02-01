import React from 'react'
import useAtomsGuilde from '../../build/atoms';
import Button from '../../build/molecules/Button';

const History = () => {
  const {
    theme: { colors },
    atoms: { flex, briks, texts },
    helpers: { styleSheets },
  } = useAtomsGuilde(0);

  const css = styleSheets({
    main: {
      ...flex.rc,
      // zIndex: 2,
    },
    d2: {
      ...texts.d2,
      paddingBottom: '1em',
    },
    d1: {
      ...texts.d1,
      paddingBottom: '1em'
    },
    h4: {
      ...texts.h4,
      paddingBottom: '1rem',
      color: colors.acent,
      lineHeight: '2em',
    },
    b1: {
      ...texts.b1,
      paddingBottom: '1rem'
    },
    footer: {
      ...flex.lt,
      flexDirection: 'row',
      gap: '1em',
    }
  });

  return (
    <section css={briks.container}>
      <div css={briks.content}>
        <main css={css.main}>
          <h5 css={css.d2}>{
            `Curriculum`
          }</h5>
          <h4 css={css.d1}>{
            `un poco más sobre mí`
          }</h4>
          <p css={css.h4}>{
            `He liderado equipos FrontEnd en aplicaciones web y nativas para la industria TechEd, PropTech y Fintech.
            Apasionado por la tecnología y de formación autodidacta, disfruto mucho resolver, aprender y encontrar soluciones a los desafíos del día a día.`
          }</p>
        </main>
        <footer css={css.footer}>
          <a href="https://www.linkedin.com/in/maurotaliente/" target="_blank" rel="noreferrer">
            <Button title='LinkedIn' />
          </a>
          <a href="static/assets/MauroTalienteCv.pdf" target="_blank" >
            <Button title='Descargar CV' />
          </a>
        </footer>
      </div>
    </section>
  );
};

export default History;
