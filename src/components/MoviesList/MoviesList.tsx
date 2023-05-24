import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from '../MovieItem/MovieItem';
import './MoviesList.scss';
import { API_URL, API_HEADER } from '../../data/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadMoviesAsyncAction } from '../../store/reducers/movieReducer';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import { setLoadingStatusOnAction, setLoadingStatusOffAction } from '../../store/reducers/loadingReducer';


// todo исправить баг и использовать по возможности useRef
const MoviesList = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movies.movies);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(setLoadingStatusOnAction());
        axios.get(`${API_URL}v1.3/movie?page=${page}&limit=13`, {
            headers: API_HEADER,
        })
            .then(({ data: { docs } }) => {
                dispatch(loadMoviesAsyncAction(docs));
                dispatch(setLoadingStatusOffAction());
            });
    }, [page]);

    return (
        <section className='movieList-container'>
            <div className='moviesList-subcontainer'>
                {movies.map((movie: any) => <MovieItem name={movie.name} key={movie.id} genres={movie.genres} image={movie.poster.previewUrl} id={movie.id} />)}
            </div>
            <ShowMoreBtn setPage={setPage} />
        </section>

    );
};

export default MoviesList;