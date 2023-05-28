import { useState, useEffect, FormEventHandler } from 'react';
import inputFilterIcon from '../../assets/svg/input-filter-icon.svg';
import './Search.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { searchMoviesAsyncAction } from '../../store/reducers/movieReducer/moviesActions';

const Search = () => {
    const { isDark } = useAppSelector(state => state.theme);
    const [searchValue, setSeachValue] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function changeSearchTheme() {
        const search = document.querySelector("#searchHeader");
        isDark ? search.classList.add("darkSearch") : search.classList.remove("darkSearch");
    }

    useEffect(() => {
        changeSearchTheme();
    }, [isDark]);


    const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        navigate(`/search/${searchValue}`);
        dispatch(searchMoviesAsyncAction(searchValue));
    }

    return (
        <div className='searchWrapper' id='searchHeader'>
            <form action="" onSubmit={handleSearch}>
                <input type="text" placeholder='Search' onChange={e => setSeachValue(e.target.value)} />
                <img src={inputFilterIcon} alt="filter" />
            </form>
        </div>
    );
};

export default Search;