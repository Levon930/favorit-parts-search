import { WarningIcon } from './icons/WarningIcon';

export function ErrorAlert({ message, onRetry }) {
  return (
    <div className="alert alert-danger d-flex align-items-center gap-3 mb-0" role="alert">
      <WarningIcon size="1.25rem" className="flex-shrink-0" />
      <div className="flex-grow-1">{message}</div>
      {onRetry && (
        <button type="button" className="btn btn-sm btn-outline-danger" onClick={onRetry}>
          Повторить
        </button>
      )}
    </div>
  );
}
