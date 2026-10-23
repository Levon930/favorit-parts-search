import { useCallback, useDeferredValue, useMemo, useState } from 'react';
import { filterOffers } from './filterOffers';

const INITIAL_FILTER = { text: '', inStock: false, sort: 'default' };

export function useOffersFilter(offers) {
  const [filter, setFilter] = useState(INITIAL_FILTER);
  const deferredFilter = useDeferredValue(filter);
  const rows = useMemo(() => filterOffers(offers, deferredFilter), [offers, deferredFilter]);
  const update = useCallback((patch) => setFilter((current) => ({ ...current, ...patch })), []);

  return { filter, update, rows, isStale: filter !== deferredFilter };
}
