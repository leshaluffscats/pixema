import Aside from '../../components/Aside/Aside';
import MovieItem from '../../components/MovieItem/MovieItem';
import { useAppSelector } from '../../store/hooks';
import './SearchPage.scss';
import { ISearchMovie } from '../../types/movieTypes';

const SearchPage = () => {
    const { movies } = useAppSelector(state => state.searchMovies);
    return (
        <section className='searchPage-wrapper'>
            <Aside />
            <div className='searchMovies'>
                {movies.map((movie: ISearchMovie) => <MovieItem name={movie.name} key={movie.id} genres={movie.genres} image={movie.poster} id={movie.id} alternativeName={movie.alternativeName}/>)}
            </div>
        </section>
    );
};

export default SearchPage;