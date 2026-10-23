import { StockBadge } from '@/shared/ui';

export function OfferStock({ offer }) {
  return (
    <div>
      <StockBadge count={offer.stock} />
      {offer.warehouses > 1 && <div className="small text-body-secondary">на {offer.warehouses} складах</div>}
    </div>
  );
}
