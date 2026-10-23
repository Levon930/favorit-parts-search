import { isFound } from '@/shared/api';

export function toOffers(goods) {
  const positions = goods.flatMap((part) => [{ ...part, original: true }, ...(part.analogues ?? []).filter(isFound)]);

  return positions.map(({ goodsID, brand, number, name, count = 0, original = false, warehouses = [] }) => {
    const prices = warehouses.map((w) => w.price);
    const dates = warehouses.map((w) => w.shipmentDate).filter(Boolean);
    return {
      id: goodsID,
      brand,
      number,
      name,
      original,
      price: prices.length ? Math.min(...prices) : null,
      priceFrom: new Set(prices).size > 1,
      stock: count,
      warehouses: warehouses.length,
      shipment: dates.length ? dates.reduce((a, b) => (new Date(b) < new Date(a) ? b : a)) : null,
    };
  });
}
