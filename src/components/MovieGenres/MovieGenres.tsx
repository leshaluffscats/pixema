import { IMovieGenresProps } from '../../types/movieTypes';
import './MovieGenres.scss';

const MovieGenres = ({ genres, slice, id }: IMovieGenresProps) => {
    return (
        <div className='movieItem__genres'>
            {genres && //на случай если genres === undefined
                genres
                    .slice(0, slice || genres.length + 1)
                    .map((genre: any, index) => <span key={id + index}>{genre.name ?? genre}</span>)
            }
        </div>
    );
};

export default MovieGenres;