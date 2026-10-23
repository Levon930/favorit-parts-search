export function filterOffers(offers, { text, inStock, sort }) {
  const needle = text.trim().toLowerCase();
  const rows = offers.filter(
    (offer) =>
      (!inStock || offer.stock > 0) &&
      (!needle || `${offer.brand} ${offer.number} ${offer.name}`.toLowerCase().includes(needle)),
  );
  if (sort === 'price') rows.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  return rows;
}
