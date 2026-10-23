import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGoods } from '@/shared/api';
import { createRequestSlice, requestView } from '@/shared/lib';
import { toOffers } from '../lib/toOffers';

export const fetchOffers = createAsyncThunk('offers/fetch', async ({ brand, number }) =>
  toOffers(await fetchGoods({ number, brand, analogues: 'on' })),
);

export const offersSlice = createRequestSlice('offers', fetchOffers);
export const { reset: resetOffers } = offersSlice.actions;

export const selectOffers = (state) => state.offers;
export const selectOffersView = (state) => requestView(state.offers);
export const selectSelectedGoodsId = (state) => state.offers.query?.goodsID;
