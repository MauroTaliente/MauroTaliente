import React, { FC, ReactNode } from 'react'
import useAtomsGuilde from '../atoms';



const WarningWork: FC = () => {
  const {
    atoms: { flex, texts },
    helpers: { styleSheets },
    theme: { colors, fontFamily },
    state: { tagsFlags: { rounded } },
  } = useAtomsGuilde(0);

  const styles = styleSheets({
    box: {
      ...flex.cc,
      width: '100%',
      padding: '1em',
      borderBottom: `1px solid ${colors.acent}`,
    },
    message: {
      ...texts.b2,
    },
  });

  return (
    <div css={styles.box}
    >
      <h5 css={styles.message} >{ `Estoy trabajando en el sitió, en un par de días estará listo ⚠️`}</h5>
    </div>
  );
};

export default WarningWork;
