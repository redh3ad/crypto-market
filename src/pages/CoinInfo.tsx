import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoinInfoIU from '../components/UI/CoinInfoUI';
import { fetchCryptoById } from '../redux/cryptoSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import NotFound from './NotFound';

const CoinInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation().pathname.split('/').pop();
  const getCryptoInfo = async (id: string = 'bitcoin') => {
    await dispatch(fetchCryptoById(id));
  };
  const cryptoInfo = useAppSelector((state) => state.cryptos.cryptoInfo);
  const error = useAppSelector((state) => state.cryptos.error);
  const loading = useAppSelector((state) => state.cryptos.loading);

  console.log(cryptoInfo);

  useEffect(() => {
    getCryptoInfo(location);
  }, [location]);

  if (error) {
    return <NotFound />;
  }
  if (!cryptoInfo || loading) {
    return <div>loading</div>;
  }
  return <CoinInfoIU {...cryptoInfo} />;
};

export default CoinInfo;
