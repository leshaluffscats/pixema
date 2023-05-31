import './Filter.scss';
import TitleSecond from '../TitleSecond/TitleSecond';
import { allGenres } from '../../data/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import FiltersInput from './FiltersInput/FiltersInput';
import FormButton from '../FormButton/FormButton';
import { toggleFilterAction } from '../../store/reducers/filterReducer/filterActions';
import { FormEvent, useState } from 'react';
import { setQuery } from '../../services/movieApiService';
import FormLabel from '../FormLabel/FormLabel';
import { useNavigate } from 'react-router-dom';
import { filterMoviesAsyncAction } from '../../store/reducers/movieReducer/moviesActions';

const Filter = () => {
    const { isOpen } = useAppSelector(state => state.filter);
    const dispatch = useAppDispatch();
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("2000");
    const [lastYear, setLastYear] = useState("2023");
    const [rating, setRating] = useState("");
    const [lastRating, setLastRating] = useState("");
    const [limit, setLimit] = useState("10");
    const navigate = useNavigate();

    const resetValues = () => {
        setGenre("");
        setYear("");
        setLastYear("");
        setRating("");
        setLastRating("");
        setLimit("");
    }

    function handleQuery(e: FormEvent) {
        e.preventDefault();
        dispatch(filterMoviesAsyncAction(setQuery(year, lastYear, genre, rating, lastRating, limit)));
        dispatch(toggleFilterAction());
        navigate('/filter');
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
            <div className='filter-genre-block'>
                Genre
                <select name="genre-select" onChange={e => setGenre(e.target.value)}>
                    {allGenres.map(genre => <option key={genre.label} value={genre.value}>{genre.label}</option>)}
                </select>
            </div>
            <FiltersInput text="Years" className='filter-input' setState={setYear} setState2={setLastYear} value={year} value2={lastYear} />
            <FiltersInput text="Rating" className='filter-input' setState={setRating} setState2={setLastRating} value={rating} value2={lastRating} />
            <FormLabel text='limit' type='text' value={limit} setState={setLimit} />
            <div className='filter-btn-block'>
                <button type='reset' onClick={() => resetValues()}>Очистить фильтр</button>
                <FormButton text='Показать результаты' className='sign-form-button' />
            </div>
        </form>
    );
};

export default Filter;