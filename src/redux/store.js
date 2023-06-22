import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './reducers/dataSlice';
import filterSlice from './reducers/filterSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
    filter: filterSlice,
  },
});

export default store;
