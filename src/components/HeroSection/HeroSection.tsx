import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Candidates with Creative & <br /> Engineering Backgrounds</h1>
        <h4>
          This is the place to show yourself and land entry level jobs at cutting-edge companies.
          <br />
          Launch your career here.
        </h4>
        <button className={styles.buttonJoin}>Join Now</button>
        <p>Looking for candidate's? Hire now</p>
      </div>
    </section>
  );
};

export default HeroSection;