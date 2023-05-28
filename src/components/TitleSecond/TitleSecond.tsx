import React from 'react';
import './TitleSecond.scss';

interface ITitleProps {
    text: string;
}

const TitleSecond = ({ text }: ITitleProps) => {
    return (
        <h2 className='title-h2'>
            {text}
        </h2>
    );
};

export default TitleSecond;