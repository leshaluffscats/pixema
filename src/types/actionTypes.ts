import { IMovieData } from "./movieTypes";

export interface ILoadingAction {
    type: string;
}

export interface IMovieReducerAction {
    type: string;
    payload: IMovieData[];
}
