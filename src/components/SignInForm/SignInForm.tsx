import { useState } from 'react';
import { Link } from 'react-router-dom';
import TitleSecond from '../TitleSecond/TitleSecond';
import FormLabel from '../FormLabel/FormLabel';
import FormButton from '../FormButton/FormButton';
import './SignInForm.scss';
import { loginUser } from '../../services/authService';
import { useAppDispatch } from '../../store/hooks';

const SignInForm = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useAppDispatch();

    function handleLogin(e: any) {
        loginUser(e, email, password, dispatch);
    }

    return (
        <form className='sign-form' onSubmit={handleLogin}>
            <TitleSecond text='Sign In' />
            <FormLabel type='email' value={email} setState={setEmail} text='email' />
            <FormLabel type='password' value={password} setState={setPassword} text='password' />
            <Link to='/'>Forgot Password</Link>
            <FormButton text='Sign In' />

            <p>
                Don't have an account?
                <Link to='/sign-up'>Sign Up</Link>
            </p>
        </form>
    );
};

export default SignInForm;