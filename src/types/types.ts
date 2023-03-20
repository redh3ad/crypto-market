export type TCryptoInfo = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
};

export type TCryptoPortfolio = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  count: number;
};

export type TCryptoChart = {
  priceUsd: string;
  time: number;
  date: string;
};

export type TCryptoChartInfo = {
  high: string;
  low: string;
  average: string;
  change: string;
};
