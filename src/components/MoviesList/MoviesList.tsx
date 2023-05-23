import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from '../MovieItem/MovieItem';
import './MoviesList.scss';
import { API_URL, API_KEY } from '../../data/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadMoviesAsyncAction } from '../../store/reducers/movieReducer';


const MoviesList = () => {
   
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movies.movies);

    useEffect(() => {
        axios.get(`${API_URL}v1.3/movie?page=1&limit=12&year=2022-2023`, {
            headers: {
                'X-API-KEY': `${API_KEY}`,
            }
        })
            .then(({ data: { docs } }) => dispatch(loadMoviesAsyncAction(docs)));
    }, []);

    return (
        <section className='moviesList-wrapper'>
            {movies.map((movie: any) => <MovieItem name={movie.name} key={movie.id} genres={movie.genres} image={movie.poster.previewUrl} id={movie.id}/>)}
        </section>
    );
};

export default MoviesList;