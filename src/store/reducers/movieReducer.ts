import { AppDispatch } from "../store";
import { IMovieData, IMovieInitialState } from "../../types/movieTypes";
import { IMovieReducerAction } from "../../types/actionTypes";
import { getMoviesResponse } from "../../services/movieApiService";

const initialState: IMovieInitialState = {
    movies: [],
}

const LOAD_MOVIES = "LOAD_MOVIES";
const SEARCH_MOVIES = "SEARCH_MOVIES";


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

const loadMoviesAction = (moviesArr: IMovieData[]) => {
    return ({
        type: LOAD_MOVIES,
        payload: moviesArr,
    })
}

export const loadMoviesAsyncAction = (page: number, limit: number) => {
    return (dispatch: AppDispatch) => {
        getMoviesResponse(page, limit)
            .then(({ data: { docs } }: any) => dispatch(loadMoviesAction(docs)))
    }
}

export const searchMoviesAsyncAction = (moviesArr: IMovieData[]) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: SEARCH_MOVIES,
            payload: moviesArr,
        })
    }
}


