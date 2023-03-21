import styled from 'styled-components';

export const CoinAddModalWrapper = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinAddModalBackground = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: appear;
  animation-duration: 300ms;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CoinAddModalBlock = styled.div`
  background-color: white;
  z-index: 999;
  position: fixed;
  width: 60%;
  height: 50%;
  padding: 40px;

  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: slide-in;
  animation-duration: 0.5s;
  @keyframes slide-in {
    from {
      transform: translateY(-150px);
    }
    to {
      transform: translateY(0);
    }
  }
`;
