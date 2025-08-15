import SidebarItem from './SidebarItem';
import {
  Home,
  LineChart,
  CandlestickChart,
  Layers,
  Inbox,
  GraduationCap
} from 'lucide-react';


const navItems = [
  { icon: <Home size={18} />, label: 'Home', active: true },
  { icon: <LineChart size={18} />, label: 'Analytics' },
  { icon: <CandlestickChart size={18} />, label: 'Markets' },
  { icon: <Layers size={18} />, label: 'Watchlist' },
  { icon: <Inbox size={18} />, label: 'Inbox' },
  { icon: <GraduationCap size={18} />, label: 'Academy' }
];

export default function Sidebar() {
  return (
    <aside className="sidebar-rail">
       {/* Logo */}
      <div className="sidebar-logo">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Logo"
        />
      </div>

      {/* Navigation items */}
      <nav className="flex flex-col items-center">
        {navItems.map((item, i) => (
          <SidebarItem
            key={i}
            icon={item.icon}
            active={item.active}
            title={item.label}
          />
        ))}
      </nav>
    </aside>
  );
}
