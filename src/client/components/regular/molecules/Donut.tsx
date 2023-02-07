import React from 'react';
import useAtomsGuilde from '@/components/build/atoms';

// TODO TRANSFORM TO STIKER
const Donut = () => {
  const {
    theme,
    breakPoints: bp,
    atoms: { flex },
    state: { mediaFlags: { sm } },
    helpers: { styleSheets, setTheme },
  } = useAtomsGuilde();

  const donut = styleSheets({
    box: {
      label: 'donut',
      position: 'relative',
      width: '100%',
      maxWidth: `${bp.lg}px`,
      zIndex: 1,
      cursor: 'pointer',
    },
    image: {
      display: sm ? 'none' : 'flex',
      position: 'absolute',
      width: '640px',
      height: '640px',
      maxWidth: '256px',
      maxHeight: '256px',
      marginTop: '-2rem',

    },
  });

  const toggleTheme = () => {
    if (theme.name === 'mauro') return setTheme('pancho');
    return setTheme('mauro');
  };
  
  return (
    <button
      css={[donut.box, flex.rt]}
      onClick={toggleTheme}
    >
      <img css={donut.image}
        src={`https://storage.googleapis.com/mauro-web-bucket/images/${theme.name}_donut.png`}
        alt="emogi de Mauro saludando"
      />
    </button>
  );
};

export default Donut;
