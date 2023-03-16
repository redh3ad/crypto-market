import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoinInfoIU from '../components/UI/CoinInfoUI';
import { fetchCryptoById } from '../redux/cryptoSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import NotFound from './NotFound';
import { Circles } from 'react-loader-spinner';

const CoinInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation().pathname.split('/').pop();
  const getCryptoInfo = async (id: string = 'bitcoin') => {
    await dispatch(fetchCryptoById(id));
  };
  const cryptoInfo = useAppSelector((state) => state.cryptos.cryptoInfo);
  const error = useAppSelector((state) => state.cryptos.error);
  const loading = useAppSelector((state) => state.cryptos.loading);

  useEffect(() => {
    getCryptoInfo(location);
  }, [location]);

  if (error) {
    return <NotFound />;
  }
  if (!cryptoInfo || loading) {
    return (
      <Circles
        height='calc(90vh - 80%)'
        width='calc(90vw - 80%)'
        color='#e8e8e8'
        ariaLabel='circles-loading'
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '65vh',
          padding: '20px',
        }}
        wrapperClass=''
        visible={true}
      />
    );
  }
  return <CoinInfoIU {...cryptoInfo} />;
};

export default CoinInfo;
