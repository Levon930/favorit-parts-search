import { useSelector } from 'react-redux';
import { selectOffers } from '@/entities/offer';
import { useOffersFilter } from '@/features/filter-offers';
import { StaleContent } from '@/shared/ui';
import { FoundOffers } from './FoundOffers';
import { NoMatches } from './NoMatches';
import { OffersToolbar } from './OffersToolbar';

export function OffersList() {
  const { items } = useSelector(selectOffers);
  const { filter, update, rows, isStale } = useOffersFilter(items);
  const Results = rows.length ? FoundOffers : NoMatches;

  return (
    <div>
      <OffersToolbar filter={filter} onChange={update} shown={rows.length} total={items.length} />
      <StaleContent stale={isStale}>
        <Results rows={rows} />
      </StaleContent>
    </div>
  );
}
