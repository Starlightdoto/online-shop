import React, {FC, useState} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpCard from "../components/SignUpCard";
import {auth, db} from '../firebase';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";


interface SignUpPageProps {
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}


const SignUpPage:FC<SignUpPageProps> = (props) => {
    const {setSnackBarIsOpen} = props;

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [firstNameError, setFirstNameError] = useState<string | null>(null);
    const [lastNameError, setLastNameError] = useState<string | null>(null);

    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailRegex.test(email)) {
            setEmailError('Invalid email format');
            return false;
        }
        setEmailError(null);
        return true;
    }

    const validatePassword = () => {
        if(password.length < 8) {
            setPasswordError('Password must be 8 or more characters');
            return false;
        }
        setPasswordError(null);
        return true;
    }

    const validateFirstName = () => {
        if(firstName.length < 1) {
            setFirstNameError('Cannot be blank');
            return false;
        }
        setFirstNameError(null);
        return true;
    }

    const validateLastName = () => {
        if(lastName.length < 1) {
            setLastNameError('Cannot be blank');
            return false;
        }
        setLastNameError(null);
        return true;
    }


    const signUpUser = async () => {
        const isEmailValid = validateEmail();
        const isPassWordValid = validatePassword();
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

                    console.log("User has been created!")
                    setSnackBarIsOpen(true);
                }
            } catch (err : any) {
                console.error("Something went wrong:", err.message);
                setError(err.message);
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
                        validatePassword={validatePassword}
                        validateEmail={validateEmail}
                        emailError={emailError}
                        passwordError={passwordError}
                        firstNameError={firstNameError}
                        lastNameError={lastNameError}
                        validateFirstName={validateFirstName}
                        validateLastName={validateLastName}
            />
            <Footer/>
        </div>
    );
};

export default SignUpPage;