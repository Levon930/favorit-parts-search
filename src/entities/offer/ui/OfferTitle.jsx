export function OfferTitle({ offer }) {
  return (
    <div>
      <div className="fw-semibold text-break">
        {offer.brand}
        {offer.original && <span className="badge rounded-pill text-bg-primary ms-2">искомая</span>}
      </div>
      <div className="font-monospace small text-body-secondary text-break">{offer.number}</div>
      <div className="small mt-1 d-md-none">{offer.name}</div>
    </div>
  );
}
