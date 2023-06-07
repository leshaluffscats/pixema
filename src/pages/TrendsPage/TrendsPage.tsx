import { useEffect, useState } from 'react';
import Aside from '../../components/Aside/Aside';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getTrendsMoviesAsyncAction } from '../../store/reducers/movieReducer/moviesActions';
import MovieItem from '../../components/MovieItem/MovieItem';
import './TrendsPage.scss';
import { setLoadingStatusOnAction } from '../../store/reducers/loadingReducer/loadingActions';
import Loader from '../../components/Loader/Loader';

const TrendsPage = () => {
    const dispatch = useAppDispatch();
    const { trendsMovies } = useAppSelector(state => state.movies);
    const { isLoading } = useAppSelector(state => state.loadingStatus);

    useEffect(() => {
        if (trendsMovies.length === 0) {
            dispatch(setLoadingStatusOnAction());
            dispatch(getTrendsMoviesAsyncAction(1, 36));
        }
    }, []);

    return (

        <>
            {isLoading && <Loader />}
            <main className='trendsPage-wrapper'>
                <section className='trendsPage-subcontainer'>
                    <Aside />
                    <div className='trendsPage-movies'>
                        {
                            trendsMovies.map(movie => <MovieItem name={movie.name} key={movie.id} genres={movie.genres} image={movie.poster?.previewUrl} id={movie.id} />)
                        }
                    </div>
                </section>
            </main>
        </>

    );
};

export default TrendsPage;