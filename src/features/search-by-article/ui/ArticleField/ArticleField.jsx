import { useSelector } from 'react-redux';
import { selectBrandsView } from '@/entities/brand';
import { SearchIcon } from '@/shared/ui';
import './ArticleField.css';

export function ArticleField({ id, value, onChange }) {
  const loading = useSelector(selectBrandsView) === 'loading';

  return (
    <div className="article-field">
      <SearchIcon />
      <input
        id={id}
        type="search"
        className="form-control form-control-lg"
        placeholder="Например, 7160500039S"
        autoComplete="off"
        autoFocus
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {loading && (
        <span className="spinner-border spinner-border-sm text-primary" role="status">
          <span className="visually-hidden">Загрузка…</span>
        </span>
      )}
    </div>
  );
}
