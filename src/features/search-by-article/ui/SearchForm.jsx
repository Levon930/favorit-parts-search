import { useId } from 'react';
import { Panel } from '@/shared/ui';
import { ArticleField } from './ArticleField/ArticleField';
import { ArticleHint } from './ArticleHint';

export function SearchForm({ value, onChange }) {
  const inputId = useId();

  return (
    <Panel as="form" role="search" className="p-3 p-md-4 mb-4" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor={inputId} className="form-label fw-semibold">
        Артикул детали
      </label>
      <ArticleField id={inputId} value={value} onChange={onChange} />
      <ArticleHint onPick={onChange} />
    </Panel>
  );
}
