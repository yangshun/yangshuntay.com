import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title} | Personal Homepage`}>
      <header className={classnames('hero', styles.header)}>
        <div className="container">
          <img
            src="https://avatars0.githubusercontent.com/u/1315101?s=400&v=4"
            alt="logo"
            style={{
              borderRadius: '50%',
              maxWidth: 96,
            }}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
