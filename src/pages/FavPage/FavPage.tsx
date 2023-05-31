import { useEffect } from 'react';
import Aside from '../../components/Aside/Aside';
import MovieItem from '../../components/MovieItem/MovieItem';
import './FavPage.scss';
import background from '../../assets/svg/fav-page-bg.svg';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import useAuth from '../../hooks/hooks';
import EmptyFavPage from '../../components/EmptyFavPage/EmptyFavPage';

const FavPage = () => {
    const { favMovies } = useAppSelector(state => state.favMovies);
    const { isAuth } = useAuth();

    return (
        <main className='favPage-wrapper'>
            <section className='favPage-subcontainer'>
                <Aside />

                {!isAuth && <EmptyFavPage background={background} text='You have to authorize' />}
                {isAuth && !favMovies?.length && <EmptyFavPage background={background} text='No favorite movies' />}
                {
                    isAuth && favMovies?.length &&
                    favMovies.map((el: any) => <MovieItem image={el.previewImage} name={el.title} genres={el.genres} id={el.id} key={el.id} />)
                }

            </section>
        </main>
    );
};

export default FavPage;