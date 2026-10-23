import './StaleContent.css';

export function StaleContent({ stale, children }) {
  return (
    <div className="stale-content" data-stale={stale}>
      {children}
    </div>
  );
}
