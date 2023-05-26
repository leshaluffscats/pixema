import './App.scss';
import Header from '../Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from '../Aside/Aside';
import MoviesList from '../MoviesList/MoviesList';
import MoviePage from '../../pages/MoviePage/MoviePage';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import HomePage from '../../pages/HomePage/HomePage';

const App = () => {
    const { isDark } = useAppSelector(state => state.theme);

    useEffect(() => {
        isDark ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    }, [isDark])

    return (
        <BrowserRouter>
            <Header />
            {/* <Aside /> */}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/movie/:id' element={<MoviePage />} />
                <Route path='*' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;