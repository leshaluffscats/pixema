import React, { useEffect } from 'react';
import Aside from '../../components/Aside/Aside';
import MovieItem from '../../components/MovieItem/MovieItem';
import './FavPage.scss';
import axios from 'axios';
import background from '../../assets/svg/fav-page-bg.svg';
import { useAppSelector } from '../../store/hooks';

const FavPage = () => {
    const { movies } = useAppSelector(state => state.movies);
    return (
        <main className='favPage-wrapper'>
            <section className='favPage-subcontainer'>
                <Aside />
                <div>
                    {/* <MovieItem/> */}
                </div>

                {
                    !movies.length &&
                    <div className='favPage-image-wrapper'>
                        <img src={background} alt="" />
                        <p>No favorite movies</p>
                    </div>
                }
            </section>
        </main>
    );
};

export default FavPage;