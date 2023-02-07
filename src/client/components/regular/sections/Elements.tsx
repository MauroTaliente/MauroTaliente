import React, { FC } from 'react';
import useAtomsGuilde, { assets } from '@/components/build/atoms';

const data = {
  donut: {
    src: assets('images/mauro_donut.png'),
    alt: 'donut violeta',
  },
  disk: {
    src: assets('images/mauro_disk.png'),
    alt: 'disco violeta',
  },
  ball: {
    src: assets('images/mauro_ball.png'),
    alt: 'bola violeta',
  },
};

const Elements: FC<any> = ({ children }) => {
  const {
    breakPoints: bp,
    atoms: { flex },
    helpers: { styleSheets },
    state: { tagsFlags: { light, clean } },
  } = useAtomsGuilde(0);
  const css = styleSheets({
    container: [flex.cc, {
      position: 'fixed',
      width: '100%',
      height: '100vh',
      zIndex: 1,
    }],
    content: [flex.cb, {
      display: !clean ? 'flex' : 'none',
      position: 'relative',
      width: '100%',
      height: '100vh',
      maxWidth: `${bp.lg}px`,
    }],
    element: {
      display: 'flex',
      width: '50%',
      maxWidth: '256px',
    },
    donut: {
      alignSelf: light ? 'center' : 'flex-start',
    },
    disk: {
      alignSelf: 'flex-start',
      marginLeft: light ? 0 : '15%',
    },
    ball: {
      alignSelf: 'flex-end',
    },
  });
  return (
    <>
      { children }
      <div css={css.container}>
        <div css={css.content}>
            <img css={[css.element, css.donut]} {...data.donut}/>
            <img css={[css.element, css.disk]} {...data.disk}/>
            <img css={[css.element, css.ball]} {...data.ball}/>
        </div>
      </div>
    </>
  );
};

export default Elements;
