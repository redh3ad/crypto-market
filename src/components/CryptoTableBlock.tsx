import React from 'react';
import { TCryptoInfo } from '../types/types';
import { Link } from 'react-router-dom';
import { MarketCapValue } from '../utils/marketCapValue';
import {
  CryptoAddButton,
  CryptoBlock,
  CryptoChange,
  CryptoDescBlock,
  CryptoImg,
  CryptoName,
  CryptoParams,
  CryptoRank,
  CryptoSymbol,
} from './UI/CryptoTableBlock';

interface ICryptoTableBlock {
  crypto: TCryptoInfo;
  addCryptoClickHandler: (crypto: TCryptoInfo) => void;
}

const CryptoTableBlock: React.FC<ICryptoTableBlock> = ({
  crypto,
  addCryptoClickHandler,
}) => {
  function getDefaultImage(
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ): void {
    throw new Error('Function not implemented.');
  }

  return (
    <CryptoBlock color={crypto.rank}>
      <CryptoRank>{crypto.rank}</CryptoRank>
      <Link
        to={`/assets/${crypto.id}`}
        style={{ flex: 6, textDecoration: 'none' }}>
        <CryptoDescBlock>
          <CryptoImg
            src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
            onError={(event) => getDefaultImage(event)}
          />
          <div>
            <CryptoName>{crypto.name}</CryptoName>
            <CryptoSymbol>{crypto.symbol}</CryptoSymbol>
          </div>
        </CryptoDescBlock>
      </Link>
      <CryptoParams>{`$${Number(crypto.priceUsd).toFixed(2)}`}</CryptoParams>
      <CryptoParams>{MarketCapValue(crypto.marketCapUsd)}</CryptoParams>
      <CryptoParams>{`$${Number(crypto.vwap24Hr).toFixed(2)}`}</CryptoParams>
      <CryptoParams>
        <CryptoAddButton
          onClick={() => addCryptoClickHandler(crypto)}
          className='material-symbols-outlined'>
          add_card
        </CryptoAddButton>
      </CryptoParams>
      <CryptoParams>{MarketCapValue(crypto.volumeUsd24Hr)}</CryptoParams>
      <CryptoChange color={crypto.changePercent24Hr}>
        {Number(crypto.changePercent24Hr).toFixed(2)}%
      </CryptoChange>
    </CryptoBlock>
  );
};

export default CryptoTableBlock;
