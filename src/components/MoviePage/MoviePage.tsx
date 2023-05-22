import { useEffect } from 'react';
import MovieGenres from '../MovieGenres/MovieGenres';
import MoviesList from '../MoviesList/MoviesList';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL, API_KEY } from '../../data/constants';

const MoviePage = () => {
    const { id } = useParams();
    useEffect(() => {
        axios.get(`${API_URL}v1.3/movie/${id}`, {
            headers: {
                "X-API-KEY": API_KEY,
            }
        })
    }, [])


    return (
        <section>
            <div>
                <div>
                    <img src="" alt="image" />
                </div>
            </div>
            <div>
                <MovieGenres genres={[{ name: "string" }, { name: "string" }, { name: "string" }, { name: "string" }]} />
                <h1>Movie Title</h1>
                <div>Reviews</div>
                <p>Description</p>
            </div>
            <table>
                <tr>
                    <td>Year</td>
                    <td>random number</td>
                </tr>
                <tr>
                    <td>Released</td>
                    <td></td>
                </tr>
                <tr>
                    <td>BoxOffice</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <div>
                <h3>Reccomendations</h3>
                <MoviesList />
            </div>

        </section>
    );
};

export default MoviePage;