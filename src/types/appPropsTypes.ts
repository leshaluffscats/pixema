import { ISimilarMovie } from './movieTypes';


export interface IAsideButtonProps {
    icon: string;
    text: string;
    url: string;
}

export interface IFormLabelProps {
    type: string;
    value: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    text: string;
}

export interface ISimilarMoviesProps {
    similarMovies: ISimilarMovie[];
}

export interface IEmptyFavPageProps {
    background: string;
    text: string;
}