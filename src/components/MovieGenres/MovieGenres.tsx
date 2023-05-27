import React from 'react';
import { IMovieGenresProps, ISearchGenres } from '../../types/movieTypes';
import './MovieGenres.scss';


// !todo типизировать это
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!

const MovieGenres = ({ genres, slice }: any) => {
    return (
        <div className='movieItem__genres'>
            {genres.slice(0, slice || genres.length + 1).map((genre: any) => <span key={genre?.name}>{genre.name ?? genre}</span>)}
        </div>
    );
};

export default MovieGenres;