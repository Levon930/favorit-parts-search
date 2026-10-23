import { BoxIcon } from './icons/BoxIcon';

export function EmptyState({ title, children }) {
  return (
    <div className="text-center text-body-secondary py-5 px-3">
      <BoxIcon size="2.5rem" className="mb-3 opacity-50" />
      <p className="fw-semibold text-body mb-1">{title}</p>
      <p className="small mb-0">{children}</p>
    </div>
  );
}
