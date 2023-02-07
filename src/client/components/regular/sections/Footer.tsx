import React from 'react';
import useAtomsGuilde from '@/components/build/atoms';

const data = 'Copyrigth © 2023. Mauro Taliente. Todos los derechos reservados';

const Fotter = () => {
  const {
    theme: { colors },
    atoms: { flex, briks, texts },
    helpers: { styleSheets },
  } = useAtomsGuilde();

  const styles = styleSheets({
    container: [briks.container, {
      backgroundColor: colors.bgPrimary,
      zIndex: 2,
    }],
    content: [briks.content, flex.cc],
  });

  return (
    <section css={styles.container}>
      <div css={styles.content}>
      <h5 css={texts.d2}>{ data }</h5>
      </div>
    </section>
  );
};

export default Fotter;
