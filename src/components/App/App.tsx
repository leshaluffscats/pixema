import './App.scss';
import Header from '../Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from '../Aside/Aside';
import MoviesList from '../MoviesList/MoviesList';
import MoviePage from '../MoviePage/MoviePage';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Aside />
            <Routes>
                <Route path='/' element={<MoviesList />} />
                <Route path='/movie/:id' element={<MoviePage />} />
                <Route path='*' element={<MoviesList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;