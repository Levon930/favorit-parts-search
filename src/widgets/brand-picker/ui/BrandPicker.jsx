import { useSelector } from 'react-redux';
import { BrandGridSkeleton, selectBrandsCount, selectBrandsView } from '@/entities/brand';
import { SectionTitle } from '@/shared/ui';
import { BrandsError } from './BrandsError';
import { BrandsList } from './BrandsList';
import { BrandsNotFound } from './BrandsNotFound';

const CONTENT = {
  loading: BrandGridSkeleton,
  failed: BrandsError,
  empty: BrandsNotFound,
  list: BrandsList,
};

export function BrandPicker() {
  const Content = CONTENT[useSelector(selectBrandsView)];
  const count = useSelector(selectBrandsCount);

  return (
    <section className="mb-4" aria-label="Производители">
      <SectionTitle step={1} aside={count > 0 && `найдено: ${count}`}>
        Выберите производителя
      </SectionTitle>
      <Content />
    </section>
  );
}
