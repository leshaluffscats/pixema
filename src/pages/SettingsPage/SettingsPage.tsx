import { useEffect } from 'react';
import TitleSecond from '../../components/TitleSecond/TitleSecond';
import Aside from '../../components/Aside/Aside';
import './SettingsPage.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import useAuth from '../../hooks/hooks';

const SettingsPage = () => {
    const { isDark } = useAppSelector(state => state.theme);
    const { email, isAuth } = useAuth();

    return (
        <main className='settings-page-wrapper'>
            <Aside />
            <section>
                <div>
                    <TitleSecond text='Profile' />
                    <div className='settings-email-container'>
                        <p>Email:</p>
                        <div>{isAuth ? email : <p className='error'>Not authorized</p>}</div>
                    </div>
                </div>
                <div>
                    <TitleSecond text='Color mode' />
                    <div className='settings-theme-container'>
                        <div>
                            <p>{isDark ? "Dark" : "Light"}</p>
                            <p>{isDark ? "Use Light Theme" : "Use Dark Theme"}</p>
                        </div>
                        <ToggleBtn />
                    </div>
                </div>
            </section>

        </main>
    );
};

export default SettingsPage;