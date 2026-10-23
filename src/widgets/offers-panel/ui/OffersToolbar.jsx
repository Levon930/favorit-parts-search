import { OffersFilter } from '@/features/filter-offers';
import { OffersCounter } from './OffersCounter';

export function OffersToolbar({ filter, onChange, shown, total }) {
  return (
    <div className="d-flex flex-wrap align-items-center gap-2 p-3 border-bottom">
      <OffersFilter filter={filter} onChange={onChange} />
      <OffersCounter shown={shown} total={total} />
    </div>
  );
}
