import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBrandsView } from '@/entities/brand';
import { selectOffersView } from '@/entities/offer';
import { SearchForm, useBrandSearch } from '@/features/search-by-article';
import { StaleContent } from '@/shared/ui';
import { AppHeader } from '@/widgets/app-header';
import { BrandPicker } from '@/widgets/brand-picker';
import { OffersPanel } from '@/widgets/offers-panel';

export function PartsSearchPage() {
  const [article, setArticle] = useState('');
  const isTyping = useBrandSearch(article);
  const hasBrands = useSelector(selectBrandsView) !== 'idle';
  const hasOffers = useSelector(selectOffersView) !== 'idle';

  return (
    <div>
      <AppHeader />
      <main className="container py-4">
        <SearchForm value={article} onChange={setArticle} />
        <StaleContent stale={isTyping}>
          {hasBrands && <BrandPicker />}
          {hasOffers && <OffersPanel />}
        </StaleContent>
      </main>
    </div>
  );
}
