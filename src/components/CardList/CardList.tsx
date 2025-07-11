import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import styles from './CardList.module.css';

interface Comment {
  id: number;
  email: string;
  body: string;
}
interface CardListProps {
  limit?: number;
}

const CardList: React.FC<CardListProps> = ({ limit = 3 }) => {
  const [cards, setCards] = useState<Comment[]>([]);
  const [selectedDescription, setSelectedDescription] = useState('Everything you want to know in one place.');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`)
      .then((res) => res.json())
      .then((data: Comment[]) => setCards(data))
      .catch((err) => console.error(err));
  }, [limit]);

  return (
    <FeaturesSection title={selectedDescription}>
      <div className={styles.cardsContainer}>
        {cards.map(({ id, email, body }) => (
          <Card
            key={id}
            title={`Comment from ${email}`}
            description={body}
            onClick={() => setSelectedDescription(body)}
          />
        ))}
      </div>
    </FeaturesSection>
  );
};

export default CardList;
