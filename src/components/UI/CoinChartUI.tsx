import styled, { css } from 'styled-components';

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 0px;
`;

export const ChartButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 50px 0px 50px;
`;

export const ChartInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
  justify-content: space-around;
  padding: 0 10px 20px 10px;
  @media (max-width: 350px) {
    justify-content: flex-start;
  }
`;

export const ChartInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    font-size: 13px;
  }
  @media (max-width: 445px) {
    min-width: 160px;
  }
  p {
    margin-bottom: 10px;
    font-weight: 500;
  }
  span {
    display: flex;
    margin-bottom: 10px;
    color: grey;
    p:not(.last-p) {
      margin-left: 10px;
      margin-bottom: 0px;
      color: black;
    }
  }
`;

export const CryptoChange = styled.p`
  ${({ color }) => {
    return css`
      margin-left: 10px;
      margin-bottom: 0px;
      color: ${Number(color) > 0 ? 'rgb(24, 198, 131)' : 'red'};
    `;
  }}
`;
