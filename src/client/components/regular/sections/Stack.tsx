import React from 'react'
import useAtomsGuilde from '@/components/build/atoms';

const data = `< stack >
  Typescript, Javascript, Node, React & Native, Expo,
  Nestjs, Next.js, vite, git, github, css, html Figma, Ps, Ai
< /stack >`;

const Stack = () => {
  const {
    theme: { colors },
    atoms: { flex, briks, texts },
    state: { tagsFlags: { rounded } },
    helpers: { styleSheets },
  } = useAtomsGuilde(0);

  const styles = styleSheets({
    card: [
      flex.lt,
      {
        width: '100%',
        padding: ['2em 1em', '2em'],
        flexDirection: ['column', 'row'],
        backgroundColor: colors.bgPrimary,
        border: `1px solid ${colors.acent}`,
        borderRadius: rounded ? '1em' : '0.5em',
        zIndex: 2,
      }
    ],
    h3: [
      flex.lt,
      texts.b1,
      {
        zIndex: 2,
        whiteSpace: 'pre-wrap',
      }
    ],
  });

  return (
    <section css={briks.container}>
      <div css={briks.content}>
        <code css={styles.card}>
          <h2 css={styles.h3}>
            { data }
          </h2>
        </code>
      </div>
    </section>
  );
};

export default Stack;
