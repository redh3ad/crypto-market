import React, { useState } from 'react';
import CryptoTableBlock from '../components/CryptoTableBlock';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAppSelector } from '../redux/hooks';
import NotFound from './NotFound';
import Pagination from '../components/Pagination';
import CoinAddModal from '../components/CoinAddModal';
import { TCryptoInfo } from '../types/types';
import {
  TableItem,
  TableItemsBlock,
  TableTitleBlock,
  Title,
} from '../components/UI/MainUI';
import PortfolioModal from '../components/PortfolioModal';

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
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [modalCryptoInfo, setModalCryptoInfo] = useState<TCryptoInfo>(
    {} as TCryptoInfo,
  );

  const allCryptos = useAppSelector((state) => state.cryptos.cryptos);
  const error = useAppSelector((state) => state.cryptos.error);
  const loading = useAppSelector((state) => state.cryptos.loading);
  const modulPortfolioStatus = useAppSelector(
    (state) => state.cryptos.modalPortfolioStatus,
  );

  const addCryptoClickHandler = (crypto: TCryptoInfo) => {
    setModalStatus(true);
    setModalCryptoInfo(crypto);
  };

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
        {loading ? (
          <Skeleton
            count={20}
            height={50}
            duration={1.5}
            baseColor='#e8e8e8'
            highlightColor='#ffffff'
            enableAnimation={true}
          />
        ) : (
          allCryptos.map((crypto) => (
            <CryptoTableBlock
              key={crypto.id}
              addCryptoClickHandler={addCryptoClickHandler}
              crypto={crypto}
            />
          ))
        )}
      </TableItemsBlock>
      <Pagination />
      {modalStatus && (
        <CoinAddModal
          crypto={modalCryptoInfo}
          setModalStatus={setModalStatus}
        />
      )}
      {modulPortfolioStatus && <PortfolioModal />}
    </div>
  );
};

export default Main;
