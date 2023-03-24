import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { addPortfolio } from '../redux/cryptoSlice';
import { useAppDispatch } from '../redux/hooks';
import { TCryptoInfo } from '../types/types';
import { getDefaultImage } from '../utils/getDefaultImage';
import { MarketCapValue } from '../utils/marketCapValue';
import {
  CoinAddModalBackground,
  CoinAddModalBlock,
  CoinAddModalWrapper,
  InputBlock,
  ModalImg,
  ModalTitle,
  TitleBlock,
  SymbolText,
  CoinAddInput,
  PriceBlock,
  PriceText,
  BuyButton,
  CloseButton,
} from './UI/CoinAddModalUI';

interface ICoinAddModal {
  crypto: TCryptoInfo;
  setModalStatus: Dispatch<SetStateAction<boolean>>;
}

const CoinAddModal: React.FC<ICoinAddModal> = ({ crypto, setModalStatus }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState<string>('');
  const dispatch = useAppDispatch();

  const buyCrypto = () => {
    if (crypto) {
      const cryptoInfoAdd = {
        ...crypto,
        count: Number(input),
      };
      dispatch(addPortfolio(cryptoInfoAdd));
    }
    setInput('');
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const _event = e as MouseEvent & {
        path: Node[];
      };
      if (
        modalRef.current &&
        _event.composedPath().includes(modalRef.current)
      ) {
        setModalStatus(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <CoinAddModalWrapper>
      <CoinAddModalBackground ref={modalRef}></CoinAddModalBackground>
      <CoinAddModalBlock>
        <TitleBlock>
          <ModalImg
            src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
            onError={(event) => getDefaultImage(event)}
          />
          <ModalTitle>{crypto.name}</ModalTitle>
        </TitleBlock>
        <InputBlock>
          <CoinAddInput
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              Number(e.target.value) >= 0 ? setInput(e.target.value) : 0
            }
            type='number'
            placeholder='Enter quantity'
          />
          <SymbolText>{crypto.symbol}</SymbolText>
        </InputBlock>
        <PriceBlock>
          <div>
            <span>for</span>
            <PriceText>
              {MarketCapValue(
                (Number(input) * Number(crypto.priceUsd)).toFixed(2),
              )}
            </PriceText>
          </div>
          <BuyButton onClick={buyCrypto}>Buy</BuyButton>
        </PriceBlock>
        <CloseButton onClick={() => setModalStatus(false)}>X</CloseButton>
      </CoinAddModalBlock>
    </CoinAddModalWrapper>
  );
};

export default CoinAddModal;
