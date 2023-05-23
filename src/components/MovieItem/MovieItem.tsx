import { IMovieItemProps } from '../../types/movieTypes';
import MovieGenres from '../MovieGenres/MovieGenres';
import './MovieItem.scss';
import { useNavigate } from 'react-router-dom';
import MoviePoster from '../MoviePoster/MoviePoster';


// todo доделать компонент


const MovieItem = (props: IMovieItemProps) => {
    const navigate = useNavigate();
    const { genres, id } = props;

    return (
        <div className='movieItem-wrapper' onClick={() => navigate(`/movie/${id}`)}>
            {/* <div className='movieItem__image-wrapper'>
                <img src={props.image} alt="Poster" />
            </div> */}
            <MoviePoster url={props.image}/>
            <p className='movieItem__title'>{props.name}</p>
            <MovieGenres genres={genres} />
        </div>
    );
};

export default MovieItem;