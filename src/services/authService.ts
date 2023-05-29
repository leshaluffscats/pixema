import { setUser } from '../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent } from 'react';

export const loginUser = (e: FormEvent, email: string, password: string, dispatch: any) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            user.getIdToken()
                .then(token => dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token,
                })))

        })
        .catch((error) => { alert(error.message) });
}


export const registerUser = (e: FormEvent, email: string, password: string, dispatch: any) => {
    e.preventDefault();
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            user.getIdToken()
                .then(token => dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token,
                })))
        })
        .catch((error) => { alert(error.message) });
}