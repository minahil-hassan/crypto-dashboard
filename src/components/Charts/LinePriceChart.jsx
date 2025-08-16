import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { useMemo } from 'react';
import useCoinGecko from '../../hooks/useCoinGecko';

const chartColors = {
  bitcoin: '#ff2742',
  ethereum: '#19fff2',
  solana: '#8a5bff',
  cardano: '#ffc857',
};

const toUTCDate = (ts) => new Date(ts).toISOString().slice(0, 10);

export default function LinePriceChart({ coinId = 'bitcoin', range, setRange }) {
  const endpoint = useMemo(() => {
    const interval = range === '1' ? 'hourly' : 'daily';
    return `/coins/${coinId}/market_chart?vs_currency=usd&days=${range}&interval=${interval}`;
  }, [coinId, range]);

  const { data, loading, error } = useCoinGecko(endpoint, { refreshInterval: 600000 });

  const xCats = useMemo(
    () => (data?.prices ? data.prices.map(([ts]) => toUTCDate(ts)) : []),
    [data]
  );

  const series = useMemo(() => {
    if (!data?.prices) return [];
    return [
      {
        name: coinId,
        type: 'line',
        showSymbol: false,
        smooth: true,
        data: data.prices.map(([ts, price]) => [toUTCDate(ts), price]),
        lineStyle: {
          width: 3,
          color: chartColors[coinId] || '#ccc',
          shadowColor: (chartColors[coinId] || '#ccc') + 'aa',
          shadowBlur: 12,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: (chartColors[coinId] || '#ccc') + '44' },
            { offset: 1, color: 'transparent' },
          ]),
        },
      },
    ];
  }, [data, coinId]);

  const option = useMemo(
    () => ({
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(20,22,30,0.9)',
        borderColor: 'rgba(255,39,66,0.5)',
        textStyle: { color: '#fff' },
        valueFormatter: (val) =>
          typeof val === 'number' ? `$${val.toLocaleString()}` : val,
      },
      legend: {
        data: [coinId],
        textStyle: { color: '#e8eaf1' },
        top: 8,
      },
      xAxis: {
        type: 'category',
        data: xCats,
        axisLine: { lineStyle: { color: '#9aa0a6' } },
        axisTick: { show: false },
      },
      yAxis: {
        type: 'value',
        axisLine: { lineStyle: { color: '#9aa0a6' } },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.08)' } },
      },
      grid: { left: 30, right: 10, top: 50, bottom: 40 },
      series,
    }),
    [xCats, series, coinId]
  );

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="chart-header">
        <h3 style={{ margin: 0, textTransform: 'capitalize' }}>
          {coinId} — Price
        </h3>
        <div className="range-toggle">
          {['1', '7', '30', '90'].map((opt) => (
            <button
              key={opt}
              className={`range-chip ${range === opt ? 'is-active' : ''}`}
              onClick={() => setRange(opt)}
            >
              {opt === '1' ? '24h' : `${opt}d`}
            </button>
          ))}
        </div>
      </div>

      <div className="chart-body">
        {error ? (
          <div className="chart-panel error">Error loading data.</div>
        ) : loading || !data?.prices ? (
          <div className="chart-panel skeleton" />
        ) : (
          <div className="chart-panel">
            <ReactECharts
              key={`${coinId}-${range}`}
              option={option}
              notMerge={true}
              style={{ height: '100%' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
