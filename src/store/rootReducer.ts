import { combineReducers } from '@reduxjs/toolkit';
import { movieReducer } from './reducers/movieReducer/movieReducer';
import { loadingReducer } from './reducers/loadingReducer/loadingReducer';
import { themeReducer } from './reducers/themeReducer/themeReducer';
import { renderReducer } from './reducers/renderReducer/renderReducer';
import { favMoviesReducer } from './reducers/favMoviesReducer/favMoviesReducer';
import userReducer from './slices/userSlice';
import { searchMoviesReducer } from './reducers/searchMoviesReducer/searchMovieReducer';
import { filterReducer } from './reducers/filterReducer/filterReducer';


export const rootReducer = combineReducers({
    movies: movieReducer,
    loadingStatus: loadingReducer,
    theme: themeReducer,
    render: renderReducer,
    favMovies: favMoviesReducer,
    user: userReducer,
    searchMovies: searchMoviesReducer,
    filter: filterReducer,
});