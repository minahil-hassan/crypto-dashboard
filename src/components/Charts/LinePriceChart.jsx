// src/components/Charts/LinePriceChart.jsx
import { useState, useMemo } from 'react';
import ReactECharts from 'echarts-for-react';
import useCoinGecko from '../../hooks/useCoinGecko';
import * as echarts from 'echarts';
const RANGE_OPTIONS = ['1', '7', '30', '90']; // days param

export default function LinePriceChart({ coinId = 'bitcoin' }) {
  const [range, setRange] = useState('90');

  const { data, loading } = useCoinGecko(
    `/coins/${coinId}/market_chart?vs_currency=usd&days=${range}&interval=daily`
  );

  const prices = useMemo(() => {
    if (!data || !data.prices) return [];
    return data.prices.map(([timestamp, price]) => ({
      date: new Date(timestamp).toLocaleDateString(),
      price: price.toFixed(2),
    }));
  }, [data]);

  const option = useMemo(() => ({
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(20,22,30,0.9)',
      borderColor: 'rgba(255,39,66,0.5)',
      textStyle: { color: '#fff' },
      formatter: ({ 0: point }) =>
        `${point.axisValue}<br/>💰 $${point.data[1]}`,
    },
    xAxis: {
      type: 'category',
      data: prices.map((p) => p.date),
      axisLine: { lineStyle: { color: '#9aa0a6' } },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#9aa0a6' } },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.08)' } },
    },
    series: [
      {
        type: 'line',
        data: prices.map((p) => [p.date, p.price]),
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 3,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#ff2742' },
            { offset: 1, color: '#e3162e' },
          ]),
          shadowColor: '#ff2742aa',
          shadowBlur: 12,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255,39,66,0.25)' },
            { offset: 1, color: 'rgba(255,39,66,0.02)' },
          ]),
        },
      },
    ],
    grid: {
      left: 30,
      right: 10,
      top: 30,
      bottom: 40,
    },
  }), [prices]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="chart-header">
        <h3 style={{ margin: 0 }}>Price</h3>
        <div className="range-toggle">
          {RANGE_OPTIONS.map((opt) => (
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
        {loading || !prices.length ? (
          <div className="chart-panel skeleton" />
        ) : (
          <div className="chart-panel">
            <ReactECharts option={option} style={{ height: '100%' }} />
          </div>
        )}
      </div>
    </div>
  );
}
