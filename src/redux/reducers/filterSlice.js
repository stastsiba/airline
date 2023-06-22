import { createSlice } from '@reduxjs/toolkit';
import _default from 'react-redux/es/components/connect';

const initialState = {
  filter: 'All',
};

const filterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = {
        filter: action.payload,
      };
    },
  },
});

export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
