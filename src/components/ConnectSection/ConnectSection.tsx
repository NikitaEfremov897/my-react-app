import React from 'react';
import styles from './ConnectSection.module.css';
import connectImg from '../../assets/img/image2.png';

const ConnectSection: React.FC = () => {
  return (
    <section className={styles.connect}>
      <div className={styles.container}>
        <img src={connectImg} alt="Connect with Recruiter" className={styles.connectImage} />
        <div className={styles.connectText}>
          <h1>Connect With Recruiter</h1>
          <p>
            Get instant access to a curated pool of top creative & tech talent actively seeking their next role.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;