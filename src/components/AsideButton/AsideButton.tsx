import React from 'react';
import { IAsideButtonProps } from '../../types/appPropsTypes';
import './AsideButton.scss';
import { NavLink } from 'react-router-dom';


const AsideButton = (props: IAsideButtonProps) => {

    return (
        <NavLink to={props.url} className={({ isActive }) =>
        isActive ? "aside-button-active" : "aside-button"
      }>
            <img src={props.icon} alt={props.text} />
            {props.text}
        </NavLink>
    );
};

export default AsideButton;