import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './reducers/movieReducer/movieReducer';
import thunkMiddleware from "redux-thunk"
import { loadingReducer } from './reducers/loadingReducer/loadingReducer';
import { themeReducer } from './reducers/themeReducer/themeReducer';
import { renderReducer } from './reducers/renderReducer/renderReducer';
import { favMoviesReducer } from './reducers/favMoviesReducer/favMoviesReducer'


export const store = configureStore({
    reducer: {
        movies: movieReducer,
        loadingStatus: loadingReducer,
        theme: themeReducer,
        render: renderReducer,
        favMovies: favMoviesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;