import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { TCryptoInfo } from '../types/types';
import {
  CoinAddModalBackground,
  CoinAddModalBlock,
  CoinAddModalWrapper,
} from './UI/CryptoAddModalUI';

interface ICoinAddModal {
  crypto: TCryptoInfo | null;
  setModalStatus: Dispatch<SetStateAction<boolean>>;
}

const CoinAddModal: React.FC<ICoinAddModal> = ({ crypto, setModalStatus }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
      <CoinAddModalBlock>{crypto?.name}</CoinAddModalBlock>
    </CoinAddModalWrapper>
  );
};

export default CoinAddModal;
