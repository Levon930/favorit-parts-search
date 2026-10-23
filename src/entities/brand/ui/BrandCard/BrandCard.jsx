import { CheckIcon, StockBadge } from '@/shared/ui';
import './BrandCard.css';

export function BrandCard({ part, selected, onSelect }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`brand-card card h-100 w-100 text-start p-3 rounded-4 shadow-sm${selected ? ' is-selected' : ''}`}
    >
      <span className="d-flex justify-content-between align-items-start gap-2 w-100 mb-1">
        <span className="fw-bold fs-5 text-break">{part.brand}</span>
        {selected && (
          <span className="badge rounded-pill text-bg-primary d-inline-flex align-items-center gap-1">
            <CheckIcon /> выбран
          </span>
        )}
      </span>
      <span className="font-monospace small text-body-secondary">{part.number}</span>
      <span className="small mt-1 mb-3">{part.name}</span>
      <span className="mt-auto">
        <StockBadge count={part.count} />
      </span>
    </button>
  );
}
