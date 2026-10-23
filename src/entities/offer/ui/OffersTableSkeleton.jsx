export function OffersTableSkeleton() {
  return (
    <div className="p-3 placeholder-glow" aria-busy="true" aria-label="Загружаем предложения">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="d-flex gap-3 py-2 border-bottom">
          <span className="placeholder col-2" />
          <span className="placeholder col-2" />
          <span className="placeholder col-4" />
          <span className="placeholder col-2 ms-auto" />
        </div>
      ))}
    </div>
  );
}
