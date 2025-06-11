import React, { useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';
import hero1 from '../../assets/img/Rectangle2.jpg';
import hero2 from '../../assets/img/image 4.png';
import hero3 from '../../assets/img/image 5.jpg';

const images = [hero1, hero2, hero3];

const ImageSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.bloktem}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Hero"
          className={`${styles.heroImage} ${index === activeIndex ? styles.active : ''}`}
        />
      ))}
    </section>
  );
};

export default ImageSlider;