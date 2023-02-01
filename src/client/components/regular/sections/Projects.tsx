import React, { FC, ReactNode } from 'react'
import useAtomsGuilde from '../../build/atoms';
import ProjectCard from '../../build/organisms/ProjectCard';

const data = [
  {
    title: 'Quiena Inversiones',
    resume: 'Ahora invertir en Wall Street está al alcance de todos.',
    tags: ['comercial', 'lead front end'],
    image: {
      src: 'https://storage.cloud.google.com/mauro-web-bucket/images/min_quiena.png',
      srcSet: 'https://storage.cloud.google.com/mauro-web-bucket/images/min_quiena@2x.png 1.5x',
      alt: 'Daria.com',
    },
    onClick: () => {},
  },
  {
    title: 'React Style Guides',
    resume: 'Crear guías de estilos enfocados en Atomic Design en segundos.',
    tags: ['front end', 'personal'],
    image: {
      src: 'https://storage.cloud.google.com/mauro-web-bucket/images/mauro_idea.png',
      srcSet: 'https://storage.cloud.google.com/mauro-web-bucket/images/mauro_idea@2x.png 1.5x',
      alt: 'Daria.com',
    },
    onClick: () => {},
  },
  {
    title: 'Daria & Livo',
    resume: 'La mejor opción para la búsqueda y alquiler de tu nuevo hogar o emprendimiento.',
    tags: ['comercial', 'front end', 'back end'],
    image: {
      src: 'https://storage.cloud.google.com/mauro-web-bucket/images/min_daria.png',
      srcSet: 'https://storage.cloud.google.com/mauro-web-bucket/images/min_daria@2x.png 1.5x',
      alt: 'Daria.com',
    },
    onClick: () => {},
  },
];

const Proyects: FC = () => {
  const {
    theme: { colors, },
    helpers: { styleSheets },
    atoms: { flex, briks, texts },
    state: { mediaFlags: { md } },
  } = useAtomsGuilde(1);

  const styles = styleSheets({
    container: {
      ...briks.container,
      label: 'container',
      zIndex: 2,
      backgroundColor: `${colors.bgPrimary}6D`,
    },
    content: {
      ...briks.content,
      label: 'content',
      flexWrap: 'wrap',
      gap: '3em',
    },
    header: {
      ...flex.cc,
      width: '100%',
    },
  });

  return (
    <section css={styles.container}>
      <div id="projects" css={styles.content}>
        <header css={styles.header}>
          <p css={texts.d2}>{'Trabajos más relevantes'}</p>
          <h2 css={texts.h2}>{'Proyectos'}</h2>
        </header>
        { data.map((x, index) => (
          <ProjectCard
            index={index}
            key={x.title}
            title={x.title}
            onClick={x.onClick}
            total={data.length}
            resume={x.resume}
            image={x.image}
            tags={x.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Proyects;
