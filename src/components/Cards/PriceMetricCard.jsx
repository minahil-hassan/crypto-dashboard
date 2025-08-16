// src/components/Cards/PriceMetricCard.jsx
export default function PriceMetricCard({ coin }) {
  const isUp = coin.price_change_percentage_24h >= 0;
  const deltaClass = isUp ? 'text-pos' : 'text-neg';

  return (
    <div className="glass-card metric">
      <div className="icon">
        <img
          src={coin.image}
          alt={coin.symbol}
          style={{ width: 24, height: 24, objectFit: 'contain' }}
        />
      </div>
      <div>
        <div className="title">{coin.name}</div>
        <div className="sub">${coin.current_price.toLocaleString()}</div>
      </div>
      <div className={`delta ${deltaClass}`}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </div>
    </div>
  );
}
