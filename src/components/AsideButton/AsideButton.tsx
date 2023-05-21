import React from 'react';
import { IAsideButtonProps } from '../../types';
import './AsideButton.scss';


const AsideButton = (props: IAsideButtonProps) => {
    return (
        <button className='aside-button'>
            <img src={props.icon} alt={props.text} />
            {props.text}
        </button>
    );
};

export default AsideButton;