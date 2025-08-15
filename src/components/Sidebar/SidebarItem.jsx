export default function SidebarItem({ icon, active, title }) {
  return (
    <button
      className={`sidebar-dot ${active ? 'is-active' : ''}`}
      title={title}
      aria-label={title}
    >
      {icon}
    </button>
  );
}
