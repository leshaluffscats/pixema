import { useEffect } from 'react';
import Aside from '../../components/Aside/Aside';
import MovieItem from '../../components/MovieItem/MovieItem';
import './FavPage.scss';
import background from '../../assets/svg/fav-page-bg.svg';
import { useAppSelector } from '../../store/hooks';
import { IMovieData } from '../../types/movieTypes';

const FavPage = () => {
    const { favMovies } = useAppSelector(state => state.favMovies);

    useEffect(() => {

    },
        [favMovies]
    )

    return (
        <main className='favPage-wrapper'>
            <section className='favPage-subcontainer'>
                <Aside />
                {
                    !favMovies?.length ?
                        <div className='favPage-image-wrapper'>
                            <img src={background} alt="" />
                            <p>No favorite movies</p>
                        </div>
                        :
                        <div>
                            {favMovies.map((el: any) => <MovieItem image={el.previewImage} name={el.title} genres={el.genres} id={el.id} key={el.id}/>)}

                        </div>
                }
            </section>
        </main>
    );
};

export default FavPage;