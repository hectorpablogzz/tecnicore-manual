import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduccion">
            Introducción
          </Link>
        </div>
        <br></br>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Inicio - Manual Whirlpool TecniCORE`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <br></br>
        <p style={{textAlign: 'center'}}>
        <b>
          Creado por:<br></br>
          David Martínez Rascón  A00232453<br></br>
        Kanaru Ito  A01723367<br></br>
        Héctor Pablo González Espinosa  A01722968<br></br>
        Daniel González Orta  A01276941<br></br>
        Nicolás Andre Alfaro González  A00840471<br></br></b>
        </p>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
