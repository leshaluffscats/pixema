import React from 'react';
import { IAsideButtonProps } from '../../types/appInterfaceTypes';
import './AsideButton.scss';
import { NavLink } from 'react-router-dom';


const AsideButton = (props: IAsideButtonProps) => {

    return (
        <NavLink className='aside-button' to={props.url}>
            <img src={props.icon} alt={props.text} />
            {props.text}
        </NavLink>
    );
};

export default AsideButton;