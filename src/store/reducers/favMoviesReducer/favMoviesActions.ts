import { IFavMovieAction } from "../../../types/actionTypes"
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./favMoviesReducer";

export const addToFavoritesAction = (movie: any): IFavMovieAction => (
    {
        type: ADD_TO_FAVORITES,
        payload: movie,
    }
)

export const removeFromFavoritesAction = (id: string): IFavMovieAction => (
    {
        type: REMOVE_FROM_FAVORITES,
        payload: id,
    }
)