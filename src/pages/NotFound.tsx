import React from 'react';
import styled from 'styled-components';
import SvgNotFound from '../assets/404.svg';
import SvgTitleNotFound from '../assets/404_title.svg';

const SvgImage = styled.img`
  width: calc(100vw - 65%);
  @media (max-width: 850px) {
    width: calc(100vw - 40%);
  }
  @media (max-width: 500px) {
    width: calc(100vw - 25%);
  }
`;

const SvgTitle = styled.img`
  width: calc(100vw - 80%);
  @media (max-width: 850px) {
    width: calc(100vw - 55%);
  }
  @media (max-width: 500px) {
    width: calc(100vw - 40%);
  }
`;

const NotFound: React.FC = () => {
  return (
    <div className='app-not-found'>
      <SvgImage src={SvgNotFound} alt='not found image' />
      <SvgTitle src={SvgTitleNotFound} alt='not found image' />
    </div>
  );
};
export default NotFound;
