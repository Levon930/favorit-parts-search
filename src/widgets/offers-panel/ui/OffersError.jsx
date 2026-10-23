import { useDispatch, useSelector } from 'react-redux';
import { fetchOffers, selectOffers } from '@/entities/offer';
import { ErrorAlert } from '@/shared/ui';

export function OffersError() {
  const dispatch = useDispatch();
  const { error, query } = useSelector(selectOffers);

  return (
    <div className="p-3">
      <ErrorAlert message={error} onRetry={() => dispatch(fetchOffers(query))} />
    </div>
  );
}
