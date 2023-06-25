import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './reducers/dataSlice';
import filterSlice from './reducers/filterSlice';
import currencySlice from './reducers/currencySlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
    filter: filterSlice,
    currency: currencySlice,
  },
});

export default store;
