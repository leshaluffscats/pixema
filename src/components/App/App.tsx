import './App.scss';
import Header from '../Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviePage from '../../pages/MoviePage/MoviePage';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import HomePage from '../../pages/HomePage/HomePage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import FavPage from '../../pages/FavPage/FavPage';
import TrendsPage from '../../pages/TrendsPage/TrendsPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import Filter from '../Filter/Filter';

const App = () => {
    const { isDark } = useAppSelector(state => state.theme);

    useEffect(() => {
        isDark ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    }, [isDark])

    return (
        <BrowserRouter>
            <Header />
            <Filter />
            {/* <Aside /> */}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/movie/:id' element={<MoviePage />} />
                <Route path='/search/:query' element={<SearchPage />} />
                <Route path='/trends' element={<TrendsPage />} />
                <Route path='/favorites' element={<FavPage />} />
                <Route path='/sign-in' element={<SignInPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                <Route path='*' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;