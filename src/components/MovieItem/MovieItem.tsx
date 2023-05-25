import { IMovieItemProps } from '../../types/movieTypes';
import MovieGenres from '../MovieGenres/MovieGenres';
import './MovieItem.scss';
import { useNavigate } from 'react-router-dom';
import MoviePoster from '../MoviePoster/MoviePoster';
import { useAppSelector } from '../../store/hooks';


// todo доделать компонент


const MovieItem = (props: IMovieItemProps) => {
    const navigate = useNavigate();
    const { genres, id } = props;
    const {isDark} = useAppSelector(state=> state.theme);

    return (
        <div className='movieItem-wrapper' onClick={() => navigate(`/movie/${id}`)}>
            {/* <div className='movieItem__image-wrapper'>
                <img src={props.image} alt="Poster" />
            </div> */}
            <MoviePoster url={props.image}/>
            <p className='movieItem__title'>{props.name}</p>
            <MovieGenres genres={genres} slice={3}/>
        </div>
    );
};

export default MovieItem;