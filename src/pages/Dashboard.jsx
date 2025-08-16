import { useState } from 'react';
import useCoinGecko from '../hooks/useCoinGecko';
import PriceMetricCard from '../components/Cards/PriceMetricCard';
import LinePriceChart from '../components/Charts/LinePriceChart';

export default function Dashboard() {
  const { data: coins, loading } = useCoinGecko(
    '/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano&sparkline=true&price_change_percentage=24h'
  );

  const [selectedCoinId, setSelectedCoinId] = useState(null);
  const [range, setRange] = useState('90'); // lifted range state

  const handleToggle = (coinId) => {
    setSelectedCoinId((prev) => (prev === coinId ? null : coinId));
  };

  const activeCoin = selectedCoinId || 'bitcoin';

  return (
    <>
      {/* Top metric cards */}
      <section className="grid-cards">
        {loading || !coins
          ? Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="glass-card metric skeleton" style={{ height: 80 }} />
              ))
          : coins.map((coin) => (
              <PriceMetricCard
                key={coin.id}
                coin={coin}
                isSelected={selectedCoinId === coin.id}
                onClick={() => handleToggle(coin.id)}
              />
            ))}
      </section>

      {/* Middle row: main chart (left) + widget (right) */}
      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
        <div className="chart-glass">
          <LinePriceChart coinId={activeCoin} range={range} setRange={setRange} />
        </div>

        <div className="glass-panel">
          <h3 style={{ marginTop: 0 }}>Widget</h3>
          <div className="separator" />
          <p className="text-muted">Swap / allocation / info card area.</p>
        </div>
      </section>

      {/* Bottom row: markets table */}
      <section className="glass-panel">
        <h3 style={{ marginTop: 0 }}>Markets</h3>
        <div className="separator" />
        <div className="skeleton" style={{ height: 220 }} />
      </section>
    </>
  );
}
