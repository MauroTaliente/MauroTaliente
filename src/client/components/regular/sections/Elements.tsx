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
  shapeA: {
    src: assets('images/shape_formal_d.svg'),
    alt: 'shape',
  },
  shapeB: {
    src: assets('images/shape_formal_b.svg'),
    alt: 'shape',
  },
  key: {
    src: assets('images/key_scope.svg'),
    alt: 'key',
  },
};

const Elements: FC<any> = ({ children }) => {
  const {
    breakPoints: bp,
    atoms: { flex },
    helpers: { styleSheets },
    state: {
      tagsFlags: { light, clean },
      themesFlags: { formal, scope },
    },
  } = useAtomsGuilde(0);
  const css = styleSheets({
    container: [flex.cc, {
      position: 'fixed',
      width: '100%',
      height: '100vh',
      zIndex: 1,
    }],
    content: [flex.cb, {
      position: 'relative',
      width: '100%',
      height: '100vh',
      maxWidth: `${bp.lg}px`,
    }],
    element: {
      display: 'flex',
      width: '50%',
    },
    threed: { display: !clean ? 'flex' : 'none' },
    donut: {
      alignSelf: light ? 'center' : 'flex-start',
      maxWidth: '256px',
    },
    disk: {
      alignSelf: 'flex-start',
      marginLeft: light ? 0 : '15%',
      maxWidth: '256px',
    },
    ball: {
      alignSelf: 'flex-end',
      maxWidth: '256px',
    },
    formal: { display: formal ? 'flex' : 'none' },
    shapeA: {
      position: 'absolute',
      top: ['512px', '48px'],
      right: ['-32px', '16px'],
      width: '480px',
    },
    shapeB: {
      display: ['none', 'none', 'flex'],
      position: 'absolute',
      top: '172px',
      left: '64px',
      width: '256px',
      opacity: 0.7,
    },
    scope: { display: scope ? 'flex' : 'none' },
    key: {
      position: 'absolute',
      top: ['512px', '96px'],
      right: '124px',
      width: '144px',
    },
  });
  return (
    <>
      { children }
      <div css={css.container}>
        <div css={[css.content, css.threed]}>
            <img css={[css.element, css.donut]} {...data.donut}/>
            <img css={[css.element, css.disk]} {...data.disk}/>
            <img css={[css.element, css.ball]} {...data.ball}/>
        </div>
        <div css={[css.content, css.formal]}>
            <img css={[css.element, css.shapeA]} {...data.shapeA}/>
            <img css={[css.element, css.shapeB]} {...data.shapeB}/>
        </div>
        <div css={[css.content, css.scope]}>
            <img css={[css.element, css.key]} {...data.key}/>
        </div>
      </div>
    </>
  );
};

export default Elements;
