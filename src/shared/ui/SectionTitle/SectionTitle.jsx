import './SectionTitle.css';

export function SectionTitle({ step, aside, children }) {
  return (
    <div className="d-flex align-items-center gap-2 mb-3">
      <span className="step-badge">{step}</span>
      <h2 className="h5 mb-0">{children}</h2>
      <span className="ms-auto small text-body-secondary">{aside}</span>
    </div>
  );
}
