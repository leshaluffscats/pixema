import React from 'react';
import './FormButton.scss';

interface IFormButtonProps {
    text: string;
}

const FormButton = ({ text }: IFormButtonProps) => {
    return (
        <button className='sign-form-button'>
            {text}
        </button>
    );
};

export default FormButton;