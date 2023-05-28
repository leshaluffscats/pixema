import React from 'react';
import { Link } from 'react-router-dom';
import TitleSecond from '../TitleSecond/TitleSecond';
import FormLabel from '../FormLabel/FormLabel';
import FormButton from '../FormButton/FormButton';
import './SignInForm.scss';

const SignInForm = () => {
    return (
        <form className='sign-form'>
            <TitleSecond text='Sign In' />
            <FormLabel value='email' />
            <FormLabel value='password' />
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