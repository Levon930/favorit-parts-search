import { formatPrice } from '@/shared/lib';
import { StockBadge } from '@/shared/ui';

export function OfferPrice({ offer }) {
  return (
    <div>
      <span className="fw-semibold">
        {offer.priceFrom && <span className="fw-normal text-body-secondary">от </span>}
        {formatPrice(offer.price)}
      </span>
      <div className="d-md-none mt-1">
        <StockBadge count={offer.stock} />
      </div>
    </div>
  );
}
