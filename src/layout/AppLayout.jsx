import Sidebar from '../components/Sidebar/Sidebar';
import Topbar from './Topbar';
import Dashboard from '../pages/Dashboard';

export default function AppLayout() {
  return (
    <div className="page-grid">
      <Sidebar />
      <main className="page-content">
        <Topbar />
        <Dashboard />
      </main>
    </div>
  );
}
