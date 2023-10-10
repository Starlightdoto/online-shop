import React, {FC, useState} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import LoginCard from "../components/LoginCard";
import  { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';
import {signInUser} from "../api/authController";
import { useNavigate } from "react-router-dom";

interface LoginPageProps {
    currentUser: any,
    setCurrentUser: any,
    snackBarInfo: string,
    setSnackBarInfo: React.Dispatch<React.SetStateAction<string>>,
    snackBarIsOpen: boolean,
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSnackBarMessage: React.Dispatch<React.SetStateAction<string>>,
}

const LoginPage:FC<LoginPageProps> = (props) => {
    const { currentUser, setCurrentUser,
            setSnackBarInfo, snackBarIsOpen, setSnackBarIsOpen,
            snackBarInfo, setSnackBarMessage} = props;
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const userSignIn = async () => {
        try {
            await signInUser(setCurrentUser, email, password, setError)
            if(setSnackBarInfo && setSnackBarIsOpen) {
                setSnackBarInfo('success');
                setSnackBarMessage('You have successfully signed in!')
                setSnackBarIsOpen(true);
            }
        } catch (err:any) {
            if(setSnackBarInfo && setSnackBarIsOpen) {
                setSnackBarInfo('error');
                setSnackBarMessage(err.message);
                setSnackBarIsOpen(true);
            }
        }
        if(error) {
            setSnackBarInfo('error');
            setSnackBarMessage('Invalid data');
            setSnackBarIsOpen(true);
        }
    }

    return (
        <div>
            <Navbar isOnMainPage={false} currentUser={currentUser} />
            <LoginCard error={error} setPassword={setPassword} setEmail={setEmail}
                       email={email} password={password} signInUser={userSignIn} />
            <Footer />
        </div>


    );
};

export default LoginPage;