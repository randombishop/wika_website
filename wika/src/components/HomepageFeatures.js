import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: "If you're a generous internet consumer",
    image: 'img/splash1.png',
    description: (
      <>
        Like your favorite pages and reward the authors and previous likers.
      </>
    ),
  },
  {
    title: "If you authored a cool web page",
    image: 'img/splash2.png',
    description: (
      <>
        Register it in one public decentralized database, whether your content lives in youtube, facebook, medium or any other internet place.<br/>
        Wika users will be able to reward you directly.
      </>
    ),
  },
  {
    title: "If you want a better internet",
    image: 'img/splash3.png',
    description: (
      <>
        Join and use the Wika Network to build a clean, public and non-intrusive database.<br/>
        The Wika Blockchain will empower new search engines and recommendation systems that respect your privacy and are 100% transparent.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <img className={styles.featureImg} alt={title} src={image} />
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
