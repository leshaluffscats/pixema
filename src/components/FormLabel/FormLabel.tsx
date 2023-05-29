import React from 'react';
import './FormLabel.scss';
import { IFormLabelProps } from '../../types/appPropsTypes';


const FormLabel = ({ type, value, setState, text }: IFormLabelProps) => {
    return (
        <label className='form-label'>
            {text}
            <input
                type={type}
                placeholder={text}
                value={value}
                onChange={e => setState(e.target.value)}
            />
        </label>
    );
};

export default FormLabel;