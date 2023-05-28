import logo from '../../assets/svg/pixema-logo.svg';
import logoLight from '../../assets/svg/pixema-logo-light.svg';
import './Logo.scss';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

const Logo = () => {
    const { isDark } = useAppSelector(state => state.theme);
    const navigate = useNavigate();

    function reloadPage() {
        navigate('/')
        location.reload();
    }

    return (
        <div className='header__logo' onClick={reloadPage}>
            <img src={isDark ? logo : logoLight} alt="pixema logo" />
        </div>
    );
};

export default Logo;