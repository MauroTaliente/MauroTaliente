import React, { FC, ReactNode } from 'react';
import useAtomsGuilde from '@/components/build/atoms';

interface ButtonProps {
  title?: string;
  left?: ReactNode;
  right?: ReactNode;
  size?: 'small' | 'medium';
  type?: 'regular' | 'secondary' | 'clean';
  children?: ReactNode;
  onClick?: () => void; 
}

const Button: FC<ButtonProps> = ({
  title = '',
  size = 'medium',
  type = 'regular',
  left = null,
  right = null,
  children = null,
  onClick = undefined,
}) => {
  const {
    atoms: { flex },
    helpers: { styleSheets },
    theme: { colors, fontFamily },
    state: { tagsFlags: { rounded } },
  } = useAtomsGuilde(0);

  const { sml, reg, sec } = {
    sml: size === 'small',
    reg: type == 'regular',
    sec: type == 'secondary',
  };

  const styles = styleSheets({
    box: {
      ...flex.cc,
      flexDirection: 'row',
      label: 'button',
      cursor: 'pointer',
      fontFamily: fontFamily.element,
      fontSize: sml ? '0.8em' : '1rem',
      fontWeight: 600,
      padding: '1em 1.5em',
      color: reg ? colors.ngAcent : colors.acent,
      backgroundColor: reg ? colors.acent : sec ? colors.ngAcent : 'transparent',
      borderRadius: rounded ? '2em' : '0.25em',
      '&: hover': {
        backgroundColor: `${colors.acent}9D`,
      },
    },
  });

  return (
    <button css={styles.box}
      onClick={onClick}
    >
      {right}
      { title }
      { children }
      { left }
    </button>
  );
};

export default Button;
