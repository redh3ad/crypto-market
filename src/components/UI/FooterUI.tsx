import styled from 'styled-components';

export const Title = styled.h3`
  color: #2702ff;
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 420px) {
    max-width: 90px;
    font-size: 14px;
  }
`;

export const IconSpan = styled.span`
  display: block;
  font-size: 40px;
  color: #2702ff;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  :hover {
    color: white;
    background-color: #2702ff;
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
