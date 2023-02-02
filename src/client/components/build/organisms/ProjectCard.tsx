import React, { FC } from 'react'
import useAtomsGuilde from '../atoms';

import Button from '../molecules/Button';
import Tag from '../molecules/Tag';

interface ProjectCardProps {
  index: number;
  total: number;
  title: string;
  image?: {
    src: string;
    srcSet: string;
    alt: string;
  };
  tags: string[];
  resume: string;  
  onClick: () => void; 
}

const ProjectCard: FC<ProjectCardProps> = ({
  index,
  total,
  title,
  tags,
  resume,
  image = null,
  onClick,
}) => {
  const {
    theme: { name, colors, fontFamily },
    helpers: { styleSheets },
    atoms: { flex, briks, texts },
    state: {
      mediaFlags: { md },
      tagsFlags: { rounded },
    },
  } = useAtomsGuilde(1);

  const css = styleSheets({
    box: {
      ...flex.rt,
      width: '100%',
      position: 'relative',
      label: 'content',
      flexDirection: md ? 'row' : 'column',
      flexWrap: 'wrap',
      gap: '2em',
      backgroundColor: rounded ? colors.bgPrimary : 'transparent',
      border: rounded ? `1px solid ${colors.secondary}30` : 'none',
      padding: rounded ? '1em 2em' : 0,
      borderRadius: rounded ? '0.5em' : 0,
    },
    line: {
      display: (index + 1 === total || rounded) ? 'none' : 'flex',
      position: 'absolute',
      height: '1px',
      width: '6em',
      backgroundColor: colors.primary,
      left: 'calc(50% - 3em)',
      bottom: '-1.5em',
    },
    info: {
      ...flex.rc,
      label: 'info',
      flex: 3,
    },
    counter: {
      ...texts.h4,
      'small': {
        fontSize: '0.7em',
      },
    },
    title: {
      ...texts.h3,
      paddingBottom: '0.5rem',
    },
    tags: {
      ...flex.cc,
      paddingBottom: '0.5rem',
      flexDirection: 'row',
      gap: '0.5em',
    },
    resume: {
      ...texts.b2,
      paddingBottom: '0.75rem',
    },
    aside: {
      ...flex.cc,
      flex: 2,
      borderRadius: '1em',
      backgroundColor: colors.ngAcent,
    },
    image: {
      display: 'flex',
      width: '100%',
      maxWidth: '256px',
    },
  });

  const defaultImage = {
    src: `https://storage.googleapis.com/mauro-web-bucket/images/mauro_donut.png`,
    alt: 'Donut',
  };

  return (
    <div css={css.box}>
      <main css={css.info}>
        <p css={css.counter}>{ `${index + 1}` }<small>{ `/${total}` }</small></p>
        <h3 css={css.title}>{ title }</h3>
        <ul css={css.tags}>
          { tags.map((tag) => (
            <Tag key={tag} title={tag} />
          ))}
        </ul>
        <p css={css.resume}>{ resume }</p>
        <Button title="Ver más" />
      </main>
      <aside css={css.aside}>
        <img css={css.image}
          { ...(image || defaultImage) }
        />
      </aside>
      <span css={css.line}/>
    </div>
  );
};

export default ProjectCard;
