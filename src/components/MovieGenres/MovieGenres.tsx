import React from 'react';
import { IMovieGenresProps } from '../../types/movieTypes';
import './MovieGenres.scss';

const MovieGenres = ({ genres }: IMovieGenresProps) => {
    return (
        <div className='movieItem__genres'>
            {genres.map((genre, index) => <span key={genre.name + index}>{genre.name}</span>)}
        </div>
    );
};

export default MovieGenres;