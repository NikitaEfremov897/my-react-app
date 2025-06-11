import React from 'react';
import styles from './Preloader.module.css';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  return isLoading ? (
    <div className={styles.preloader}>
      <div className={styles.spinner}></div>
    </div>
  ) : null;
};

export default Preloader;