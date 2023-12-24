import React, {FC, useState} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpCard from "../components/SignUpCard";
import {auth, db} from '../firebase';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import { validateNameField, validatePassword, validateEmail } from "../helpers/fieldValidator";
import {MainPage} from "./MainPage";
import { createNewCart } from "../api/userData";
import {signUpNewUser} from "../api/authController";
import {sendSignUpEmail} from "../api/emailService";


interface SignUpPageProps {
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSnackBarMessage: React.Dispatch<React.SetStateAction<string>>,
    setSnackBarInfo: React.Dispatch<React.SetStateAction<string>>,
    snackBarIsOpen: boolean,
    currentUser: any,
    setCurrentUser: any,
    snackBarInfo: string,
}


const SignUpPage:FC<SignUpPageProps> = (props) => {
    const {setSnackBarIsOpen, setSnackBarMessage,
           setSnackBarInfo, currentUser, setCurrentUser,
           snackBarIsOpen, snackBarInfo} = props;

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [firstNameError, setFirstNameError] = useState<string | null>(null);
    const [lastNameError, setLastNameError] = useState<string | null>(null);
    const [role, setRole] = useState<string>('user');

    const createCartForUser = async () => {
        try {
            await createNewCart(currentUser.uid);
            console.log('Cart created!');

        } catch (err: any) {
            console.log(err.message);
        }
    }

    const signUpUser = async () => {
        const isEmailValid = validateEmail(email, setEmailError);
        const isPassWordValid = validatePassword(password, setPasswordError);
        if (isEmailValid && isPassWordValid) {
            try {
                await signUpNewUser(email, password, firstName, lastName, role);
                await createCartForUser();
                setSnackBarInfo('success');
                setSnackBarMessage('You have successfully signed up!')
                setSnackBarIsOpen(true);
            } catch (err: any) {
                setSnackBarInfo('error');
                setSnackBarMessage(err.message);
                setSnackBarIsOpen(true);
            }
        }
    }

    return (
        <div>
            {!currentUser ? ( <>
                    <Navbar isOnMainPage={false} currentUser={currentUser}/>
                <SignUpCard setFirstName={setFirstName} setLastName={setLastName}
                            signUpUser={signUpUser} email={email}
                            password={password} setEmail={setEmail}
                            setPassword={setPassword}
                            validatePassword={()=> validatePassword(password, setPasswordError)}
                            validateEmail={()=> validateEmail(email, setEmailError)}
                            emailError={emailError}
                            passwordError={passwordError}
                            firstNameError={firstNameError}
                            lastNameError={lastNameError}
                            validateFirstName={()=> validateNameField(firstName, setFirstNameError)}
                            validateLastName={()=> validateNameField(lastName, setLastNameError)}
                />
                <Footer/>
            </> ) : ( <MainPage currentUser={currentUser} setCurrentUser={setCurrentUser}
                              snackBarIsOpen={snackBarIsOpen} setSnackBarIsOpen={setSnackBarIsOpen}
                              snackBarInfo={snackBarInfo} setSnackBarInfo={setSnackBarInfo} setSnackBarMessage={setSnackBarMessage} />
            ) }
        </div>
    );
};

export default SignUpPage;