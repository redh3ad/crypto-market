import { configureStore } from '@reduxjs/toolkit';
import cryptos from './cryptoSlice';

export const store = configureStore({
  reducer: {
    cryptos,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
