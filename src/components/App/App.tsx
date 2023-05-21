import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from '../Aside/Aside';
import MoviesList from '../MoviesList/MoviesList';

const App = () => {
    return (
        <div>
            <Header />
            <Aside />
            <MoviesList />
        </div>
    );
};

export default App;