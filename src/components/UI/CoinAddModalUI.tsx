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
  -webkit-animation-name: appear;
  -webkit-animation-duration: 300ms;
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
  padding: 40px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: slide-in;
  animation-duration: 0.5s;
  @keyframes slide-in {
    0% {
      transform: translateY(-50vh);
    }
    100% {
      transform: translateY(0);
    }
  }
  @media (max-width: 800px) {
    padding: 27px;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
  @media (max-width: 550px) {
    width: 80%;
  }
  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 35px;
  @media (max-width: 950px) {
    font-size: 27px;
  }
  @media (max-width: 650px) {
    font-size: 20px;
  }
`;

export const ModalImg = styled.img`
  width: 65px;
  margin-right: 3%;
  @media (max-width: 950px) {
    width: 40px;
  }
  @media (max-width: 650px) {
    width: 27px;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 650px) {
    margin-bottom: 10px;
  }
`;

export const CoinAddInput = styled.input`
  border-radius: 5px;
  padding: 7px;
  font-size: 24px;
  font-family: inherit;
  background: transparent;
  color: rgba(0, 0, 0, 0.9);
  background: rgba(0, 0, 0, 0.1);
  border: none;
  margin-right: 5px;
  width: 90%;
  overflow-x: scroll;
  @media (max-width: 950px) {
    padding: 5px;
    font-size: 20px;
  }
  @media (max-width: 650px) {
    padding: 4px;
    font-size: 15px;
  }
`;

export const SymbolText = styled.span`
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 950px) {
    font-size: 23px;
  }
  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    @media (max-width: 750px) {
      flex-direction: column;
      align-items: center;
    }
  }

  span {
    font-size: 25px;
    font-weight: 500;
    margin-right: 15px;
    @media (max-width: 950px) {
      font-size: 20px;
    }
    @media (max-width: 650px) {
      font-size: 15px;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const PriceText = styled.p`
  font-size: 27px;
  font-weight: 600;
  align-self: flex-start;
  @media (max-width: 1200px) {
    margin-bottom: 20px;
  }
  @media (max-width: 950px) {
    font-size: 20px;
  }
  @media (max-width: 650px) {
    margin-bottom: 10px;
    font-size: 15px;
  }
`;

export const BuyButton = styled.button`
  font-size: 25px;
  padding: 7px 25px;
  border: none;
  color: #fff;
  border-radius: 5px;
  background-color: #2702ff;
  -webkit-box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
  :hover {
    transform: translateY(-2px);
  }
  :active {
    background-color: #2000d3;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 950px) {
    font-size: 19px;
    padding: 5px 20px;
  }
  @media (max-width: 650px) {
    padding: 2px;
    font-size: 15px;
  }
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  top: 8px;
  right: 8px;
  background-color: red;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 18px 2px rgba(34, 60, 80, 0.2);
  :hover {
    background-color: #d30101;
  }
  :active {
    transform: translateY(+1px);
  }
  @media (max-width: 700px) {
    width: 25px;
    height: 25px;
    font-size: 14px;
  }
  @media (max-width: 425px) {
    width: 20px;
    height: 20px;
    font-size: 12px;
  }
`;
