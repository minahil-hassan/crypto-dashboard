import { Search, Bell, RefreshCcw, User, ChevronDown } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="topbar">
      {/* Left: Pair pill / section title (inspired by screenshot) */}
      <div className="glass-card" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <div className="live-dot" />
        <span style={{ fontWeight: 700 }}>Live</span>
        <span className="text-muted">• Market Overview</span>
      </div>

      {/* Search */}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="input" style={{ display: 'flex', alignItems: 'center', gap: 8, width: 280 }}>
            <Search size={16} className="text-muted" />
            <input
              aria-label="Search"
              placeholder="Search coins…"
              style={{ background: 'transparent', border: 0, outline: 'none', color: 'var(--text)', width: '100%' }}
            />
          </div>
        </div>

        {/* Quick actions */}
        <button className="sidebar-btn" title="Refresh">
          <RefreshCcw size={18} />
        </button>
        <button className="sidebar-btn" title="Notifications">
          <Bell size={18} />
        </button>

        {/* Profile */}
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 28, height: 28, borderRadius: '50%',
              display: 'grid', placeItems: 'center',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <User size={16} />
          </div>
          <span style={{ fontWeight: 600 }}>Guest</span>
          <ChevronDown size={16} className="text-muted" />
        </div>
      </div>
    </header>
  );
}
