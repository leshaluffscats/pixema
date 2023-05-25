import React from 'react';
import { IMovieGenresProps } from '../../types/movieTypes';
import './MovieGenres.scss';

const MovieGenres = ({ genres, slice }: IMovieGenresProps) => {
    return (
        <div className='movieItem__genres'>
            {genres.slice(0, slice || genres.length + 1).map((genre, index) => <span key={genre.name + index}>{genre.name}</span>)}
        </div>
    );
};

export default MovieGenres;