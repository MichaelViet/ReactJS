// import { applyMiddleware, createStore } from "redux";
// import { counterReducer } from "./reducers/counterReducer";
// import thunk from "redux-thunk";


// export const store = createStore(counterReducer, applyMiddleware(thunk));

//____________________________________________________________________________________________________________________________________________

// Рефакторинг на Redux Toolkit
// Використовуючи функцію configureStore для створення нового store, передаючи counterReducer як редуктор і перетворювач thunk

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterReducer";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: counterReducer,
    middleware: [thunk]
});

//____________________________________________________________________________________________________________________________________________


// Мігрування на createSlice
// import { createSlice } from '@reduxjs/toolkit';
// import reducer from '../features/counter/counterSlice'
// import thunk from 'redux-thunk';
// import { configureStore } from '@reduxjs/toolkit';
// import { increment, decrement } from '../features/counter/counterSlice';

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: 0,
//     reducers: {
//         increment: state => state + 1,
//         decrement: state => state - 1
//     }
// });

// const actions = counterSlice;
// export const store = configureStore({
//     reducer,
//     middleware: [thunk]
// });
// store.dispatch(increment());