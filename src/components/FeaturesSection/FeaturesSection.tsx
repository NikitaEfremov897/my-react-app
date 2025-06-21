import React from 'react';
import infoImg from '../../assets/img/info.png';
import styles from './FeaturesSection.module.css';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  title: string;
}

const FeaturesSection: React.FC<Props> = ({ children, title }) => {
  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <h1>
          <Link to="/cards" className={styles.titleLink}>
            {title}
          </Link>
        </h1>
        <img src={infoImg} alt="Info Image" className={styles.infoImage} />
        <div className={styles.features}>{children}</div>
      </div>
    </section>
  );
};

export default FeaturesSection;
