import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = '/tickets.json';
export const getAllTickets = createAsyncThunk(
  'dataSlice/getAllTickets',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios(url);
      if (res.statusText !== 'OK') {
        throw new Error('Server error');
      }

      return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
const initialState = {
  data: [],
};

const dataSlice = createSlice({
  name: 'Data',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllTickets.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = 'error';
    },
    [getAllTickets.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getAllTickets.fulfilled]: (state, action) => {
      state.status = 'done';
      state.data = action.payload;
    },
  },
});

export default dataSlice.reducer;
