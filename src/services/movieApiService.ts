import axios from 'axios';
import { API_URL, API_HEADER, SECOND_API_HEADER, SECOND_API_KEY, THIRD_API_HEADER } from '../data/constants';

export const getMoviesResponse = (page: number, limit: number) => {
    return axios.get(`${API_URL}v1.3/movie?page=${page}&limit=${limit}`, {
        // headers: API_HEADER,
        // headers: SECOND_API_HEADER
        headers: THIRD_API_HEADER,
    })
}
export const getTrendsMoviesResponse = (page: number, limit: number) => {
    return axios.get(`${API_URL}v1.3/movie?page=${page}&limit=${limit}&year=${new Date().getFullYear()}`, {
        // headers: API_HEADER,
        // headers: SECOND_API_HEADER
        headers: THIRD_API_HEADER,
    })
}

export const getMoviesResponseByID = (id: string) => {
    return axios.get(`${API_URL}v1.3/movie/${id}`, {
        headers: API_HEADER,
        // headers: SECOND_API_HEADER,
        // headers: THIRD_API_HEADER,
    })
}

export const searchMoviesResponse = (searchValue: string) => {
    return axios.get(`${API_URL}v1.2/movie/search?page=1&limit=10&query=${searchValue}`, {
        // headers: API_HEADER,
        // headers: SECOND_API_HEADER,
        headers: THIRD_API_HEADER,
    })
}


export function setQuery(year: string, lastYear: string, genre: string, rating: string, lastRating: string, limit: string) {
    return `sortField=sortType=-1&year=${year}-${lastYear}${genre !== 'Сбросить фильтр' ? `${`&genres.name=${genre.toLowerCase()}`}` : ''}&rating.kp=${rating}-${lastRating}&limit=${limit}`
}

export const getFilteredMovies = (query: string): Promise<any> => {
    return axios.get(`${API_URL}v1.3/movie?${query}`, {
        headers: THIRD_API_HEADER,
    },
    )
}



