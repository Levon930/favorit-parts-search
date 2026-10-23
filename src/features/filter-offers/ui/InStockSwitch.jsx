import { useId } from 'react';

export function InStockSwitch({ checked, onChange }) {
  const id = useId();

  return (
    <div className="form-check form-switch mb-0">
      <input
        id={id}
        className="form-check-input"
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="form-check-label small" htmlFor={id}>
        Только в наличии
      </label>
    </div>
  );
}
