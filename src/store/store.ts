import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './reducers/movieReducer';
import thunkMiddleware from "redux-thunk"
import {loadingReducer} from './reducers/loadingReducer';
import {themeReducer} from './reducers/themeReducer';


export const store = configureStore({
    reducer: {
        movies: movieReducer,
        loadingStatus: loadingReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware)=>  getDefaultMiddleware().concat(thunkMiddleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;