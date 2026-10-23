import { OfferPrice } from './OfferPrice';
import { OfferStock } from './OfferStock';
import { OfferTitle } from './OfferTitle';
import { ShipmentDate } from './ShipmentDate';

export function OfferRow({ offer }) {
  return (
    <tr className={offer.original ? 'table-primary' : undefined}>
      <td>
        <OfferTitle offer={offer} />
      </td>
      <td className="small d-none d-md-table-cell">{offer.name}</td>
      <td className="small text-nowrap d-none d-md-table-cell">
        <ShipmentDate iso={offer.shipment} />
      </td>
      <td className="text-end text-nowrap">
        <OfferPrice offer={offer} />
      </td>
      <td className="text-end text-nowrap d-none d-md-table-cell">
        <OfferStock offer={offer} />
      </td>
    </tr>
  );
}
