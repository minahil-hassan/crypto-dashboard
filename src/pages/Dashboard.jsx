export default function Dashboard() {
  return (
    <>
      {/* Top 4 metric cards row (placeholder for now) */}
      <section className="grid-cards">
        <div className="glass-card metric">
          <div className="icon">₿</div>
          <div>
            <div className="title">Bitcoin</div>
            <div className="sub">$--</div>
          </div>
          <div className="delta text-pos">+--%</div>
        </div>

        <div className="glass-card metric">
          <div className="icon">Ξ</div>
          <div>
            <div className="title">Ethereum</div>
            <div className="sub">$--</div>
          </div>
          <div className="delta text-neg">--%</div>
        </div>

        <div className="glass-card metric">
          <div className="icon">◎</div>
          <div>
            <div className="title">Solana</div>
            <div className="sub">$--</div>
          </div>
          <div className="delta text-pos">+--%</div>
        </div>

        <div className="glass-card metric">
          <div className="icon">A</div>
          <div>
            <div className="title">Cardano</div>
            <div className="sub">$--</div>
          </div>
          <div className="delta text-neg">--%</div>
        </div>
      </section>

      {/* Middle row: main chart (left) + widget (right) */}
      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
        <div className="chart-glass">
          <div className="chart-header">
            <h3 style={{ margin: 0 }}>Price</h3>
            <div className="range-toggle">
              <button className="range-chip is-active">90d</button>
              <button className="range-chip">30d</button>
              <button className="range-chip">7d</button>
              <button className="range-chip">24h</button>
            </div>
          </div>
          <div className="chart-body">
            <div className="chart-panel skeleton" />
          </div>
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
