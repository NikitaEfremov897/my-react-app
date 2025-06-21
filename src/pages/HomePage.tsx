import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import QuoteSection from '../components/QuoteSection/QuoteSection';
import CardList from '../components/CardList/CardList';
import ConnectSection from '../components/ConnectSection/ConnectSection';
import CtaSection from '../components/CtaSection/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ImageSlider />
      <QuoteSection />
      <CardList limit={3} />
      <ConnectSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
