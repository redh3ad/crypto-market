import React from 'react';
import {
  ItemWrapper,
  ModalButtonsBlock,
  ModalDeleteItemButton,
  ModalItemButton,
  ModalTitle,
} from './UI/ModalPortfolioItemUI';
import { TCryptoPortfolio } from '../types/types';
import { deleteCrypto, minusCrypto, plusCrypto } from '../redux/cryptoSlice';
import { useAppDispatch } from '../redux/hooks';
import { MarketCapValue } from '../utils/marketCapValue';

interface IModalPortfolioItem {
  item: TCryptoPortfolio;
  index: number;
}

const ModalPortfolioItem: React.FC<IModalPortfolioItem> = ({ item, index }) => {
  const dispatch = useAppDispatch();

  const removeCrypto = () => {
    if (window.confirm('Do you really want to remove the coin?')) {
      dispatch(deleteCrypto(item.id));
    }
  };

  return (
    <ItemWrapper color={index.toString()}>
      <span>{index + 1}.</span>
      <ModalTitle>
        {item.name} ({item.symbol})
      </ModalTitle>
      <ModalButtonsBlock>
        <ModalItemButton
          disabled={item.count === 1}
          onClick={() => dispatch(minusCrypto(item.id))}>
          -
        </ModalItemButton>
        <span>{item.count}</span>
        <ModalItemButton onClick={() => dispatch(plusCrypto(item.id))}>
          +
        </ModalItemButton>
      </ModalButtonsBlock>
      <p>Total Price: </p>
      <h4>{MarketCapValue((item.count * Number(item.priceUsd)).toString())}</h4>
      <ModalDeleteItemButton onClick={() => removeCrypto()}>
        х
      </ModalDeleteItemButton>
    </ItemWrapper>
  );
};

export default ModalPortfolioItem;
