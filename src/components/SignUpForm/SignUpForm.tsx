import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import TitleSecond from '../TitleSecond/TitleSecond';
import FormLabel from '../FormLabel/FormLabel';
import FormButton from '../FormButton/FormButton';
import '../SignInForm/SignInForm.scss';
import { useAppDispatch } from '../../store/hooks';
import { registerUser } from '../../services/authService';


const SignUpForm = () => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPass, setConfirmedPass] = useState("");

    function handleRegister(e: FormEvent) {
       registerUser(e, email, password, dispatch);
    }

    return (
        <form className='sign-form' onSubmit={handleRegister}>
            <TitleSecond text='Sign Up' />
            <FormLabel type='name' text='name' value={name} setState={setName} />
            <FormLabel type='email' text='email' value={email} setState={setEmail} />
            <FormLabel type='password' text='password' value={password} setState={setPassword} />
            <FormLabel type='password' text='confirm password' value={confirmedPass} setState={setConfirmedPass} />

            <Link to='/reset-password'>Forgot Password</Link>
            <FormButton text='Sign Up' />
            <p>
                Already have an account?
                <Link to='/sign-in'>Sign In</Link>
            </p>
        </form>
    );
};

export default SignUpForm;