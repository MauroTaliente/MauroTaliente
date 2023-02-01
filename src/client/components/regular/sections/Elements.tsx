import React, { FC } from 'react';
import useAtomsGuilde from '../../build/atoms';


const Elements: FC<any> = ({ children }) => {
  const {
    breakPoints: bp,
    theme: { colors, },
    helpers: { styleSheets },
    atoms: { flex, briks, texts },
  } = useAtomsGuilde(0);
  const css = styleSheets({
    container: {
      ...briks.container,
      position: 'fixed',
      height: '100vh',
      zIndex: 1,
    },
    content: {
      ...flex.cb,
      position: 'relative',
      width: '100%',
      height: '100vh',
      maxWidth: `${bp.lg}px`,
    },
    element: {
      display: 'flex',
      width: '50%',
      maxWidth: '256px',
    },
    donut: {
      alignSelf: 'flex-start',
    },
    disk: {
      marginLeft: '-30%',
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
            <img css={[css.element, css.donut]} src="https://storage.googleapis.com/mauro-web-bucket/images/mauro_donut.png"/>
            <img css={[css.element, css.disk]} src="https://storage.googleapis.com/mauro-web-bucket/images/mauro_disk.png"/>
            <img css={[css.element, css.ball]} src="https://storage.googleapis.com/mauro-web-bucket/images/mauro_ball.png"/>
        </div>
      </div>
    </>
  );
};

export default Elements;
