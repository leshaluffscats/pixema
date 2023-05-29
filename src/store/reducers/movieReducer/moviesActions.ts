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
            .then(({ data: { docs } }) => dispatch(loadMoviesAction(docs)))
    }
}

