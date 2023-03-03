import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  color: #2702ff;
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 420px) {
    max-width: 90px;
    font-size: 14px;
  }
`;

const IconSpan = styled.span`
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

const Footer: React.FC = () => {
  return (
    <div className='app-footer'>
      <Title>crypto market</Title>
      <a
        href='https://github.com/redh3ad/crypto-market'
        target='
      _blank'>
        <IconSpan className='material-symbols-outlined'>recent_actors</IconSpan>{' '}
      </a>
      <IconSpan
        onClick={() => window.scrollTo(0, 0)}
        className='material-symbols-outlined'>
        arrow_circle_up
      </IconSpan>
    </div>
  );
};

export default Footer;
