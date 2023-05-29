import { SEARCH_MOVIES } from "./searchMovieReducer";
import { searchMoviesResponse } from "../../../services/movieApiService";
import { IMovieData } from "../../../types/movieTypes";
import { AppDispatch } from "../../store";

const searchMovies = (moviesArr: IMovieData[]) => {
    return ({
        type: SEARCH_MOVIES,
        payload: moviesArr,
    })
}

export const searchMoviesAsyncAction = (str: string) => {
    return (dispatch: AppDispatch) => {
        searchMoviesResponse(str)
            .then(({ data: { docs } }) => dispatch(searchMovies(docs)))
    }
}