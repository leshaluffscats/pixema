import { useEffect, useState } from 'react';
import MovieGenres from '../../components/MovieGenres/MovieGenres';
import { useParams } from 'react-router-dom';
import './MoviePage.scss';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieTableData from '../../components/MovieTableData/MovieTableData';
import { IMovieData } from '../../types/movieTypes';
import Aside from '../../components/Aside/Aside';
import { getMoviesResponseByID } from '../../services/movieApiService';
import { addToFavoritesAction, removeFromFavoritesAction } from '../../store/reducers/favMoviesReducer/favMoviesActions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';

const MoviePage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { favMovies } = useAppSelector(state => state.favMovies);

    const [movieData, setMovieData] = useState({
        image: "",
        previewImage: "",
        genres: [],
        title: "",
        description: "",
        year: {
            year: "",
            premiere: "",
        },
        persons: [],
        countries: [],
        id,
        similarMovies: [],
        rating: { kp: 0, imdb: 0 },
    })

    function setValues(data: IMovieData) {
        setMovieData({
            image: data.poster?.url,
            previewImage: data.poster?.previewUrl,
            genres: data.genres,
            title: data.name,
            description: data.description,
            year: {
                year: data.year,
                premiere: data.premiere?.world ?? data.premiere?.russia,
            },
            persons: data.persons,
            countries: data.countries,
            id,
            similarMovies: data.similarMovies,
            rating: { kp: data.rating.kp, imdb: data.rating.imdb },
        })
    }
    const isPostFavorite = (id: string) => {
        return favMovies.find((movie: any) => movie.id === id)
    }

    function handleBookmark() {
        if (isPostFavorite(id)) {
            dispatch(removeFromFavoritesAction(id))
        } else {
            dispatch(addToFavoritesAction(movieData))
        }
    }

    useEffect(() => {
        getMoviesResponseByID(id).then(({ data }) => setValues(data));
    }, [id])

    return (
        <>
            <section className='moviePage-wrapper'>
                <Aside />
                <div className='moviePage__left-side'>
                    <MoviePoster url={movieData.image} />
                    <div>
                        <button
                            className={isPostFavorite(id) ? "movie-page-button_active" : "movie-page-button"}
                            onClick={handleBookmark}>
                            {isPostFavorite(id) ? "remove from favorites" : "add to favorites"}
                        </button>
                    </div>
                </div>
                <div className='moviePage__right-side'>
                    <MovieGenres genres={movieData.genres} id={Number(id)} />
                    <h1>{movieData.title}</h1>
                    <div className='movie-page-rating-container'>
                        <span title='Оценка Кинопоиска'>{movieData.rating?.kp}</span>
                        <span title='Оценка Imdb'>{movieData.rating?.imdb}</span>
                    </div>
                    <p>{movieData.description}</p>
                    <MovieTableData year={movieData.year} persons={movieData.persons} countries={movieData.countries} />
                </div>
            </section>
            <SimilarMovies similarMovies={movieData.similarMovies} />
        </>
    );
};

export default MoviePage;