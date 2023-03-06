import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { TCryptoInfo } from '../types/types';

interface ICryptoState {
  cryptos: TCryptoInfo[];
  portfolio: TCryptoInfo[];
  modalStatus: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: ICryptoState = {
  cryptos: [],
  portfolio: [],
  modalStatus: false,
  loading: false,
  error: null,
};

export const fetchAllCryptos = createAsyncThunk<
  TCryptoInfo[],
  undefined,
  { rejectValue: string }
>('cryptos/fetchAllCryptos', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<{ data: TCryptoInfo[] }>(
      'https://api.coincap.io/v2/assets',
    );
    if (data.data) {
      console.log(data.data);
      return data.data;
    } else {
      throw new Error('error');
    }
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue(err.message);
  }
});

export const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    addPortfolio: (state, action: PayloadAction<TCryptoInfo>) => {
      state.portfolio = [...state.portfolio, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllCryptos.fulfilled,
      (state, action: PayloadAction<TCryptoInfo[]>) => {
        state.loading = false;
        state.cryptos = action.payload;
      },
    );
    builder.addCase(fetchAllCryptos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchAllCryptos.rejected,
      (state, action: PayloadAction<string | unknown>) => {
        state.loading = false;
      },
    );
  },
});

export const { addPortfolio } = cryptoSlice.actions;

export default cryptoSlice.reducer;
