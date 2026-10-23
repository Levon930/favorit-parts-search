import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBrands, resetBrands } from '@/entities/brand';
import { resetOffers } from '@/entities/offer';
import { useDebouncedValue } from '@/shared/lib';
import { DEBOUNCE_MS, MIN_LENGTH } from '../config';

export function useBrandSearch(article) {
  const dispatch = useDispatch();
  const query = useDebouncedValue(article.trim(), DEBOUNCE_MS);

  useEffect(() => {
    dispatch(resetBrands());
    dispatch(resetOffers());
    if (query.length < MIN_LENGTH) return;

    const request = dispatch(fetchBrands(query));
    return () => request.abort();
  }, [query, dispatch]);

  return article.trim() !== query;
}
