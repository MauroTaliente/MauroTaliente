import React, { FC } from 'react';
import useAtomsGuilde from '@/components/build/atoms';

interface TagProps {
  title: string;
  size?: 'small' | 'medium';
  onClick?: () => void; 
}

const Tag: FC<TagProps> = ({
  title = '',
  size = 'medium',
  onClick = undefined,
}) => {
  const {
    atoms: { flex },
    helpers: { styleSheets },
    theme: { colors, fontFamily },
  } = useAtomsGuilde(0);

  const sml = size === 'small';
  const styles = styleSheets({
    box: {
      ...flex.cc,
      flexDirection: 'row',
      label: 'button',
      cursor: 'pointer',
      fontFamily: fontFamily.element,
      fontSize: sml ? '0.5em' : '0.7rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      padding: '0.5em 1.25em',
      color: colors.acent,
      backgroundColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.bgPrimary,
      borderRadius: '1em',
    },
  });

  return (
    <button css={styles.box}
      onClick={onClick}
    >
      { title }
    </button>
  );
};

export default Tag;
