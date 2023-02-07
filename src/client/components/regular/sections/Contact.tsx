import React from 'react'
import useAtomsGuilde, { assets } from '@/components/build/atoms';

const data = {
  title: 'Contacto',
  text: '¿Estas creando un proyecto, necesitas asesoría o simplemente quieres enviar un saludo?',
  email: {
    href: 'mailto:mauro.taliente3@gmail.com',
    title: 'mauro.taliente3@gmail.com',
  },
  image: {
    src: assets('images/mauro_llamar.png'),
    srcSet: assets('images/mauro_llamar@2x.png 1.5x'),
    alt: 'emogi de Mauro llamando',
  },
};

const Contact = () => {
  const {
    theme: { colors },
    atoms: { flex, briks, texts },
    state: { tagsFlags: { rounded } },
    helpers: { styleSheets },
  } = useAtomsGuilde();

  const css = styleSheets({
    card: [flex.rb, {
      width: '100%',
      padding: ['2em 1em', '2em'],
      flexDirection: ['column', 'row'],
      backgroundColor: colors.bgPrimary,
      border: `1px solid ${colors.acent}`,
      borderRadius: rounded ? '1em' : '0.5em',
      zIndex: 2,
    }],
    main: [flex.rc, {
      width: '100%',
      flex: [1, 3],
    }],
    label: [texts.d2, { paddingBottom: '1em' }],
    email: [texts.h4, {
      paddingBottom: '1rem',
      color: colors.acent,
      lineHeight: '2em',
    }],
    text: [texts.h5, {
      paddingBottom: '1rem',
      lineHeight: '2em',
    }],
    footer: [flex.lt, {
      flexDirection: 'row',
      gap: '1em',
    }],
    aside: [flex.cc, { flex: [1, 2] }],
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
            <h5 css={css.label}>{ data.title }</h5>
            <h3 css={css.text}>{ data.text }</h3>
            <a css={css.email} href={data.email.href}>{ data.email.title }</a>
        </main>
        <aside css={css.aside}>
          <img css={css.image} {...data.image} />
        </aside>
      </div>
      </div>
    </section>
  );
};

export default Contact;
