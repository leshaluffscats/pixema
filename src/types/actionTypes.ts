import { IMovieData } from "./movieTypes";

export interface ILoadingAction {
    type: string;
}

export interface IMovieReducerAction {
    type: string;
    payload: IMovieData[];
}


export interface IThemeAction  {
    type: string;
}

export interface IRenderReducerAction {
    type: string;
}

export interface IFavMovieAction {
    type: string;
    payload: string | number;
}


export interface IFilterAction {
    type: string;
}