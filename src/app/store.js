import { configureStore } from '@reduxjs/toolkit';
import { brandsSlice } from '@/entities/brand';
import { offersSlice } from '@/entities/offer';

export const store = configureStore({
  reducer: {
    brands: brandsSlice.reducer,
    offers: offersSlice.reducer,
  },
});
