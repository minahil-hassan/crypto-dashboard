# 🚀 Crypto Dashboard

A modern, fully frontend-based cryptocurrency dashboard using React, ECharts, Tailwind, and neon red liquid glass styling. Live data from CoinGecko API. Hosted for free on GitHub Pages.

---

## 📁 Project Structure

```
/src
  /components
    Sidebar/
      Sidebar.jsx
      SidebarItem.jsx
    Cards/
      PriceMetricCard.jsx
      MiniStatCard.jsx
    Charts/
      LinePriceChart.jsx
      DonutAllocationChart.jsx
      BarVolumeChart.jsx
      Sparkline.jsx
    Tables/
      MarketsTable.jsx
    Widgets/
      PairSelector.jsx
      RangeToggle.jsx
      ThemeToggle.jsx
  /hooks
    useCoinGecko.js
  /layout
    AppLayout.jsx
    Topbar.jsx
  /styles
    theme.css
    glass.css
  /utils
    formatters.js
    echartsTheme.js
  App.jsx
  main.jsx
```

---

## 📌 Development Phases

### ✅ Phase 1: MVP Build (What We're Starting With)

1. **Global Theme & Styling**
   - `theme.css` — Neon red palette, glassmorphism tokens
   - `glass.css` — Reusable glass class for cards and layout panels

2. **Layout & Sidebar**
   - `AppLayout.jsx` — Grid with sidebar + main content
   - `Sidebar.jsx` — Icon-only nav styled with neon red and blur

3. **Top Cards (Live Price Data)**
   - `PriceMetricCard.jsx` — BTC, ETH, etc. with % change
   - `useCoinGecko.js` — Live fetch from CoinGecko

4. **Line Chart + Range Toggle**
   - `LinePriceChart.jsx` — ECharts line chart
   - `RangeToggle.jsx` — 24h / 7d / 30d / 90d switch

---

## 📡 Data Source

All data is pulled live from the public [CoinGecko API](https://www.coingecko.com/en/api):
- `/coins/markets` – for price, market cap, % change
- `/coins/{id}/market_chart` – for time series data (price, volume)

---

## 🌐 Hosting

The app is fully static and deployed using **GitHub Pages**.

Build & deploy:
```bash
npm run build
npm run deploy
```

---

## 🧪 Tech Stack

- React + JSX
- TailwindCSS + custom CSS variables
- ECharts for data visualization
- CoinGecko API (no backend needed)
- GitHub Pages (static hosting)

---
