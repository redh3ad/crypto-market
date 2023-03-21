import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AnotherInfoBlock,
  CircleLoading,
  CoinAddBlock,
  CoinAddButton,
  CoinAddInput,
  CoinAddSymbol,
  CoinInfoBlock,
  CoinInfoWrapper,
  CoinPrice,
  CryptoChange,
  CryptoImg,
  RankBlock,
  TitleBlock,
} from '../components/UI/CoinInfoUI';
import { addPortfolio, fetchCryptoById } from '../redux/cryptoSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import NotFound from './NotFound';

import { getDefaultImage } from '../utils/getDefaultImage';
import { MarketCapValue } from '../utils/marketCapValue';
import CoinChart from '../components/UI/CoinChart';

const CoinInfo: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const location = useLocation().pathname.split('/').pop();

  const dispatch = useAppDispatch();
  const cryptoInfo = useAppSelector((state) => state.cryptos.cryptoInfo);
  const error = useAppSelector((state) => state.cryptos.error);
  const loading = useAppSelector((state) => state.cryptos.loading);

  const getCryptoInfo = async (id: string = 'bitcoin') => {
    await dispatch(fetchCryptoById(id));
  };

  const buyCrypto = () => {
    if (cryptoInfo) {
      const cryptoInfoAdd = {
        ...cryptoInfo,
        count: Number(input),
      };
      dispatch(addPortfolio(cryptoInfoAdd));
    }
    setInput('');
  };

  useEffect(() => {
    getCryptoInfo(location);
  }, [location]);

  if (error) {
    return <NotFound />;
  }
  if (!cryptoInfo || loading) {
    return CircleLoading;
  }
  return (
    <CoinInfoWrapper>
      <CoinInfoBlock>
        <RankBlock>
          <h2>{cryptoInfo.rank}</h2>
          RANK
        </RankBlock>
        <TitleBlock>
          <div>
            {cryptoInfo.name}({cryptoInfo.symbol})
          </div>
          <CoinPrice>
            ${Number(cryptoInfo.priceUsd).toFixed(2)}
            <CryptoChange color={cryptoInfo.changePercent24Hr}>
              {Number(cryptoInfo.changePercent24Hr).toFixed(2)}%
              <span className='material-symbols-outlined'>
                {`keyboard_double_arrow_${
                  Number(cryptoInfo.changePercent24Hr) > 0 ? 'up' : 'down'
                }`}
              </span>
            </CryptoChange>
          </CoinPrice>
        </TitleBlock>
        <AnotherInfoBlock>
          <div>
            Market Cap<p>{MarketCapValue(cryptoInfo.marketCapUsd)}</p>
          </div>
          <div>
            Volume (24Hr)<p>{MarketCapValue(cryptoInfo.volumeUsd24Hr)}</p>
          </div>
          <div>
            Supply
            <p>
              {MarketCapValue(cryptoInfo.supply)} {cryptoInfo.symbol}
            </p>
          </div>
        </AnotherInfoBlock>
      </CoinInfoBlock>
      <CoinAddBlock>
        <CryptoImg
          src={`https://assets.coincap.io/assets/icons/${cryptoInfo.symbol.toLowerCase()}@2x.png`}
          onError={(event) => getDefaultImage(event)}
        />
        <CoinAddButton onClick={buyCrypto}>Buy</CoinAddButton>
        <CoinAddInput
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            Number(e.target.value) >= 0 ? setInput(e.target.value) : 0
          }
          type='number'
          placeholder='Enter quantity'
        />
        <CoinAddSymbol>{cryptoInfo.symbol}</CoinAddSymbol>
        <p>for</p>
        <span>
          {MarketCapValue(
            (Number(input) * Number(cryptoInfo.priceUsd)).toFixed(2),
          )}
        </span>
      </CoinAddBlock>
      <CoinChart nameCoin={cryptoInfo.name} symbolCoin={cryptoInfo.symbol} />
    </CoinInfoWrapper>
  );
};

export default CoinInfo;
