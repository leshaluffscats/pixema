import React from 'react';
import Aside from '../../components/Aside/Aside';
import MovieItem from '../../components/MovieItem/MovieItem';
import { useAppSelector } from '../../store/hooks';

const SearchPage = () => {
    const { movies } = useAppSelector(state => state.movies);
    return (
        <section>
            <Aside />
            {movies.map((movie: any, index) => <MovieItem name={movie.name} key={movie.id} genres={movie.genres} image={movie.poster} id={movie.id} />)}
        </section>
    );
};

export default SearchPage;