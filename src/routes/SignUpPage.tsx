import React, {FC, useState} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpCard from "../components/SignUpCard";
import {auth, db} from '../firebase';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import { validateNameField, validatePassword, validateEmail } from "../helpers/fieldValidator";


interface SignUpPageProps {
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSnackBarMessage: React.Dispatch<React.SetStateAction<string>>,
    setSnackBarInfo: React.Dispatch<React.SetStateAction<string>>,
}


const SignUpPage:FC<SignUpPageProps> = (props) => {
    const {setSnackBarIsOpen, setSnackBarMessage, setSnackBarInfo} = props;

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [firstNameError, setFirstNameError] = useState<string | null>(null);
    const [lastNameError, setLastNameError] = useState<string | null>(null);


    const signUpUser = async () => {
        const isEmailValid = validateEmail(email, setEmailError);
        const isPassWordValid = validatePassword(password, setPasswordError);
        if(isEmailValid && isPassWordValid) {
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                const user = response.user;

                if(user) {
                    const userRef = doc(db, "users", user.uid);
                    await setDoc(userRef, {
                        uid: user.uid,
                        firstName: firstName,
                        lastName: lastName,
                        email: user.email,
                    });
                    setSnackBarInfo('success');
                    setSnackBarMessage('You have successfully signed up!')
                    setSnackBarIsOpen(true);
                }
            } catch (err : any) {
                setSnackBarInfo('error');
                setSnackBarMessage(err.message);
                setSnackBarIsOpen(true);
            }
        }
    }

    return (
        <div>
            <Navbar isOnMainPage={false} isOnLogin={true}/>
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
        </div>
    );
};

export default SignUpPage;