import React from 'react';
import './Aside.scss';
import homeIcon from '../../assets/svg/home-icon.svg';
import trendsIcon from '../../assets/svg/trends-icon.svg';
import favoritesIcon from '../../assets/svg/favorites-icon.svg';
import settingsIcon from '../../assets/svg/settings-icon.svg';
import AsideButton from '../AsideButton/AsideButton';

const Aside = () => {
    return (
        <div className='aside-wrapper'>
            <AsideButton icon={homeIcon} url='/' text="Home"/>
            <AsideButton icon={trendsIcon} url='/filter' text="Filtered"/>
            <AsideButton icon={favoritesIcon} url='/favorites' text="Favorites"/>
            <AsideButton icon={settingsIcon} url='*' text="Settings"/>
        </div> 
    );

};

export default Aside;