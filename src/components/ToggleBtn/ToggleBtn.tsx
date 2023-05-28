import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { switchToDarkThemeAction, switchToLightThemeAction } from '../../store/reducers/themeReducer/themeActions';
import './ToggleBtn.scss';


const ToggleBtn = () => {
    const dispatch = useAppDispatch();
    const {isDark} = useAppSelector(state=> state.theme);

    function changeTheme(e: React.ChangeEvent<HTMLInputElement>) {
        e.target.checked ? dispatch(switchToDarkThemeAction()) : dispatch(switchToLightThemeAction())
    }

    return (
        <div className='switch-wrapper'>
            <div className='theme-names'>
                <span>{isDark ? "Dark" : "Light"}</span>
            </div>
            <label className="switch">
                <input type="checkbox" onChange={changeTheme} />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default ToggleBtn;