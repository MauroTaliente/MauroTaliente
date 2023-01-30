import React, { FC, ReactNode } from 'react'
import useAtomsGuilde from '../../build/atoms';
import ProjectCard from '../../build/organisms/ProjectCard';

const data = [
  {
    title: 'Livo app',
    resume: 'La mejor opción para la búsqueda y alquiler de tu nuevo hogar o emprendimiento.',
    tags: ['comercial', 'front end', 'back end'],
    onClick: () => {},
  },
  {
    title: 'Quiena Inversiones',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla, et enim fugit',
    tags: ['comercial', 'lead front end'],
    onClick: () => {},
  },
  {
    title: 'React Style Guides',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla, et enim fugit',
    tags: ['front end', 'personal'],
    onClick: () => {},
  },
];


const Proyects = () => {
  const {
    theme: { name, colors, fontFamily },
    helpers: { styleSheets },
    atoms: { flex, briks, texts },
    state: { mediaFlags: { md } },
  } = useAtomsGuilde(1);

  const styles = styleSheets({
    container: {
      ...briks.container,
      label: 'container',
      zIndex: 2,
      backgroundColor: `${colors.bgSecondary}30`,
    },
    content: {
      ...briks.content,
      label: 'content',
      flexDirection: md ? 'row' : 'column',
      flexWrap: 'wrap',
      gap: '3em',
    },
    info: {
      ...flex.rc,
      label: 'info',
      flex: 3,
    },
    aside: {
      ...flex.cc,
      flex: 2,
    },
    image: {
      display: 'flex',
      width: '100%',
    },
  });

  return (
    <section css={styles.container}>
      <div css={styles.content}>
        { data.map((x, index) => (
          <ProjectCard
            index={index}
            key={x.title}
            title={x.title}
            onClick={x.onClick}
            total={data.length}
            resume={x.resume}
            tags={x.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Proyects;
