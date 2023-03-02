import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <div className='app-content'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
