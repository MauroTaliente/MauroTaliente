import React from 'react'
import useAtomsGuilde from '../../build/atoms';

const Contact = () => {
  const {
    theme: { colors },
    atoms: { flex, briks, texts },
    state: {
      tagsFlags: { rounded },
      mediaFlags: { md },
    },
    helpers: { styleSheets },
  } = useAtomsGuilde(1);

  const css = styleSheets({
    card: {
      ...flex.rb,
      width: '100%',
      padding: md ? '2em' : '2em 1em',
      flexDirection: md ? 'row' : 'column',
      backgroundColor: colors.bgPrimary,
      border: `1px solid ${colors.acent}`,
      borderRadius: rounded ? '1em' : '0.5em',
      zIndex: 2,
    },
    main: {
      width: '100%',
      ...flex.rc,
      flex: md ? 3 : 1,
    },
    label: {
      ...texts.d2,
      paddingBottom: '1em'
    },
    email: {
      ...md ? texts.h4 : texts.h5,
      paddingBottom: '1rem',
      color: colors.acent,
      lineHeight: '2em',
    },
    text: {
      ...texts.h5,
      paddingBottom: '1rem',
      lineHeight: '2em',
    },
    footer: {
      ...flex.lt,
      flexDirection: 'row',
      gap: '1em',
    },
    aside: {
      ...flex.cc,
      flex: md ? 2 : 1,
    },
    image: {
      width: '100%',
      maxWidth: '256px',
      display: 'flex',
      marginBottom: '-2rem',
    },
  });

  return (
    <section css={briks.container}>
      <div css={briks.content}>
      <div css={css.card}>
        <main css={css.main}>
            <h5 css={css.label}>{
              `Contacto`
            }</h5>
            <h3 css={css.text}>{
              `¿Estas creando un proyecto, necesitas asesoría o simplemente quieres enviar un saludo?`
            }</h3>
            <a css={css.email}
              href='mailto:mauro.taliente3@gmail.com'
            >{
              `mauro.taliente3@gmail.com`
            }</a>
        </main>
        <aside css={css.aside}>
          <img css={css.image}
            src="https://storage.cloud.google.com/mauro-web-bucket/images/mauro_llamar.png"
            srcSet="https://storage.cloud.google.com/mauro-web-bucket/images/mauro_llamar@2x.png 1.5x"
            alt="emogi de Mauro llamando"
          />
        </aside>
      </div>
      </div>
    </section>
  );
};

export default Contact;
