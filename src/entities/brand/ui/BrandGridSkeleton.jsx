import { Panel } from '@/shared/ui';
import { BrandGrid } from './BrandGrid';

export function BrandGridSkeleton() {
  return (
    <BrandGrid aria-busy="true" aria-label="Загружаем производителей">
      {[1, 2, 3].map((i) => (
        <div className="col" key={i}>
          <Panel className="p-3 placeholder-glow">
            <span className="placeholder placeholder-lg col-5 mb-2" />
            <span className="placeholder col-4 mb-2" />
            <span className="placeholder col-9 mb-3" />
            <span className="placeholder col-3 rounded-pill" />
          </Panel>
        </div>
      ))}
    </BrandGrid>
  );
}
