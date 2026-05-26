import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ToolItem = {
  title: string;
  emoji: string;
  description: ReactNode;
  role: string;
};

const ToolList: ToolItem[] = [
  {
    title: 'Figma',
    emoji: '🎨',
    role: 'Diseño · DS',
    description: 'Fuente de verdad visual. Componentes, variantes y tokens definidos por el equipo de diseño.',
  },
  {
    title: 'Token Studio + Style Dictionary',
    emoji: '🔄',
    role: 'DS',
    description: 'Sincronización automática de tokens desde Figma al código. Estándar W3C de design tokens.',
  },
  {
    title: 'shadcn + React',
    emoji: '⚙️',
    role: 'DS · Devs',
    description: 'Primitivos base con accesibilidad resuelta. El código vive en el repo, sin dependencias externas.',
  },
  {
    title: 'Storybook',
    emoji: '📖',
    role: 'Todos los roles',
    description: 'Componentes desarrollados y probados en aislamiento. Documentación automática desde el código.',
  },
  {
    title: 'Chromatic',
    emoji: '🔍',
    role: 'DS · QA',
    description: 'Deploy automático de Storybook. Visual testing por cada PR para detectar cambios no intencionados.',
  },
  {
    title: 'Docusaurus',
    emoji: '📚',
    role: 'Todos los roles',
    description: 'Documentación centralizada de uso. Props, variantes, do/don\'t y snippets de implementación.',
  },
];

function Tool({title, emoji, description, role}: ToolItem) {
  return (
    <div className={clsx('col col--4')} style={{marginBottom: '2rem'}}>
      <div className={styles.toolCard}>
        <div className={styles.toolEmoji}>{emoji}</div>
        <Heading as="h3" className={styles.toolTitle}>{title}</Heading>
        <span className={styles.toolRole}>{role}</span>
        <p className={styles.toolDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Stack de herramientas</Heading>
          <p>Cada herramienta tiene un rol específico en el ciclo de vida del design system.</p>
        </div>
        <div className="row">
          {ToolList.map((props, idx) => (
            <Tool key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}