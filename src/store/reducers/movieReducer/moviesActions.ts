import { AppDispatch } from "../../store";
import { getMoviesResponse, getFilteredMovies } from "../../../services/movieApiService";
import { LOAD_MOVIES,FILTER_MOVIES } from "./movieReducer";
import { IMovieData } from "../../../types/movieTypes";
import { setLoadingStatusOffAction } from "../loadingReducer/loadingActions";


const loadMoviesAction = (moviesArr: IMovieData[]) => {
    return ({
        type: LOAD_MOVIES,
        payload: moviesArr,
    })
}

const filterMoviesAction = (moviesArr: IMovieData[]) => {
    return ({
        type: FILTER_MOVIES,
        payload: moviesArr,
    })
}

export const loadMoviesAsyncAction = (page: number, limit: number) => {
    return (dispatch: AppDispatch) => {
        getMoviesResponse(page, limit)
            .then(({ data: { docs } }) => docs.filter((el: any) => el.poster !== null)) //не загружать фильмы без постеров
            .then(docs => {
                dispatch(loadMoviesAction(docs));
                dispatch(setLoadingStatusOffAction());
            });
    }
}

export const filterMoviesAsyncAction = (query: string) => {
    return (dispatch: AppDispatch) => {
        getFilteredMovies(query)
            .then(({ data: { docs } }) => docs.filter((el: any) => el.poster !== null))
            .then(docs => {
                dispatch(filterMoviesAction(docs));
                dispatch(setLoadingStatusOffAction());
            });
    }
}


