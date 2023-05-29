import { ISimilarMoviesProps } from '../../types/appPropsTypes';
import { ISimilarMovie } from '../../types/movieTypes';
import MovieItem from '../MovieItem/MovieItem';
import './SimilarMovies.scss';

const SimilarMovies = ({ similarMovies }: ISimilarMoviesProps) => {
    return (
        <>
            {!!similarMovies.length ?
                <div className='similar-movies-wrapper'>
                    <h3>Similar movies</h3>
                    <div className='similar-movies-subcontainer'>
                        {similarMovies
                            .slice(0, 5)
                            .map((el: ISimilarMovie) => <MovieItem image={el.poster.previewUrl} name={el.name} key={el.id} id={el.id} />)
                        }
                    </div>
                </div>
                :
                <h3 className='no-movies-h3'>No similar movies</h3>
            }
        </>
    );
};

export default SimilarMovies;