import { configureStore } from '@reduxjs/toolkit';
import crypto from './cryptoSlice';

export const store = configureStore({
  reducer: {
    crypto,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
