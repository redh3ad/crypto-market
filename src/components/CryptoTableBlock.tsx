import React, { SyntheticEvent } from 'react';
import styled, { css } from 'styled-components';
import { addPortfolio } from '../redux/cryptoSlice';
import { useAppDispatch } from '../redux/hooks';
import { TCryptoInfo } from '../types/types';
import defaultImage from '../assets/logo_mark.png';
import { Link } from 'react-router-dom';

const CryptoBlock = styled.div`
  ${({ color }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 5px;
      background-color: ${Number(color) % 2 ? 'white' : '#f8f8f8'};
      transition: all 0.3s ease;
      :hover {
        z-index: 3;
        -webkit-box-shadow: 0px 0px 10px 3px rgba(34, 60, 80, 0.16);
        -moz-box-shadow: 0px 0px 10px 3px rgba(34, 60, 80, 0.16);
        box-shadow: 0px 0px 10px 3px rgba(34, 60, 80, 0.16);
      }
    `;
  }}
`;

const CryptoRank = styled.p`
  font-weight: 400;
  min-width: 10px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  flex: 2;
  @media (max-width: 460px) {
    font-size: 12px;
  }
`;

const CryptoDescBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  :hover {
    p {
      text-decoration: underline;
    }
  }
`;

const CryptoImg = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 5px;
  @media (max-width: 460px) {
    width: 30px;
    height: 30px;
  }
`;

const CryptoName = styled.p`
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 460px) {
    font-size: 15px;
  }
`;

const CryptoSymbol = styled.p`
  font-weight: 400;
  line-height: 16px;
  font-size: 15px;
  @media (max-width: 460px) {
    font-size: 12px;
    line-height: 13px;
  }
`;

const CryptoParams = styled.p`
  text-align: right;
  flex: 4;

  @media (max-width: 460px) {
    font-size: 12px;
  }

  :nth-child(3) {
    flex: 3;
    margin-right: 5px;
  }
  :nth-child(4) {
    flex: 3;
    @media (max-width: 1150px) {
      display: none;
    }
  }
  :nth-child(5) {
    @media (max-width: 1150px) {
      display: none;
    }
  }
  :nth-child(6) {
    flex: 3;
  }
  :nth-child(7) {
    @media (max-width: 850px) {
      display: none;
    }
  }
`;

const CryptoChange = styled.p`
  ${({ color }) => {
    return css`
      flex: 4;
      text-align: right;
      color: ${Number(color) > 0 ? 'green' : 'red'};
      @media (max-width: 460px) {
        font-size: 12px;
      }
      @media (max-width: 375px) {
        font-size: 10px;
      }
      @media (max-width: 365px) {
        display: none;
      }
    `;
  }}
`;

const CryptoAddButton = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 5px;
  border-radius: 10px;
  font-size: 30px;
  color: #2702ff;
  cursor: pointer;
  transition: all 0.5s ease;
  @media (max-width: 460px) {
    font-size: 25px;
  }
  :hover {
    color: white;
    background-color: #2702ff;
  }
`;

export const MarketCapValue = (marketCap: string) => {
  const num = Number(marketCap);
  if (num > 1000000000) {
    return `$${(num / 1000000000).toFixed(2)}b`;
  }
  if (num > 1000000) {
    return `$${(num / 1000000).toFixed(2)}m`;
  }
  if (num > 1000) {
    return `$${(num / 1000).toFixed(2)}k`;
  } else {
    return `$${num.toFixed(2)}`;
  }
};

export const getDefaultImage = (
  event: SyntheticEvent<HTMLImageElement, Event>,
) => {
  const img = event.target as HTMLImageElement;
  img.src = defaultImage;
};

const CryptoTableBlock: React.FC<TCryptoInfo> = ({
  id,
  rank,
  symbol,
  name,
  supply,
  maxSupply,
  marketCapUsd,
  volumeUsd24Hr,
  priceUsd,
  changePercent24Hr,
  vwap24Hr,
}) => {
  const dispatch = useAppDispatch();

  const addCryptoInPortfolio = () => {
    const cryptoInfo = {
      id,
      rank,
      symbol,
      name,
      supply,
      maxSupply,
      marketCapUsd,
      volumeUsd24Hr,
      priceUsd,
      changePercent24Hr,
      vwap24Hr,
    };
    dispatch(addPortfolio(cryptoInfo));
  };

  return (
    <CryptoBlock color={rank}>
      <CryptoRank>{rank}</CryptoRank>
      <Link to={`/assets/${id}`} style={{ flex: 6, textDecoration: 'none' }}>
        <CryptoDescBlock>
          <CryptoImg
            src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
            onError={(event) => getDefaultImage(event)}
          />
          <div>
            <CryptoName>{name}</CryptoName>
            <CryptoSymbol>{symbol}</CryptoSymbol>
          </div>
        </CryptoDescBlock>
      </Link>

      <CryptoParams>{`$${Number(priceUsd).toFixed(2)}`}</CryptoParams>
      <CryptoParams>{MarketCapValue(marketCapUsd)}</CryptoParams>
      <CryptoParams>{`$${Number(vwap24Hr).toFixed(2)}`}</CryptoParams>
      <CryptoParams>
        <CryptoAddButton
          onClick={addCryptoInPortfolio}
          className='material-symbols-outlined'>
          add_card
        </CryptoAddButton>
      </CryptoParams>
      <CryptoParams>{MarketCapValue(volumeUsd24Hr)}</CryptoParams>
      <CryptoChange color={changePercent24Hr}>
        {Number(changePercent24Hr).toFixed(2)}%
      </CryptoChange>
    </CryptoBlock>
  );
};

export default CryptoTableBlock;
