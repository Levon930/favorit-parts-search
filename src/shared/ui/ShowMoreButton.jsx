export function ShowMoreButton({ rest, pageSize, onClick }) {
  return (
    <div className="p-3 text-center border-top">
      <button type="button" className="btn btn-outline-primary btn-sm" onClick={onClick}>
        Показать ещё {Math.min(rest, pageSize)} (осталось {rest})
      </button>
    </div>
  );
}
