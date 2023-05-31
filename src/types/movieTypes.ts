interface IMovieGenres {
    name: string;
} //будет массивом с объектами в IMovieData

interface IMovieExternalId {
    kpHD: string;
}

interface IMovieLogo {
    url: string;
}

interface IMovieNames {
    name: string;
}  //будет массивом с объектами в IMovieData

export interface IMoviePoster {
    previewUrl?: string;
    url: string;
}

interface IMovieRatingAndVotes {
    await?: null | number;
    filmCritics?: number;
    imdb: number;
    kp: number;
    russianFilmCritics?: number;
}

export interface ISimilarMovie {
    id: number;
    name: string;
    poster: IMoviePoster;
}

interface IMovieItems {
    logo: IMovieLogo;
    name: string;
    url: string;
}

interface IMovieWatchability {
    items: IMovieItems[] | null;
}

export interface IMovieCounties {
    name: string;
}

interface IMovieReleaseYears {
    start: number;
    end: number;
}

export interface IMovieData {
    alternativeName: null | string;
    countries: IMovieCounties[];
    description: string;
    externalId?: IMovieExternalId;
    genres: IMovieGenres[];
    id: number;
    movieLength: null | number;
    name: string;
    names: IMovieNames[];
    poster: IMoviePoster;
    rating: IMovieRatingAndVotes;
    releaseYears: IMovieReleaseYears[];
    shortDescription: string;
    type: string;
    votes: IMovieRatingAndVotes;
    watchability: IMovieWatchability;
    persons: IMoviePerson[];
    year: string;
    premiere: IMoviePremiereData;
    similarMovies: ISimilarMovie[];
    image: string;
}

export interface IMovieInitialState {
    movies: IMovieData[];
    filteredMovies?: IMovieData[];
}

export interface IMovieItemProps {
    image: string;
    name: string;
    genres?: IMovieGenres[];
    id: number;
    alternativeName?: string;
}

export interface IMovieGenresProps {
    genres: IMovieGenres[];
    slice?: number;
    id: number;
}
export interface ISearchGenres {
    genres?: string[];
}

export interface IMoviePerson {
    description: string;
    enName: string | null;
    enProfession: string;
    id: number;
    name: string;
    photo: string;
    profession: string;
}

interface IMovieYearData {
    year: string;
    premiere: string;
}
export interface IMovieDataProps {
    year: IMovieYearData;
    countries: IMovieCounties[];
    persons: IMoviePerson[];
}

interface IMoviePremiereData {
    world: string;
    russia: string;
}

export interface ISearchMovie extends IMovieData {
    poster: any;
}