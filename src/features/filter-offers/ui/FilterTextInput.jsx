export function FilterTextInput({ value, onChange }) {
  return (
    <input
      type="search"
      className="form-control form-control-sm"
      style={{ maxWidth: '18rem' }}
      placeholder="Фильтр: бренд, номер, название"
      aria-label="Фильтр предложений"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
