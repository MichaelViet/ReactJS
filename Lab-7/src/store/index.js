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


// Рефакторинг на createSlice
// Можна використати функцію configureStore з @reduxjs/toolkit, щоб створити store, передавши reducer і middleware: [thunk]

// import { configureStore } from "@reduxjs/toolkit";
// import { counterReducer } from "./reducers/counterReducer";
// import thunk from "redux-thunk";

// export const store = configureStore({
//     reducer: counterReducer,
//     middleware: [thunk],
// });
