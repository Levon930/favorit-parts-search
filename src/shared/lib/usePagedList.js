import { useMemo, useState } from 'react';

export function usePagedList(items, pageSize) {
  const [limit, setLimit] = useState(pageSize);
  const visible = useMemo(() => items.slice(0, limit), [items, limit]);

  return {
    visible,
    rest: items.length - visible.length,
    showMore: () => setLimit((current) => current + pageSize),
  };
}
