import React from 'react';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo from '../../components/Logo/Logo';
import '../SignInPage/SignInPage.scss';

const SignUpPage = () => {
    return (
        <main className='sign-page'>
            <div className='sign-page__form'>
                <SignUpForm />
            </div>
        </main>
    );
};

export default SignUpPage;