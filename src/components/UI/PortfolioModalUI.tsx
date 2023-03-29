import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 20;
  display: flex;
  border: none;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: slide-in-modal;
  animation-duration: 0.5s;
  @keyframes slide-in-modal {
    0% {
      transform: translateX(50vw);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
