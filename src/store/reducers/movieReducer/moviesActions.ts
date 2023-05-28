import { AppDispatch } from "../../store";
import { getMoviesResponse } from "../../../services/movieApiService";
import { SEARCH_MOVIES, LOAD_MOVIES } from "./movieReducer";
import { IMovieData } from "../../../types/movieTypes";
import { searchMoviesResponse } from "../../../services/movieApiService";

const loadMoviesAction = (moviesArr: IMovieData[]) => {
    return ({
        type: LOAD_MOVIES,
        payload: moviesArr,
    })
}

const searchMovies = (moviesArr: IMovieData[]) => {
    return ({
        type: SEARCH_MOVIES,
        payload: moviesArr,
    })
}

export const loadMoviesAsyncAction = (page: number, limit: number) => {
    return (dispatch: AppDispatch) => {
        getMoviesResponse(page, limit)
            .then(({ data: { docs } }) => dispatch(loadMoviesAction(docs)))
    }
}

export const searchMoviesAsyncAction = (str: string) => {
    return (dispatch: AppDispatch) => {
        searchMoviesResponse(str)
            .then(({ data: { docs } }) => dispatch(searchMovies(docs)))
    }
}