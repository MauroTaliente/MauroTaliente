import React from 'react'
import useAtomsGuilde from '../../build/atoms';
import Button from '../../build/molecules/Button';

const Stack = () => {
  const {
    theme: { colors },
    atoms: { flex, briks, texts },
    state: {
      tagsFlags: { rounded },
      mediaFlags: { md },
    },
    helpers: { styleSheets },
  } = useAtomsGuilde(1);

  const css = styleSheets({
    card: {
      ...flex.lt,
      width: '100%',
      padding: md ? '2em' : '2em 1em',
      flexDirection: md ? 'row' : 'column',
      backgroundColor: colors.bgPrimary,
      border: `1px solid ${colors.acent}`,
      borderRadius: rounded ? '1em' : '0.5em',
      zIndex: 2,
    },
    h3: {
      ...texts.b1,
      zIndex: 2,
      whiteSpace: 'pre-wrap',
    },
  });

  return (
    <section css={briks.container}>
      <div css={briks.content}>
        <code css={css.card}>
          <h2 style={css.h3}>
{`< stack >
    Typescript, Javascript, Node, React & Native, Expo,
    Nestjs, Next.js, vite, git, github, css, html Figma, Ps, Ai
< /stack >`}
          </h2>
        </code>
      </div>
    </section>
  );
};

export default Stack;
