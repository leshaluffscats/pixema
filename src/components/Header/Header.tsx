import React from 'react';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import Username from '../Username/Username';

const Header = () => {
    return (
        <header>
            <Logo />
            <Search />
            <Username />
        </header>
    );
};

export default Header;