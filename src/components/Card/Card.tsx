import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onClick }) => {
  return (
    <div
      className={styles.featureCard}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <hr />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;