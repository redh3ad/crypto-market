import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  color: #2702ff;
  font-size: 27px;
  margin-right: 15px;
  @media (max-width: 800px) {
    font-size: 20px;
    margin-right: 10px;
    max-width: 100px;
  }
  @media (max-width: 420px) {
    font-size: 15px;
    margin-right: 5px;
    max-width: 55px;
  }
`;

const CryptoPopularContainer = styled.div`
  display: flex;
`;

const CryptoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    border-left: 1px solid black;
    padding-left: 10px;
    margin-left: 11px;
  }

  @media (max-width: 400px) {
    :last-child {
      display: none;
    }
  }
`;

const CryptoImg = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 800px) {
    width: 25px;
    height: 25px;
  }
`;

const CryptoBlockDesc = styled.div`
  display: flex;
  align-items: center;
`;

const CryptoTitle = styled.h5`
  font-size: 15px;
  @media (max-width: 800px) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const CryptoPrice = styled.p`
  font-size: 13px;
  @media (max-width: 800px) {
    font-size: 11px;
  }
  @media (max-width: 400px) {
    font-size: 9px;
  }
`;

const PortfolioIcon = styled.span`
  display: block;
  margin-left: 15px;
  padding: 5px;
  border-radius: 10px;
  font-size: 40px;
  color: #2702ff;
  cursor: pointer;
  transition: all 0.5s ease;
  :hover {
    color: white;
    background-color: #2702ff;
  }
  @media (max-width: 800px) {
    font-size: 35px;
    margin-left: 10px;
  }
  @media (max-width: 420px) {
    font-size: 28px;
    margin-left: 5px;
  }
`;

const TempCryptoInfo = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    rank: '1',
    name: 'Bitcoin',
    priceUsd: '6929.8217756835584756',
    iconUrl: 'https://assets.coincap.io/assets/icons/btc@2x.png',
  },
  {
    id: 'ethereum',
    rank: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    priceUsd: '404.9774667045200896',
    iconUrl: 'https://assets.coincap.io/assets/icons/eth@2x.png',
  },
  {
    id: 'tether',
    rank: '3',
    symbol: 'USDT',
    name: 'Tether',
    priceUsd: '1.0009115584940656',
    iconUrl: 'https://assets.coincap.io/assets/icons/usdt@2x.png',
  },
];

const Header: React.FC = () => {
  return (
    <div className='app-header'>
      <Link to='/'>
        <Title>Crypto Market</Title>
      </Link>
      <CryptoPopularContainer>
        {TempCryptoInfo.map((coin) => (
          <CryptoBlock key={coin.id}>
            <CryptoBlockDesc>
              <CryptoImg src={coin.iconUrl} alt={`coin ${coin.name}`} />
              <CryptoTitle>{coin.name}</CryptoTitle>
            </CryptoBlockDesc>
            <CryptoPrice>{`$${Number(coin.priceUsd).toFixed(2)}`}</CryptoPrice>
          </CryptoBlock>
        ))}
      </CryptoPopularContainer>
      <PortfolioIcon className='material-symbols-outlined'>
        business_center
      </PortfolioIcon>
    </div>
  );
};

export default Header;
