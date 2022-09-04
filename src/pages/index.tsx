import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Logo from '@site/static/img/logo.svg';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Logo style={{width: '200px', height: '200px'}} />
        </h1>
        <div style={{
          display: 'flex',
          flexDirection: 'row', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column', 
            margin: '1rem'
          }}>
            <img src="https://raw.githubusercontent.com/kanekotic/kanekotic/602c78cf2c5b673412af0d73180e28ab1655bb54/header.svg" />
            <img src="https://raw.githubusercontent.com/kanekotic/kanekotic/602c78cf2c5b673412af0d73180e28ab1655bb54/repositories.svg" />
            <img src="https://raw.githubusercontent.com/kanekotic/kanekotic/602c78cf2c5b673412af0d73180e28ab1655bb54/posts.svg" />
            <img src="https://raw.githubusercontent.com/kanekotic/kanekotic/602c78cf2c5b673412af0d73180e28ab1655bb54/languages.svg"/>
            <img src="https://raw.githubusercontent.com/kanekotic/kanekotic/602c78cf2c5b673412af0d73180e28ab1655bb54/topics.svg" />
            <img src="https://raw.githubusercontent.com/kanekotic/kanekotic/602c78cf2c5b673412af0d73180e28ab1655bb54/followup.svg" />
            <img src="https://raw.githubusercontent.com/kanekotic/kanekotic/602c78cf2c5b673412af0d73180e28ab1655bb54/reactions.svg" />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column', 
            margin: '1rem'
          }}>
            <img src="https://raw.githubusercontent.com/kanekotic/kanekotic/602c78cf2c5b673412af0d73180e28ab1655bb54/activity-community.svg" />
            <img src="https://raw.githubusercontent.com/kanekotic/kanekotic/602c78cf2c5b673412af0d73180e28ab1655bb54/stackoverflow.svg" />
            <img src="https://raw.githubusercontent.com/kanekotic/kanekotic/602c78cf2c5b673412af0d73180e28ab1655bb54/achievements.svg" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
       
      </main>
    </Layout>
  );
}
