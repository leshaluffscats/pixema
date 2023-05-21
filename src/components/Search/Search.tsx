import React from 'react';
import inputFilterIcon from '../../assets/svg/input-filter-icon.svg';
import './Search.scss';

const Search = () => {
    return (
        <div className='searchWrapper'>
            <input type="text" placeholder='Search'/>
            <img src={inputFilterIcon} alt="filter" />
        </div>
    );
};

export default Search;