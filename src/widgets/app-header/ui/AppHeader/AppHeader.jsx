import { NutIcon } from '@/shared/ui';
import './AppHeader.css';

export function AppHeader() {
  return (
    <header className="bg-body border-bottom">
      <div className="container py-3 d-flex align-items-center gap-3">
        <span className="app-logo">
          <NutIcon size="1.5rem" />
        </span>
        <div>
          <h1 className="h5 mb-0">Подбор автозапчастей</h1>
          <p className="small text-body-secondary mb-0">Поиск по артикулу, аналоги и остатки на складах</p>
        </div>
      </div>
    </header>
  );
}
