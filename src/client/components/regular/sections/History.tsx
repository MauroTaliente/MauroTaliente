import React from 'react';
import useAtomsGuilde from '@/components/build/atoms';
import Button from '@/components/build/molecules/Button';


const data = {
  title: 'Curriculum',
  subtitle: 'un poco más sobre mí',
  about: `He liderado equipos FrontEnd en aplicaciones web y nativas para la industria TechEd, PropTech y Fintech.
    Apasionado por la tecnología y de formación autodidacta, disfruto mucho resolver, aprender y encontrar soluciones a los desafíos del día a día.`,
  linkdin: {
    href: 'https://www.linkedin.com/in/maurotaliente/',
    button: 'LinkedIn',
  },
  curriculum: {
    href: '/assets/MauroTalienteCv.pdf',
    button: 'Descargar CV',
  },
};

const History = () => {
  const {
    theme: { colors },
    atoms: { flex, briks, texts },
    helpers: { styleSheets },
  } = useAtomsGuilde();

  const css = styleSheets({
    main: flex.rc,
    d2: [texts.d2, { paddingBottom: '1em' }],
    d1: [texts.d1, { paddingBottom: '1em' }],
    h4: [texts.b1, {
      paddingBottom: '1.5rem',
      color: colors.acent,
      lineHeight: '1.5em',
      fontWeight: 400,
    }],
    b1: [texts.b1, { paddingBottom: '1rem' }],
    footer: [flex.lt, {
      flexDirection: 'row',
      gap: '1em',
    }],
  });

  return (
    <section css={briks.container}>
      <div css={[briks.content, { zIndex: 5 }]}>
        <main css={css.main}>
          <h5 css={css.d2}>{ data.title }</h5>
          <h4 css={css.d1}>{ data.subtitle }</h4>
          <p css={css.h4}>{ data.about }</p>
        </main>
        <footer css={css.footer}>
          <a href={data.linkdin.href} target="_blank" rel="noreferrer">
            <Button title={data.linkdin.button} />
          </a>
          <a href={data.curriculum.href} target="_blank" rel="noreferrer" >
            <Button title={data.curriculum.button} />
          </a>
        </footer>
      </div>
    </section>
  );
};

export default History;
