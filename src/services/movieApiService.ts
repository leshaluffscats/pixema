import axios from 'axios';
import { API_URL, API_HEADER, SECOND_API_HEADER, SECOND_API_KEY, THIRD_API_HEADER } from '../data/constants';

export const getMoviesResponse = (page: number, limit: number) => {
    return axios.get(`${API_URL}v1.3/movie?page=${page}&limit=${limit}`, {
        // headers: API_HEADER,
        // headers: SECOND_API_HEADER
        headers: THIRD_API_HEADER,
    })
}

export const getMoviesResponseByID = (id: string) => {
    return axios.get(`${API_URL}v1.3/movie/${id}`, {
        // headers: API_HEADER,
        // headers: SECOND_API_HEADER,
        headers: THIRD_API_HEADER,
    })
}

export const searchMoviesResponse = (searchValue: string) => {
    return axios.get(`${API_URL}v1.2/movie/search?page=1&limit=10&query=${searchValue}`, {
        // headers: API_HEADER,
        // headers: SECOND_API_HEADER,
        headers: THIRD_API_HEADER,
    })
}

//api.kinopoisk.dev/v1.3/movie?sortField=year%3D2000-2010&sortField=rating.kp%3D8-10&sortField=votes.kp%3D1-10&sortField=genres.name%3D%D0%B4%D1%80%D0%B0%D0%BC%D0%B0&sortType=-1&page=1&limit=10
export const getFilteredMovies = (genre: string, year: string, lastYear: string, ratingKP: string, lastRatingKP: string): Promise<any> => {
    return axios.get(`${API_URL}v.1.3/movie?sortField=year%3D${year}-${lastYear}&sortField=rating.kp%3D${ratingKP}-${lastRatingKP}&sortField=genres.name%3D${genre}&sortType=-1&page=1&limit=10`, {
        headers: THIRD_API_HEADER,
    },
    )
}

