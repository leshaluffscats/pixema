import { IMovieItemProps } from '../../types/movieTypes';
import MovieGenres from '../MovieGenres/MovieGenres';
import './MovieItem.scss';
import { useNavigate } from 'react-router-dom';
import MoviePoster from '../MoviePoster/MoviePoster';

const MovieItem = (props: IMovieItemProps) => {
    const navigate = useNavigate();
    const { genres, id } = props;

    return (
        <div className='movieItem-wrapper' onClick={() => navigate(`/movie/${id}`)}>
            <MoviePoster url={props.image} />
            <p className='movieItem__title'>{props.name || props.alternativeName}</p>
            <MovieGenres genres={genres} slice={3} id={id}/>
        </div>
    );
};

export default MovieItem;