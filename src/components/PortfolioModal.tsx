import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { EmptyPortfolio, ModalWrapper } from './UI/PortfolioModalUI';
import ModalPortfolioItem from './ModalPortfolioItem';

const PortfolioModal: React.FC = () => {
  const portfolioItems = useAppSelector((state) => state.cryptos.portfolio);
  return (
    <ModalWrapper>
      <h2>Portfolio</h2>
      {portfolioItems.length !== 0 ? (
        portfolioItems.map((el, index) => (
          <ModalPortfolioItem
            key={el.id}
            item={el}
            index={index}></ModalPortfolioItem>
        ))
      ) : (
        <EmptyPortfolio>Portfolio Empty</EmptyPortfolio>
      )}
    </ModalWrapper>
  );
};

export default PortfolioModal;
