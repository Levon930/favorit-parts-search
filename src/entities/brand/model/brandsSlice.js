import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGoods } from '@/shared/api';
import { createRequestSlice, requestView } from '@/shared/lib';

export const fetchBrands = createAsyncThunk('brands/fetch', (article, { signal }) =>
  fetchGoods({ number: article }, signal),
);

export const brandsSlice = createRequestSlice('brands', fetchBrands);
export const { reset: resetBrands } = brandsSlice.actions;

export const selectBrands = (state) => state.brands;
export const selectBrandsView = (state) => requestView(state.brands);
export const selectBrandsCount = (state) => state.brands.items.length;
