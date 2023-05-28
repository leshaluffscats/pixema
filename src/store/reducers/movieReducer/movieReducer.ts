import { IMovieInitialState } from "../../../types/movieTypes";
import { IMovieReducerAction } from "../../../types/actionTypes";


const initialState: IMovieInitialState = {
    movies: [],
}

export const LOAD_MOVIES = "LOAD_MOVIES";
export const SEARCH_MOVIES = "SEARCH_MOVIES";


export const movieReducer = (state = initialState, action: IMovieReducerAction) => {
    switch (action.type) {
        case LOAD_MOVIES: return {
            ...state,
            movies: [...state.movies, ...action.payload]
        };
        case SEARCH_MOVIES: return {
            ...state,
            movies: [...action.payload],
        }
        default: return state;
    }
}




