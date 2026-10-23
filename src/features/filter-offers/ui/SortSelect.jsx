export function SortSelect({ value, onChange }) {
  return (
    <select
      className="form-select form-select-sm w-auto"
      aria-label="Сортировка"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="default">Сначала искомая</option>
      <option value="price">Сначала дешёвые</option>
    </select>
  );
}
