import { IMovieInitialState } from "../../../types/movieTypes";
import { IMovieReducerAction } from "../../../types/actionTypes";

const initialState: IMovieInitialState = {
    movies: [],
}

export const SEARCH_MOVIES = "SEARCH_MOVIES";

export const searchMoviesReducer = (state = initialState, action: IMovieReducerAction) => {
    switch (action.type) {
        case SEARCH_MOVIES: return {
            ...state,
            movies: [...action.payload],
        }
        default: return state;
    }
}

