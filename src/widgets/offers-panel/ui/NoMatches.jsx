import { EmptyState } from '@/shared/ui';

export function NoMatches() {
  return (
    <EmptyState title="Под фильтр ничего не подходит">
      Измените текст фильтра или выключите «Только в наличии»
    </EmptyState>
  );
}
