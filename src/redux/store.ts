import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cryptos from './cryptoSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const portfolioPersistConfig = {
  key: 'cryptos',
  storage,
  whitelist: ['portfolio', 'portfolioPrice'],
};

const persistedReducer = persistReducer(portfolioPersistConfig, cryptos);

export const store = configureStore({
  reducer: {
    cryptos: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
