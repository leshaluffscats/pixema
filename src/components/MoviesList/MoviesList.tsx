import { useEffect, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MoviesList.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadMoviesAsyncAction } from '../../store/reducers/movieReducer/moviesActions';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import { setLoadingStatusOnAction, setLoadingStatusOffAction } from '../../store/reducers/loadingReducer/loadingActions';
import { stopRenderAction } from '../../store/reducers/renderReducer/renderActions';

const MoviesList = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movies.movies);
    const [page, setPage] = useState(1);
    const { needsRender } = useAppSelector(state => state.render);

    // todo вернуть loader с помощью async/await
    useEffect(() => {
        if (needsRender) {
            dispatch(setLoadingStatusOnAction());
            dispatch(loadMoviesAsyncAction(page, 12));
            dispatch(stopRenderAction());
            dispatch(setLoadingStatusOffAction());
        }
    }, [page]);

    return (
        <section className='movieList-container'>
            <div className='moviesList-subcontainer'>
                {movies.map((movie: any) => <MovieItem name={movie.name} key={movie.id} genres={movie.genres} image={movie.poster?.previewUrl} id={movie.id} />)}
            </div>
            <ShowMoreBtn setPage={setPage} />
        </section>

    );
};

export default MoviesList;