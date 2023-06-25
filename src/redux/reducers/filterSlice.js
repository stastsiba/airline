import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'All',
};

const filterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
