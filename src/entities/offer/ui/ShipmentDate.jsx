import { formatShipment } from '@/shared/lib';

export function ShipmentDate({ iso }) {
  const shipment = formatShipment(iso);

  return (
    <span>
      {shipment?.day ?? '—'}
      {shipment && <span className="d-block text-body-secondary">заказ до {shipment.cutoff}</span>}
    </span>
  );
}
