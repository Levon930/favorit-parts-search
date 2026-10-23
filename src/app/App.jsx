import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { PartsSearchPage } from '@/pages/parts-search';
import { store } from './store';

export function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <PartsSearchPage />
      </Provider>
    </StrictMode>
  );
}
