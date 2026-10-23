import { FilterTextInput } from './FilterTextInput';
import { InStockSwitch } from './InStockSwitch';
import { SortSelect } from './SortSelect';

export function OffersFilter({ filter, onChange }) {
  return (
    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3">
      <FilterTextInput value={filter.text} onChange={(text) => onChange({ text })} />
      <InStockSwitch checked={filter.inStock} onChange={(inStock) => onChange({ inStock })} />
      <SortSelect value={filter.sort} onChange={(sort) => onChange({ sort })} />
    </div>
  );
}
