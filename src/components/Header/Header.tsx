import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

interface HeaderProps {
  onAuthClick?: (type: 'signup' | 'login') => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <h4>Jobly</h4>
          </Link>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.forRecruiters}>For Recruiters</a>
          <button
            type="button"
            className={`${styles.signUp} ${styles.button}`}
            onClick={() => onAuthClick?.('signup')}
          >
            Sign Up
          </button>
          <button
            type="button"
            className={`${styles.logIn} ${styles.button}`}
            onClick={() => onAuthClick?.('login')}
          >
            Log In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
