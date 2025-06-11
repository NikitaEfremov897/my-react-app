import React from 'react';
import styles from './QuoteSection.module.css';
import kav from '../../assets/img/kav.png';
import ava from '../../assets/img/ava.png';

const QuoteSection: React.FC = () => {
  return (
    <section className={styles.quote}>
      <div className={styles.container}>
        <div className={styles.images}>
          <img src={kav} alt="Quote" className={styles.imgDop1} />
          <img src={ava} alt="Author" className={styles.imgDop2} />
        </div>
        <blockquote>
          <h1>
            Creating an Online Presence is Hard.<br />
            Jobly Makes it Easy for Recruiters to See you
          </h1>
          <br />
          <div className={styles.author}>
            <h4>Zhao Cui</h4>
            <p>Founder at Jobly.co</p>
          </div>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;