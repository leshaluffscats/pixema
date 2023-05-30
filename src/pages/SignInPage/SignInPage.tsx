import React from 'react';
import SignInForm from '../../components/SignInForm/SignInForm';
import Logo from '../../components/Logo/Logo';
import './SignInPage.scss';

const SignInPage = () => {
    return (
        <main className='sign-page'>
            <div className='sign-page__form'>
                <SignInForm />
            </div>
        </main>
    );
};

export default SignInPage;