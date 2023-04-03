import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 80%;
  padding: 15px;
  top: 110%;
  right: 0;
  border-radius: 10px;
  background: #fff;
  border: none;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: slide-in-modal;
  animation-duration: 0.5s;

  h2 {
    text-align: center;
  }

  @keyframes slide-in-modal {
    0% {
      transform: translateY(-25vw);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 945px) {
    width: 100%;
  }
`;

export const EmptyPortfolio = styled.h4`
  text-align: center;
  padding: 30px;
  background: #d8d8d8;
  border-radius: 10px;
`;
