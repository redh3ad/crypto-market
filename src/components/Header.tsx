import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchAllCryptos } from '../redux/cryptoSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

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
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  :active {
    transform: translateY(1px);
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

const PortfolioNum = styled.span`
  top: -5px;
  right: -5px;
  padding-top: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 15px;
  color: white;
  background-color: #2702ff;
  position: absolute;
  width: 20px;
  height: 20px;
  @media (max-width: 768px) {
    font-size: 13px;
    width: 18px;
    height: 18px;
  }
`;

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const itemsInPortfolio = useAppSelector((state) => state.cryptos.portfolio);
  const allCryptos = useAppSelector((state) => state.cryptos.cryptos);

  const getAllCryptos = async () => {
    await dispatch(fetchAllCryptos());
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
        {allCryptos.slice(0, 3).map((coin) => (
          <CryptoBlock key={coin.id}>
            <CryptoBlockDesc>
              <CryptoImg
                src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                alt={`coin ${coin.name}`}
              />
              <CryptoTitle>{coin.name}</CryptoTitle>
            </CryptoBlockDesc>
            <CryptoPrice>{`$${Number(coin.priceUsd).toFixed(2)}`}</CryptoPrice>
          </CryptoBlock>
        ))}
      </CryptoPopularContainer>
      <PortfolioIcon className='material-symbols-outlined'>
        {itemsInPortfolio.length ? (
          <PortfolioNum>{itemsInPortfolio.length}</PortfolioNum>
        ) : (
          ''
        )}
        business_center
      </PortfolioIcon>
    </div>
  );
};

export default Header;
