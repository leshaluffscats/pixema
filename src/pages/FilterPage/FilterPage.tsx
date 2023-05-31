import { useEffect } from 'react';
import Aside from '../../components/Aside/Aside';
import MovieItem from '../../components/MovieItem/MovieItem';
import './FilterPage.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleFilterAction } from '../../store/reducers/filterReducer/filterActions';
const FilterPage = () => {
    const dispatch = useAppDispatch();
    const { filteredMovies } = useAppSelector(state => state.movies);

    useEffect(() => {
        if (!filteredMovies.length) {
            dispatch(toggleFilterAction());
        }
    }, [])
    return (
        <main className='filter-page-wrapper'>
            <section>
                <Aside />
                <div className='filtered-movies-list'>
                    {filteredMovies.map(movie => <MovieItem image={movie.poster.previewUrl} name={movie.name} id={movie.id} key={movie.id} genres={movie.genres}/>)}
                </div>

            </section>
        </main>
    );
};

export default FilterPage;