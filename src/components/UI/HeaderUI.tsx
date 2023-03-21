import styled from 'styled-components';

export const Title = styled.h1`
  color: #2702ff;
  font-size: 27px;
  margin-right: 15px;
  @media (max-width: 800px) {
    font-size: 20px;
    margin-right: 10px;
    max-width: 100px;
  }
  @media (max-width: 420px) {
    font-size: 15px;
    margin-right: 5px;
    max-width: 55px;
  }
`;

export const CryptoPopularContainer = styled.div`
  display: flex;
`;

export const CryptoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    border-left: 1px solid black;
    padding-left: 10px;
    margin-left: 11px;
  }

  @media (max-width: 400px) {
    :last-child {
      display: none;
    }
  }
`;

export const CryptoImg = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 800px) {
    width: 25px;
    height: 25px;
  }
`;

export const CryptoBlockDesc = styled.div`
  display: flex;
  align-items: center;
`;

export const CryptoTitle = styled.h5`
  font-size: 15px;
  :hover {
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const CryptoPrice = styled.p`
  font-size: 13px;
  @media (max-width: 800px) {
    font-size: 11px;
  }
  @media (max-width: 400px) {
    font-size: 9px;
  }
`;

export const PortfolioIcon = styled.span`
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: block;
  margin-left: 15px;
  padding: 5px;
  border-radius: 10px;
  font-size: 40px;
  color: #2702ff;
  cursor: pointer;
  transition: all 0.5s ease;
  :hover {
    color: white;
    background-color: #2702ff;
  }
  :active {
    transform: translateY(1px);
  }
  @media (max-width: 800px) {
    font-size: 35px;
    margin-left: 10px;
  }
  @media (max-width: 420px) {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const PortfolioNum = styled.span`
  top: -12px;
  right: -30px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 14px;
  color: white;
  background-color: #2702ff;
  position: absolute;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 11px;
  }
`;
