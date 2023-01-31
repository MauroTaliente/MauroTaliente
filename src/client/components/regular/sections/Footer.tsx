import React from 'react'
import useAtomsGuilde from '../../build/atoms';

const Fotter = () => {
  const {
    theme: { colors },
    atoms: { flex, briks, texts },
    state: { tagsFlags: { rounded }},
    helpers: { styleSheets },
  } = useAtomsGuilde(0);

  const css = styleSheets({
    container: {
      ...briks.container,
      backgroundColor: colors.bgPrimary,
    },
    label: {
      ...texts.d2,
    },
  });

  return (
    <section css={css.container}>
      <div css={briks.content}>
      <h5 css={css.label}>{
        `Copyrigth © 2023. Mauro Taliente. Todos los derechos reservados`
      }</h5>
      </div>
    </section>
  );
};

export default Fotter;
