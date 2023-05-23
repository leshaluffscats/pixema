import React from 'react';
import logo from '../../assets/svg/pixema-logo.svg';
import './Logo.scss';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
    
    function reloadPage() {
        navigate('/')
        location.reload();
    }

    return (
        <div className='header__logo' onClick={reloadPage}>
            <img src={logo} alt="pixema logo" />
        </div>
    );
};

export default Logo;