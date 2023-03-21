import React from 'react';
import { IconSpan, Title } from './UI/FooterUI';

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
