import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCryptoInfo } from '../types/types';

interface ICryptoState {
  cryptos: TCryptoInfo[];
  portfolio: TCryptoInfo[];
  modalStatus: boolean;
}

const initialState: ICryptoState = {
  cryptos: [],
  portfolio: [],
  modalStatus: false,
};

export const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    addPortfolio: (state, action: PayloadAction<TCryptoInfo>) => {
      state.portfolio = [...state.portfolio, action.payload];
    },
  },
});

export const { addPortfolio } = cryptoSlice.actions;

export default cryptoSlice.reducer;
