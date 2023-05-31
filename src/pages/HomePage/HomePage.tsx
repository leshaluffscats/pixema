import { useEffect } from 'react';
import Aside from '../../components/Aside/Aside';
import MovieList from '../../components/MoviesList/MoviesList';
import './HomePage.scss';
import { useAppDispatch } from '../../store/hooks';
import { closeFilterAction } from '../../store/reducers/filterReducer/filterActions';


const HomePage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(closeFilterAction());
     }, [])
     
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