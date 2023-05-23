import React from 'react';
import {IMoviePoster} from '../../types/movieTypes';
import './MoviePoster.scss';

const MoviePoster = (props: IMoviePoster) => {
    return (
        <div className='image-wrapper'>
            <img src={props.url} alt="Poster" />
        </div>
    );
};

export default MoviePoster;