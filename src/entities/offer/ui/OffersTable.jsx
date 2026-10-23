import { memo } from 'react';
import { OfferRow } from './OfferRow';

export const OffersTable = memo(function OffersTable({ rows }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle mb-0">
        <thead className="table-light">
          <tr>
            <th>Производитель</th>
            <th className="d-none d-md-table-cell">Название</th>
            <th className="d-none d-md-table-cell">Ближайшая отгрузка</th>
            <th className="text-end">Цена</th>
            <th className="text-end d-none d-md-table-cell">Остаток</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((offer) => (
            <OfferRow key={offer.id} offer={offer} />
          ))}
        </tbody>
      </table>
    </div>
  );
});
