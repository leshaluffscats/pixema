import './Username.scss';
import { useAuth } from '../../hooks/hooks';
import { useAppDispatch } from '../../store/hooks';
import { removeUser } from '../../store/slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Username = () => {
    const { token, id, email, isAuth } = useAuth();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token]);

    return (
        <>
            {isAuth ?
                <div className='usernameWrapper'>
                    <p>{email}</p>
                    <button onClick={() => dispatch(removeUser())}>Log out</button>
                </div>

                :
                <Link to='/sign-in'>Войти</Link>
            }

        </>
    )
};

export default Username;