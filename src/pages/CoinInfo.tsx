import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchCryptoById } from '../redux/cryptoSlice';
import { useAppDispatch } from '../redux/hooks';

const CoinInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation().pathname.split('/').pop();
  const getCryptoInfo = async (id: string = 'bitcoin') => {
    await dispatch(fetchCryptoById(id));
  };

  useEffect(() => {
    getCryptoInfo(location);
  }, [location]);

  return <div>CoinInfo</div>;
};

export default CoinInfo;
