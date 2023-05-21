import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from '../Aside/Aside'

const App = () => {
    return (
        <div>
            <Header />
            <Aside/>
        </div>
    );
};

export default App;