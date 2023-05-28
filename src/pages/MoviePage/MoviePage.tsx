import { useEffect, useState } from 'react';
import MovieGenres from '../../components/MovieGenres/MovieGenres';
import { useActionData, useParams } from 'react-router-dom';
import './MoviePage.scss';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieTableData from '../../components/MovieTableData/MovieTableData';
import { IMovieData } from '../../types/movieTypes';
import Aside from '../../components/Aside/Aside';
import { getMoviesResponseByID } from '../../services/movieApiService';
import { addToFavoritesAction } from '../../store/reducers/favMoviesReducer/favMoviesActions';
import { useAppDispatch } from '../../store/hooks';

const MoviePage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

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
            persons: data.countries,
            countries: data.persons,
            id,
        })
    }

    useEffect(() => {
        getMoviesResponseByID(id).then(({ data }) => setValues(data));
    }, [])


    return (
        <section className='moviePage-wrapper'>
            <Aside />
            <div>
                <MoviePoster url={movieData.image} />
                <div>
                    <button onClick={() => { dispatch(addToFavoritesAction(movieData))}}>add to favorites</button>
                </div>
            </div>
            <div className='moviePage__right-side'>
                <MovieGenres genres={movieData.genres} />
                <h1>{movieData.title}</h1>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>{movieData.description}</p>
                <MovieTableData year={movieData.year} persons={movieData.persons} countries={movieData.countries} />
                <div>
                    <h3>Recommendations</h3>
                    {/* <MoviesList /> */}
                </div>
            </div>
        </section>
    );
};

export default MoviePage;