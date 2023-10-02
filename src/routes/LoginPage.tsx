import React, {FC, useState} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import LoginCard from "../components/LoginCard";
import  { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';
import SimpleSnackBar from "../components/ui-components/SimpleSnackbar";


interface LoginPageProps {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    snackBarInfo: string,
    setSnackBarInfo: React.Dispatch<React.SetStateAction<string>>,
    snackBarIsOpen: boolean,
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSnackBarMessage: React.Dispatch<React.SetStateAction<string>>,
}

const LoginPage:FC<LoginPageProps> = (props) => {
    const { isLoggedIn, setIsLoggedIn,
            setSnackBarInfo, snackBarIsOpen, setSnackBarIsOpen,
            snackBarInfo, setSnackBarMessage} = props;
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const signInUser = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            if(setSnackBarInfo && setSnackBarIsOpen) {
                setSnackBarInfo('success');
                setSnackBarMessage('You have successfully signed in!')
                setSnackBarIsOpen(true);

            }
            setIsLoggedIn(true);


        } catch (err:any) {
            if(setSnackBarInfo && setSnackBarIsOpen) {
                setSnackBarInfo('error');
                setSnackBarMessage(err.message);
                setSnackBarIsOpen(true);

            }
            setError(err.message);
        }
    }

    return (
        <div>
            <Navbar isOnMainPage={false} isOnLogin={isLoggedIn} />
            <LoginCard setPassword={setPassword} setEmail={setEmail}
                       email={email} password={password} signInUser={signInUser}
                       isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Footer />
        </div>


    );
};

export default LoginPage;