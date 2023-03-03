import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <div className='app-content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
