import { TCryptoInfo, TCryptoChart } from './../types/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

interface ICryptoState {
  cryptos: TCryptoInfo[];
  portfolio: TCryptoInfo[];
  topThree: TCryptoInfo[];
  cryptoInfo: TCryptoInfo | null;
  cryptoChart: TCryptoChart[];
  modalStatus: boolean;
  loading: boolean;
  error: string | unknown;
}

const initialState: ICryptoState = {
  cryptos: [],
  portfolio: [],
  topThree: [],
  cryptoChart: [],
  cryptoInfo: null,
  modalStatus: false,
  loading: false,
  error: null,
};

export const fetchAllCryptos = createAsyncThunk<
  TCryptoInfo[],
  number,
  { rejectValue: string }
>('cryptos/fetchAllCryptos', async (page = 0, { rejectWithValue }) => {
  try {
    const { data, status } = await axios.get<{ data: TCryptoInfo[] }>(
      'https://api.coincap.io/v2/assets',
      {
        params: {
          Authorization: 'Bearer 25e5456a-9800-4152-8992-1bad20319f06',
          limit: 20,
          offset: page * 20,
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

export const fetchTopThreeCryptos = createAsyncThunk<
  TCryptoInfo[],
  undefined,
  { rejectValue: string }
>('cryptos/fetchTopThreeCryptos', async (_, { rejectWithValue }) => {
  try {
    const { data, status } = await axios.get<{ data: TCryptoInfo[] }>(
      'https://api.coincap.io/v2/assets',
      {
        params: {
          Authorization: 'Bearer 25e5456a-9800-4152-8992-1bad20319f06',
          limit: 3,
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

export const fetchCryptoById = createAsyncThunk<
  TCryptoInfo,
  string,
  { rejectValue: string }
>('cryptos/fetchCryptoById', async (id, { rejectWithValue }) => {
  try {
    const { data, status } = await axios.get<{ data: TCryptoInfo }>(
      `https://api.coincap.io/v2/assets/${id}`,
      {
        params: {
          Authorization: 'Bearer 25e5456a-9800-4152-8992-1bad20319f06',
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

export const fetchCryptoChartData = createAsyncThunk<
  TCryptoChart[],
  { name: string | undefined; dateFilter: string },
  { rejectValue: string }
>('crypto/fetchCryptoChartData', async (data, { rejectWithValue }) => {
  const { name, dateFilter } = data;
  const timeZone = (Number(new Date().getTimezoneOffset()) / 60) * -3600000;
  const dateNow = Date.parse(new Date().toString()) + timeZone;
  let dateAgo = dateNow - 97500000;
  let interval = 'm5';
  if (dateFilter === 'month') {
    dateAgo = dateNow - 2580000000;
    interval = 'h2';
  } else if (dateFilter === 'year') {
    dateAgo = dateNow - 31536000000;
    interval = 'd1';
  }
  try {
    const { data, status } = await axios.get<{ data: TCryptoChart[] }>(
      `https://api.coincap.io/v2/assets/${name}/history?interval=${interval}&start=${dateAgo}&end=${dateNow}`,
      {
        params: {
          Authorization: 'Bearer 25e5456a-9800-4152-8992-1bad20319f06',
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
    builder.addCase(
      fetchTopThreeCryptos.fulfilled,
      (state, action: PayloadAction<TCryptoInfo[]>) => {
        state.topThree = action.payload;
      },
    );
    builder.addCase(
      fetchCryptoById.fulfilled,
      (state, action: PayloadAction<TCryptoInfo>) => {
        state.loading = false;
        state.cryptoInfo = action.payload;
      },
    );
    builder.addCase(fetchCryptoById.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(
      fetchCryptoById.rejected,
      (state, action: PayloadAction<string | unknown>) => {
        state.loading = false;
        state.error = action.payload;
      },
    );
    builder.addCase(
      fetchCryptoChartData.fulfilled,
      (state, action: PayloadAction<TCryptoChart[]>) => {
        state.cryptoChart = action.payload;
      },
    );
  },
});

export const { addPortfolio } = cryptoSlice.actions;

export default cryptoSlice.reducer;
