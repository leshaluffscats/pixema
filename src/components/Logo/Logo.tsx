import React from 'react';
import logo from '../../assets/svg/pixema-logo.svg';
import './Logo.scss'

const Logo = () => {

    function reloadPage() {
        location.reload();
    }

    return (
        <div className='header__logo' onClick={reloadPage}>
            <img src={logo} alt="pixema logo" />
        </div>
    );
};

export default Logo;