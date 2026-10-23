export function OffersCounter({ shown, total }) {
  return (
    <span className="ms-auto small text-body-secondary">
      Позиций: {shown === total ? total : `${shown} из ${total}`}
    </span>
  );
}
