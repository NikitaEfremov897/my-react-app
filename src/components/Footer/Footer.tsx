import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footAll}>
        <div className={styles.footerRight}>
          <p className={styles.footerText}>Jobly.co</p>
          <p className={styles.footerText}>We support a pool of diverse young creatives and engineers.</p>
          <p className={styles.footerText}>© 2023 Jobly.co Copyright and All rights reserved.</p>
        </div>
        <div className={styles.footerLeft}>
          <a href="#terms" className={styles.footerLink}>Terms and Conditions</a> ·{' '}
          <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;