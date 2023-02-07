import React, { FC } from 'react'
import useAtomsGuilde from '@/components/build/atoms';

const WarningWork: FC = () => {
  const {
    atoms: { flex, texts },
    helpers: { styleSheets },
    theme: { colors },
  } = useAtomsGuilde();

  const styles = styleSheets({
    box: [flex.cc, {
      width: '100%',
      padding: '1em',
      borderBottom: `1px solid ${colors.acent}`,
    }],
  });

  return (
    <div css={styles.box}>
      <h5 css={texts.b2}>{ `Estoy trabajando en el sitió, en un par de días estará listo ⚠️`}</h5>
    </div>
  );
};

export default WarningWork;
