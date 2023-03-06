import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { TCryptoInfo } from '../types/types';

interface ICryptoState {
  cryptos: TCryptoInfo[];
  portfolio: TCryptoInfo[];
  modalStatus: boolean;
  loading: boolean;
  error: string | unknown;
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
    const { data, status } = await axios.get<{ data: TCryptoInfo[] }>(
      'https://api.coincap.io/v2/assets',
      {
        params: {
          Authorization: 'Bearer 25e5456a-9800-4152-8992-1bad20319f06',
          limit: 20,
          offset: 0,
        },
      },
    );
    if (status === 200) {
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
        state.error = null;
        state.loading = false;
        state.cryptos = action.payload;
      },
    );
    builder.addCase(fetchAllCryptos.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(
      fetchAllCryptos.rejected,
      (state, action: PayloadAction<string | unknown>) => {
        state.loading = false;
        state.error = action.payload;
      },
    );
  },
});

export const { addPortfolio } = cryptoSlice.actions;

export default cryptoSlice.reducer;
