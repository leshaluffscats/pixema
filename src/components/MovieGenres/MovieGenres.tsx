import React from 'react';
import { IMovieGenresProps } from '../../types/movieTypes';

const MovieGenres = ({ genres }: IMovieGenresProps) => {
    return (
        <div className='movieItem__genres'>
            {genres.map(genre => <span key={genre.name}>{genre.name}</span>)}
        </div>
    );
};

export default MovieGenres;