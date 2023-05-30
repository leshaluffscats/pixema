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
            .then(({ data: { docs } }) => docs.filter((el: any) => el.poster !== null)) //не загружать фильмы без постеров
            .then(docs => dispatch(searchMovies(docs)));

    }
}