import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands, selectBrands } from '@/entities/brand';
import { ErrorAlert } from '@/shared/ui';

export function BrandsError() {
  const dispatch = useDispatch();
  const { error, query } = useSelector(selectBrands);

  return <ErrorAlert message={error} onRetry={() => dispatch(fetchBrands(query))} />;
}
