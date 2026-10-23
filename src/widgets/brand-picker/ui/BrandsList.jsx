import { useSelector } from 'react-redux';
import { BrandGrid, selectBrands } from '@/entities/brand';
import { SelectBrandCard } from '@/features/select-brand';

export function BrandsList() {
  const { items } = useSelector(selectBrands);

  return (
    <BrandGrid>
      {items.map((part) => (
        <div className="col" key={part.goodsID}>
          <SelectBrandCard part={part} />
        </div>
      ))}
    </BrandGrid>
  );
}
