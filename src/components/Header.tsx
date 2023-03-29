import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopThreeCryptos, changeModalStatus } from '../redux/cryptoSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  CryptoBlock,
  CryptoBlockDesc,
  CryptoImg,
  CryptoPopularContainer,
  CryptoPrice,
  CryptoTitle,
  PortfolioIcon,
  PortfolioNum,
  Title,
} from './UI/HeaderUI';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector((state) => state.cryptos.portfolioPrice);
  const topThreeCryptos = useAppSelector((state) => state.cryptos.topThree);

  const getAllCryptos = async () => {
    await dispatch(fetchTopThreeCryptos());
  };

  useEffect(() => {
    getAllCryptos();
  }, []);

  return (
    <div className='app-header'>
      <Link to='/'>
        <Title>Crypto Market</Title>
      </Link>
      <CryptoPopularContainer>
        {topThreeCryptos.map((coin) => (
          <CryptoBlock key={coin.id}>
            <CryptoBlockDesc>
              <Link
                to={`/assets/${coin.id}`}
                className='app-header__image-link'>
                <CryptoImg
                  src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                  alt={`coin ${coin.name}`}></CryptoImg>
              </Link>
              <Link to={`/assets/${coin.id}`}>
                <CryptoTitle>{coin.name}</CryptoTitle>
              </Link>
            </CryptoBlockDesc>
            <CryptoPrice>{`$${Number(coin.priceUsd).toFixed(2)}`}</CryptoPrice>
          </CryptoBlock>
        ))}
      </CryptoPopularContainer>
      <PortfolioIcon
        onClick={() => dispatch(changeModalStatus())}
        className='material-symbols-outlined'>
        {totalPrice ? <PortfolioNum>{totalPrice}</PortfolioNum> : ''}
        business_center
      </PortfolioIcon>
    </div>
  );
};

export default Header;
