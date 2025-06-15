import React from 'react';
import MainLayout from './layouts/MainLayout';
import HeroSection from './components/HeroSection/HeroSection';
import ImageSlider from './components/ImageSlider/ImageSlider';
import QuoteSection from './components/QuoteSection/QuoteSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import CardList from './components/CardList/CardList';
import ConnectSection from './components/ConnectSection/ConnectSection';
import CtaSection from './components/CtaSection/CtaSection';

const App: React.FC = () => {
  return (
    <MainLayout>
      <>
        <HeroSection />
        <ImageSlider />
        <QuoteSection />
        <CardList />
        <ConnectSection />
        <CtaSection />
      </>
    </MainLayout>
  );
};

export default App;