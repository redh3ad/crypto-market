import React from 'react';
import styled from 'styled-components';
import CryptoTableBlock from '../components/CryptoTableBlock';
import { TCryptoInfo } from '../types/types';

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

const TempCryptoInfo: TCryptoInfo[] = [
  {
    id: 'bitcoin',
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    supply: '17193925.0000000000000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '119150835874.4699281625807300',
    volumeUsd24Hr: '2927959461.1750323310959460',
    priceUsd: '6929.8217756835584756',
    changePercent24Hr: '-0.8101417214350335',
    vwap24Hr: '7175.0663247679233209',
  },
  {
    id: 'ethereum',
    rank: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    supply: '101160540.0000000000000000',
    maxSupply: null,
    marketCapUsd: '40967739219.6612727047843840',
    volumeUsd24Hr: '1026669440.6451482672850841',
    priceUsd: '404.9774667045200896',
    changePercent24Hr: '-0.0999626159535347',
    vwap24Hr: '415.3288028454417241',
  },
  {
    id: 'ripple',
    rank: '3',
    symbol: 'XRP',
    name: 'XRP',
    supply: '39299874590.0000000000000000',
    maxSupply: '100000000000.0000000000000000',
    marketCapUsd: '16517228249.2902868380922380',
    volumeUsd24Hr: '149328134.5032677889393019',
    priceUsd: '0.4202870472643482',
    changePercent24Hr: '-1.9518258685302665',
    vwap24Hr: '0.4318239230821224',
  },
  {
    id: 'bitcoin-cash',
    rank: '4',
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    supply: '17278438.0000000000000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '11902454455.1536127997298894',
    volumeUsd24Hr: '287075418.5202079328968427',
    priceUsd: '688.8617162705108413',
    changePercent24Hr: '-1.5016094894459434',
    vwap24Hr: '711.6276356693412774',
  },
  {
    id: 'eos',
    rank: '5',
    symbol: 'EOS',
    name: 'EOS',
    supply: '906245118.0000000000000000',
    maxSupply: '1000000000.0000000000000000',
    marketCapUsd: '6327688685.5053582732768780',
    volumeUsd24Hr: '373717579.0872289136334689',
    priceUsd: '6.9823147841833210',
    changePercent24Hr: '-0.2487845516123365',
    vwap24Hr: '7.0345139617072947',
  },
  {
    id: 'stellar',
    rank: '6',
    symbol: 'XLM',
    name: 'Stellar',
    supply: '18770261348.0000000000000000',
    maxSupply: null,
    marketCapUsd: '4395265468.8039656236913164',
    volumeUsd24Hr: '28186508.6814478496347773',
    priceUsd: '0.2341611226032443',
    changePercent24Hr: '-3.4735437955390772',
    vwap24Hr: '0.2412082330289685',
  },
  {
    id: 'litecoin',
    rank: '7',
    symbol: 'LTC',
    name: 'Litecoin',
    supply: '57731482.0000000000000000',
    maxSupply: '84000000.0000000000000000',
    marketCapUsd: '4234484929.6430299360674272',
    volumeUsd24Hr: '226037979.6802283949921417',
    priceUsd: '73.3479339685586096',
    changePercent24Hr: '-1.3117992300270579',
    vwap24Hr: '75.1659221835912383',
  },
  {
    id: 'cardano',
    rank: '8',
    symbol: 'ADA',
    name: 'Cardano',
    supply: '25927070538.0000000000000000',
    maxSupply: '45000000000.0000000000000000',
    marketCapUsd: '3342664439.1225859377289638',
    volumeUsd24Hr: '32741914.1355823452856056',
    priceUsd: '0.1289256506716951',
    changePercent24Hr: '0.0079476596654900',
    vwap24Hr: '0.1310244403993645',
  },
  {
    id: 'tether',
    rank: '9',
    symbol: 'USDT',
    name: 'Tether',
    supply: '2437140346.0000000000000000',
    maxSupply: null,
    marketCapUsd: '2439361941.9836262753306976',
    volumeUsd24Hr: '2257075318.3468977492592858',
    priceUsd: '1.0009115584940656',
    changePercent24Hr: '0.1166673925934855',
    vwap24Hr: '1.0089194093830538',
  },
  {
    id: 'iota',
    rank: '10',
    symbol: 'MIOTA',
    name: 'IOTA',
    supply: '2779530283.0000000000000000',
    maxSupply: '2779530283.0000000000000000',
    marketCapUsd: '2403573545.0265314556170093',
    volumeUsd24Hr: '39603276.8327675426897915',
    priceUsd: '0.8647409095440071',
    changePercent24Hr: '-5.2486878154413840',
    vwap24Hr: '0.8988184197561133',
  },
  {
    id: 'tron',
    rank: '11',
    symbol: 'TRX',
    name: 'TRON',
    supply: '65748111645.0000000000000000',
    maxSupply: null,
    marketCapUsd: '1917190870.7283154920500970',
    volumeUsd24Hr: '97380139.3492488689277134',
    priceUsd: '0.0291596339843186',
    changePercent24Hr: '-1.4317319488825126',
    vwap24Hr: '0.0298449568758824',
  },
  {
    id: 'ethereum-classic',
    rank: '12',
    symbol: 'ETC',
    name: 'Ethereum Classic',
    supply: '103587261.0000000000000000',
    maxSupply: null,
    marketCapUsd: '1872331046.2321777062805653',
    volumeUsd24Hr: '271312448.7837505736339966',
    priceUsd: '18.0749160481439673',
    changePercent24Hr: '7.9255849247329682',
    vwap24Hr: '17.7522606149076111',
  },
  {
    id: 'monero',
    rank: '13',
    symbol: 'XMR',
    name: 'Monero',
    supply: '16266706.0000000000000000',
    maxSupply: null,
    marketCapUsd: '1859277791.0153721203827764',
    volumeUsd24Hr: '18264886.3953255107108103',
    priceUsd: '114.2995878216137994',
    changePercent24Hr: '-1.6999607633523112',
    vwap24Hr: '116.6537590537407372',
  },
  {
    id: 'neo',
    rank: '14',
    symbol: 'NEO',
    name: 'NEO',
    supply: '65000000.0000000000000000',
    maxSupply: '100000000.0000000000000000',
    marketCapUsd: '1715338547.8519569500000000',
    volumeUsd24Hr: '45167493.9521492713845788',
    priceUsd: '26.3898238131070300',
    changePercent24Hr: '-3.8257893431296119',
    vwap24Hr: '27.3569824306887655',
  },
  {
    id: '1',
    rank: '15',
    symbol: 'DASH',
    name: 'Dash',
    supply: '8242673.0000000000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1670555643.8854250757627516',
    volumeUsd24Hr: '181128160.3807899897235348',
    priceUsd: '202.6715901365279292',
    changePercent24Hr: '-1.2160970272440424',
    vwap24Hr: '210.5909154125158495',
  },
  {
    id: '2',
    rank: '15',
    symbol: 'DASH',
    name: 'Dash',
    supply: '8242673.0000000000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1670555643.8854250757627516',
    volumeUsd24Hr: '181128160.3807899897235348',
    priceUsd: '202.6715901365279292',
    changePercent24Hr: '-1.2160970272440424',
    vwap24Hr: '210.5909154125158495',
  },
  {
    id: '3',
    rank: '15',
    symbol: 'DASH',
    name: 'Dash',
    supply: '8242673.0000000000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1670555643.8854250757627516',
    volumeUsd24Hr: '181128160.3807899897235348',
    priceUsd: '202.6715901365279292',
    changePercent24Hr: '-1.2160970272440424',
    vwap24Hr: '210.5909154125158495',
  },
  {
    id: '4',
    rank: '15',
    symbol: 'DASH',
    name: 'Dash',
    supply: '8242673.0000000000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1670555643.8854250757627516',
    volumeUsd24Hr: '181128160.3807899897235348',
    priceUsd: '202.6715901365279292',
    changePercent24Hr: '-1.2160970272440424',
    vwap24Hr: '210.5909154125158495',
  },
  {
    id: '5',
    rank: '15',
    symbol: 'DASH',
    name: 'Dash',
    supply: '8242673.0000000000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1670555643.8854250757627516',
    volumeUsd24Hr: '181128160.3807899897235348',
    priceUsd: '202.6715901365279292',
    changePercent24Hr: '-1.2160970272440424',
    vwap24Hr: '210.5909154125158495',
  },
  {
    id: '6',
    rank: '15',
    symbol: 'DASH',
    name: 'Dash',
    supply: '8242673.0000000000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1670555643.8854250757627516',
    volumeUsd24Hr: '181128160.3807899897235348',
    priceUsd: '202.6715901365279292',
    changePercent24Hr: '-1.2160970272440424',
    vwap24Hr: '210.5909154125158495',
  },
  {
    id: '7',
    rank: '15',
    symbol: 'DASH',
    name: 'Dash',
    supply: '8242673.0000000000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1670555643.8854250757627516',
    volumeUsd24Hr: '181128160.3807899897235348',
    priceUsd: '202.6715901365279292',
    changePercent24Hr: '-1.2160970272440424',
    vwap24Hr: '210.5909154125158495',
  },
  {
    id: '8',
    rank: '15',
    symbol: 'DASH',
    name: 'Dash',
    supply: '8242673.0000000000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1670555643.8854250757627516',
    volumeUsd24Hr: '181128160.3807899897235348',
    priceUsd: '202.6715901365279292',
    changePercent24Hr: '-1.2160970272440424',
    vwap24Hr: '210.5909154125158495',
  },
  {
    id: '9',
    rank: '15',
    symbol: 'DASH',
    name: 'Dash',
    supply: '8242673.0000000000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1670555643.8854250757627516',
    volumeUsd24Hr: '181128160.3807899897235348',
    priceUsd: '202.6715901365279292',
    changePercent24Hr: '-1.2160970272440424',
    vwap24Hr: '210.5909154125158495',
  },
  {
    id: '10',
    rank: '15',
    symbol: 'DASH',
    name: 'Dash',
    supply: '8242673.0000000000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1670555643.8854250757627516',
    volumeUsd24Hr: '181128160.3807899897235348',
    priceUsd: '202.6715901365279292',
    changePercent24Hr: '-1.2160970272440424',
    vwap24Hr: '210.5909154125158495',
  },
  {
    id: '11',
    rank: '15',
    symbol: 'DASH',
    name: 'Dash',
    supply: '8242673.0000000000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1670555643.8854250757627516',
    volumeUsd24Hr: '181128160.3807899897235348',
    priceUsd: '202.6715901365279292',
    changePercent24Hr: '-1.2160970272440424',
    vwap24Hr: '210.5909154125158495',
  },
];

const Main: React.FC = () => {
  return (
    <div className='app-main'>
      <Title>Market trends</Title>
      <TableTitleBlock>
        {tableTitleContent.map((item, index) => (
          <TableItem key={index}>{item}</TableItem>
        ))}
      </TableTitleBlock>
      <TableItemsBlock>
        {TempCryptoInfo.map((crypto) => (
          <CryptoTableBlock key={crypto.id} {...crypto} />
        ))}
      </TableItemsBlock>
    </div>
  );
};

export default Main;
