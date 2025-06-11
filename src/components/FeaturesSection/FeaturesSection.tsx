import React from 'react';
import styles from './FeaturesSection.module.css';
import infoImg from '../../assets/img/info.png';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Professional Profile',
      description:
        'We know finding the right job is stressful, so we\'ve made it simple...',
    },
    {
      title: 'Best Portfolio',
      description:
        'We know finding the right job is stressful, so we\'ve made it simple...',
    },
    {
      title: 'Powerful Resume',
      description:
        'We know finding the right job is stressful, so we\'ve made it simple...',
    },
  ];

  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <h1>Everything you want to know in one place.</h1>
        <img src={infoImg} alt="Info Image" className={styles.infoImage} />
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <hr />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;