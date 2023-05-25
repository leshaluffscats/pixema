import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './reducers/movieReducer';
import {loadingReducer} from './reducers/loadingReducer';
import {themeReducer} from './reducers/themeReducer';


export const store = configureStore({
    reducer: {
        movies: movieReducer,
        loadingStatus: loadingReducer,
        theme: themeReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;