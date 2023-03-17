import React, { ChangeEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { TCryptoInfo } from '../../types/types';
import { getDefaultImage, MarketCapValue } from '../CryptoTableBlock';
import CoinChart from './CoinChart';

const CoinInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const CoinInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, #3d1bff, rgb(82, 177, 255));
  padding: 30px 20px;
  border-radius: 10px;
  align-items: center;
  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

const RankBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  background: rgb(24, 198, 131);
  padding: 11px 10px;
  border-radius: 11px;
  margin-right: 3%;
  @media (max-width: 1024px) {
    padding: 7px 6px;
    margin-right: 2%;
  }
  @media (max-width: 650px) {
    padding: 5px 6px;
    margin-right: 2%;
    font-size: 12px;
  }
  @media (max-width: 360px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const TitleBlock = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 30px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 650px) {
    font-size: 16px;
  }
  @media (max-width: 360px) {
    margin-bottom: 15px;
  }
`;

const CoinPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 23px;
  @media (max-width: 1024px) {
    font-size: 19px;
  }
  @media (max-width: 650px) {
    font-size: 14px;
  }
`;

const CryptoChange = styled.p`
  ${({ color }) => {
    return css`
      display: flex;
      margin-left: 15px;
      font-size: 20px;
      align-items: center;
      color: ${Number(color) > 0 ? 'rgb(24, 198, 131)' : 'red'};
      @media (max-width: 1024px) {
        font-size: 15px;
      }
      @media (max-width: 650px) {
        font-size: 11px;
      }
    `;
  }}
`;

const AnotherInfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 6;
  font-size: 18px;
  font-weight: 400;
  div + div {
    margin-left: 15px;
    @media (max-width: 425px) {
      margin-left: 0px;
    }
    @media (max-width: 360px) {
      margin-left: 15px;
    }
  }
  div {
    @media (max-width: 425px) {
      margin-top: 10px;
    }
  }
  @media (max-width: 425px) {
    flex-direction: column;
    margin-left: 20px;
  }
  @media (max-width: 360px) {
    flex-direction: row;
  }
  & p {
    font-size: 23px;
    font-weight: 500;
  }
  @media (max-width: 1024px) {
    font-size: 15px;
    & p {
      font-size: 20px;
    }
  }
  @media (max-width: 820px) {
    font-size: 11px;
    & p {
      font-size: 15px;
    }
  }
`;

const CoinAddBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #000;
  -webkit-box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  padding: 20px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 15px;
  margin-bottom: 15px;
  @media (max-width: 900px) {
    padding: 10px 10px;
  }
  p {
    font-size: 25px;
    margin-right: 1%;
    @media (max-width: 900px) {
      font-size: 18px;
    }
  }
  span {
    font-size: 25px;
    font-weight: 500;
    @media (max-width: 1000px) {
      font-size: 18px;
    }
  }
`;

const CryptoImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 2%;
  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
`;

export const CoinAddButton = styled.button`
  font-size: 20px;
  padding: 5px 20px;
  border: none;
  color: #fff;
  border-radius: 5px;
  background-color: #2702ff;
  -webkit-box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  margin-right: 2%;
  :hover {
    transform: translateY(-2px);
  }
  :active {
    background-color: #2000d3;
  }
  @media (max-width: 1000px) {
    padding: 5px 10px;
    font-size: 18px;
  }
`;

const CoinAddInput = styled.input`
  border-radius: 5px;
  padding: 7px;
  font-size: 24px;
  font-family: inherit;
  background: transparent;
  color: rgba(0, 0, 0, 0.9);
  background: rgba(0, 0, 0, 0.1);
  border: none;
  margin-right: 9px;
  flex: 3;
  @media (max-width: 1000px) {
    font-size: 20px;
    padding: 5px;
  }
`;

const CoinAddSymbol = styled.h4`
  font-size: 25px;
  margin-right: 3%;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

const CoinInfoUI: React.FC<TCryptoInfo> = ({
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
  const [input, setInput] = useState<string>('');

  return (
    <CoinInfoWrapper>
      <CoinInfoBlock>
        <RankBlock>
          <h2>{rank}</h2>
          RANK
        </RankBlock>
        <TitleBlock>
          <div>
            {name}({symbol})
          </div>
          <CoinPrice>
            ${Number(priceUsd).toFixed(2)}
            <CryptoChange color={changePercent24Hr}>
              {Number(changePercent24Hr).toFixed(2)}%
              <span className='material-symbols-outlined'>
                {`keyboard_double_arrow_${
                  Number(changePercent24Hr) > 0 ? 'up' : 'down'
                }`}
              </span>
            </CryptoChange>
          </CoinPrice>
        </TitleBlock>
        <AnotherInfoBlock>
          <div>
            Market Cap<p>{MarketCapValue(marketCapUsd)}</p>
          </div>
          <div>
            Volume (24Hr)<p>{MarketCapValue(volumeUsd24Hr)}</p>
          </div>
          <div>
            Supply
            <p>
              {MarketCapValue(supply)} {symbol}
            </p>
          </div>
        </AnotherInfoBlock>
      </CoinInfoBlock>
      <CoinAddBlock>
        <CryptoImg
          src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
          onError={(event) => getDefaultImage(event)}
        />
        <CoinAddButton>Buy</CoinAddButton>
        <CoinAddInput
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            Number(e.target.value) >= 0 ? setInput(e.target.value) : 0
          }
          type='number'
          placeholder='Enter quantity'
        />
        <CoinAddSymbol>{symbol}</CoinAddSymbol>
        <p>for</p>
        <span>
          {MarketCapValue((Number(input) * Number(priceUsd)).toFixed(2))}
        </span>
      </CoinAddBlock>
      <CoinChart />
    </CoinInfoWrapper>
  );
};

export default CoinInfoUI;
