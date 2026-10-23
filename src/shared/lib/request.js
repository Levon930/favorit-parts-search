import { createSlice } from '@reduxjs/toolkit';

const idle = () => ({ status: 'idle', items: [], error: null, query: null, requestId: null });

export function createRequestSlice(name, thunk) {
  return createSlice({
    name,
    initialState: idle(),
    reducers: { reset: idle },
    extraReducers: (builder) => {
      builder
        .addCase(thunk.pending, (state, { meta }) => ({
          ...idle(),
          status: 'loading',
          query: meta.arg,
          requestId: meta.requestId,
        }))
        .addCase(thunk.fulfilled, (state, { meta, payload }) => {
          if (state.requestId !== meta.requestId) return;
          state.status = 'succeeded';
          state.items = payload;
        })
        .addCase(thunk.rejected, (state, { meta, error }) => {
          if (state.requestId !== meta.requestId) return;
          state.status = 'failed';
          state.error = error.message;
        });
    },
  });
}

export const requestView = ({ status, items }) => (status === 'succeeded' ? (items.length ? 'list' : 'empty') : status);
