export function StockBadge({ count }) {
  const inStock = count > 0;

  return (
    <span
      className={`badge rounded-pill ${
        inStock ? 'bg-success-subtle text-success-emphasis' : 'bg-secondary-subtle text-secondary-emphasis'
      }`}
    >
      {inStock ? `${count} шт.` : 'нет в наличии'}
    </span>
  );
}
