import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AuthModal from '../components/AuthModal/AuthModal';
import Preloader from '../components/Preloader/Preloader';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'signup' | 'login'>('signup');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <Header
        onAuthClick={(type) => {
          setModalType(type);
          setIsModalOpen(true);
        }}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modalType={modalType} />
    </>
  );
};

export default MainLayout;
