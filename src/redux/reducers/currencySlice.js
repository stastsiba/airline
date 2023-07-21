import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: 'rub',
};

const currencySlice = createSlice({
  name: 'Currency',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default currencySlice.reducer;
export const { changeFilter } = currencySlice.actions;
