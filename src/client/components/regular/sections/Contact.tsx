import React from 'react'
import useAtomsGuilde from '../../build/atoms';

const Contact = () => {
  const {
    theme: { colors },
    atoms: { flex, briks, texts },
    state: { tagsFlags: { rounded }},
    helpers: { styleSheets },
  } = useAtomsGuilde(0);

  const css = styleSheets({
    card: {
      ...flex.rb,
      padding: '2em',
      flexDirection: 'row',
      backgroundColor: colors.bgPrimary,
      border: `1px solid ${colors.acent}`,
      borderRadius: rounded ? '1em' : '0.5em',
    },
    main: {
      ...flex.rc,
      flex: 3,
    },
    label: {
      ...texts.d2,
      paddingBottom: '1em'
    },
    email: {
      ...texts.h4,
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
      flex: 2,
    },
    image: {
      width: '100%',
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
            src="static/assets/images/mauro_llamar.png"
            srcSet="static/assets/images/mauro_llamar@2x.png 1.5x"
            alt="emogi de Mauro llamando"
          />
        </aside>
      </div>
      </div>
    </section>
  );
};

export default Contact;
