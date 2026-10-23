import { OffersTable } from '@/entities/offer';
import { usePagedList } from '@/shared/lib';
import { ShowMoreButton } from '@/shared/ui';

const PAGE_SIZE = 50;

export function FoundOffers({ rows }) {
  const { visible, rest, showMore } = usePagedList(rows, PAGE_SIZE);

  return (
    <div>
      <OffersTable rows={visible} />
      {rest > 0 && <ShowMoreButton rest={rest} pageSize={PAGE_SIZE} onClick={showMore} />}
    </div>
  );
}
