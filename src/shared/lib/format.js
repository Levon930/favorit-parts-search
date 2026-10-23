const rub = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' });

const day = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short', timeZone: 'Europe/Moscow' });
const time = new Intl.DateTimeFormat('ru-RU', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Moscow' });

export const formatPrice = (price) => (price == null ? '—' : rub.format(price));

export function formatShipment(iso) {
  const date = new Date(iso);
  if (!iso || Number.isNaN(date.getTime())) return null;
  return { day: day.format(date), cutoff: time.format(date) };
}
