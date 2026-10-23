import { EXAMPLES, MIN_LENGTH } from '../config';

export function ArticleHint({ onPick }) {
  return (
    <div className="form-text mt-2">
      Поиск запускается сам, когда вы перестаёте печатать (от {MIN_LENGTH} символов). Попробуйте:{' '}
      {EXAMPLES.map((example) => (
        <button
          key={example}
          type="button"
          className="btn btn-link btn-sm p-0 me-2 align-baseline"
          onClick={() => onPick(example)}
        >
          {example}
        </button>
      ))}
    </div>
  );
}
