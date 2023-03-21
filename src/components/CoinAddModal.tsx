import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TCryptoInfo } from '../types/types';

const CoinAddModalWrapper = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinAddModalBlock = styled.div`
  background-color: white;
  width: 60%;
  height: 50%;
  padding: 40px;
`;

interface ICoinAddModal {
  crypto: TCryptoInfo | null;
  setModulStatus: Dispatch<SetStateAction<boolean>>;
}

const CoinAddModal: React.FC<ICoinAddModal> = ({ crypto, setModulStatus }) => {
  return (
    <CoinAddModalWrapper onClick={() => setModulStatus(false)}>
      <CoinAddModalBlock>{crypto?.name}</CoinAddModalBlock>
    </CoinAddModalWrapper>
  );
};

export default CoinAddModal;
