import './App.scss';
import Header from '../Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviePage from '../../pages/MoviePage/MoviePage';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import HomePage from '../../pages/HomePage/HomePage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import FavPage from '../../pages/FavPage/FavPage';
import FilterPage from '../../pages/FilterPage/FilterPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import Filter from '../Filter/Filter';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';
import TrendsPage from '../../pages/TrendsPage/TrendsPage';

const App = () => {
    const { isDark } = useAppSelector(state => state.theme);

    useEffect(() => {
        isDark ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    }, [isDark])

    return (
        <BrowserRouter>
            <Header />
            <Filter />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/movie/:id' element={<MoviePage />} />
                <Route path='/search/:query' element={<SearchPage />} />
                <Route path='/filter' element={<FilterPage />} />
                <Route path='/trends' element={<TrendsPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/favorites' element={<FavPage />} />
                <Route path='/sign-in' element={<SignInPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                <Route path='*' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;