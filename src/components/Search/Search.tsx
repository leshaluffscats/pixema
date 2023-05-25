import { useState, useEffect, FormEventHandler } from 'react';
import inputFilterIcon from '../../assets/svg/input-filter-icon.svg';
import './Search.scss';
import { useAppSelector } from '../../store/hooks';
import axios from 'axios';
import { API_URL, API_HEADER } from '../../data/constants';

const Search = () => {
    const { isDark } = useAppSelector(state => state.theme);
    const [searchValue, setSeachValue] = useState("");

    function changeSearchTheme() {
        const search = document.querySelector("#searchHeader");
        isDark ? search.classList.add("darkSearch") : search.classList.remove("darkSearch");
    }

    useEffect(() => {
        changeSearchTheme();
    }, [isDark]);


    const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        axios.get(`${API_URL}v1.2/movie/search?page=1&limit=10&query=${searchValue}`, {
            headers: API_HEADER,
        })
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