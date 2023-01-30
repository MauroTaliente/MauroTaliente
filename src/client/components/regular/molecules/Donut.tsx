import React from 'react';
import useAtomsGuilde from '../../build/atoms';

// TODO TRANSFORM TO STIKER
const Donut = () => {
  const {
    theme,
    breakPoints: bp,
    helpers: { styleSheets, setTheme },
    atoms: { flex, briks, texts },
    state: { mediaFlags: { sm }},
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
        src={`static/assets/images/${theme.name}_donut.png`}
        alt="emogi de Mauro saludando"
      />
    </button>
  );
};

export default Donut;
