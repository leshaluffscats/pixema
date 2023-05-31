import { useEffect } from 'react';
import Aside from '../../components/Aside/Aside';
import MovieList from '../../components/MoviesList/MoviesList';
import './HomePage.scss';
import { useAppDispatch } from '../../store/hooks';

const HomePage = () => {
    return (
        <main className='homePage-wrapper'>
            <section className='homePage-subcontainer'>
                <Aside/>
                <MovieList/>
            </section>
        </main>
    );
};

export default HomePage;