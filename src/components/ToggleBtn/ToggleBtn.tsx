import React from 'react';
import './ToggleBtn.scss';

const ToggleBtn = () => {
    return (
        <div className='switch-wrapper'>
            <div className='theme-names'>
                <span>Light</span>
            </div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default ToggleBtn;