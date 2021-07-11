import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Substrate',
    Svg: require('../../static/img/substrate.svg').default,
    description: (
      <>
        Substrate is a modular framework that enables you to create purpose-built blockchains by composing custom or pre-built components.
      </>
    ),
  },
  {
    title: 'Rust',
    Svg: require('../../static/img/rust.svg').default,
    description: (
      <>A language empowering everyone to build reliable and efficient software.</>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
