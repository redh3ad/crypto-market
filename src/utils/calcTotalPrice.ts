import { MarketCapValue } from './marketCapValue';
import { TCryptoPortfolio } from './../types/types';

export const calcTotalPrice = (portfolioItems: TCryptoPortfolio[]) => {
  const sumOfCryptosPrices = portfolioItems.reduce(
    (sum, obj) => Number(obj.priceUsd) * obj.count + sum,
    0,
  );

  return MarketCapValue(sumOfCryptosPrices.toString());
};
