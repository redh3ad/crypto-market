import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { TCryptoInfo } from '../types/types';

const CryptoBlock = styled.div`
  ${({ color }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 5px;
      background-color: ${color};
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
  flex: 6;
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
      color: ${color};
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

const CryptoTableBlock: React.FC<TCryptoInfo> = ({
  id,
  rank,
  symbol,
  name,
  priceUsd,
  volumeUsd24Hr,
  marketCapUsd,
  changePercent24Hr,
  vwap24Hr,
}) => {
  const MarketCapValue = (marketCap: string) => {
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

  return (
    <CryptoBlock color={Number(rank) % 2 ? 'white' : '#f8f8f8'}>
      <CryptoRank>{rank}</CryptoRank>
      <CryptoDescBlock>
        <CryptoImg
          src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
        />
        <div>
          <CryptoName>{name}</CryptoName>

          <CryptoSymbol>{symbol}</CryptoSymbol>
        </div>
      </CryptoDescBlock>
      <CryptoParams>{`$${Number(priceUsd).toFixed(2)}`}</CryptoParams>
      <CryptoParams>{MarketCapValue(marketCapUsd)}</CryptoParams>
      <CryptoParams>{`$${Number(vwap24Hr).toFixed(2)}`}</CryptoParams>
      <CryptoParams>
        <CryptoAddButton className='material-symbols-outlined'>
          add_card
        </CryptoAddButton>
      </CryptoParams>

      <CryptoParams>{MarketCapValue(volumeUsd24Hr)}</CryptoParams>
      <CryptoChange color={Number(changePercent24Hr) > 0 ? 'green' : 'red'}>
        {Number(changePercent24Hr).toFixed(2)}%
      </CryptoChange>
    </CryptoBlock>
  );
};

export default CryptoTableBlock;
