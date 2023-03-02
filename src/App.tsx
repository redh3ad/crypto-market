import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import CoinInfo from './pages/CoinInfo';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Main />} />
        <Route path='/assets/:id' element={<CoinInfo />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
