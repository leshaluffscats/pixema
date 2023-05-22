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
    name: string
}  //будет массивом с объектами в IMovieData

interface IMoviePoster {
    previewUrl: string;
    url: string
}

interface IMovieRatingAndVotes {
    await: null | number;
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
}

interface IMovieItems {
    logo: IMovieLogo;
    name: string;
    url: string;
}

interface IMovieWatchability {
    items: IMovieItems[] | null;
}

interface IMovieCounties {
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
    watchability: IMovieWatchability
}

export interface IMovieInitialState {
    movies: IMovieData[];
}

export interface IMovieItemProps {
    image: string;
    name: string;
    genres: IMovieGenres[];
    id: number;
}

export interface IMovieGenresProps {
    genres: IMovieGenres[]
}