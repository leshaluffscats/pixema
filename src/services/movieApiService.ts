import axios from 'axios';
import { API_URL, API_HEADER, SECOND_API_HEADER, SECOND_API_KEY } from '../data/constants';

export const getMoviesResponse = (page: number, limit: number) => {
    const request = axios.get(`${API_URL}v1.3/movie?page=${page}&limit=${limit}`, {
        headers: API_HEADER,
        // headers: _SECOND_API_HEADER
    })
    return request;
}

export const getMoviesResponseByID = (id: string) => {
    const request = axios.get(`${API_URL}v1.3/movie/${id}`, {
        headers: API_HEADER,
        // headers: _SECOND_API_HEADER
    })
    return request;
}