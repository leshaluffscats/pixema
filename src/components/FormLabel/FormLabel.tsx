import React from 'react';
import './FormLabel.scss';

interface IFormLabelProps {
    value: string;
}

const FormLabel = ({ value }: IFormLabelProps) => {
    return (
        <label className='form-label'>
            {value}
            <input type={value} placeholder={value} />
        </label>
    );
};

export default FormLabel;