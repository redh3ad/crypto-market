export const MarketCapValue = (marketCap: string) => {
  const num = Number(marketCap);
  if (num > 1000000000) {
    return `$${(num / 1000000000).toFixed(2)}b`;
  }
  if (num > 1000000) {
    return `$${(num / 1000000).toFixed(2)}m`;
  }
  if (num > 1000) {
    return `$${(num / 1000).toFixed(2)}k`;
  } else {
    return `$${num.toFixed(2)}`;
  }
};
