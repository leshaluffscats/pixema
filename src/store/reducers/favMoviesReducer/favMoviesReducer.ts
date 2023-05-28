import { IFavMovieAction } from "../../../types/actionTypes";
import { IMovieData } from "../../../types/movieTypes";

const initialState: any = {
    favMovies: [],
}

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const favMoviesReducer = (state = initialState, action: IFavMovieAction) => {
    switch (action.type) {
        case ADD_TO_FAVORITES: return {
            ...state,
            favMovies: [...state.favMovies, action.payload]
        }
        case REMOVE_FROM_FAVORITES: return {
            ...state,
            favMovies: state.favMovies.filter((el: IMovieData) => el.id !== action.payload)
        }

        default: return state;
    }
}