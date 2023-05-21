import React from 'react';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import Username from '../Username/Username';
import ToggleBtn from '../ToggleBtn/ToggleBtn'
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <Search />
            <ToggleBtn/>
            <Username />
        </header>
    );
};

export default Header;