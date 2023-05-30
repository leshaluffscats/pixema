import './Filter.scss';
import TitleSecond from '../TitleSecond/TitleSecond';
import { allGenres } from '../../data/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import FiltersInput from './FiltersInput/FiltersInput';
import FormButton from '../FormButton/FormButton';
import { toggleFilterAction } from '../../store/reducers/filterReducer/filterActions';
import FormLabel from '../FormLabel/FormLabel';
import { FormEvent, useState } from 'react';
import { getFilteredMovies } from '../../services/movieApiService';

const Filter = () => {
    const { isOpen } = useAppSelector(state => state.filter);
    const dispatch = useAppDispatch();
    const [movieName, setMovieName] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [lastYear, setLastYear] = useState("");
    const [rating, setRating] = useState("");
    const [lastRating, setLastRating] = useState("");


    function handleQuery(e: FormEvent) {
        e.preventDefault();
        getFilteredMovies(genre, year, lastYear, rating, lastRating).then(console.log)
    }

    if (isOpen) return (
        <form className='filter-form' onSubmit={handleQuery}>
            <div className='filter-header'>
                <TitleSecond text='Filters' />
                <span onClick={() => dispatch(toggleFilterAction())}>
                    X
                </span>
            </div>
            <div className='filter-sort-block'>
                <p>Sort by</p>
                <div>
                    <button>Rating</button>
                    <button>Year</button>
                </div>
            </div>
            <FormLabel type='text' text='Full or short movie name' value={movieName} setState={setMovieName} />
            <div className='filter-genre-block'>
                Genre
                <select name="genre-select">
                    {allGenres.map(genre => <option key={genre.label}>{genre.label}</option>)}
                </select>
            </div>
            <FiltersInput text="Years" className='filter-input' setState={setYear} setState2={setLastYear}/>
            <FiltersInput text="Rating" className='filter-input' setState={setRating} setState2={setLastRating}/>
            <div className='filter-btn-block'>
                <button type='reset'>Очистить фильтр</button>
                <FormButton text='Показать результаты' className='sign-form-button' />
            </div>
        </form>
    );
};

export default Filter;