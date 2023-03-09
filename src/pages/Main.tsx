import React, { useEffect } from 'react';
import styled from 'styled-components';
import CryptoTableBlock from '../components/CryptoTableBlock';
import { fetchAllCryptos } from '../redux/cryptoSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import NotFound from './NotFound';
import ReactPaginate from 'react-paginate';
import Pagination from '../components/Pagination';

const Title = styled.h1`
  font-size: 33px;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    font-size: 23px;
    text-align: center;

    margin: 15px 0 15px 0;
  }
`;

const TableTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f8f8f8;
  padding: 10px 5px;
`;

const TableItem = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  flex: 4;
  text-align: right;

  @media (max-width: 460px) {
    font-size: 12px;
  }
  :nth-child(1) {
    flex: 2;
    text-align: left;
  }
  :nth-child(2) {
    flex: 6;
    text-align: left;
  }
  :nth-child(3) {
    flex: 3;
    margin-right: 5px;
  }
  :nth-child(4) {
    flex: 3;
    @media (max-width: 1150px) {
      display: none;
    }
  }
  :nth-child(5) {
    @media (max-width: 1150px) {
      display: none;
    }
  }
  :nth-child(6) {
    flex: 3;
    margin-right: 9px;
  }
  :nth-child(7) {
    @media (max-width: 850px) {
      display: none;
    }
  }
  :nth-child(8) {
    @media (max-width: 625px) {
      font-size: 10px;
    }
    @media (max-width: 365px) {
      display: none;
    }
  }
`;

const TableItemsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const tableTitleContent = [
  'Rank',
  'Name',
  'Price',
  'MarketCap',
  'VWAP(24Hr)',
  'Buy',
  'Volume(24Hr)',
  'Change(24Hr)',
];

const Main: React.FC = () => {
  const allCryptos = useAppSelector((state) => state.cryptos.cryptos);
  const error = useAppSelector((state) => state.cryptos.error);

  if (error) {
    return <NotFound />;
  }

  return (
    <div className='app-main'>
      <Title>Market trends</Title>
      <TableTitleBlock>
        {tableTitleContent.map((item, index) => (
          <TableItem key={index}>{item}</TableItem>
        ))}
      </TableTitleBlock>
      <TableItemsBlock>
        {allCryptos.map((crypto) => (
          <CryptoTableBlock key={crypto.id} {...crypto} />
        ))}
      </TableItemsBlock>
      <Pagination />
    </div>
  );
};

export default Main;
