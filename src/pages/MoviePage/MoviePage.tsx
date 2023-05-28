import { useEffect, useState } from 'react';
import MovieGenres from '../../components/MovieGenres/MovieGenres';
import { useParams } from 'react-router-dom';
import './MoviePage.scss';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieTableData from '../../components/MovieTableData/MovieTableData';
import { IMovieData } from '../../types/movieTypes';
import Aside from '../../components/Aside/Aside';
import { getMoviesResponseByID } from '../../services/movieApiService';

const MoviePage = () => {
    const { id } = useParams();
    const [image, setImage] = useState("");
    const [genres, setGenres] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState({
        year: "",
        premiere: "",
    });
    const [persons, setPersons] = useState([]);
    const [countries, setCountries] = useState([]);

    function setValues(data: IMovieData) {
        setImage(data.poster?.url);
        setGenres(data.genres);
        setTitle(data.name);
        setDescription(data.description);
        setYear({ year: data.year, premiere: data.premiere?.world ?? data.premiere?.russia });
        setCountries(data.countries);
        setPersons(data.persons);
    }

    useEffect(() => {
        getMoviesResponseByID(id).then(({ data }) => setValues(data))
    }, [])


    return (
        <section className='moviePage-wrapper'>
            <Aside />
            <div>
                <MoviePoster url={image} />
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className='moviePage__right-side'>
                <MovieGenres genres={genres} />
                <h1>{title}</h1>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>{description}</p>
                <MovieTableData year={year} persons={persons} countries={countries} />
                <div>
                    <h3>Recommendations</h3>
                    {/* <MoviesList /> */}
                </div>
            </div>
        </section>
    );
};

export default MoviePage;