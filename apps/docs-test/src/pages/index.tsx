import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Design System
        </Heading>
        <p className={styles.heroSubtitle}>
          Componentes, tokens y documentación para construir productos consistentes.
        </p>
        <div className={styles.heroButtons}>
          <Link className={clsx('button button--lg', styles.primaryButton)} to="/docs/components/card-course">
            Ver componentes →
          </Link>
          <Link className={clsx('button button--lg', styles.secondaryButton)} to="/docs/intro">
            Documentación
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Design System" description="Componentes, tokens y documentación">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}