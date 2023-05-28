import React from 'react';
import { Link } from 'react-router-dom';
import TitleSecond from '../TitleSecond/TitleSecond';
import FormLabel from '../FormLabel/FormLabel';
import FormButton from '../FormButton/FormButton';
import '../SignInForm/SignInForm.scss';

const SignUpForm = () => {
    return (
        <form className='sign-form'>
            <TitleSecond text='Sign Up' />
            <FormLabel value='name' />
            <FormLabel value='email' />
            <FormLabel value='password' />
            <FormLabel value='confirm password' />

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