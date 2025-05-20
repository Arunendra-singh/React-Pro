import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from '../features/wether/weatherSlice';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },

});
export default store;