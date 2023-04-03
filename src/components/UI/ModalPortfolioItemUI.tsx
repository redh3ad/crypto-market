import styled, { css } from 'styled-components';

export const ItemWrapper = styled.div`
  ${({ color }) => {
    return css`
      border-radius: 8px;
      display: flex;
      align-items: center;
      background-color: ${Number(color) % 2 ? 'white' : '#f8f8f8'};
      padding: 10px;

      span {
        margin-right: 10px;
        @media (max-width: 500px) {
          font-size: 12px;
        }
        @media (max-width: 375px) {
          font-size: 10px;
        }
      }
      p {
        margin-right: 20px;
        flex: 1;
        text-align: end;
        @media (max-width: 680px) {
          font-size: 13px;
        }
        @media (max-width: 500px) {
          font-size: 11px;
        }
        @media (max-width: 425px) {
          display: none;
        }
      }
      h4 {
        text-align: end;
        flex: 1;
        @media (max-width: 680px) {
          font-size: 15px;
        }
        @media (max-width: 500px) {
          font-size: 12px;
        }
        @media (max-width: 375px) {
          font-size: 10px;
        }
      }
    `;
  }}
`;

export const ModalButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  @media (max-width: 340px) {
    flex-direction: column;
  }
`;

export const ModalItemButton = styled.button`
  ${({ disabled }) => {
    return css`
      border: none;
      cursor: pointer;
      color: #fff;
      background-color: ${disabled ? 'grey' : 'rgb(39, 2, 255)'};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-right: 10px;
      transition: all 0.2s ease;
      :hover {
        transform: ${disabled ? '' : 'translateY(-1px)'};
      }
      :active {
        background-color: ${disabled ? '' : '#2000d3'};
        transform: ${disabled ? '' : 'translateY(0px)'};
      }
    `;
  }}
`;

export const ModalTitle = styled.h3`
  margin-right: 10px;
  flex: 2;
  text-align: start;
  @media (max-width: 680px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

export const ModalDeleteItemButton = styled.button`
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: #b4b4b4;
  border-radius: 50%;
  width: 19px;
  height: 19px;
  transition: all 0.2s ease;
  margin-left: 10px;
  :hover {
    transform: translateY(-1px);
  }
  :active {
    background-color: grey;
    transform: translateY(0px);
  }
`;
