import React from 'react';
import styles from './CtaSection.module.css';
import ctaImg from '../../assets/img/image3.png';

const CtaSection: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Set up your profile.<br />Let jobs find you.</h1>
          <button className={styles.ctaButton}>Join Now</button>
        </div>
        <img src={ctaImg} alt="Job Image" className={styles.ctaImage} />
      </div>
    </section>
  );
};

export default CtaSection;