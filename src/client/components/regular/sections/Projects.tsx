import React, { FC, ReactNode } from 'react'
import useAtomsGuilde, { assets } from '../../build/atoms';
import ProjectCard from '../../build/organisms/ProjectCard';

const data = {
  title: 'Trabajos más relevantes',
  subtitle: 'Proyectos',
  proyects: [
  {
    title: 'Quiena Inversiones',
    resume: 'Ahora invertir en Wall Street está al alcance de todos.',
    tags: ['comercial', 'lead front end'],
    image: {
      src: assets('images/min_quiena.png'),
      srcSet: assets('images/min_quiena@2x.png 1.5x'),
      alt: 'Daria.com',
    },
    onClick: () => {},
  },
  {
    title: 'React Style Guides',
    resume: 'Crear guías de estilos enfocados en Atomic Design en segundos.',
    tags: ['front end', 'personal'],
    image: {
      src: assets('images/mauro_idea.png'),
      srcSet: assets('images/mauro_idea@2x.png 1.5x'),
      alt: 'Daria.com',
    },
    onClick: () => {},
  },
  {
    title: 'Daria & Livo',
    resume: 'La mejor opción para la búsqueda y alquiler de tu nuevo hogar o emprendimiento.',
    tags: ['comercial', 'front end', 'back end'],
    image: {
      src: assets('images/min_daria.png'),
      srcSet: assets('images/min_daria@2x.png 1.5x'),
      alt: 'Daria.com',
    },
    onClick: () => {},
  },
]};

const Proyects: FC = () => {
  const {
    theme: { colors, },
    helpers: { styleSheets },
    atoms: { flex, briks, texts },
  } = useAtomsGuilde();

  const styles = styleSheets({
    container: [briks.container, {
      zIndex: 2,
      backgroundColor: `${colors.bgPrimary}6D`,
    }],
    content: [briks.content, {
      flexWrap: 'wrap',
      gap: '3em',
    }],
    header: [flex.cc, {
      width: '100%',
    }],
  });

  return (
    <section css={styles.container}>
      <div id="projects" css={styles.content}>
        <header css={styles.header}>
          <p css={texts.d2}>{ data.title }</p>
          <h2 css={texts.h2}>{ data.subtitle }</h2>
        </header>
        {data.proyects.map((x, index) => (
          <ProjectCard
            index={index}
            key={x.title}
            title={x.title}
            onClick={x.onClick}
            total={data.proyects.length}
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
