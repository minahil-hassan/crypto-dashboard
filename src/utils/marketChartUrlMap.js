// src/utils/marketChartUrlMap.js

const marketChartUrlMap = {
  bitcoin: {
    '1': '/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly',
    '7': '/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily',
    '30': '/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily',
    '90': '/coins/bitcoin/market_chart?vs_currency=usd&days=90&interval=daily',
  },
  ethereum: {
    '1': '/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=hourly',
    '7': '/coins/ethereum/market_chart?vs_currency=usd&days=7&interval=daily',
    '30': '/coins/ethereum/market_chart?vs_currency=usd&days=30&interval=daily',
    '90': '/coins/ethereum/market_chart?vs_currency=usd&days=90&interval=daily',
  },
  solana: {
    '1': '/coins/solana/market_chart?vs_currency=usd&days=1&interval=hourly',
    '7': '/coins/solana/market_chart?vs_currency=usd&days=7&interval=daily',
    '30': '/coins/solana/market_chart?vs_currency=usd&days=30&interval=daily',
    '90': '/coins/solana/market_chart?vs_currency=usd&days=90&interval=daily',
  },
  cardano: {
    '1': '/coins/cardano/market_chart?vs_currency=usd&days=1&interval=hourly',
    '7': '/coins/cardano/market_chart?vs_currency=usd&days=7&interval=daily',
    '30': '/coins/cardano/market_chart?vs_currency=usd&days=30&interval=daily',
    '90': '/coins/cardano/market_chart?vs_currency=usd&days=90&interval=daily',
  },
};

export default marketChartUrlMap;
