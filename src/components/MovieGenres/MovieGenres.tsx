import { IMovieGenresProps } from '../../types/movieTypes';
import './MovieGenres.scss';

const MovieGenres = ({ genres, slice }: IMovieGenresProps) => {
    return (
        <div className='movieItem__genres'>
            {genres && //на случай если genres === undefined
                genres
                    .slice(0, slice || genres.length + 1)
                    .map((genre: any) => <span key={genre?.name}>{genre.name ?? genre}</span>)
            }
        </div>
    );
};

export default MovieGenres;