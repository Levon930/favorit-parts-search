import { useSelector } from 'react-redux';
import { OffersTableSkeleton, selectOffers, selectOffersView } from '@/entities/offer';
import { Panel, SectionTitle } from '@/shared/ui';
import { OffersError } from './OffersError';
import { OffersList } from './OffersList';
import { OffersNotFound } from './OffersNotFound';

const CONTENT = {
  loading: OffersTableSkeleton,
  failed: OffersError,
  empty: OffersNotFound,
  list: OffersList,
};

export function OffersPanel() {
  const Content = CONTENT[useSelector(selectOffersView)];
  const { query } = useSelector(selectOffers);

  return (
    <section aria-label="Аналоги и предложения">
      <SectionTitle step={2}>
        Аналоги и предложения{' '}
        <span className="fw-normal text-body-secondary">
          {query.brand} {query.number}
        </span>
      </SectionTitle>
      <Panel className="overflow-hidden">
        <Content />
      </Panel>
    </section>
  );
}
