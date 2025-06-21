import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '../components/CardList/CardList';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  return <CardList limit={limit} />;
};

export default CardsPage;
