import { AppDispatch } from "../../store";
import { getMoviesResponse } from "../../../services/movieApiService";
import { LOAD_MOVIES } from "./movieReducer";
import { IMovieData } from "../../../types/movieTypes";


const loadMoviesAction = (moviesArr: IMovieData[]) => {
    return ({
        type: LOAD_MOVIES,
        payload: moviesArr,
    })
}



export const loadMoviesAsyncAction = (page: number, limit: number) => {
    return (dispatch: AppDispatch) => {
        getMoviesResponse(page, limit)
            .then(({ data: { docs } }) => docs.filter((el: any) => el.poster !== null)) //не загружать фильмы без постеров
            .then(docs => dispatch(loadMoviesAction(docs)));
    }
}

