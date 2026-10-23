import { useSelector } from 'react-redux';
import { selectBrands } from '@/entities/brand';
import { EmptyState, Panel } from '@/shared/ui';

export function BrandsNotFound() {
  const { query } = useSelector(selectBrands);

  return (
    <Panel>
      <EmptyState title="Ничего не найдено">
        По артикулу «{query}» у поставщика нет деталей. Проверьте номер.
      </EmptyState>
    </Panel>
  );
}
