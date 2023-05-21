import { AppDispatch } from "../store";
import { IMovieData, IMovieInitialState } from "../../types/movieTypes";

const initialState: IMovieInitialState = {
    movies: [],
}


const LOAD_MOVIES = "LOAD_MOVIES";

export const movieReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOAD_MOVIES: return {
            ...state,
            movies: [...state.movies, ...action.payload]
        }
        default: return state;
    }
}

export const loadMoviesAsyncAction = (moviesArr: IMovieData) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: LOAD_MOVIES,
            payload: moviesArr,
        })
    }
}